
const submit = document.getElementById("submit");
const resource = "tweet/";
const xhttp = new XMLHttpRequest();
const endPointRoot = "http://localhost:8080/API/V1/";
const successMessage = document.getElementById("successMessage");
const failMessage = document.getElementById("failMessage");

submit.onclick = post;

function post() {
    console.log("asdsad");
    let tweet = document.getElementById("tweet").value;
    let params = "?tweet=" + tweet;
    xhttp.open("POST", endPointRoot + resource, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(params);
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            console.log(this.response)
            if (this.response === 'true') {
                successMessage.style.display = "block";
                failMessage.style.display = "none";
            }
            else {
                successMessage.style.display = "none";
                failMessage.style.display = "block";
            }
        }
    }
}