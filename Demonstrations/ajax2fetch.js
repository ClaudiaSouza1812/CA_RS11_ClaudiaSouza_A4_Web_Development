const url = "https://jsonplaceholder.typicode.com/posts";
const tableBody = document.querySelector(".tabelaDados > tbody");

function readData() {
    // the fetch method returns a promisse
    // promisse states: pending, fullfilled (succesfuly), rejected (not successful)
    // by omition, the fetch make a GET order
    fetch(url)
        // .then(response => console.log(response));
        // Response { type: "cors", url: "https://jsonplaceholder.typicode.com/posts", redirected: false, status: 200, ok: true, statusText: "", headers: Headers(4), body: ReadableStream, bodyUsed: false }
        // .then(response => response.json());
        .then(response => {
            // se existir um erro a response é do tipo:
            // Response { type: "cors", url: "https://jsonplaceholder.typicode.com/postas", redirected: false, status: 404, ok: false, statusText: "", headers: Headers(5), body: ReadableStream, bodyUsed: false }
            if (response.ok) {
                return response.json();
            } else {
                // console.log("ERRO");
                if (response.status === 404) {
                    return Promise.reject("URL does not exist!");
                } else {
                    return Promise.reject("Unknown error!");
                }
            }
        })
        //.then(postsList => console.log(postsList));
        //.then(data => console.log(data));
        //.then(response => console.log(response));
        .then(postsList => {
            let content = "";
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
            document.querySelector("#totalPosts").textContent = postsList.length;
        })
        // the error is TypeError: "networkerror when trying to fetch resourse" if attempting the address domain is wrong
        .catch(error => console.log(error));

}
document.querySelector("#btReadData").addEventListener("click", readData);