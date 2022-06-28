


//  SigIn part start
document.querySelector("#form2").addEventListener("submit", logIn);

function logIn(event) {
    event.preventDefault();
    let email = document.querySelector("#sign-in-email").value;
    let password = document.querySelector("#password").value;

    let arr = JSON.parse(localStorage.getItem("userDataBase"));

    for (let i = 0; i < arr.length; i++) {
        if (
            arr[i].userEmail === email &&
            arr[i].userPassword === password
        ) {
            var name = email[0] + email[1] + email[2] + email[3] + email[4] + email[5] + email[6] + email[7] + email[8]

            username.push(name)
            localStorage.setItem("username", JSON.stringify(username));


            flag = true;

            alert("LogIn Successfull !!");
            setTimeout(() => {
                window.location.href = "index.html"
            }, 800)

            break;
        }
    }
    if (flag == false) {
        alert("Wrong Credentials !!");


    }


}
document.querySelector("#guest").addEventListener("click",GUEST);
function GUEST(){
    window.location.href="index.html";
};