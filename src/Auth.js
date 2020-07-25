import auth0 from "auth0-js";

export default class Auth{
    auth0 = new auth0.WebAuth({
        domain: "sajjan.us.auth0.com",
        clientID: "5xu8GKc5i2DZbm04KPxxCchyiEuQQETl",
        redirectUri: "http://localhost:3000/callback",
        audience: "https://sajjan.us.auth0.com/userinfo",
        responseType: "token id_token",
        scope: "openid"
    })

    constructor(){
        this.login = this.login.bind(this);
    }

    login() {
        this.auth0.authorize();
    }
}