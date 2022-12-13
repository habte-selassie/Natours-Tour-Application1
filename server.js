const dotenv= require('dotenv')
dotenv.config({ path:'./config.env' })
const app = require('./app')

const port = process.env.PORT || 2092

app.listen(port,()=>{
    console.log(`Litsening on port ${port}`);
})

