# Scaffold

Project initialized.

The scaffold CLI tool automates project setup by creating a folder structure with essential files. It uses Node.js core modules (fs, path, readline) to generate files dynamically.

# How to Use

## Run: scaffold

Enter a project name when asked. The tool will create a new folder. It will add default files like index.js, README.md and then a confirmation message appears.

# Weekly Recap

## Key Concepts

- CLI Tools
  - Maps the scaffold to index.js.
  - Allows execution from any terminal.
- File System
  - Creates directories and files.
  - Makes sure necessary project structure exists.
- Path Handling
  - Joins and resolves file paths for multiple platform compatibility.
- User Input
  - Captures user input for project names dynamically.
- package.json Properties
  - version: Using Semantic Versioning
  - files: Includes only necessary files in the published package.
- Publishing to npm
  - Steps:
    1. npm login
    2. npm version patch
    3. npm publish --access public
  - Common errors: Package name conflicts, permission issues.
