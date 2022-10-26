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



// Get a reference to an element.
var myElement = document.querySelector('html');

// Create an instance of Hammer with the reference.
var hammer = new Hammer(myElement);

// Subscribe to a quick start event: press, tap, or doubletap.
// For a full list of quick start events, read the documentation.
hammer.on('swiperight', function() {
  document.getElementById('navbar').classList.add('expand-nav');
  document.querySelector('.logo svg').classList.add('expand-nav-logo-svg');
document.querySelector('.logo-text').classList.add('expand-nav-logo-text');
});

hammer.on('swipeleft', function(e) {
  document.getElementById('navbar').classList.remove('expand-nav');
  document.querySelector('.logo svg').classList.remove('expand-nav-logo-svg');
  document.querySelector('.logo-text').classList.remove('expand-nav-logo-text');
});



document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    setTimeout(() => {
      form.submit();
    }, 80);
  });
});


//buttons timeoutfunctions for rotate svgs before redirect//

function homeButtonTimeoutFunction() {
    setTimeout(function(){
      window.location.href = "/secrets";
}, 850);
};

function loginButtonTimeoutFunction() {
    setTimeout(function(){
      window.location.href = "/login";
}, 850);
};

function mysecretsButtonTimeoutFunction() {
    setTimeout(function(){
      window.location.href = "/mysecrets";
}, 850);
};

function delete2ButtonTimeoutFunction() {
  setTimeout(function() {
    window.location.href = "/delete2";
  }, 850);
};

function facebookButtonTimeoutFunction() {
  setTimeout(function() {
    window.location.href = "/auth/facebook";
  }, 850);
};

function googleButtonTimeoutFunction() {
  setTimeout(function() {
    window.location.href = "/auth/google";
  }, 850);
};

function logoutButtonTimeoutFunction() {
  setTimeout(function() {
    window.location.href = "/logout3";
  }, 850);
};

function moreButtonTimeoutFunction() {
  setTimeout(function() {
    window.location.href = "/about2";
  }, 850);
};


function contactButtonTimeoutFunction() {
  setTimeout(function() {
    window.location.href = "https://andrasegyed.netlify.app/";
  }, 850);
};



//navbar timeoutfunctions with add class animation scale in css//

function welcomeTimeoutFunction() {
  document.getElementById('welcome').classList.add('scale');
  setTimeout(function() {
    document.getElementById('welcome').classList.remove('scale');
    window.location.href = "/";
  }, 500);
};

function homeTimeoutFunction() {
  document.getElementById('home').classList.add('scale');
  setTimeout(function() {
    document.getElementById('home').classList.remove('scale');
    window.location.href = "/secrets";
  }, 500);
};

function mysecretsTimeoutFunction() {
  document.getElementById('mysecrets').classList.add('scale');
  setTimeout(function() {
    document.getElementById('mysecrets').classList.remove('scale');
    window.location.href = "/mysecrets";
  }, 500);
};

function loginTimeoutFunction() {
  document.getElementById('login').classList.add('scale');
  setTimeout(function() {
    document.getElementById('login').classList.remove('scale');
    window.location.href = "/login";
  }, 500);
};

function registerTimeoutFunction() {
  document.getElementById('register').classList.add('scale');
  setTimeout(function() {
    document.getElementById('register').classList.remove('scale');
    window.location.href = "/register";
  }, 500);
};

function logoutTimeoutFunction() {
  document.getElementById('logout').classList.add('scale');
  setTimeout(function() {
    document.getElementById('logout').classList.remove('scale');
    window.location.href = "/logout";
  }, 500);
};

function deleteTimeoutFunction() {
  document.getElementById('delete').classList.add('scale');
  setTimeout(function() {
    document.getElementById('delete').classList.remove('scale');
    window.location.href = "/delete";
  }, 500);
};

function aboutTimeoutFunction() {
  document.getElementById('about').classList.add('scale');
  setTimeout(function() {
    document.getElementById('about').classList.remove('scale');
    window.location.href = "/about";
  }, 500);
};

function themeTimeoutFunction() {
  document.getElementById('themeScale').classList.add('scale');
  setTimeout(function() {
    document.getElementById('themeScale').classList.remove('scale');
  }, 500);
};
