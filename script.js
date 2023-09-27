const chars =
  "abcdefghjklmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789?!@*()[]";
  const inputEL = document.querySelector(".container-password password-input");
  
  function generatePassword() {
    let password = "";
    
  for (let i = 0; i < 8; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }

  inputEL.value = password;
  console.log(password);
}

generatePassword();
