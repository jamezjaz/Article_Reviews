/* eslint-disable no-unused-vars, no-use-before-define */

import navbar from './nav';

const reviewArr = [
  {
    id: 1,
    name: 'Susan Smith',
    job: 'Web Developer',
    img:
    'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    text:
    'I\'m baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry',
  },
  {
    id: 2,
    name: 'Anna Johnson',
    job: 'Web Designer',
    img:
    'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
    text:
    'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'Peter Jones',
    job: 'intern',
    img:
    'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    text:
    'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'Bill Anderson',
    job: 'The Boss',
    img:
    'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    text:
    'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
  {
    id: 5,
    name: 'Odufu James Chigozie',
    job: 'Web Developer',
    img:
    'https://user-images.githubusercontent.com/57812000/97366664-b2817180-1875-11eb-9e62-1061bca67ab4.jpg',
    text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam blandit, metus in vehicula faucibus, orci nisi ornare est, id eleifend nisl purus id nibh. Maecenas condimentum vehicula aliquet. Curabitur tincidunt leo pharetra ante dictum, a ultricies diam dapibus.',
  },
];
const reviews = (() => {
  const img = document.querySelector('.image');
  const author = document.querySelector('.author');
  const job = document.querySelector('.job');
  const info = document.querySelector('.info');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  const randomBtn = document.querySelector('.random-btn');

  let currentItem = 0;
  window.addEventListener('DOMContentLoaded', () => {
    person();
  });

  const person = () => {
    const item = reviewArr[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  };

  nextBtn.addEventListener('click', () => {
    currentItem += 1;
    if (currentItem > reviewArr.length - 1) {
      currentItem = 0;
    }
    person();
  });

  prevBtn.addEventListener('click', () => {
    currentItem -= 1;
    if (currentItem < 0) {
      currentItem = reviewArr.length - 1;
    }
    person();
  });

  randomBtn.addEventListener('click', () => {
    currentItem = Math.floor(Math.random() * reviewArr.length);
    person();
  });
})();