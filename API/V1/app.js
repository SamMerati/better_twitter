const axios = require('axios');
const http = require('http');
const url = require('url');
const endPointRoot = "/API/V1/";
const GET = "GET";
const POST = "POST";
let getReqs = 0;
let postReqs = 0;

let config_post = {
    method: null,
    url: 'https://api.twitter.com/2/tweets',
    headers: { 
<<<<<<< Updated upstream
        
    },
    data : null
  };
=======
        'Authorization': 'OAuth oauth_consumer_key="16MCGk6FT2DEIZq1F3sdmBFzQ",oauth_token="1462329470560260101-vAzyJ3mvoWas71zwYgfBjvPK4lyghW",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1637561315",oauth_nonce="sucsuwAx4Av",oauth_version="1.0",oauth_signature="kNZg5IeThhRExiI2SjhIJXgQAjk%3D"', 
        'Content-Type': 'application/json', 
        'Cookie': 'guest_id=v1%3A163752613940949811; guest_id_ads=v1%3A163752613940949811; guest_id_marketing=v1%3A163752613940949811; personalization_id="v1_bHgId4O7/OT01cgatek81A=="'
      },
    data : null
};

let config_get = {
    method: 'get',
    url: 'https://api.twitter.com/2/users/1462329470560260101/tweets',
    headers: { 
        'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAA4aWAEAAAAAk2ZtbZ4Rtj5u4Lg7Xn%2F3WKQqArk%3Dng9gOM2qiJUxmW37Fs8iXFrIQ28BV3tQH3OyMUfadAALErs5vc', 
        'Cookie': 'guest_id=v1%3A163752613940949811; guest_id_ads=v1%3A163752613940949811; guest_id_marketing=v1%3A163752613940949811; personalization_id="v1_bHgId4O7/OT01cgatek81A=="'
    }
};
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
        res.end(JSON.stringify(response));
=======
        axios(config_get)
            .then(function (response) {
                res.end(JSON.stringify(response.data));
              
            })
            .catch(function (error) {
              console.log(error);
        });
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
            config.data = data;
            config.method = 'post';
            axios(config)
=======
            config_post.data = data;
            config_post.method = 'post';
            axios(config_post)
>>>>>>> Stashed changes
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