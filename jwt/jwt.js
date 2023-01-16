const jwt = require('jsonwebtoken')
const createerr  = require('http-errors')
const { promise } = require('bcrypt/promises')


module.exports =  {
    signaccesstoken:(userid)=>{
       return new promise((resolve,reject)=>{
        const payload = {
            name: "yours truly",
            
        }
        const secret = "some super secret"

        const options = {
            expiresin:'5s',
            issuer:'pickurpage.com'
        }

        jwt.sign(payload,secret,options,(err,token)=>
        {
            if(err) reject(err)
            resolve(token)
        })
       }) 
    }
}