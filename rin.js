function valiateForm(){

    const email=document.querySelector("email").ariaValueMax;
    if(!email.includes("@")){

        alert("wrong email(write a correct one)");
        return false;
    }
    return true;
}
document.querySelector("form").addEventListener("submit",valiateForm);
