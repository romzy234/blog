const user = require("../models/user");

const chalk = require('chalk');
console.log(chalk.greenBright(" Creating Site Super Admin..."));

user.findOne({
    username : "admin"
}).then(data => {
    if (!data) {
        const newUser = new user({
            username: "admin",
            email: "admin@site.com",
            password: "admin",
            name: "Administrator",
            phone: "Admin",
            about:"The Author Is A Person Of Culture",
            status: true,
            superAdmin:true,
            profilePic:"/users/assets/images/avatar-1.jpg",
            setting:{
                theme: "white",
                showContact: true,
                emailNotification: true
            }
        });
            newUser.save()
            .then((user) => {
                console.log(chalk.blackBright("Admin Created"));
            }).catch(error=>{
                console.log(error);
            });
    }else{
        console.log(chalk.yellowBright("Admin Already Exist"));
    }
}).catch(error => {
    console.log(error);
})
