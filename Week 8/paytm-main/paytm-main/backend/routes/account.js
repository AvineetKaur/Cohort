const express = require("express");
const { authMiddleware } = require('../middleware');
const { Account } = require("../db");
const { default: mongoose } = require('mongoose');

const router = express.Router();


router.get("/balance", authMiddleware, async (req, res) => {
    const userId = req.userId;
    const account = await Account.findOne({
        userId
    })

    return res.json({
        balance: account.balance
    })

});

router.post('/transfer', authMiddleware, async (req, res) => {
    try {
        const session = await mongoose.startSession();

        session.startTransaction();
        const { to, amount } = req.body



        const toAccountDb = await Account.findOne({
            userId: to
        }).session(session);

        if (!toAccountDb) {
            await session.abortTransaction();
            return res.status(400).json({
                message: "Invalid Account"
            })
        }

        const fromBalanceDb = await Account.findOne({ userId: req.userId }).session(session);
        if (!fromBalanceDb || fromBalanceDb.balance < amount) {
            await session.abortTransaction();
            return res.status(400).json({
                message: "Insuffient balance"
            });
        }

        //perform the transfer
        await Account.updateOne({ userId: req.userId }, {
            $inc: { balance: -amount }
        }).session(session);

        await Account.updateOne({ userId: to }, {
            $inc: { balance: amount }
        }).session(session);

        //commit transaction
        await session.commitTransaction();
        res.json({
            message: "Transfer Successful"
        })

    }
    catch (err) {
        res.json({
            Error: err
        })
    }

})



module.exports = router;
