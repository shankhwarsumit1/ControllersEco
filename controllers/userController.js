const getAllUsers = (req,res)=>{
<<<<<<< HEAD
    res.send('Fetching all users');
}

const addUser = (req,res)=>{
    res.send('Adding a new user');
}

const getUserById=(req,res)=>{
    res.send(`Fetching user with ID:${req.params.id}`);
}

=======
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
>>>>>>> 4f8477f (Initial commit with centralized error handling)
module.exports = {
    getAllUsers,
    addUser,
    getUserById
}