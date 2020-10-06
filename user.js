const fs = require('fs');
const axios = require('axios');
const userUrl = 'https://jsonplaceholder.typicode.com/users';
const getData = async function(url){
    try{
        const promise = await axios.get(url);
        const data = await promise.data
        const str = JSON.stringify(data);
        fs.writeFile('addressList.json',str,(err)=>{
            if(err) throw err;
            console.log('user record saved ');
        })
    }
    catch(err){throw err}
}
getData(userUrl);