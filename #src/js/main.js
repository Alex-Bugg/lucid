const btnWrap = document.querySelector('.btn_slider_wrap');
const btnClass = 'btn_slider';
let outerWidth = () => {
  if(window.outerWidth >= 700) {
    return 2
  } else {
    return 1
  }
}

let funcWidth = () => {
  if(window.outerWidth >= 700) {
    return 1
  } else {
    return 0
  }
}

const siema = new Siema({
  perPage: outerWidth(),
  onChange: () => {
    const btns = document.querySelectorAll('.' + btnClass);
    btns.forEach(btn => {
      if(siema.currentSlide === +btn.getAttribute('numb')) {
        btns.forEach(b => {
          b.classList.remove('active')
        })
        btn.classList.add('active')
      }
    })
  },
});


Siema.prototype.addPagination = function() {
  for (let i = 0; i < this.innerElements.length - funcWidth(); i++) {
    const btn = document.createElement('button');
    btn.classList.add(btnClass)
    btn.textContent = i;
    btn.setAttribute('numb', i)
    btn.addEventListener('click', () => this.goTo(i));
    btnWrap.appendChild(btn);
  }
  document.querySelector('.' + btnClass).classList.add('active')
}

siema.addPagination();

const menu = document.querySelector('.mobile_btn');
  menu.addEventListener('click', () => {
    menu.classList.toggle('mob_active')
  })