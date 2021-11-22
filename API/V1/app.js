const axios = require('axios');
const http = require('http');
const url = require('url');
const endPointRoot = "/API/V1/";
const GET = "GET";
const POST = "POST";
let getReqs = 0;
let postReqs = 0;

let config = {
    method: null,
    url: 'https://api.twitter.com/2/tweets',
    headers: { 
        
    },
    data : null
  };

http.createServer(function (req, res) {
    res.writeHead(200, {
        "Content-Type": "text/html",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*"
    });

    if (req.method === GET) {
        getReqs++;
        let response = {
            "GET": getReqs,
            "POST": postReqs,
        };
        res.end(JSON.stringify(response));
    }

    if (req.method === POST && req.url === endPointRoot + "tweet/") {
        postReqs++;
        let body = "";
        req.on('data', function(chunk){
            if(chunk != null){
                body += chunk;
            }
        });
        req.on('end', function () {
            let q = url.parse(body, true);
            let tweet = q.query.tweet;
            let data = JSON.stringify({
                "text": tweet
              });
            config.data = data;
            config.method = 'post';
            axios(config)
            .then(function (response) {
              console.log(JSON.stringify(response.data));
              res.end('true');
            })
            .catch(function (error) {
              console.log(error);
              res.end('false');
            });
        });
    }
}).listen(8080);