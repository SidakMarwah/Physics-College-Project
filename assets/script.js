const button = document.querySelector('[data-collapse-toggle="navbar-default"]');
const menu = document.querySelector('#navbar-default');

button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  const expanded = button.getAttribute('aria-expanded') === 'true' || false;
  button.setAttribute('aria-expanded', !expanded);
});
