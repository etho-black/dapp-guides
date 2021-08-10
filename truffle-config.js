// The following code is used as the main truffle config setup to make your dAPP work with etho on metamask.

const HDWalletProvider = require("@truffle/hdwallet-provider");

var privateKey = "";

module.exports = {
    networks: {
        dev: {
            provider: () => new HDWalletProvider(privateKey, "https://rpc.ether1.org"),
            network_id: 1313114
        },
    },
	compilers: {
    solc: {
      version: "^0.4.26",
      evmVersion: "homestead"
    }
  }
};
