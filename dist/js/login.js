var loginBtn_Clicked = function() {
  var username = document.getElementById('email_txb').value;
  var password = document.getElementById('pw_txb').value;
  
  var result = verified(username,password);

  switch (result) {
    case 100:
      window.location.href = '../../index2.html';
      break;
    case 200:
      window.location.href = '../../pages/examples/profile.html';
      break;
    case 500:
      window.location.href = '../../pages/examples/500.html';
      break;
    default:
    window.location.href = '../../pages/examples/profiles.html';
      break;
  }

}

function verified(username,password) {
        //administrator login return 100;
    if(username === 'admin' && password === 'admin') {
        return 100;
    } else if(username === 'user' && password === 'user') {
        return 200;
    } else {
        //illegal login
        return 500;
    }
}

