var registerBtn_Clicked = function() {
  console.log(100);
  var name = document.getElementById('name_txb').value;
  var mail = document.getElementById('mail_txb').value;
  var pw = document.getElementById('pw_txb').value;
  var doublePw = document.getElementById('doublePw_txb').value;

  var result = verified(name,mail,pw,doublePw);

  if(result == 100){
      window.location.href = '../../pages/examples/subSusscess.html';   
      console.log(100);
  } else {
    window.location.href = '../../pages/examples/500.html';
  }
}

var verified = function(name,mail,pw,doublePw) {
  return (name != '' && mail != '' && pw != '' && doublePw != '') ? 100 : 500;

}

// function registerBtn_Clicked() {
//   console.log('hello');
// }