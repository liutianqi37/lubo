"use strict";

const Controller = require("egg").Controller;
//let axios = require("axios");

class oAuthController extends Controller {
    async getOAuth(){
        const {ctx} = this;
        //github返回的结果
        let code = ctx.query.code;
        //github官网登记
        let clientID = "f15fcbb3c8f5401311db";
        let clientSecret ="eda0a69916976515b1cb94b4900f8365e0e100a5";

        //获取token
        const tokenResponse = await axios({
            method:'post',
            url:'https://github.com/login/oauth/access_token?'+
                `client_id=${clientID}&`+
                `client_secret=${clientSecret}$`+
                `code=${code}`,
            headers:{
                accept:'application/json'
            }
        });

        // console.log(tokenResponse.data.access_token);
        // ctx.body ={
        //    message:"home",
        //    token:tokenResponse
        //    //result
        // }

        console.log(ctx.query.code);
        ctx.body ={
           message:"home",
           code:ctx.query.code
           //result
        }
    }

   

}
module.exports = oAuthController;