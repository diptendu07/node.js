const fs = require('fs');
const yargs = require('yargs');

// File to store the filenames
const filenameLog = 'filenames.txt';

// Function to load existing filenames from the log file
const loadFilenames = () => {
  try {
    const data = fs.readFileSync(filenameLog, 'utf-8');
    return data ? data.split('\n').filter(Boolean) : [];
  } catch (err) {
    return [];
  }
};

// Function to check if filename exists
const filenameExists = (filename, filenames) => {
  return filenames.includes(filename);
};

// Function to save new filename to the log file
const saveFilename = (filename) => {
  fs.appendFileSync(filenameLog, filename + '\n', (err) => {
    if (err) throw err;
  });
};

// Function to write 'You are awesome' to the new file
const writeFile = (filename) => {
  fs.writeFileSync(filename, 'You are awesome', (err) => {
    if (err) throw err;
  });
};

// Main logic to handle user input and file operations
const main = () => {
  // Load the existing filenames
  const filenames = loadFilenames();

  // Use yargs to handle command-line arguments
  const argv = yargs
    .option('filename', {
      alias: 'f',
      description: 'Name of the file to create',
      type: 'string',
      demandOption: true,
    })
    .help()
    .alias('help', 'h')
    .argv;

  const { filename } = argv;

  // Check if the file already exists in the log
  if (filenameExists(filename, filenames)) {
    console.log(`The file "${filename}" already exists. Please provide a new filename.`);
  } else {
    // Write to the file and save the filename in the log
    writeFile(filename);
    saveFilename(filename);
    console.log(`File "${filename}" created successfully with the text: 'You are awesome'`);
  }
};

// Run the main function
main();
