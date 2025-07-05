//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req, res) => { res.status(200).json({message : "Get all contacts!"}); };

//@desc create new contact
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
    console.log("Body:\n", req.body); 
    const {name, phone, email} = req.body;
    if (!name || !phone || !email) {
        res.status(400);
        throw new Error("All fields are mandatory.");
    }
    res.status(201).json({message : "Create contact!"});
 };

//@desc get contact
//@route GET /api/contacts
//@access public
const getContact = (req, res) => { 
    res.status(201).json({message : `Get contact for ${req.params.id}`});
};

//@desc Update contact
//@route UPDATE /api/contacts
//@access public
const updateContact = (req, res) => { 
    res.status(200).json({message : `Update contact for ${req.params.id}`}); 
}

//@desc Delete contact
//@route DELETE /api/contacts
//@access public
const deleteContact = (req, res) => { 
    res.status(201).json({message : `Delete contact for ${req.params.id}`}); 
}


module.exports = {getContacts, createContact, getContact, updateContact, deleteContact };