const path = require('path');
const PROTO_PATH = path.resolve(__dirname, './mail.proto')

var grpc = require('grpc');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
var example_proto = grpc.loadPackageDefinition(packageDefinition).notification;

function main() {
  var client = new example_proto.Notification('localhost:3000',
                                       grpc.credentials.createInsecure());
  client.SendEmail({message: 'This is a notification'}, function(err, response) {
    console.log('The response is:', response);
  });
}

main();