// INJECT CONTENT ON TITLES
// Ready to animate
var title = document.querySelector(".header-blog__title");
var message = "3 months in Madrid";

for (var i = 0; i < message.length; i++) {
  title.innerHTML += "<span>" + message[i] + "</span>";
}



// FADE ON SCROLL
window.addEventListener('scroll', function(e) {
  var scroll = window.pageYOffset;
  var title = document.querySelector(".header-blog__title");
  var opacity = 1 - (scroll / 600);

  title.style.opacity = opacity;

  if (opacity < 0.1) {
    title.style.opacity = 0.1;
    title.style.zIndex = -1;
  }
});