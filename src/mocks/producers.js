import green from '../assets/produtores/green.png';
import grow from '../assets/produtores/grow.png';
import jennyJack from '../assets/produtores/jenny-jack.png';
import potager from '../assets/produtores/potager.png';
import salad from '../assets/produtores/salad.png';

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const producers = {
  title: 'Produtores',
  list: [
    {
      name: 'Green',
      image: green,
      distance: randomNumber(1, 500),
      stars: randomNumber(1, 5),
    },

    {
      name: 'Grow',
      image: grow,
      distance: randomNumber(1, 500),
      stars: randomNumber(1, 5),
    },

    {
      name: 'Jeny-Jack',
      image: jennyJack,
      distance: randomNumber(1, 500),
      stars: randomNumber(1, 5),
    },
    {
      name: 'Potager',
      image: potager,
      distance: randomNumber(1, 500),
      stars: randomNumber(1, 5),
    },
    {
      name: 'Salad',
      image: salad,
      distance: randomNumber(1, 500),
      stars: randomNumber(1, 5),
    },
  ],
};

export default producers;
