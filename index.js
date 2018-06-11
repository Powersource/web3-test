addr = {}
// All on Ropsten
addr.erik = '0xbD2940e549C38Cc6b201767a0238c2C07820Ef35'
addr.patrik = '0xbcEf85708670FA0127C484Ac649724B8028Ea08b'
addr.jacob = '0xBF9e8395854cE02abB454d5131F45F2bFFB54017'

// Checking if Web3 has been injected by the browser (Mist/MetaMask)
if (typeof web3 !== 'undefined') {
  // Use Mist/MetaMask's provider
  console.log('Using metamask')
  web3js = new Web3(web3.currentProvider);
} else {
  console.log('No web3? You should consider trying MetaMask!')
  // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
  web3js = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

// Now you can start your app & access web3 freely:


