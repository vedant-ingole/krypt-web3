// https://eth-ropsten.alchemyapi.io/v2/m9CqmUq3RLY_bo7HJpNOyc46tQmCPIAU

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/m9CqmUq3RLY_bo7HJpNOyc46tQmCPIAU',
      accounts: ['4af2e983479bd1bda71a1d989cc5fadea4a6ef8f052d47598df516be2064e6e0']
    },
  },
};