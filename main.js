/*
function getPosts(){
    const request = new XMLHttpRequest()
    request.open("GET", "https://jsonplaceholder.typicode.com/posts")
    request.responseType = "json"
    request.send()
    request.onload = function(){
        if(request.status >= 200 && request.status < 300)
            console.log(request.response)
        else
            alert("Error")
    }
}
getPosts()
*/

async function getPosts(userId) {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?userId="+userId)
    const data = await response.json()
    if(response.status >= 200 && response.status < 300){
        const posts = data
        document.getElementById("container_right").innerHTML =""
        for(post of posts){
            const content = `
            <div class="post">
                <h3>${post.title}</h3>
                <hr>
                <h4>${post.body}</h4>
            </div>
            `
            document.getElementById("container_right").innerHTML += content

        }
    }
    else
        alert("Error")
}

getPosts(1)





async function getUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/Users")
    const data = await response.json()
    if(response.status >= 200 && response.status < 300){
        const users = data
        document.getElementById("container_left").innerHTML =""
        for(user of users){
            const content = `
            <div class="user" onclick="userClicked(${user.id}, this)">
                <h3>${user.name}</h3>
                <h4>${user.email}</h4>
            </div>
            `
            document.getElementById("container_left").innerHTML += content

        }
    }
    else
        alert("Error")
}

getUsers()

function userClicked(id, el){
    getPosts(id)
    let selected_ele = document.getElementsByClassName("selected")
    for(ele of selected_ele){
        ele.classList.remove("selected")
    }
    el.classList.add("selected")
}