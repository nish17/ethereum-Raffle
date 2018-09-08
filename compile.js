const path = require("path");
const fs = require("fs");
const solc = require("solc");

const RafflePath = path.resolve(__dirname, "contracts", "Raffle.sol");
const source = fs.readFileSync(RafflePath, "utf-8");

module.exports = solc.compile(source, 1).contracts[":Raffle"];
