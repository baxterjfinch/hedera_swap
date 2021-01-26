import {ContractCreateTransaction} from "@hashgraph/sdk";

var express = require("express");
const path = require('path');
var solc = require('solc');
const fs = require('fs-extra');
var router = express.Router();
const { Client } = require("@hashgraph/sdk");
const operatorAccount = process.env.ACCOUNT_ID;
const operatorPrivateKey = process.env.PRIVATE_KEY;


require("dotenv").config();





router.get("/", function(req, res, next) {



	res.send("SUCCESS")
});


async function deploy() {
	const transaction = new ContractCreateTransaction()
		.setGas(500)
		.setBytecodeFileId(bytecodeFileId)
		.setAdminKey(adminKey);

//Modify the default max transaction fee (1 hbar)
	const modifyTransactionFee = transaction.setMaxTransactionFee(new Hbar(16));

//Sign the transaction with the client operator key and submit to a Hedera network
	const txResponse = await modifyTransactionFee.execute(client);

//Get the receipt of the transaction
	const receipt = await txResponse.getReceipt(client);

//Get the new contract ID
	const newContractId = receipt.contractId;

	console.log("The new contract ID is " +newContractId);
}