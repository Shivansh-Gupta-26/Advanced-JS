function fetchUserData(){
    return new Promise((resove, reject)=>{
        let success = false;
        if(success){
            resolve({
                id:20329823,
                username: "John Doe",
            });
        }
        else{
            reject(new Error("Data not fetched"));
        }
    });
}
async function getUser(){
    try{
    const user = await fetchUserData();
    console.log(user);
      }
        catch (error){
            console.log('Error: ${error.message}');
        }
     }
     getUser();