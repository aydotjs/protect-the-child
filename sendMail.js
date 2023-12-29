function sendMail(){
    let params = {
        fullname : document.querySelector(".fullname").value,
        message : document.querySelector(".message").value,
        from_name : document.querySelector(".email-address").value
    }
    emailjs.send("service_3xfo6fk", "template_obn5i1d", params).then(alert("Email Sent"))
}