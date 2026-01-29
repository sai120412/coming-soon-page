function notifyUser() {
  const email = document.getElementById("email").value;

  if (email === "") {
    alert("Please enter your email address!");
  } else {
    alert("Thank you! We'll notify you at: " + email);
    document.getElementById("email").value = "";
  }
}
