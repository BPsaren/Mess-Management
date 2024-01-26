const adminaddmember= require("../models/admin-add-member-models");

const AdminAddMember= async (req,res)=>{
    try {
        
        const response = req.body;
        await adminaddmember.create(response);
        res.status(200).json({ msg: "Member Add successfully" });

    } catch (error) {
        res.status(500).json({ msg: "Member Not Added" });
    }
}


module.exports=AdminAddMember;