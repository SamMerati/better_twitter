let search = document.getElementById("submitSearch");
let errorMsgWord = document.getElementById("errorMsgWord");
const xhttp = new XMLHttpRequest();
const endPointRoot = "http://localhost:8080/API/V1/";
let resource = "timeline/";

function getAll(){
    // let params = "?search=" + word;
    const url = endPointRoot + resource;
    xhttp.open("GET", url, true);
    xhttp.send();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            let response = this.responseText;
            let responseOBJ = JSON.parse(response);
            console.log(responseOBJ);
            let definition = undefined;
            let ele = document.getElementById('timeline');
            for(let i=0; i < responseOBJ.data.length;i++){
                let node = document.createTextNode(responseOBJ.data[i].text);
                console.log(responseOBJ.data[i].text)
                ele.appendChild(node);
                ele.appendChild(document.createElement("br"));
            }
        }
    };
    
}

document.onload = getAll;