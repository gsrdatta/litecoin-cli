var litecoin = require('./lib/index');
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

function doCmd(cmd) {
  client[cmd](function(err, data) {
    console.log(cmd);
    console.log(data);
    console.log("err: ", err);
    console.log('');
  });
}

doCmd('getWork');
