const mongoose=require('mongoose')

const connecttodb=async()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then((conn)=>{
        console.log(`connect to database ${conn.connection.host}`)
    })
    .catch((err)=>{
        console.log(err.message)
        process.exit(1)
    })
    
}

module.exports=connecttodb