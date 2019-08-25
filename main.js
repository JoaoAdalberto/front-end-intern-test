
(function() {
  const contactForm = document.getElementById('contact');

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  
  contactForm.addEventListener('submit', function() {
    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const messageValue = messageInput.value;
    
    if(validateField(nameValue) && validateField(emailValue) && validateField (messageValue)){
      window.alert(`Mensagem enviada com sucesso ${nameValue}`);
    } else if (validateField(nameValue) == false && validateField(emailValue) == false && validateField(messageValue) == false) {
      window.alert(`Preencha todos os campos para completar o envio da mensagem`)
    } else if (validateField(nameValue) == true && validateField(emailValue) == false && validateField(messageValue) == false){
      window.alert(`Preencha o campo do email e da mensagem para complentar o envio da mesma`)
    } else if (validateField(nameValue) == false && validateField(emailValue) == true && validateField(messageValue) == false){
      window.alert(`Preencha o campo do nome e da mensagem para complentar o envio da mesma`)
    } else if (validateField(nameValue) == false && validateField(emailValue) == false && validateField(messageValue) == true){
      window.alert(`Preencha o campo do nome e do email para complentar o envio da mensagem`)
    } else if (validateField(nameValue) == true && validateField(emailValue) == true && validateField(messageValue) == false){
      window.alert(`Preencha o campo da mensagem para complentar o envio da mesma`)
    } else if (validateField(nameValue) == true && validateField(emailValue) == false && validateField(messageValue) == true){
      window.alert(`Preencha o campo do email para complentar o envio da mensagem`)
    } else if (validateField(nameValue) == false && validateField(emailValue) == true && validateField(messageValue) == true){
      window.alert(`Preencha o campo do nome para complentar o envio da mensagem`)
    }


  });

  function validateField(field){
    isValid = false;

    if(field != null && field != ''){
      isValid = true;
    }

    return isValid;
  }
})();
