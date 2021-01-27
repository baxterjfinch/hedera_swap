var express = require("express");
const url = require('url');
const bodyParser = require('body-parser');
const querystring = require('querystring');

require("dotenv").config();
var router = express.Router();

const { Client, ContractCallQuery,  } = require("@hashgraph/sdk");
const operatorAccount = process.env.ACCOUNT_ID;
const operatorPublicKey = process.env.PUBLIC_KEY;
const operatorPrivateKey = process.env.PRIVATE_KEY;
const client = Client.forTestnet();
client.setOperator(operatorAccount, operatorPrivateKey);


router.get("/", function(req, res, next) {
	let contract = req.query.contract;
	let method = req.query.method;
	let params = req.query.params;

	try {
		callContract(contract, method, params).then((resp) => {
			res.send(resp)
		})
	} catch (err) {
		console.log("ERRRRRR", err)
	}
});

async function callContract(contract, method, params) {
	//Contract call query
	const query = new ContractCallQuery()
		.setContractId(contract)
		.setGas(1000)
		.setFunction(method, params);

//Sign with the client operator private key to pay for the query and submit the query to a Hedera network
	const contractFunctionResult = await query.execute(client);

	console.log(contractFunctionResult);

	return {
		"response": contractFunctionResult
	}
}

module.exports = router;