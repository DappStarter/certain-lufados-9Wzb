require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom clog other security notice birth range proud gesture casino system gift'; 
let testAccounts = [
"0xe1c82ae6c1cbb515b96d6e889d33ee60e80efe8322f5ea3491a3a1d78b426ac2",
"0xbb0f53b8302d1baee83de11f1119bf87eabdf85ec585cc110d007137cebb21ac",
"0x1df7eb18ca467f1e0fcace518607260fd77df3219b78991c01a2c160e945513f",
"0xc65ebe2754d7204179bb10b851c5e3cba658aee459c6f673b66314af723869f7",
"0x9b38ac56f88722283018e08d68f21086ac89801f81ddb3a024b27c903bd7bc33",
"0xfcc0326a644f5aac704cbd47976e5086c5af41497fba540b7697ac6b5d00ccd0",
"0x9721f67dd6df26934490f77429cbae2d2640135b9e81d79d860fefa3a7ea9008",
"0xb12b813458c79c5170439b9145d758e6fc7ac067b9574f2a2354b58127b4bc95",
"0x7825bb8003c9a1e13c569781c133c2409d6303e49d6722d8991fff90d91c1f66",
"0xeca05efbcef540297874293b41bf83ed18df7c445cffb9753835ae247ae9be91"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

