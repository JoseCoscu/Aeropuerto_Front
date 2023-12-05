(() => {
    const login_form = document.querySelector("#loginForm")
login_form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const user = document.querySelector("#username").value
    const pass = document.querySelector("#password").value
    await login(user,pass)
    
})

async function login (user,pass){

  const response = await fetch("http://localhost:1234/login", {
  method: "POST", 
  body: JSON.stringify({username: user, password: pass }), 
  headers: {
    "Content-Type": "application/json",
  },
})
if (response.status === 200){
 
     const {token, id} = await response.json()
     
    localStorage.setItem('userToken', token);
    localStorage.setItem('client_id', id);

  
    location.href = '../index.html';
}
}
})();
