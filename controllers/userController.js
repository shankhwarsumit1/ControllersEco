const getAllUsers = (req,res)=>{
     try {
        res.send('Fetching all users');
    } catch (err) {
        next(err);
    }
}

const addUser = (req,res)=>{
    try {
        res.send('Adding a new user');
    } catch (err) {
        next(err);
    }
}

const getUserById=(req,res)=>{
     try {
        res.send(`Fetching user with ID:${req.params.id}`);
    } catch (err) {
        next(err);
    }
}
module.exports = {
    getAllUsers,
    addUser,
    getUserById
}