const fs = require('fs');
const readUser = ()=>{
    fs.readFile('addressList.json','utf8',(err,info)=>{
        if(err) throw err;
        else if(info.length ===0){console.log('There is no data in the file' )}
        else{const obj = JSON.parse(info);
            let str= '*****************\n* Address List: *\n*****************'
            obj.map(person=>{
                const { name, email, address: { street, suite, city, zipcode }, phone }=person;
                str +=`\n\n${name}\nAddress: ${street}, ${suite}\n         ${city} ${zipcode}\nPhone:   ${phone}\nEmail:   ${email} `
            })
            fs.writeFile('addressList.txt',str,(err)=>{
            if(err) throw err;
            console.log('user info saved as plain text')
        })}
    })
}

readUser()