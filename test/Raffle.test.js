const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const { interface, bytecode } = require("../compile");
const web3 = new Web3(ganache.provider());

let raffle, accounts;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  raffle = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ from: accounts[0], gas: "1000000" });
});

describe("Lottery Contract", () => {
  it("deploys a contract", () => {
    assert.ok(raffle.options.address);
  });
});
