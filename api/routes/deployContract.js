var express = require("express");
const fs = require('fs-extra');
const path = require('path');
require("dotenv").config();

const { Client, ContractCreateTransaction, FileCreateTransaction, Hbar } = require("@hashgraph/sdk");
const operatorAccount = process.env.ACCOUNT_ID;
const operatorPublicKey = process.env.PUBLIC_KEY;
const operatorPrivateKey = process.env.PRIVATE_KEY;
const client = Client.forTestnet();
client.setOperator(operatorAccount, operatorPrivateKey);

var router = express.Router();

router.get("/", function(req, res, next) {
	let swapjson;
	let abi;
	let bytecode;
	let fileContents;

	try {
		fileContents = fs.readFileSync(path.resolve(__dirname, 'build', 'HederaSwap.json'), 'utf8')

		swapjson = JSON.parse(fileContents);
		abi = swapjson.abi;
		bytecode = swapjson.evm.bytecode.object;
		createFile(bytecode).then((resp) => {
			return resp

		}).then((fileResp) => {
			return deploy(fileResp)
		}).then((resp) => {
			res.send(resp)
		})
	} catch (err) {
		console.log("ERRRRRR", err)
	}
});

async function createFile(bytecode) {
	//Create the transaction
	const transaction = new FileCreateTransaction()
		// .addKey(operatorPublicKey)
		.setMaxTransactionFee(1000000000)
		.setContents(bytecode)

	// const signTx = await transaction.sign(operatorPrivateKey);
	const submitTx = await transaction.execute(client);
	const receipt = await submitTx.getReceipt(client);
	const newFileId = receipt.getFileId();
	console.log("The new file ID is " + newFileId);

	return {
		"fileData": newFileId,
		"response": submitTx
	}
}

async function deploy(fileIdTx) {
//Create the transaction
	const transaction = new ContractCreateTransaction()
		.setGas(1000)
		.setBytecodeFileId(fileIdTx.fileData)

//Modify the default max transaction fee (1 hbar)
	const modifyTransactionFee = transaction.setMaxTransactionFee(new Hbar(16));

//Sign the transaction with the client operator key and submit to a Hedera network
	const txResponse = await modifyTransactionFee.execute(client);

//Get the receipt of the transaction
	const receipt = await txResponse.getReceipt(client);

//Get the new contract ID
	const newContractId = receipt.getContractId();

	console.log("The new contract ID is " + newContractId);
	return {
		"fileIdResponse": fileIdTx,
		"contractResponse": {
			"contractData": newContractId,
			txResponse
		},

	}
}

module.exports = router;