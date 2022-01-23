var server_echo;
var json = {
    //used JSON.stringify() twice
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
        //Content-Type was wrong
        //'Content-Type': 'application/json'
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'json=' + encodeURIComponent(JSON.stringify(json.json)) + '&delay=' + json.delay
})
.then(function (response) {
    //response is a promise object, server_echo couldn't get value here
    //server_echo = response.json().echo
    return response.json();
})
.then(function (result) {
    server_echo = result.echo
    server_echo.forEach(
        element => console.log(element)
    )
    //result is a json object, alert cannot show json object directly
    //alert(result);
    alert(JSON.stringify(result));
})
.catch (function (error) {
    console.log('Request failed', error);
});
// server_echo should wait for async action, not implement right away 
// server_echo.forEach(
//     element => console.log(element)
// )
