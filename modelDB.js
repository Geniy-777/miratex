let catalog_db = [];
let modelHome15 = new Map();
let modelHome30 = new Map();
let modelHomeLux = new Map();
let modelCafeL15 = new Map();
let modelHotelH15 = new Map();
let modelHostelH15 = new Map();
let modelOffice15 = new Map();
let modelOffice30 = new Map();
let modelShop15 = new Map();
let modelSleepBox = new Map();
let modelWC = new Map();


modelHome15.set('title', 'model home 15').set('main-img', 'images/catalog/model-home-15/main-pic.png')
  .set('left-img-1', 'images/catalog/model-home-15/3.png').set('left-img-2', 'images/catalog/model-home-15/2.png')
  .set('right-img-1', 'images/catalog/model-home-15/1.png').set('inside-left-img', 'images/catalog/model-home-15/4.png')
  .set('inside-right-img-1', 'images/catalog/model-home-15/5.png').set('inside-right-img-2', 'images/catalog/model-home-15/6.png')
  .set('inside-right-text', 'Идеальный вариант для жизни. Может быть использован для постоянного проживания, для отдыха на природе, гостевого домика. Способен разместить 2-х человек.')
  .set('inside-left-text', [
    'Изготовлен из одного 20Ft контейнера площадью 15 кв.м;',
    'Имеет полноценное спальное место диван-кровать;',
    'Кухня с индукционной плитой и холодильником;',
    'Душ и туалет;',
    'Телевизор;',
    'Wi-Fi Router;',
    'Теплый пол, обогревательные керамопанели;',
    'Климат-контроль;',
    'Автономное электричество;',
    'Автономная канализация.'
  ]);



modelHome30.set('title', 'model home 30').set('main-img', 'images/catalog/model-home-30/L15.svg')
  .set('left-img-1', '').set('left-img-2', '')
  .set('right-img-1', '').set('inside-left-img', 'images/catalog/model-home-30/L15-1.svg')
  .set('inside-right-img-1', 'images/catalog/model-home-30/otel-8.svg').set('inside-right-img-2', 'images/catalog/model-home-30/F30_home-rzut.svg')
  .set('inside-right-text', 'Идеальный вариант для жизни. Может быть использован для постоянного проживания, отдыха на природе, гостевого домика. Способен разместить 4-х человек.')
  .set('inside-left-text', [
    'Изготовлен из одного  40Ft контейнера площадью 30 кв.м;',
    'Имеет полноценное спальное место (кровать размера king size);',
    'Кухня с индукционной плитой и холодильником;',
    'Душ и туалет;',
    'Телевизор;',
    'Wi-Fi Router;',
    'Теплый пол, обогревательные керамопанели;',
    'Климат-контроль;',
    'Автономное электричество;',
    'Автономная канализация.'
  ]);

modelHomeLux.set('title', 'model home lux').set('main-img', 'images/catalog/model-home-lux/L15.svg')
  .set('left-img-1', 'images/catalog/model-home-lux/L15-1.svg').set('left-img-2', 'images/catalog/model-home-lux/L15-2.svg')
  .set('right-img-1', 'images/catalog/model-home-lux/otel-8.svg').set('inside-left-img', 'images/catalog/model-home-lux/LD18.svg')
  .set('inside-right-img-1', 'images/catalog/model-home-lux/a287a380479203.svg').set('inside-right-img-2', 'images/catalog/model-home-lux/bf76a780479203.svg')
  .set('inside-right-text', 'Идеальный вариант для жизни. Может быть использован для постоянного проживания, отдыха на природе, в качестве гостевого домика. Способен разместить 4-х человек.')
  .set('inside-left-text', [
    'Изготовлен из одного  40Ft контейнера площадью 30 кв.м;',
    'Имеет полноценное спальное место (кровать размера king size);',
    'Кухня с индукционной плитой и холодильником;',
    'Душ и туалет;',
    'Телевизор;',
    'Wi-Fi Router;',
    'Теплый пол, обогревательные керамопанели;',
    'Климат-контроль;',
    'Автономное электричество;',
    'Автономная канализация.'
  ]);

modelCafeL15.set('title', 'model cafe 15').set('main-img', 'images/catalog/model-cafe-l15/L15.svg')
  .set('left-img-1', 'images/catalog/model-cafe-l15/L15-1.svg').set('left-img-2', 'images/catalog/model-cafe-l15/L15-2.svg')
  .set('right-img-1', 'images/catalog/model-cafe-l15/otel-8.svg').set('inside-left-img', 'images/catalog/model-cafe-l15/6e7e5880479203.svg')
  .set('inside-right-img-1', 'images/catalog/model-cafe-l15/a287a380479203.svg').set('inside-right-img-2', 'images/catalog/model-cafe-l15/bf76a780479203.svg')
  .set('inside-right-text', 'Идеальный вариант для бизнеса. Может быть оснащен вендинговым оборудованием (пицемат, автомат по продаже готовых блюд, кофемат, автомат по продаже холодных напитков, автомат по продаже мороженного, автомат по продаже свежевыжатых соков), а также рекламным экраном для привлечения покупателей и как дополнительный инструмент для заработка денег. Способен работать автономно без обслуживающего персонала.')
  .set('inside-left-text', [
    'Изготовлен из одного  20Ft контейнера площадью 15 кв.м;',
    'Теплый пол, обогревательные керамопанели;',
    'Климат-контроль;',
    'Автономное электричество;',
    'Автономная канализация.'
  ]);

modelHotelH15.set('title', 'model hotel h15').set('main-img', 'images/catalog/model-hotel-h15/L15.svg')
  .set('left-img-1', 'images/catalog/model-hotel-h15/L15-1.svg').set('left-img-2', 'images/catalog/model-hotel-h15/L15-2.svg')
  .set('right-img-1', 'images/catalog/model-hotel-h15/otel-8.svg').set('inside-left-img', 'images/catalog/model-hotel-h15/6e7e5880479203.svg')
  .set('inside-right-img-1', 'images/catalog/model-hotel-h15/f5087783642927.5d42a3e16845b.svg').set('inside-right-img-2', '')
  .set('inside-right-text', 'Идеальный вариант для студенческих городков, размещения на концертах, выставках, спортивных соревнованиях, организации мини-отелей на побережье, в горах, организации передвижных городских отелей  и другие варианты размещения. Способен работать автономно без обслуживающего персонала через систему умных замков и приложение.')
  .set('inside-left-text', [
    'Изготовлен из одного  20Ft контейнера площадью 15 кв.м;',
    'Летняя терраса;',
    'Туалет / Душ;',
    'Телевизор;',
    'Wi - Fi;',
    'Теплый пол, обогревательные керамопанели;',
    'Климат-контроль;',
    'Автономное электричество;',
    'Автономная канализация.'
  ]);

modelHostelH15.set('title', 'model hotel h15').set('main-img', 'images/catalog/model-hostel-15/L15.svg')
  .set('left-img-1', '').set('left-img-2', '')
  .set('right-img-1', 'images/catalog/model-hostel-h15/otel-8.svg').set('inside-left-img', 'images/catalog/model-hostel-h15/6e7e5880479203.svg')
  .set('inside-right-img-1', '').set('inside-right-img-2', '')
  .set('inside-right-text', 'Идеальный вариант для студенческих городков, размещения временных рабочих на  фабриках, размещения на концертах, выставках, спортивных соревнованиях, размещения при стихийных бедствиях, организации мини-отелей на побережье, в  горах и другие варианты размещения. Способен работать автономно без обслуживающего персонала через систему умных замков и приложение. ')
  .set('inside-left-text', [
    'Изготовлен из одного  20Ft контейнера площадью 15 кв.м;',
    'Летняя терраса;',
    'Туалет / Душ;',
    'Wi - Fi;',
    'Теплый пол, обогревательные керамопанели;',
    'Климат-контроль;',
    'Автономное электричество;',
    'Автономная канализация.'
  ]);


modelOffice15.set('title', 'model office 15').set('main-img', 'images/catalog/model-office-15/L15.svg')
  .set('left-img-1', '').set('left-img-2', '')
  .set('right-img-1', 'images/catalog/model-office-15/otel-8.svg').set('inside-left-img', 'images/catalog/model-office-15/6e7e5880479203.svg')
  .set('inside-right-img-1', '').set('inside-right-img-2', '')
  .set('inside-right-text', 'Идеальный вариант для передвижного автономного офиса. Способен работать автономно без обслуживающего персонала через систему умных замков и приложение.')
  .set('inside-left-text', [
    'Изготовлен из одного  20Ft контейнера площадью 15 кв.м;',
    'Летняя терраса;',
    'Туалет;',
    'Wi - Fi;',
    'Теплый пол, обогревательные керамопанели;',
    'Климат-контроль;',
    'Автономное электричество;',
  ]);

modelOffice30.set('title', 'model office 30').set('main-img', 'images/catalog/model-office-30/L15.svg')
  .set('left-img-1', '').set('left-img-2', '')
  .set('right-img-1', 'images/catalog/model-office-30/otel-8.svg').set('inside-left-img', 'images/catalog/model-office-30/fe6e04c27c310cc1a4ca8f83aec3272e 1.svg')
  .set('inside-right-img-1', '').set('inside-right-img-2', '')
  .set('inside-right-text', 'Идеальный вариант для передвижного автономного офиса. Способен работать автономно без обслуживающего персонала через систему умных замков и приложение.')
  .set('inside-left-text', [
    'Изготовлен из одного  40Ft контейнера площадью 30 кв.м;',
    'Туалет;',
    'Wi - Fi;',
    'Теплый пол, обогревательные керамопанели;',
    'Климат-контроль;',
    'Автономное электричество;',
  ]);

modelShop15.set('title', 'model shop 15').set('main-img', 'images/catalog/model-shop-15/L15.svg')
  .set('left-img-1', '').set('left-img-2', '')
  .set('right-img-1', 'images/catalog/model-shop-15/otel-8.svg').set('inside-left-img', 'images/catalog/model-shop-15/conteiner_galtrade_shop2.svg')
  .set('inside-right-img-1', '').set('inside-right-img-2', 'images/catalog/model-shop-15/Boxpark-Shoreditch3.svg')
  .set('inside-right-text', 'Идеальный вариант для передвижного автономного офиса. Способен работать автономно без обслуживающего персонала через систему умных замков и приложение.')
  .set('inside-left-text', [
    'Изготовлен из одного  40Ft контейнера площадью 30 кв.м;',
    'Туалет;',
    'Wi - Fi;',
    'Теплый пол, обогревательные керамопанели;',
    'Климат-контроль;',
    'Автономное электричество;',
  ]);

modelSleepBox.set('title', 'model sleep box').set('main-img', 'images/catalog/model-sleep-box/L15.svg')
  .set('left-img-1', '').set('left-img-2', '')
  .set('right-img-1', 'images/catalog/model-sleep-box/H5197617fc5ac4fbeb4f5de2320fcd889P.svg').set('inside-left-img', '')
  .set('inside-right-img-1', '').set('inside-right-img-2', '')
  .set('inside-right-text', 'Cистема капсул для быстрой организации хостела в любом помещении.')
  .set('inside-left-text', []);

modelWC.set('title', 'model wc').set('main-img', 'images/catalog/model-wc/L15.svg')
  .set('left-img-1', 'images/catalog/model-wc/ela-de-sanitary-container-3000mm-03.svg').set('left-img-2', '')
  .set('right-img-1', 'images/catalog/model-wc/right-img.svg').set('inside-left-img', '')
  .set('inside-right-img-1', 'images/catalog/model-wc/ela-de-sanitary-container-3000mm-05.svg').set('inside-right-img-2', '')
  .set('inside-right-text', '')
  .set('inside-left-text', [
    'Санитарный узел для автономной работы;',
    'Оснащён автономным электричеством;',
    'Подогреваемый пол;',
    'Возможно оснащение душевыми кабинами.'
  ]);


catalog_db.push(modelHome15);
catalog_db.push(modelHome30);
catalog_db.push(modelHomeLux);
catalog_db.push(modelCafeL15);
catalog_db.push(modelHostelH15);
catalog_db.push(modelHotelH15);
catalog_db.push(modelOffice15);
catalog_db.push(modelOffice30);
catalog_db.push(modelShop15);
catalog_db.push(modelSleepBox);
catalog_db.push(modelWC);