## A Hedera Hashgraph Contract Deployer and Compiler

1.) yarn start in root <br>
2.) cd api && yarn start

3.) GET http://localhost:9000/createaccount <br><br>
4.) GET http://localhost:9000/deployer <br>
 This compiles contracts in the api/routes/contracts folder and outputs to build  <br>
 Then creates the file in HFS <br>
 Then deploys the smart contract with the newly created file ID <br> <br>

5.) GET http://localhost:9000/callcontract?contract=0.0.281947&method=hederaStringer <br>
 This calls the contract deployed above <br><br>