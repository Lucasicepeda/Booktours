import dotEnv from 'dotenv';

dotEnv.config();

export default { 
    port: process.env.PORT,
    mongoDB: process.env.MONGODB,
    privateKey: process.env.PRIVATE_KEY,
    privateKeyPassport: process.env.PRIVATEKEYPASSPORT
};