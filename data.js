

// карточки сгруппированы по темам картинок
// в наборах карточки указаны в одном экземпляре



const images = [{
  'id': 'house',
  'url': 'img/cards-1.jpg',
  'description': 'Haus',
}, {
  'id': 'flowers',
  'url': 'img/cards-2.jpg',
  'description': 'Blumen',
}, {
  'id': 'train',
  'url': 'img/cards-3.jpg',
  'description': 'Zug',
}, {
  'id': 'Sun',
  'url': 'img/cards-4.jpg',
  'description': 'Sonne',
}, {
  'id': 'kettle',
  'url': 'img/cards-5.jpg',
  'description': 'Wasserkocher',
}, {
  'id': 'headphones',
  'url': 'img/cards-6.jpg',
  'description': 'Kopfhörer',
}, {
  'id': 'house1',
  'url': 'img/cards-1.jpg',
  'description': 'Haus',
}, {
  'id': 'flowers1',
  'url': 'img/cards-2.jpg',
  'description': 'Blumen',
}, {
  'id': 'train1',
  'url': 'img/cards-3.jpg',
  'description': 'Zug',
}, {
  'id': 'Sun1',
  'url': 'img/cards-4.jpg',
  'description': 'Sonne',
}, {
  'id': 'kettle1',
  'url': 'img/cards-5.jpg',
  'description': 'Wasserkocher',
}, {
  'id': 'headphones1',
  'url': 'img/cards-6.jpg',  
  'description': 'Kopfhörer',
}];


const Images = {
 images
};

//Значение RANDOMIZED, а в функцию - условие.
//Теперь для отладки приложения мы сможем отключать перемешивание слов в наборе.

const getImages = (type) =>  
 RANDOMIZED ? [...Images[type]].sort(() => 0.5 - Math.random()) : [...Images[type]];

 


const results = [
  { name: 'Аня', stepsCount: 13 },
  { name: 'Вася', stepsCount: 8 },
  { name: 'Петя', stepsCount: 17 }
];







