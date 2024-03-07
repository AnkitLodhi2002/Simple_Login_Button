let data = document.getElementById("Btn")
data.addEventListener("click", print)
function print(){
    let userName = document.querySelector("#name").value
    let userEmail = document.querySelector("#email").value
    let userPassword = document.querySelector("#password").value
    console.log(userName)
    console.log(userEmail)
    console.log(userPassword)
    alert('Login Successfully')
}