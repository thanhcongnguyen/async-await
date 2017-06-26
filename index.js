'use strict'
import  fs from 'fs'

var readFile = async() =>{
    let data = await fs.readFile('./data.txt','utf-8', (err, result) => {
        if(err){
            return err
        }else{
            console.log("readFile success")
            console.log(result)
            return result
        }
    })
    console.log(data)

}

readFile()

