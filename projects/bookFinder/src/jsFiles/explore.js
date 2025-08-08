//navbar mobile view
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');

    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
});

const results = document.getElementById("booksResult")
const message =  document.getElementById("error")
