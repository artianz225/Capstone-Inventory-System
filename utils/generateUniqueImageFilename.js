function generateUniqueImageFilename(file) {
  const extention = file.originalname.split(".").pop();
  const timestamp = new Date().getTime();
  const randomString = Math.random().toString(36).substring(2, 15);
  const filename = `${timestamp}-${randomString}.${extention}`;

  const sanitizeFileName = filename.replace(/\s+/g, "");

  return sanitizeFileName;
}

export default generateUniqueImageFilename;