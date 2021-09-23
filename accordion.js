const btns = document.querySelectorAll('.feature__link');
const lists = document.querySelectorAll('.feature-sub');

btns.forEach( (btn, index) => {
  btn.addEventListener('click', () => {
    
    if (btn.classList.contains('feature__link_active')) {
      btn.classList.remove('feature__link_active');
      lists[index].classList.add('hidden');
    } else {
      btns.forEach(btn => btn.classList.remove('feature__link_active'));
      lists.forEach(list => list.classList.add('hidden'));

      btn.classList.add('feature__link_active');
      lists[index].classList.remove('hidden');
    }

  });
});