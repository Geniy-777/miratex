


//console.log(catalog_db[Number($('.catalog__model-build').attr('id'))].get('main-img'));

const catalog = document.querySelectorAll('.catalog__model-build');

$(document).ready(function () {
  for (let index = 0; index < catalog.length; index++) {
    const model_catalog = catalog[index];

    $('html').on('click', '#' + index, function () {
      $.ajax({
        type:'GET',
        url:'catalogItem.php',
        async: false,
        data: {'id':index},
        success: function(html){
          $('.example').html(html);
        }
      })


      /*
      const modelClasses = ['.unedr-main__img-1','.unedr-main__img-2','.unedr-main__img-3','.inside-content__left-img','.inside-content__right-img-1','.inside-content__right-img-2',]; 
      deleteModel(modelClasses);

      const liTagsForRemove = document.querySelectorAll('.inside-content__left-text');

      liTagsForRemove.forEach(li => {
        $(li).remove();
      });
      */
    });

    /*
    $('html').on('click.create', '#' + index, function () {

      $('.example__main-title').text(catalog_db[Number($(model_catalog).attr('id'))].get('title'));
      $('.main-img').attr('src', catalog_db[Number($(model_catalog).attr('id'))].get('main-img'));

      createIfExistModel(model_catalog, 'left-img-1', '.unedr-main__img-1', '.main-content__under-main-left');
      createIfExistModel(model_catalog, 'left-img-2', '.unedr-main__img-2', '.main-content__under-main-left');
      createIfExistModel(model_catalog, 'right-img-1', '.unedr-main__img-3', '.main-content__under-main-right');

      $('.orietation-inside-left-img').after($('<img>',{
        class:'inside-content__left-img',
        alt:'Что-то пошло нетак :(',
        src: catalog_db[Number($(model_catalog).attr('id'))].get('inside-left-img')
      }));

      createIfExistModel(model_catalog, 'inside-right-img-1', '.inside-content__right-img-1', '.inside-content__right-side-content');
      createIfExistModel(model_catalog, 'inside-right-img-2', '.inside-content__right-img-2', '.inside-content__right-side-content');

      

      for (let index = 0; index < catalog_db[Number($(model_catalog).attr('id'))].get('inside-left-text').length; index++) {
        const text = catalog_db[Number($(model_catalog).attr('id'))].get('inside-left-text')[index];

        $('.inside-content__text-list').append($('<li>', {
          'class': 'inside-content__left-text',
          'text': text
        }));
      }
    });
    */
  }

});

$('.example__main-title').text(catalog_db[0].get('title'));
$('.main-img').attr('src', catalog_db[0].get('main-img'));
$('.unedr-main__img-1').attr('src', catalog_db[0].get('left-img-1'));
$('.unedr-main__img-2').attr('src', catalog_db[0].get('left-img-2'));
$('.inside-content__left-img').attr('src', catalog_db[0].get('inside-left-img'));
$('.inside-content__right-img-1').attr('src', catalog_db[0].get('inside-right-img-1'));
$('.inside-content__right-img-2').attr('src', catalog_db[0].get('inside-right-img-2'));

for (let index = 0; index < catalog_db[0].get('inside-left-text').length; index++) {
  const text = catalog_db[0].get('inside-left-text')[index];
  $('.inside-content__text-list').prepend($('<li>', {
    'class': 'inside-content__left-text',
    'text': text
  }));
}

/*
function viewModel(model_catalog, img, class_img, parent_img) {
  (catalog_db[Number($(model_catalog).attr('id'))].get(img) === '')
    ? ($(class_img).remove())
    : console.log('remove worked! Removed:', $(class_img).attr('class')), ($(class_img) .remove(),
      $(parent_img).append($('<img>', {
        'class': class_img,
        'alt': 'Picture',
        'src': catalog_db[Number($(model_catalog).attr('id'))].get(img)
      }))), console.log('append worked!');
}*/

function deleteModel(modelClasses){

  modelClasses.forEach(element => {
    console.log($(element).attr('class'));
    $(element).remove();
  });

}

function createIfExistModel(model_catalog,img,class_img,parent_img){
  (catalog_db[Number($(model_catalog).attr('id'))].get(img) != '')
  ? ($(parent_img).append($('<img>', {
    'class': class_img,
    'alt': 'Picture',
    'src': catalog_db[Number($(model_catalog).attr('id'))].get(img)
  })), console.log('append worked!'))
  : false;
}