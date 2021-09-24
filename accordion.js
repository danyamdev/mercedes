const btns = document.querySelectorAll('.feature__link');
const lists = document.querySelectorAll('.feature-sub');

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    btns.forEach( (btnItem, index) => {

      if (btnItem == btn) {
        btnItem.classList.toggle('feature__link_active');
        lists[index].classList.toggle('hidden');
      } else {
        btnItem.classList.remove('feature__link_active');
        lists[index].classList.add('hidden');
      }

    });
  });
});