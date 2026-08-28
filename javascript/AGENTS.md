# Agent Instructions

## Repository & Setup
- **Standalone Learning Repo**: Collection of native JavaScript scripts following the [javascript.info](https://javascript.info/) curriculum.
- **No Build Toolchain**: No `package.json`, bundler, test runner, or external dependencies.
- **Roadmap & Progress**: Tracked in `javascript/README.md`. Update checkboxes when completing new topics.
- **File Naming**: Use 3-digit zero-padded prefix (e.g., `001_variables.js`, `002_datatypes.js`, `003_alertpromptconfirm.js`).

## Execution
- **Node.js**: Standard JS files can be executed directly:
  ```bash
  node javascript/<filename>.js
  ```
- **Browser-Only APIs**: Scripts using browser globals (`alert`, `prompt`, `confirm`, `document`, `window`) fail under Node.js with `ReferenceError`. Run these in a browser console or HTML page.

## Conventions
- **Language**: Written explanations, comments, and task descriptions must be in **Indonesian**.
- **Strict Mode**: Put `"use strict";` at the top of every `.js` file.
- **Task Format**: Include curriculum task prompts as `// TASK` comments followed by solution code.
