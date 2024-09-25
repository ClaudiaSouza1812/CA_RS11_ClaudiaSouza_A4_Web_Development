const url = "https://jsonplaceholder.typicode.com/posts";
const tableBody = document.querySelector(".tabelaDados > tbody");

function lerDados() {
    // trabalhar com AJAX - Asynchronous JavaScript and XML
    const xhr = new XMLHttpRequest();

    // xhr.onreadystatechange = function () {
    //     console.log(xhr.readyState);
    //     /*
    //     Valores para o readyState
    //     1 - opened
    //     2 - headers received
    //     3 - loading
    //     4 - done
    //     */
    //     if (xhr.readyState === 4) {
    //         // já recebi toda a informação (headers + body)
    //         console.log(xhr.status);
    //         switch (xhr.status) {
    //             case 200:
    //                 console.log("Dados recebidos...");
    //                 console.log(xhr.responseText);
    //                 // retorna uma string
    //                 let dados = xhr.responseText;
    //                 console.log(dados[0]); // "["
    //                 break;
    //             case 404:
    //                 console.log("Ocorreu um erro")
    //                 break;
    //             default:
    //                 console.log("Outro valor de status.")
    //                 break;
    //         }
    //     }
    // }

    // outros eventos:
    // xhr.onloadstart
    // xhr.onloadend
    // xhr.ontimeout
    // xhr.onprogress
    // xhr.onabort

    xhr.onload = function () {
        switch (xhr.status) {
            case 200:
                console.log("Dados recebidos...");
                console.log(xhr.responseText);
                // retorna uma string
                let dados = xhr.responseText;
                console.log(dados[0]); // "["
                // após o parsing, a variável "postsList" contém um array de objectos
                let postsList = JSON.parse(xhr.responseText);
                console.log(postsList[0]); // {userId: 1, id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit\nsuscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto'}
                let content = "";
                // mostrar apenas os 10 primeiros elementos do array
                // postsList = postsList.slice(0, 10);
                let contador = 0;
                for (let post of postsList) {
                    content += '<tr>';
                    content += `<td>${post.userId}</td>`;
                    content += `<td>${post.id}</td>`;
                    content += `<td>${post.title}</td>`;
                    content += `<td>${post.body}</td>`;
                    content += '</tr>';
                    contador++;
                    if (contador >= 10) {
                        break;
                    }
                }
                tableBody.innerHTML = content;
                // document.querySelector("#totalPosts").textContent = postsList.length;
                document.querySelector("#totalPosts").textContent = tableBody.querySelectorAll("tr").length;
                break;
            case 404:
                console.log("Ocorreu um erro")
                break;
            default:
                console.log("Outro valor de status.")
                break;
        }
    }
    // para provocar um erro utilizar:
    // const url="https://jsonplaceholder.typicodesssss.com/posts";
    xhr.onerror = function (error) {
        console.log("Erro: ", error);
    }

    xhr.open("GET", url);

    xhr.send();

    console.log("Fim");
}
document.querySelector("#btLeDados").addEventListener("click", lerDados);