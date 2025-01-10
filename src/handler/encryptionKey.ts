const encryptionKey = process.env.ENCRYPTION_KEY;

if (!encryptionKey) {
  throw new Error('ENCRYPTION_KEY is not defined in the .env file');
}

export default encryptionKey;

