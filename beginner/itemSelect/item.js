const items = document.querySelector('#list')

items.addEventListener('click', (event) => {
   if (event.target.tagName === 'LI') {
      alert(event.target.textContent + ' Clicked')
   }
});

document.getElementById('list').insertAdjacentHTML('beforeend', '<li>Item 3</li>')
document.getElementById('list').insertAdjacentHTML('beforeend', '<li>Item 4</li>')
document.getElementById('list').insertAdjacentHTML('beforeend', '<li>Item 5</li>')