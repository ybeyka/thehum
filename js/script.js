/* Year copyright in footer */
let date = new Date();
document.querySelector('.copyright span').textContent = date.getFullYear();

/* Link Template preventDefault */
let linkTemplate = document.querySelectorAll('a[href="#"]');
for (let i = 0; i < linkTemplate.length; i++) {
  linkTemplate[i].onclick = function (e) {
    e.preventDefault();
  }
}

/* Smooth scrolling to the anchor */
document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener('click', function (e) {
    e.preventDefault();

    let href = this.getAttribute('href').substring(1);
    const scrollTarget = document.getElementById(href),
          topOffset = 70,
          elementPosition = scrollTarget.getBoundingClientRect().top,
          offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    });
  });
});

/* Header sticky */
let element = document.querySelector('header');
window.addEventListener('scroll', function () {
  if (window.scrollY > 0) {
    element.classList.add("header__sticky");
  } else {
    element.classList.remove("header__sticky");
  }
});

/* ButtonOnClick Our Services */
let buttonsServices = document.querySelectorAll('.our_services nav li'),
    itemServices = document.querySelectorAll('.our_services .item');
for (let i = 0; i < buttonsServices.length; i++) {
  buttonsServices[i].onclick = function () {
    for (let i = 0; i < buttonsServices.length; i++) {
      buttonsServices[i].classList.remove('active');
      itemServices[i].classList.remove('item__active');
    }
    buttonsServices[i].classList.add('active');
    itemServices[i].classList.add('item__active');
  }
}

/* ButtonOnClick Our Work */
let buttonsWork = document.querySelectorAll('.our_work nav li');
for (let i = 0; i < buttonsWork.length; i++) {
  buttonsWork[i].onclick = function () {
    for (let i = 0; i < buttonsWork.length; i++) {
      buttonsWork[i].classList.remove('active');
    }
    buttonsWork[i].classList.add('active');
  }
}

/* Filter Our Work */
let btnAll = $('.our_work nav li'),
    filterAll = $('#filterAll'),
    filterGraphicDesign = $('#filterGraphicDesign'),
    filterWebDesign = $('#filterWebDesign'),
    filterLandingPages = $('#filterLandingPages'),
    filterWordPress = $('#filterWordPress'),
    imgAll = $('.our_work .items .item');

$(filterAll).on('click', imgAll, function () {
  $(imgAll).each(function (index) {
    $(this).addClass('item__active');
  });
});

filterWorks(filterGraphicDesign, 'filterGraphicDesign');
filterWorks(filterWebDesign, 'filterWebDesign');
filterWorks(filterLandingPages, 'filterLandingPages');
filterWorks(filterWordPress, 'filterWordPress');

function filterWorks (buttonName, imgName) {
  $(buttonName).on('click', function () {
    $(btnAll).each(function (index) {
      $(this).removeClass('active');
    });
    $(this).addClass('active');

    $(imgAll).each(function (index) {
      $(this).removeClass('item__active');
      if ($(this).hasClass(imgName)) {
        $(this).addClass('item__active');
      }
    });
  });
}

/* Add images to Our work */
let btnAllMoreWork = $('.our_work .btn a'),
    numberClickWork = 0,
    imgNumber = 13,
    classImageWork = ['filterGraphicDesign', 'filterWebDesign', 'filterLandingPages', 'filterWordPress'],
    titleImageWork = {
      filterGraphicDesign: 'Graphic Design',
      filterWebDesign: 'Web Design',
      filterLandingPages: 'Landing Pages',
      filterWordPress: 'WordPress',
    };

$(btnAllMoreWork).on('click', function () {
  $(this).addClass('download');
  if (numberClickWork < 1) {
    setTimeout(function(){
      $(btnAllMoreWork).removeClass('download');
    },2000);
  } else {
    setTimeout(function(){
      $('.our_work .btn').addClass('hidden');
      $(btnAllMoreWork).removeClass('download');
    },2000);
  }
  for (let i = imgNumber; i < imgNumber + 12; i++) {
    setTimeout(function(){
      let className = classImageWork[getRandomInt(4)];
      let title = titleImageWork[className];
      $('.our_work .items').append(
          `<div class="item item__active ${className}">` +
            `<img src="./img/our-work/image-our-work-${i}.jpg" alt="Image Our Work">` +
            '<div class="info">' +
              '<div class="icons">' +
                '<a href="#">' +
                  '<svg class="icon"><use xlink:href="./img/sprite.svg#iconLink"></use></svg>' +
                '</a>' +
                '<a href="#">' +
                  '<svg class="icon"><use xlink:href="./img/sprite.svg#iconStop"></use></svg>' +
                '</a>' +
              '</div>' +
              '<h3>Creative design</h3>' +
              `<p>${title}</p>` +
            '</div>' +
          '</div>'
      );
      imgAll = $('.our_work .items .item');
    },2000);

  }
  numberClickWork++;
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

/* Slider Reviews */
let reviewsDots = new Swiper(".reviews_dots", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
let reviewsSlider = new Swiper(".reviews_slider", {
  loop: true,
  spaceBetween: 10,
  thumbs: {
    swiper: reviewsDots,
  },
});
