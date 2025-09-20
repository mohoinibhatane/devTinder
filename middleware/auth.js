const authAdmin = (req, res, next) => {
    console.log("auth is getting checcked!!")
    const token = "mohini";
    const isAuthorized = token === "mohini";
    if(!isAuthorized){
        res.status(401).send("unauthorized request");
    }else{
        next();
    }
}

const userAuth = (req, res, next) => {
    console.log("user is checked here");
    const token = "rishabh";
    const isAuthorized = token === "rishabh";
    if(!isAuthorized){
        res.status(401).send("unauthorized user")
    }else{
        next();
    }
}

module.exports = {authAdmin, userAuth}