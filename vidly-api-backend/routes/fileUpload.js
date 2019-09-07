const { FileUpload, validate } = require("../models/fileUpload");
const { upload } = require("../middleware/upload");
const express = require("express");
const router = express.Router();
const _ = require("lodash");

router.get('/', async (req, res) => {
    const files = await FileUpload.find()
    res.status(200).send(files)
})

router.post("/", upload, async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let fileUpload = new FileUpload({
        myImage: req.file.path,
        name: req.body.name,
        lastName: req.body.lastName,
    });
    fileUpload = await fileUpload.save();
    res.status(200).send(fileUpload);
});

router.get("/:id", async (req, res) => {
    const file = await FileUpload.findById(req.params.id)

    if (!file)
        return res.status(404).send("The File with the given ID was not found.");

    res.status(200).send(file);
});

module.exports = router;


