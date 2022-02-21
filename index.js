const hamburger = $(".hamburger");
const dropdown = $(".dropdown");
$(hamburger).click(function (e) {
  e.preventDefault();
  $(hamburger).toggleClass("is-active");
  $(dropdown).toggleClass("is-active");
});
