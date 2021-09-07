const Web3 = require("web3");
const Tx = require('ethereumjs-tx').Transaction
const web3 = new Web3('https://ropsten.infura.io/v3/39e306ff83574b6e968eed96b9dba615')

// // let's fetch a balance

web3.eth.getBalance('0x19f95a84aa1c48a2c6a7b2d5de164331c86d030c', async (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    let balance = web3.utils.fromWei(result, "ether");
    console.log(balance + " ETH");
});

const acc1='0x9ac92f0454378239ccb90094f9434e70668253e6';
const acc2='0x19f95a84aa1c48a2c6a7b2d5de164331c86d030c';

  const pkey1=Buffer.from('c7da35241017d5f938e4930c687b33878320777921e5e01debf50f3c90ec403b','hex');
 

  web3.eth.getTransactionCount(acc1, (err, txCount) => {

    const txObject = {
         nonce: web3.utils.toHex(txCount),
         to: acc2,
         value: web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
         gasLimit: web3.utils.toHex(21000),
         gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
    }

    const tx = new Tx(txObject, { chain: 'ropsten' })
tx.sign(pkey1)
const serializedTransaction = tx.serialize()
const raw = '0x' + serializedTransaction.toString('hex')

web3.eth.sendSignedTransaction(raw, (err, txHash) => {
  if(err){
    console.log(err)
  }else{
    console.log('txHash: ', txHash)
  }
 })
})                                  