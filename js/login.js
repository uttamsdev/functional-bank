    alert("Please login username: admin password: admin");
document.getElementById('login-btn').addEventListener('click', function(){
    const userName = document.getElementById('user-name');
    const username = userName.value;
  
    const pass = document.getElementById('password');
    const password = pass.value;
    if(username=='admin' && password=='admin'){
        window.location.href = 'banking.html';
    }
    else{
        alert('Wrong username or password Enter username:admin password: admin');
    }
})