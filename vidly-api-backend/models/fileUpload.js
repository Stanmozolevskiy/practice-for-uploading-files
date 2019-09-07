const Joi = require("joi");
const mongoose = require("mongoose");

const FileUpload = mongoose.model(
    "file",
    new mongoose.Schema({
        myImage: { type: String },
        name:  { type: String },
        lastName:  { type: String },
    })
);

function validateFile(file) {
    const schema = {
        myImage: Joi.string(),
        name: Joi.string(),
        lastName: Joi.string(),
    };
    return Joi.validate(file, schema);
}

exports.FileUpload = FileUpload;
exports.validate = validateFile;

