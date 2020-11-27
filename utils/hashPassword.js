const argon = require('argon2');



const hashPassword =async pw =>{

    let hash = await argon.hash(pw);

    console.log(hash);

    return hash
}

const checkPassword=async(pw,hash)=>{

    let result = await argon.verify(hash,pw);

    console.log("Result: ",result);
    return result;
}



module.exports = { hashPassword, checkPassword }