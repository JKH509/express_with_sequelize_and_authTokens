const crypto = require('crypto');
require('dotenv').config();

const algorithm = 'aes-256-cbc';
const key = Buffer.from(process.env.ENCRYPTION_KEY, 'hex');
// const key = Buffer.from(process.env.ENCRYPTION_KEY, 'hex');

const ivLength = 16;

const encrypt = (value) => {
  const iv = crypto.randomBytes(ivLength);
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(value);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return Buffer.concat([iv, encrypted]).toString('hex');
};

const decrypt = (encryptedValue) => {
  const iv = Buffer.from(encryptedValue.slice(0, ivLength), 'hex');
  const encryptedText = Buffer.from(encryptedValue.slice(ivLength), 'hex');

  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);

  return decrypted.toString();
};

module.exports = { encrypt, decrypt };
