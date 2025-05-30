document.addEventListener('DOMContentLoaded', function () {
  const checkbox = document.getElementById('menu-toggle');
  const icon = document.getElementById('menu-icon');

  checkbox.addEventListener('change', function () {
    icon.innerHTML = this.checked ? '\u2715' : '\u2630'; // ✖ or ☰
  });
});
