#!/usr/bin/env node

// Import built-in Node.js modules
const readline = require("readline"); // handle user input
const fs = require("fs"); // interact with file system
const path = require("path"); // work file paths

// Create readline to take input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Asking for the project name
rl.question("Enter project name: ", (projectName) => {
  if (!projectName.trim()) {
    console.log("Error: Project name cannot be empty.");
    rl.close();
  } else {
    createProject(projectName);
  }
});

function createProject(projectName) {
  const projectPath = path.join(__dirname, projectName); // Directory path - new project

  // Checking if the project already exists
  if (fs.existsSync(projectPath)) {
    console.log("Error: Project already exists.");
    rl.close();
    return;
  }

  // Creating project directory
  fs.mkdirSync(projectPath);
  console.log(` Created project folder: ${projectPath}`);

  // Creating files inside project directory
  fs.writeFileSync(path.join(projectPath, "index.js"), "// Entry file"); // Create an empty JS file
  fs.writeFileSync(
    path.join(projectPath, "README.md"),
    `# ${projectName}\n\nProject initialized.`
  ); // README file
  console.log("Created index.js and README.md");

  // Closing readline
  rl.close();
}
