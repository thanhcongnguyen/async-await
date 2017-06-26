'use strict'
import  fs from 'fs'

function readFile(){
    return new Promise((resolve, reject)=>{
        fs.readFile('./data.txt','utf-8', (err, result)=>{
            if(err) reject(err)
            resolve(result)
        })
    })
}

var test = async() =>{
    let data = await readFile()
    console.log(data)

}

test()

