let content = document.querySelector("main");//main content
let form =document.querySelector("#mail");//mails input
let button = document.querySelector("button");//button 'send'
let valid = "";//valid for check users email's valid or not
button.addEventListener("click",submit);
button.addEventListener("click",showMessage);
//create an array of strings and check, if their have @=yes,else @=not 
function submit(){
    let user = form.value.split("");
    if(user.includes("@")&&user.includes(".")){
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
        let userEmail = document.querySelector("span");
        userEmail.innerHTML=form.value;
        userEmail.style.fontWeight="900";
        btnDismiss.addEventListener("click",dismiss);
        success.style.display="flex";
        content.style.display="none";
    }
    else{
        let label = document.querySelector("label");
        let label2 = document.createElement("span");
        label.appendChild(label2);
        label2.innerHTML="valid email required";
        form.style.color="red";
        form.style.borderColor="red";
        setTimeout((x)=>{
            label2.remove();
        },5000)
    }

}
//after success check, dismiss the message and turn main
function dismiss(){
    let success = document.querySelector("#none");
    let btnDismiss = document.querySelector("#message button");
    success.style.display="none";
    content.style.display="flex";
}