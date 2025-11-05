#!/bin/bash -e

this_directory="$(cd $(dirname ${BASH_SOURCE:-$0}); pwd)"
project_directory="$this_directory/../.."

_dev() {
  cd "$project_directory/frontend"
  npm install --quiet
  npm run dev
}

_dev "$@"
