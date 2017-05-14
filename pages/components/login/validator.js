import validate from "validate.js";

var constraints ={
    account: {
        presence: true
    },
    password: {
        presence:true
    }
};

export const validateAccount=(value) => {
    var result= validate({account:value}, constraints) || {};
    return  result["account"];
};


export const validatePassword=(value) => {
    var result= validate({password:value}, constraints) || {};
    return result["password"];
};