let express=require(`express`)
let app = express()
app.get(`/`,(req,res)=>{
res.send(`hi yall`)
})
app.listen(3000)