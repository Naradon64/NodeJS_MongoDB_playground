const { default: mongoose } = require("mongoose")

const ProductSchema = mongoose.Schema(
    {
        ID:{
            type:String,
            required: [true, "There must be an ID to this user"]
        },
        firstName:{
            type:String,
            required: [true, "First name missing"]
        },
        lastName:{
            type:String,
            required: [true, "Last name missing"]
        }
    }
)