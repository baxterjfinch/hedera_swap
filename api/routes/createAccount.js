var express = require("express");
const fs = require('fs-extra');
const path = require('path');
require("dotenv").config();
var router = express.Router();

const { Client, AccountCreateTransaction, Hbar, Ed25519PrivateKey, AccountBalanceQuery } = require("@hashgraph/sdk");
const operatorAccount = process.env.ACCOUNT_ID;
const operatorPublicKey = process.env.PUBLIC_KEY;
const operatorPrivateKey = process.env.PRIVATE_KEY;
const client = Client.forTestnet();
client.setOperator(operatorAccount, operatorPrivateKey);


router.get("/", function(req, res, next) {
	try {
		createAccount().then((resp) => {
			console.log(resp)
			res.send(resp)

		})
	} catch (err) {
		console.log("ERRRRRR", err)
	}
});

async function createAccount() {
	const newAccountPrivateKey = await Ed25519PrivateKey.generate();
	const newAccountPublicKey = newAccountPrivateKey.publicKey;

	//Create a new account with 1,000 tinybar starting balance
	const newAccountTransactionResponse = await new AccountCreateTransaction()
		.setKey(newAccountPublicKey)
		.setInitialBalance(1000)
		.execute(client);

	const getReceipt = await newAccountTransactionResponse.getReceipt(client);
	const newAccountId = getReceipt.getAccountId();
	const accountBalance = await new AccountBalanceQuery()
		.setAccountId(newAccountId)
		.execute(client);

	return {
		"account_id": newAccountId.account,
		"response": newAccountTransactionResponse,
		"tb_balance": accountBalance.asTinybar()
	}
}

module.exports = router;