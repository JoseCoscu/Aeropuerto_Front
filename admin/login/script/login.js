(() => {
    const login_form = document.querySelector("#loginForm")
login_form.addEventListener('submit', (e) => {
    e.preventDefault()
    const user = document.querySelector("#username").value
    const pass = document.querySelector("#password").value
    login(user,pass)
    
})

function login (user,pass){

    fetch("http://localhost:1234/admin/login", {
  method: "POST", 
  body: JSON.stringify({username: user, password: pass }), 
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .catch((error) => console.error("Error:", error))
  .then((response) => {
    const {token} = response
    localStorage.setItem('userToken', token);
    location.href = '../index.html';
  });
}
})();
