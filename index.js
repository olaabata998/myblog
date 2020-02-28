var express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app =  express();
app.use(bodyParser())
const PORT = 3000;
const routes = require('./src/routes/crmroutes')

 mongoose.connect("mongodb://localhost/mcan", {
    useNewUrlParser : true,
    useUnifiedTopology: true
})
const { blogSchema, memberSchema } = require('./src/models/crmmodel');

const blogModel = mongoose.model('blog',blogSchema);
app.post('/newBlog',(req,res)=>{
    console.log(req.body)
   
    let blog = new blogModel(req.body);

    blog.save();
    res.send(blog);
})



const member = mongoose.model('member', memberSchema );


app.post('/member', (req,res)=>{
    const amir = new member(req.body);

    amir.save();
    res.send(amir);
})




routes(app);

app.listen (PORT,() => {
    console.log (`server is running on PORT: ${PORT}`)
})