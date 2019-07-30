module.exports = {
  addMultiSigAddress: 'addmultisigaddress',
  addNode: 'addnode', // litecoind v0.8+
  backupWallet: 'backupwallet',
  banNode: 'bannode', // OMG2 only
  createMultisig: 'createmultisig',
  createRawTransaction: 'createrawtransaction',
  decodeRawTransaction: 'decoderawtransaction',
  dumpPrivKey: 'dumpprivkey',
  estimateSmartFee: 'estimatesmartfee',
  encryptWallet: 'encryptwallet',
  getAccount: 'getaccount',
  getAccountAddress: 'getaccountaddress',
  getAddedNodeInfo: 'getaddednodeinfo', // litecoind v0.8+
  getAddressesByAccount: 'getaddressesbyaccount',
  getBalance: 'getbalance',
  getBestBlockHash: 'getbestblockhash', // litecoind v0.8.6.1+
  getBlock: 'getblock',
  getBlockCount: 'getblockcount',
  getBlockHash: 'getblockhash',
  getBlockTemplate: 'getblocktemplate',
  getConnectionCount: 'getconnectioncount',
  getDifficulty: 'getdifficulty',
  getInfo: 'getinfo',
  getMiningInfo: 'getmininginfo',
  getNetworkHashPs: 'getnetworkhashps', // litecoind v0.8.4+
  getNewAddress: 'getnewaddress',
  getPeerInfo: 'getpeerinfo',
  getRawMempool: 'getrawmempool',
  getRawTransaction: 'getrawtransaction',
  getReceivedByAccount: 'getreceivedbyaccount', // litecoind v0.3.24+
  getReceivedByAddress: 'getreceivedbyaddress',
  getTransaction: 'gettransaction',
  getTxOut: 'gettxout',
  getTxOutSetInfo: 'gettxoutsetinfo',
  getWork: 'getwork',
  help: 'help',
  importPrivKey: 'importprivkey', // litecoind v0.8+
  importaddress: 'importaddress', // litecoind v0.8+
  keyPoolRefill: 'keypoolrefill',
  listAccounts: 'listaccounts',
  listAddressGroupings: 'listaddressgroupings',
  listBannedNodes: 'listbannednodes', // OMG2 only
  listLockUnspent: 'listlockunspent',
  listReceivedByAccount: 'listreceivedbyaccount',
  listReceivedByAddress: 'listreceivedbyaddress',
  listSinceBlock: 'listsinceblock',
  listTransactions: 'listtransactions',
  listUnspent: 'listunspent',
  lockUnspent: 'lockunspent', // litecoind v0.8+
  move: 'move',
  sendFrom: 'sendfrom',
  sendMany: 'sendmany',
  sendRawTransaction: 'sendrawtransaction',
  sendToAddress: 'sendtoaddress',
  setAccount: 'setaccount',
  setMininput: 'setmininput',
  setTxFee: 'settxfee',
  signMessage: 'signmessage',
  signRawTransaction: 'signrawtransaction',
  stop: 'stop',
  submitBlock: 'submitblock',
  validateAddress: 'validateaddress',
  verifyChain: 'verifychain', // litecoind v0.8.6.1+
  verifyMessage: 'verifymessage',
  walletLock: 'walletlock',
  walletPassphrase: 'walletpassphrase',
  walletPassphraseChange: 'walletpassphrasechange'
};
