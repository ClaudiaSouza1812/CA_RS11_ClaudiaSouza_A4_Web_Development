const url = "https://jsonplaceholder.typicode.com/posts";

function readData() {
    // work with AJAX - asynchronous JavaScript and XML
    const xhr = new XMLHttpRequest();
    console.log(xhr.status);

    xhr.onreadystatechange = function() {
        console.log(this.readyState);
        /*
        values for readyState
        1 - Opened
        2 - headers received
        3 - Loading
        4 - Done
        */
    }
    if (xhr.readyState === 4) {
        // already get all the information (headers + body)
        console.log(xhr.status);
        switch(xhr.status) {
            case 200:
                console.log("Data received");
                console.log(xhr.responseText);
                // return a string
                let data = xhr.responseText;
                console.log(data[0]);
                break;
            case 404:
                console.log("An error occurred");
                break;
            default:
                console.log("Another status value");
                break;
        }
    }
    xhr.open("GET", url);

    xhr.send();

    console.log("End");

}
document.querySelector("#btReadData").addEventListener("click", readData);