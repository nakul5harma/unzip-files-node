const unzipper = require("unzipper");

const unzipAndUnlockZipFile = async (filepath, password) => {
  // Unzip a file
  const zipDirectory = await unzipper.Open.file(filepath);

  // Find the file you want
  const file = zipDirectory.files[0];

  // If you want to find a specific file by path
  // const file = zipDirectory.files.find((f) => f.path === "filename");

  // Unlock the file with the password (password is optional if the file is not password protected)
  const extracted = await file.buffer(password);

  // File content
  const content = extracted.toString();

  return content;
};

const unzipAndUnlockZipFileFromBuffer = async (zippedFileBase64, password) => {
  // Change base64 to buffer
  const zipBuffer = Buffer.from(zippedFileBase64, "base64");

  // Unzip a file
  const zipDirectory = await unzipper.Open.buffer(zipBuffer);

  // Find the file you want
  const file = zipDirectory.files[0];

  // If you want to find a specific file by path
  // const file = zipDirectory.files.find((f) => f.path === "filename");

  // Unlock the file with the password (password is optional if the file is not password protected)
  const extracted = await file.buffer(password);

  // File content
  const content = extracted.toString();

  return content;
};

module.exports = { unzipAndUnlockZipFile, unzipAndUnlockZipFileFromBuffer };
