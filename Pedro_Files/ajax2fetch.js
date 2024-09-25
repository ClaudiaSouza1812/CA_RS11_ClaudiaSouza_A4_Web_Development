const url = "https://jsonplaceholder.typicode.com/posts";
const tableBody = document.querySelector(".tabelaDados > tbody");

function lerDados() {
    // o método fetch retorna uma Promise
    // as promises podem estar em 3 estados - pending, fullfilled (teve sucesso), rejected (não teve sucesso)
    // por omissão, o fetch efectua um pedido do tipo GET
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
        // .then(postsList => console.log(postsList));
        .then(postsList => {
            let content = "";
            for (let post of postsList) {
                content += '<tr>';
                content += `<td>${post.userId}</td>`;
                content += `<td>${post.id}</td>`;
                content += `<td>${post.title}</td>`;
                content += `<td>${post.body}</td>`;
                content += '</tr>';
            }
            tableBody.innerHTML = content;
            document.querySelector("#totalPosts").textContent = postsList.length;
        })
        // O erro é do tipo "TypeError: NetworkError when attempting to fetch resource." se o endereço/domínio estiver incorrecto 
        .catch(error => console.log(error));

}
document.querySelector("#btLeDados").addEventListener("click", lerDados);