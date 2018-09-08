const HDWallerProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWallerProvider(
  "december bomb print venue quantum balcony model slogan trouble blade arena believe",
  "https://rinkeby.infura.io/v3/aa18450592954bd99ed379aa3c6ee17f"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log(`Attempting to deploy from account ${accounts[0]}`);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode
    })
    .send({ from: accounts[0], gas: "6000000" });

  console.log(`Contract deployed to ${result.options.address}`);
};
deploy();
