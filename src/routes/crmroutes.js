const routes = (app) => {
    app.route('/')
    .get ((req,res) => {
        res.send('This is the Get Method.Welcome to the world of coding.')
        })
        
        .post ((req,res) => {
            res.send('This is the Post method')
        })
        .put ((req,res) => {
            res.send('This is the Put method')
        })
        .delete ((req,res) => {
            res.send('This is the Delete method')
        })
   }

   module.exports = routes;
