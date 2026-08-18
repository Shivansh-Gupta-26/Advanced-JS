// Promise.resolve().then(()=>{
//   console.log("Promise Resolved");

// })


function getUser(id, callback){
     setTimeout(()=>{
        console.log("User Fetched");
        const user  = {
            id: 101,
            username: "Shivansh"
        }
        callback(null,user)
     },1000)
}

function getProfile(id, callback){
    setTimeout(()=>{
        console.log("Profile Fetched")
        const profile = {
            username: "Shivansh",
            location: "New Delhi"
        }
        callback(null,profile)
    })
}

function getPosts(username, callback){
    setTimeout(()=>{
        console.log("Posts Fetched")
        const posts = ["post1","post2","post3"]
        callback(null, posts)
    }, 1000)
}

getUser(1, function(error, user){
      getProfile(user.id,function(error,profile){
         if(error){
        return
    }
    getPosts(profile.username, function(error,posts){
        if(error){
            console.error(error);
            return;
        }
        console.log('Fetched Posts $(posts)');
         });
       });
    });
