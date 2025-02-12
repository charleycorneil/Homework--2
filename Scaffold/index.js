#!/usr/bin/env node

// Import built-in Node.js modules
const readline = require("readline"); // To handle user input
const fs = require("fs"); // To interact with the file system
const path = require("path"); // To work with file paths

// Create a readline interface to take input from the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask the user for the project name
rl.question("Enter project name: ", (projectName) => {
  if (!projectName.trim()) {
    console.log("Error: Project name cannot be empty.");
    rl.close();
  } else {
    createProject(projectName);
  }
});

function createProject(projectName) {
  const projectPath = path.join(__dirname, projectName); // Directory path for the new project

  // Check if the project already exists
  if (fs.existsSync(projectPath)) {
    console.log("Error: Project already exists.");
    rl.close();
    return;
  }

  // Create the project directory
  fs.mkdirSync(projectPath);
  console.log(` Created project folder: ${projectPath}`);

  // Create files inside the project directory
  fs.writeFileSync(path.join(projectPath, "index.js"), "// Entry file"); // Create an empty JS file
  fs.writeFileSync(
    path.join(projectPath, "README.md"),
    `# ${projectName}\n\nProject initialized.`
  ); // Create a README file
  console.log("Created index.js and README.md");

  // Close the readline interface (end input)
  rl.close();
}
