var button = document.querySelector('#button');
var menu = document.querySelector('#menu');


button.addEventListener('click', () => {
  if (menu.classList.contains('hidden')) {
      menu.classList.remove('hidden');
  } else {
      menu.classList.add('hidden');
  }

})