export default validatePassword = (hash, salt) => {
  var generatedHash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, `sha512`)
    .toString(`hex`);
  return hash === generatedHash;
};
