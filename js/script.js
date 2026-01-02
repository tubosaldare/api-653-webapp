// Small accessibility helper: ensure 'Skip to content' focuses main
document.addEventListener('DOMContentLoaded', function () {
  var skip = document.querySelector('.skip-link');
  var main = document.getElementById('main');
  if (skip && main) {
    skip.addEventListener('click', function () {
      // ensure main is focusable and move focus
      main.setAttribute('tabindex', '-1');
      main.focus();
    });
  }
});
