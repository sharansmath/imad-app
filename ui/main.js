// Submit username and password
var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    
    // create a request object
    var request = new XMLHttpRequest();
    
    // Capture the response and store it in a variable
    request.onreadystatechange = function() {
        // Take some action
        if(request.status === 200) {
            // Capture a list of names
            console.log('user logged in');
            alert('Logged in successfully');
        } else (request.status === 403) {
            alert('Username/password is incorrect')
        } else (request.status === 5000) {
            alert('Someothing went wrong');
        }
    };
    
    // Make the request
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST', 'http://mathsharan57.imad.hasura-app.io/lgin', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({username: username, password: password}));
};