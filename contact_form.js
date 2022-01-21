const form = document.querySelector("form"),
statusTxt=form.querySelector(".button-area span");
form.onsubmit = (e)=> {
function validateForm() {
    var valid = 1;
    var email = document.getElementsByName('email');
    var email_validation = document.getElementById("email_validation");
    var name = document.getElementsByName('name');
    var name_validation = document.getElementById("name_validation");
    var service = document.getElementsByName('service');
    var service_validation = document.getElementById("service_validation");
    var message = document.getElementsByName("message");
    var message_validation = document.getElementById("message_validation");
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    if (service.value == "") {
      alert("Please select a service");
      document.myForm.service.focus();
      service_validation.style.display = "block";
      service_validation.parentNode.style.backgroundColor = "#FFDFDF";
    } else {
      service_validation.style.display = "none";
      service_validation.parentNode.style.backgroundColor = "transparent";
    }
    
    if (name.value == "") {
      valid = 0;
      name_validation.innerHTML = "Field Required";
      name_validation.style.display = "block";
      name_validation.parentNode.style.backgroundColor = "#FFDFDF";
    } else {
      name_validation.style.display = "none";
      name_validation.parentNode.style.backgroundColor = "transparent";
    }
    
    if (message.value == "") {
      valid = 0;
      message_validation.innerHTML = "Field Required";
      message_validation.style.display = "block";
      message_validation.parentNode.style.backgroundColor = "#FFDFDF";
    } else {
      message_validation.style.display = "none";
      message_validation.parentNode.style.backgroundColor = "transparent";
    }
    
    if (email.value == "") {
      valid = 0;
      email_validation.innerHTML = "Field Required";
      email_validation.style.display = "block";
      email_validation.parentNode.style.backgroundColor = "#FFDFDF";
    } else {
      email_validation.style.display = "none";
      email_validation.parentNode.style.backgroundColor = "transparent";
    }
    
    if(!filter.test(email.value)) {
      valid = 0;
      email_validation.innerHTML = "Invalid email address";
      email_validation.style.display = "block";
      email_validation.parentNode.style.backgroundColor = "#FFDFDF";
    } else {
      email_validation.style.display = "none";
      email_validation.parentNode.style.backgroundColor = "transparent";
    }
    if (!valid)
      return false;
  }
}