# Initialize a Node.js project
First, initialize the project and install the necessary package (yargs).

>> npm init -y
>> npm install yargs

# Create a main script (e.g., index.js)
This will handle user input, write to files, check if the file already exists, and maintain a record of filenames in a separate file.
*zipped and uploaded in the LMS*

fs-yargs-assignment/
├── /node_modules
├── index.js
├── README.md (guided info about Node.js project **Module 2: File System Module And Express.js** )
├── package.json
├── package-lock.json
└── filenames.txt  (this will be auto-created)


# Explanation of the Code (index.js):

>>  loadFilenames: This function reads the filenames.txt file and returns an array of filenames that already exist. If the file doesn't exist, it returns an empty array.
>>  filenameExists: Checks if the provided filename is already in the list of previously created files.
>>  saveFilename: Appends the new filename to the filenames.txt file, which keeps track of all created files.
>>  writeFile: Writes the text 'You are awesome' into the newly created file.
>>  yargs: It handles command-line arguments. It takes --filename as an input from the user. If the filename exists, it asks for a new one; if not, it creates the file and logs it.

# Use the following command to run your script:
>> node index.js --filename=myfile.txt

*If the filename provided already exists, the user will be prompted to choose a new one.*
*If the filename is new, the text You are awesome will be written to the file.*


    
