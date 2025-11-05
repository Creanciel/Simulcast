import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['dist/**/*'],
  },

  // Global settings
  {
    files: ['**/*.{js,mjs,cjs,ts,tsx,vue}'],
    languageOptions: {
      globals: globals.browser,
    },
  },

  // Basic JavaScript settings
  pluginJs.configs.recommended,

  // TypeScript Settings
  ...tseslint.configs.recommended,

  // Vue Settings
  ...pluginVue.configs['flat/essential'],
  {
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },

  // Prettier Settings
  eslintConfigPrettier,

  // ESLint and Prettier waived rule
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: {
          ts: tseslint.parser,
        },
        sourceType: 'module',
      },
    },
    rules: {
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always',
            normal: 'always',
            component: 'always',
          },
          svg: 'always',
          math: 'always',
        },
      ],
    },
  },
];
