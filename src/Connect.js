import emailjs from 'emailjs-com'
const Service_ID = "service_f2udf8l";
const Template_ID = "template_da9q9ql";


const EMAIL_USER_ID = "c1wccjHWIKuSG4xUL" // Also 'public key' idk


export function SubmitEmail(formInfo) {
    emailjs.init({
        publicKey: "YOUR_PUBLIC_KEY",
    });


    emailjs.sendForm(Service_ID, Template_ID, formInfo.target, EMAIL_USER_ID)
        .then((result) => {
            window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
        }, (error) => {
            console.log(error.text);
        });
}