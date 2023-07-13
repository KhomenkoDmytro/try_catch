const books = [
  {
    author: 'Люсі Фолі',
    name: 'Список запрошених',
    price: 70,
  },
  {
    author: 'Сюзанна Кларк',
    name: 'Джонатан Стрейндж і м-р Норрелл',
  },
  {
    name: 'Дизайн. Книга для недизайнерів.',
    price: 70,
  },
  {
    author: 'Алан Мур',
    name: 'Неономікон',
    price: 70,
  },
  {
    author: 'Террі Пратчетт',
    name: 'Рухомі картинки',
    price: 40,
  },
  {
    author: 'Анґус Гайленд',
    name: 'Коти в мистецтві',
  },
];

const rootElement = document.querySelector('#root');
const unorderedList = document.createElement('ul');

rootElement.appendChild(unorderedList);

class MissingPropertyError extends Error {
  constructor(propertyName) {
    super(`Відсутня властивість ${propertyName}`);
  }
}

for (book of books) {
  const nameProp = `name`;
  const authorProp = `author`;
  const priceProp = `price`;
  try {
    if (!book[nameProp]) {
      throw new MissingPropertyError(nameProp);
    }
    if (!book[authorProp]) {
      throw new MissingPropertyError(authorProp);
    }
    if (!book[priceProp]) {
      throw new MissingPropertyError(priceProp);
    }
    const li = document.createElement('li');
    li.innerHTML = `"${book.name}", ${book.author}, ${book.price} грн`;
    unorderedList.appendChild(li);
  } catch (error) {
    console.log(error.message);
  }
}
