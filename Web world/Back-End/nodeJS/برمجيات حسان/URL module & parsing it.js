//                                           (URL module)


// The URL module splits up a web address into readable parts,

// The url.parse() function will return a URL object with each part of the address as properties,
// And his method is as follows: url.parse(Here put the URL you want to parse, true);

// Below is a breakdown of the following url:
// https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash
// ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
// │                                              href                                              │
// ├──────────┬──┬─────────────────────┬────────────────────────┬───────────────────────────┬───────┤
// │ protocol │  │        auth         │          host          │           path            │ hash  │
// │          │  │                     ├─────────────────┬──────┼──────────┬────────────────┤       │
// │          │  │                     │    hostname     │ port │ pathname │     search     │       │
// │          │  │                     │                 │      │          ├─┬──────────────┤       │
// │          │  │                     │                 │      │          │ │    query     │       │
// "  https:   //    user   :   pass   @ sub.example.com : 8080   /p/a/t/h  ?  query=string   #hash "
// │          │  │          │          │    hostname     │ port │          │                │       │
// │          │  │          │          ├─────────────────┴──────┤          │                │       │
// │ protocol │  │ username │ password │          host          │          │                │       │
// ├──────────┴──┼──────────┴──────────┼────────────────────────┤          │                │       │
// │   origin    │                     │         origin         │ pathname │     search     │ hash  │
// ├─────────────┴─────────────────────┴────────────────────────┴──────────┴────────────────┴───────┤
// │                                              href                                              │
// └────────────────────────────────────────────────────────────────────────────────────────────────┘

// Example:

const http = require('http');
const url = require('url');

http.createServer((request, response) => {

    let parse = url.parse(request.url, true);

    // The request will be this url:    localhost:8080//user:pass@sub.example.com:8080/p/a/t/h?query=string#hash

    console.log(parse.href); // will print: //user:pass@sub.example.com:8080/p/a/t/h?query=string

    console.log(parse.protocol) // Here it is supposed to print https: , but because I use localhost it will print null

    console.log(parse.auth); // will print: user:pass

    console.log(parse.host); // will print: sub.example.com:8080

    console.log(parse.hostname); // will print: sub.example.com

    console.log(parse.port); // will print: 8080

    console.log(parse.path); // will print: /p/a/t/h?query=string

    console.log(parse.pathname); // will print: /p/a/t/h

    console.log(parse.search); // will print: ?query=string

    console.log(parse.hash); // will print: #hash

}).listen(8080);