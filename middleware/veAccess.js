/**Just To Check
 * If The Login user is the own of the content
*/
var post = require('../models/post');
var chalk = require('chalk')

module.exports = (req,res,next)=>{
    if(req.isAuthenticated()){
        const d = req.params;

        post.findById({
            _id: d.id
        }).then(data => {
            y= data._authour
            x= req.user._id 

            if(data.authour.equals(req.user._id)){
                next();
                // console.log(chalk.greenBright("Have Access"));
            }else if(req.user.superAdmin){
                next();
            }else{
                res.send("You Dont have right to modify the post \n if really urgent contact Admin <br> Go Back");
            };
              }).catch(error => {
            res.status(500);
        })

    }else{
        res.send('Not Even Logged IN');
    }

}