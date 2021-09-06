const Web3 = require("web3");
const ethNetwork = 'https://mainnet.infura.io/v3/39e306ff83574b6e968eed96b9dba615';
const web3 = new Web3(new Web3.providers.HttpProvider(ethNetwork));

// let's fetch a balance

web3.eth.getBalance('0x19f95a84aa1c48a2c6a7b2d5de164331c86d030c', async (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    let balance = web3.utils.fromWei(result, "ether");
    console.log(balance + " ETH");
});