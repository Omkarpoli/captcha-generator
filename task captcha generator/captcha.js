const generator=()=> {
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha_length=6;
    let captcha = "";
    for (let i = 0; i <captcha_length; i++) {
        
        let randomindex= Math.floor(Math.random()*chars.length);
        captcha += chars.charAt(randomindex);
    }
    document.getElementById("captcha").innerHTML = captcha;
}
generator();

const validate=()=>{
    let input= document.getElementById("input_box1").value;
    let captcha_result=document.getElementById("captcha").innerHTML;
    let result_text= document.getElementById("result");
    if(input==captcha_result)
    {
        result_text.innerHTML=" You entered correctly";
    }
    else{
        result_text.innerHTML="Invalid, please try again";
    }
}
