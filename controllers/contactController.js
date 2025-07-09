const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel.js");
//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
 };

//@desc create new contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
    // console.log("Body:\n", req.body); 
    const {name, phone, email} = req.body;
    if (!name || !phone || !email) {
        res.status(400);
        throw new Error("All fields are mandatory.");
    }
    const contact = await Contact.create({
        name, email, phone
    });
    res.status(201).json(contact);
 });

//@desc get contact
//@route GET /api/contacts
//@access public
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error("The specified contact was not found.");
    }
    res.status(200).json(contact);
});

//@desc Update contact
//@route UPDATE /api/contacts
//@access public
const updateContact = asyncHandler(async (req, res) => { 
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error("The specified contact was not found.");
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );
    res.status(200).json(updatedContact); 
});

//@desc Delete contact
//@route DELETE /api/contacts
//@access public
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact) {
        res.status(404);
        throw new Error("The specified contact was not found.");
    }
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    res.status(201).json(deletedContact); 
});


module.exports = { getContacts, createContact, getContact, updateContact, deleteContact };