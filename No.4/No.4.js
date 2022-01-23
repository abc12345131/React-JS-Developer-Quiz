var server_echo;
//1. bad variable name
// var json = {
var body = {
    //2. use JSON.stringify() twice, duplicate serialize
    // json: JSON.stringify({
    //     a: 1,
    //     b: 2
    // }),
    json: {
        a:1,
        b:2
    },
    delay: 3
};
fetch('/echo/', {
    method: 'post',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        //3. Content-Type was wrong
        // 'Content-Type': 'application/json'
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'json=' + encodeURIComponent(JSON.stringify(body.json)) + '&delay=' + body.delay
})
.then(function (response) {
    //4. response.json() is a promise object, server_echo wouldn't get value here
    // server_echo = response.json().echo
    return response.json();
})
.then(function (result) {
    server_echo = result.echo
    server_echo.forEach(
        element => console.log(element)
    )
    //5. result is a json object, alert cannot directly show json object
    // alert(result);
    alert(JSON.stringify(result));
})
.catch (function (error) {
    console.log('Request failed', error);
});
//6. server_echo should wait for async action, not implement right away 
// server_echo.forEach(
//     element => console.log(element)
// )