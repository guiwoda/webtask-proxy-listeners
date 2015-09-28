module.exports = function(context, req, res) {
    console.log("Hey! I got something!");

    res.writeHead(204);
    res.end();
}