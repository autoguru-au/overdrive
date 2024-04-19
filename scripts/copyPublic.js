const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '../', 'public');
const targetDir = path.join(__dirname, '../','storybook-static');

fs.readdir(sourceDir, (err, files) => {
    if (err) {
        console.error(`Unable to read directory: ${sourceDir}`);
        process.exit(1);
    }

    files.forEach(file => {
        const sourceFile = path.join(sourceDir, file);
        const targetFile = path.join(targetDir, file);

        if (!fs.existsSync(targetFile)) {
            fs.copyFile(sourceFile, targetFile, err => {
                if (err) {
                    console.error(`Unable to copy file: ${sourceFile}`);
                    process.exit(1);
                }
            });
        }
    });
});
