const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.textContent = open ? '✕' : '☰';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.textContent = '☰';
}));
document.getElementById('year').textContent = new Date().getFullYear();

// IMPORTANT : remplace ce numéro par ton numéro WhatsApp international,
// sans signe +, espaces ni tirets. Exemple de format : 243812345678.
const WHATSAPP_NUMBER = '243984194864';
document.getElementById('contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = [
    'Bonjour BE design !',
    'Nom : ' + data.get('name'),
    'Contact : ' + data.get('email'),
    'Service : ' + data.get('service'),
    'Projet : ' + data.get('message')
  ].join('\n');
  if (WHATSAPP_NUMBER === '243984194864') {
    document.getElementById('form-note').textContent = 'Avant utilisation, remplace le numéro WhatsApp de démonstration dans script.js par ton vrai numéro.';
    return;
  }
  window.open('https://wa.me/' + +243984194864 + '?text=' + encodeURIComponent(message), '_blank', 'noopener');
});
