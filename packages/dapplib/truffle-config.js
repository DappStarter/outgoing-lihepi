require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt produce border tell notice crime remember minor half clog bottom genius'; 
let testAccounts = [
"0x1823b7fed449fc4e6d4293ab343cd83a92d9a6c068f429e17942eed7a9ceaf80",
"0xca88a4c7cb1dc656b058a2a7845e14e03413dfb3a2dfefeea7056947404ec9c2",
"0xc5c06d7aef14cb8cae6cc342b9e11028b55652a9a38d08bf17d3462909b3e558",
"0xc082d0c7d97e3a070de6011449819c5224ccb8657282f61cfc19bbd45ab2a572",
"0xefdd1b3b18911bbe0d8ef1302325a470aae584c717a7be5520667388844a03cf",
"0xb494f4444cadb477661f473ba718113057b43423676b7ae4e27f2fce7bab3574",
"0xb0116a3496e43bfca9cf159f3c581831bc288186d798ee9a18b453bf31616e01",
"0xb82aa52a7c37835a3b59abe82a806239ba7644e895a3dea30078552999dc0db7",
"0x25c714e7682e7c92799bede2b1ac1f6aaa32363c6e3d4457207f8503912cc76d",
"0xdb8c6f52367a1cfc402395e356b487f6acbb180022c368f5a4bb82bc8bc27970"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

