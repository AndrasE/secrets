const themeMap = {
  dark: "light",
  light: "solar",
  solar: "dark"
};

const theme = localStorage.getItem('theme')
  || (tmp = Object.keys(themeMap)[0],
      localStorage.setItem('theme', tmp),
      tmp);
const bodyClass = document.body.classList;
bodyClass.add(theme);

function toggleTheme() {
  const current = localStorage.getItem('theme');
  const next = themeMap[current];

  bodyClass.replace(current, next);
  localStorage.setItem('theme', next);
};

document.getElementById('themeButton').onclick = toggleTheme;

//enter button href delay funciton//
function welcomeTimoutFunction() {
    setTimeout(function(){
      window.location.href = "/secrets";
}, 900);
};

function mysecretsTimoutFunction() {
    setTimeout(function(){
      window.location.href = "/mysecrets";
}, 900);
};

//facebook button auth href delay funciton//
function facebookTimoutFunction() {
    setTimeout(function(){
      window.location.href = "/auth/facebook";
}, 900);
};

//google button auth href delay funciton//
function googleTimoutFunction() {
    setTimeout(function(){
      window.location.href = "/auth/google";
}, 900);
};

function logoutTimoutFunction() {
    setTimeout(function(){
      window.location.href = "/logout";
}, 900);
};

//login redirect from logut2 href delay funciton//
function logout2TimoutFunction() {
    setTimeout(function(){
      window.location.href = "/login";
}, 900);
};

//register href delay funciton//
function registerTimoutFunction() {
    setTimeout(function(){
      window.location.href = "/register";
}, 900);
};

//logout redirect href delay funciton//
function logout3TimoutFunction() {
    setTimeout(function(){
      window.location.href = "/logout3";
}, 900);
};

function deleteTimeoutFunction() {
    setTimeout(function(){
      window.location.href = "/delete";
}, 900);
};

//delete user redirect href delay funciton //
function delete2TimeoutFunction() {
    setTimeout(function(){
      window.location.href = "/delete2";
}, 900);
};

function byeTimeoutFunction() {
    setTimeout(function(){
      window.location.href = "/secrets";
}, 900);
};

//login and register form delay + delete secret from delay function //
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    setTimeout(() => {
      form.submit();
    }, 900);
  });
});

//add new secrets submit form delay funciton//
