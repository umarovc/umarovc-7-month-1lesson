
// 1
import path from "path";

function getFileDetails(folder, subFolder, fileName) {
  const fullPath = path.join(folder, subFolder, fileName);
  const ext = path.extname(fileName);

  return { fullPath, ext };
}

console.log(getFileDetails("public", "images", "logo.png"));

// 2
import path from "path";

const samplePath = "/users/backend/projects/server.js";

function analyzePath(filePath) {
  const { name, ext, dir } = path.parse(filePath);

  return { name, ext, dir };
}

console.log(analyzePath(samplePath));

// 3
import fs from "fs";

function saveAndReadNote(fileName, text) {
  fs.writeFileSync(fileName, text);
  const content = fs.readFileSync(fileName, "utf-8");

  return content;
}

console.log(saveAndReadNote("note.txt", "Node.js ES Modules juda qulay!"));

// 4
import fs from "fs";

function addLogMessage(fileName, firstMsg, secondMsg) {
  fs.writeFileSync(fileName, firstMsg);
  fs.appendFileSync(fileName, `\n${secondMsg}`);

  return fs.readFileSync(fileName, "utf-8");
}

console.log(
  addLogMessage(
    "history.txt",
    "1. Dastur ishga tushdi",
    "2. Foydalanuvchi tizimga kirdi"
  )
);
