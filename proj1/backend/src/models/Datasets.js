import mongoose from "mongoose"
const datasetSchema=new mongoose.Schema({
    id:{
        type:mongoose.Schema.Types.ObjectId,
        require:true
    },
    name:{
        type: String,
        minlength:10,
        maxlength: 50,
        required:true,
        unique: true
            },
    // nomColumns:{
    //     type:Number,
    //     min:1,
    //     max:20
    // },
    description:{
        type: String,
    },
    filePath:{
        type:String,
        required : [true,"Not fle sended"]
    },
    // createdBy:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"Users"
    // },
    // columns:{
    //     type:Array
    // }
},
{timestamps:true})
const DataSets=mongoose.model("Datasets",datasetSchema);

export default DataSets