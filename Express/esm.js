function isVote(age) {
    if (age < 18) {
        console.log("you are not eligible to vote");
    }   
if (age >= 18) {
        console.log("you are eligible to vote");
    }       
}

module.exports = { isVote };