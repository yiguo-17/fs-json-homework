const fs = require('fs');
const readUser = ()=>{
    fs.readFile('addressList.json','utf8',(err,info)=>{
        if(err) throw err;
        else if(info.length ===0){console.log('There is no data in the file' )}
        else{fs.writeFile('addressList.txt',info,(err)=>{
            if(err) throw err;
            console.log('user info saved as plain text')
        })}
    })
}

readUser()