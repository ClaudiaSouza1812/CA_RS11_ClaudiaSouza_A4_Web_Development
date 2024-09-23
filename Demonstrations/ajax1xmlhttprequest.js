const url = "https://jsonplaceholder.typicode.com/posts";
const tableBody = document.querySelector(".tabelaDados > tbody");

function readData() {
    // work with AJAX - asynchronous JavaScript and XML
    const xhr = new XMLHttpRequest();
    console.log(xhr.status);
    /*
    xhr.onreadystatechange = function() {
        console.log(this.readyState);
        
        //values for readyState
        //1 - Opened
        //2 - headers received
        //3 - Loading
        //4 - Done
        
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
    */
    xhr.onload = function() {
        switch(xhr.status) {
            case 200:
                console.log("Data received");
                console.log(xhr.responseText);
                // return a string
                let data = xhr.responseText;
                console.log(data[0]); // "["
                // after parsing, the "postsList" will have an array of objects
                let postsList = JSON.parse(xhr.responseText);
                console.log(postsList[0]); // 

                let content = "";
                // show only the first 10 elements of the array
                // postsList = postsList.slice(0, 10);
                let counter = 0;
                for (let post of postsList) {
                    content += "<tr>";
                    content += `<td>${post.userId}</td>`;
                    content += `<td>${post.id}</td>`;
                    content += `<td>${post.title}</td>`;
                    content += `<td>${post.body}</td>`;
                    content += "</tr>";
                    counter++;
                    if (counter >= 10) {
                        break;
                    }
                }
                tableBody.innerHTML = content;
                // document.querySelector("#totalPosts").textContent = postsList.length;
                document.querySelector("#totalPosts").textContent = tableBody.querySelectorAll("tr").length;
                break;
            case 404:
                console.log("An error occurred");
                break;
            default:
                console.log("Another status value");
                break;
        }
    }
    // to prove an error, use:
    // const url = "https://jsonplaceholder.typicodessssss.com/posts";
    xhr.onerror = function(error) {
        console.log("Error:", error)
    }

    xhr.open("GET", url);

    xhr.send();

    console.log("End");

}
document.querySelector("#btReadData").addEventListener("click", readData);