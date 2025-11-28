 // accountis gverdi

const form = document.getElementById('account-form');
if(form){
form.addEventListener('submit', function(e){
  e.preventDefault();
  

  // Use getElementById to match the input IDs exactly
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if(password !== confirmPassword){
    alert("პაროლები არ ემთხვევა!");
    return;
  }

  // Save in localStorage
  const users = JSON.parse(localStorage.getItem('users')) || [];
  users.push({ username, email, password });
  localStorage.setItem('users', JSON.stringify(users));

  alert("ანგარიში წარმატებით შექმნილია!");
  form.reset();
  window.location.href = "login.html"; // redirect to login
});

}

const hamburger=document.getElementById('hamburger');
const menugroup=document.getElementById('menu-group')

hamburger.addEventListener('click', () => {
  menugroup.classList.toggle('active')
})

