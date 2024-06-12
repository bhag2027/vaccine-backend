const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "name":String,
        "dob":String,
        "gender":String,
        "mob":String,
        "address":String,
        "bloodgroup":String,
        "category":String,
        "place":String,
        "email":String,
        "username":String,
        "password":String

    }
)

let vaccinemodel=mongoose.model("vaccines",schema)
module.exports={vaccinemodel}

