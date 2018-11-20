var http = require("http");
var https = require("https");
var url = require("url");
var stringDecoder = require("string_decoder").StringDecoder;
var config = require("./config");

var httpServer = http.createServer(function(req, res) {
  unifiedServer(req, res);
});

httpServer.listen(config.httpPort, function() {
  console.log(
    "The server is up and listening on " +
      config.httpPort +
      " in " +
      config.envName +
      " mode."
  );
});
