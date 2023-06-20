function toggle_theme() {
  document.body.classList.toggle('dark');
}

const text = document.querySelector('textarea');
const counter = document.querySelector('#counter');

text.addEventListener('input', function () {
  const maxlength = text.getAttribute('maxlength');
  const remaining = maxlength - text.value.length;
  counter.textContent = remaining;
});
