const path = require("path");

const {
  unzipAndUnlockZipFile,
  unzipAndUnlockZipFileFromBuffer,
} = require("./unzip");

const main = async () => {
  const FILE_BASE64 =
    "UEsDBBQAAQAAAEaCSlR2Aw74HwAAABMAAAAIAAAAZmlsZS50eHRvXLTjJJycE+8HEHAM+DiXKx44m4X3LVWShrdThE88UEsBAj8AFAABAAAARoJKVHYDDvgfAAAAEwAAAAgAJAAAAAAAAAAgAAAAAAAAAGZpbGUudHh0CgAgAAAAAAABABgA6C5Fsmse2AEaNOhCbR7YAXOJF7JrHtgBUEsFBgAAAAABAAEAWgAAAEUAAAAAAA==";
  const FILE_PATH = path.join(
    __dirname,
    "..",
    "resources",
    "password-protected.zip"
  );
  const PASSWORD = "1234";

  const zipFileContentFromBuffer = await unzipAndUnlockZipFileFromBuffer(
    FILE_BASE64,
    PASSWORD
  );

  console.log("File Content (Read from buffer):", zipFileContentFromBuffer);

  const zipFileContentFromFile = await unzipAndUnlockZipFile(
    FILE_PATH,
    PASSWORD
  );

  console.log("File Content (Read from file):", zipFileContentFromFile);
};

main();
