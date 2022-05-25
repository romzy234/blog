const custom = require("../models/custom");
const chalk = require('chalk');
console.log(chalk.greenBright(" Creating Site Profile ..."));

custom.aggregate(
    [{
        $match: {
            
        }
    }]
).then(data => {
    if (data.length === 0) {
        const Custom = new custom({
            siteH : "Lastest Post",
            siteHeader : true,
            popularSystem : true,
            popularMobile: true,
            comment : true,
            footerMessage : true,
            footerM:"The Author Is A Person Of Culture",
            logo: "/home.js",
            date : 2021
        });
            Custom.save()
            .then((user) => {
                console.log(chalk.blueBright("Create Site Profile Default Setting"));
            }).catch(error=>{
                console.log(error);
            });
    }else{
        console.log(chalk.yellowBright("Site Profile Exist"));
    }
}).catch(error => {
    console.log(error);
})