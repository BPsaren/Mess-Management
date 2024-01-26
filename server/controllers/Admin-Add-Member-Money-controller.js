const adminaddmembermoney= require("../models/admin-add-member-money-models")


const AdminAddAllMemberMoney=async (req,res)=>{

try {
      const response = req.body;
      await adminaddmembermoney.create(response)
        res.status(200).json({ msg: "Member Money Add successfully" });
} catch (error) {
    res.status(500).json({ msg: "Member Money Not Added" });
    
}      
        
}

module.exports = AdminAddAllMemberMoney;