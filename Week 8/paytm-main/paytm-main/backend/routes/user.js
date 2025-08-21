const express = require("express");
const router = express.Router();
const zod = require("zod");
const { User, Account } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { authMiddleware } = require('../middleware');


//sign up and sign in routes
const signupSchema = zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string(),

})
const signInSchema = zod.object({
    username: zod.string().email(),
    password: zod.string()
})
const updateSchema = zod.object({
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
})


//sign up route
router.post("/signup", async (req, res) => {
    const body = req.body;

    //zod validation part
    const { success } = signupSchema.safeParse(body)
    if (!success) {
        res.status(411).json({
            message: "Email already taken/Incorrect inputs"
        })

    }

    //user exists in DB check part
    const userFound = await User.findOne({
        username: body.username
    })
    if (userFound) {
        res.status(411).json({
            message: "Email already taken/Incorrect inputs"
        })
    }

    //create user in db
    const userDb = await User.create({
        username: body.username,
        password: body.password,
        firstName: body.firstName,
        lastName: body.lastName,
    })

    const userId = userDb._id;

    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })

    //creates a jwt token for the user
    const token = jwt.sign({
        userId: userDb._id

    }, JWT_SECRET)

    if (userDb) {
        return res.status(200).json({
            message: "User created successfully",
            token: token
        })

    }

})

//sign in route
router.post("/signin", async (req, res) => {
    const body = req.body;

    //check if username format is correct
    const success = signInSchema.safeParse(body);
    if (!success) {
        res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    //check if username is not existing or if password is wrong
    const dbUser = await User.findOne({
        username: body.username,
        password: body.password
    });
    if (!dbUser)
        res.status(411).json({
            message: "Error while logging in"
        })


    const token = jwt.sign({
        userId: dbUser._id
    }, JWT_SECRET);

    res.json({
        token: token
    })

})

//update user information
router.put('/', authMiddleware, async (req, res) => {

    const { success } = updateSchema.safeParse(req.body);
    if (!success) {
        res.status(411).json({
            message: "Invalid information sent for update"
        })
    }

    await User.updateOne({ _id: req.userId }, req.body);

    res.json({
        message: "Updated successfully"
    })


})

//get users using filter on firstname and lastname
router.get('/bulk', authMiddleware, async (req, res) => {
    const searchValue = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": searchValue
            }
        }, {
            lastName: {
                "$regex": searchValue
            }
        }
        ]
    })

    res.json({
        user: users.map((user) => ({
            username: user.userName,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id

        }))

    })
})


module.exports = router;