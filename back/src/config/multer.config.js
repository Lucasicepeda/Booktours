import multer from 'multer';

const storage = multer.memoryStorage();
const limits = {
    fileSize: 20 * 1024 * 1024,
};

const uploader = multer({
    storage,
    limits: limits,
    onError: (err, next) => {
        console.log(err);
        next();
    }
});

export { uploader };