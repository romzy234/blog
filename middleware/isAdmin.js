/**IS User An Admin 
 * this is used to give admin more post action 
 * without working on the freaking UI again
*/
module.exports = (req,res,next)=>{
    if(req.isAuthenticated() && req.user.superAdmin){
        //console.log(req.logUser);
        next()
    }else{
        res.send('Not A super Admin Action Failed  ');
    }

}