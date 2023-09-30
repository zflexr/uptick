const User = require("../models/users")

exports.createUser = async function(req, res, next) {
    const { username, email, password, } = req.body;
    try {
        const user = await User.create({
            username,
            email,
        })
        res.render("user", { user })
    } catch (error) {
        const newError = new Error();
        newError.message= (error.message);
        newError.status = 401;
        next(newError)
    }
}

exports.getUser = async function(req, res, next) {
    const { username } = req.query;
    try {
        const user = await User.findOne({ username })
        if (!user) {
            throw new Error("User Not Found")
        }
        res.render("user", { user })
    } catch (error) {
        const newError = new Error();
        newError.message= (error.message);
        newError.status = 401;
        next(newError)
    }
}

exports.deleteUser = async function(req, res, next) {
    const { username } = req.body;
    try {
        const result = await User.findOneAndDelete({ username })
        if (!result) {
            throw new Error("User Not Found")
        }
        res.render("deleted", { message: "User Successfully Deleted" })
    } catch (error) {
        const newError = new Error();
        newError.message= (error.message);
        newError.status = 401;
        next(newError)
    }
}