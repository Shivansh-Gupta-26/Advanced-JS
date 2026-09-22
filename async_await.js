async function fetchUserData(){
    return  new Promise((resolve, reject) => {
    let success  = false;
    if(success) {
        resolve({
            id:68680,
            username: "Shivansh"
            
        });
    }
    else{
        reject(new Error("Data not fetched"));
    }
});
}
async function getUser(){
    const user = await fetchUserData();
    console.log(user);
}
getUser();

async function getUser(){
    try{
    const user = await fetchUserData();
    console.log(user);
}
catch(error){
    console.log(`Error: ${error.message}`);
}
}
getUser();