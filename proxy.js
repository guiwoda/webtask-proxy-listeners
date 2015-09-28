var https = require('https');

// This could be read from an external DB
var listeners = [
    'https://webtask.it.auth0.com/api/run/wt-guiwoda-gmail_com-0/logger?webtask_no_cache=1'
];
module.exports = function(context, req, res) {
    console.log('Proxy request received');
    // Make a proxy to some API maybe?
    var request = https.request("https://www.google.com", function (response) {
        console.log("Got response from server: " + response.statusCode);

        if (response.statusCode == 200) {
            listeners.forEach(notify);
        }

        response.on('data', function(chunk){
            res.write(chunk);
        });

        response.on('end', function(){
            console.log("Shutting down.");
            res.end();
        });
    });

    request.end();
};

function notify(listener){
    https.request(listener).end();
}