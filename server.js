const app=require('./app.js')
// const server=require('./config/db.config.js')
// const PORT=server.PORT||5000;
// const PORT= process.env.PORT || 5000;
const PORT= process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})  