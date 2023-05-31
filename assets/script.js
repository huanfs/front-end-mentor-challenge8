let content = document.querySelector("main");//main content
let form =document.querySelector("#mail");//mails input
let button = document.querySelector("button");//button 'send'
let valid = "";//valid for check users email's valid or not
button.addEventListener("click",submit);
button.addEventListener("click",showMessage);
//create an array of strings and check, if they have @=yes,else @=not 
function submit(){
    let user = form.value.split("");
    if(user.includes("@")){
        valid="yes";
    }
    else{
        valid="no";
        form.style.color="red";
        form.style.borderColor="red";
    }
}
//valid? show message, not valid? show error style red
function showMessage(){
    if(valid=="yes"){
        let success = document.querySelector("#none");
        let btnDismiss = document.querySelector("#message button");
        btnDismiss.addEventListener("click",dismiss);
        success.style.zIndex="1000";
        content.style.opacity="0";
    }
    else{
        let label = document.querySelector("label");
        let label2 = document.createElement("span");
        label.appendChild(label2);
        label2.innerHTML="valid email required";
        form.style.color="red";
        form.style.borderColor="red";
    }
}
//after success check, dismiss the message and turn main
function dismiss(){
    let success = document.querySelector("#none");
    let btnDismiss = document.querySelector("#message button");
    success.style.zIndex="-1000";
    content.style.opacity="1";
}