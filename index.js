// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollBtn").style.display = "block";
  } else {
    document.getElementById("scrollBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}





window.addEventListener('scroll', function() {
  var navbar = document.getElementById('navbar');
  var scrollTop = window.scrollY;

  if (scrollTop === 0) {
    navbar.style.background = 'transparent';
  } else {
    navbar.style.background = 'linear-gradient(to right, #000000, #4a2b12)';
  }
});



