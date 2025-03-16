function sendMail(){
    let msg = {
        message: [document.getElementById('formemailinp').value, document.getElementById('formnameinp').value, document.getElementById('formtxtarea').value ]
    }
    emailjs.send('service_0s5fge5', "template_9nzmud8",msg).then(alert('Email Sent!'))
}