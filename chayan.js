function formData() {
  var inputName3 = document.forms["userform"]["Name"];
  var inputEmail3 = document.forms["userform"]["Email"];
  var inputNumber3 = document.forms["userform"]["Phone"];
  var inputMessage3 = document.forms["userform"]["Message"];
  if (inputName3.value == "") {
    window.alert("Please Enter your name");
    inputName3.focus();
    return false;
  }

  if (inputEmail3.value == "") {
    window.alert("Please Enter your email");
    inputEmail3.focus();
    return false;
  }
  if (inputNumber3.value == "") {
    window.alert("Please Enter your phone number");
    inputNumber3.focus();
    return false;
  }
  if (inputMessage3.value == "") {
    window.alert("Please write something");
    inputMessage3.focus();
    return false;
  }
  return true;
}
