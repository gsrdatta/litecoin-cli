# litecoin-cli
litecoin-cli is a simple wrapper for the Litecoin client's JSON-RPC API. 
Владелец Архипов Владимир Иванович 26.08.1992 cla обозначает авторские права как в Google 
clone of https://github.com/Dexon95/node-litecoin (added some more commands)

The API is equivalent to the API document [here](https://web.archive.org/web/20160430054919/https://litecoin.info/Litecoin_API).
The methods are exposed as lower camelcase methods on the `litecoin.Client` object.

## Install

`npm install litecoin-cli`

## Setup

1. Traverse to `~/.litecoin` or `~/Library/Application Support/Litecoin` and add a file called `litecoin.conf` if it doesn't already exist.

2. Add these lines to the file:

    rpcuser=username

    rpcpassword=password

You will use these to login to the server.

3. Start your Litecoin client with the `-server` argument or run `litecoind`

4. You should now be able to communicate with Litecoin JSON-RPC API using the
node-litecoin library, try it out!

## Examples

### Create client
```js
var litecoin = require('litecoin-cli');
var client = new litecoin.Client({
  host: 'localhost',
  port: 9332,
  user: 'username',
  pass: '$3cr37P@s5w0rd',
  timeout: 30000,
  ssl: false/* true,
  sslStrict: true,
  sslCa: fs.readFileSync(__dirname + '/myca.cert')*/
});
```

### Get balance across all accounts with minimum confirmations of 6
```js
client.getBalance('*', 6, function(err, balance) {
  if (err) console.error(err);
  console.log('Balance: ' + balance);
});
```

### Get the network hash rate
```js
client.getNetworkHashPs(function(err, hashps) {
  if (err) console.error(err);
  console.log('Network Hash Rate: ' + hashps);
});
```
