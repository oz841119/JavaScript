function sendRequest(){
    return new Promise (function(resolve, reject){
        setTimeout(function(){
            resolve("John Doe");
        }, 5000);
    });
}

async function getusername(){
    let username = await sendRequest();
    console.log(username);
};

getusername();