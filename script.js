let popupBg = document.querySelector('.popup__bg');
let popup = document.querySelector('.popup');
let openPopupButtons = document.querySelectorAll('.open-popup');
let closePopupButton = document.querySelector('.close-popup');

openPopupButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    popupBg.classList.add('active');
    popup.classList.add('active');
    $('body').css('overflow', 'hidden');
  })
});

closePopupButton.addEventListener('click', () => {
  popupBg.classList.remove('active');
  popup.classList.remove('active');
  $('body').css('overflow', 'auto')
});

$('.button-share-link').on('click', function (e) {
  try {
    e.preventDefault();
    var $copyText = $('.copy-input');
    $copyText.select();
    document.execCommand("copy");
    alert('Скопировано!');
  }
  catch {
    alert('Неа');
  }

});
