const mongoose=require('mongoose')
const{Schema,model}=mongoose;
    const recordSchema=newSchema({
    name: String,
    activity: String,
    date: string,

 })

 exports.Record=model('Record',recordSchema)

