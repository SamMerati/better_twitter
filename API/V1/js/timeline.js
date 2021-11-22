const submit = document.getElementById("submit");
const resource = "timeline/";
const xhttp = new XMLHttpRequest();
const endPointRoot = "http://localhost:8080/API/V1/";
const viewResponse = document.getElementById("timeline");

function get() {
    console.log("Get request");
    xhttp.open("GET", endPointRoot + resource, false);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        let obj = JSON.parse(xhttp.response);
        if(this.readyState == 4 && this.status == 200) {
            console.log(this.response)
                
            // for (let i = 0; i < obj.length; i++) {
            //     let node = document.createTextNode(obj[i].name + ":" + obj[i].scores);
                
            //     viewResponse.appendChild(node);
            //     viewResponse.appendChild(document.createElement("br"));
           
            // }
        }
        return xhttp.responseText;
    }
}

document.onload = get();