const { Schema, model } = require("mongoose");

const AdminAddBazarCoastEntrySchema = new Schema({
    date: { type: String, required: true },
    bazarPerson: { type: String, required: true },
    bazarAmount: { type: Number, required: true },
    bazarList: { type: String, required: true }
});

const adminAddBazarCoast = model('adminAddBazarCoast', AdminAddBazarCoastEntrySchema);
module.exports = adminAddBazarCoast;
