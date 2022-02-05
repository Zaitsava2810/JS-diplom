// ЗАДАНИЕ 1
// a) Создать свою реализацию функции map для массивов
let arrayMap = [1, 2, 3];
let arrayMapResult = console.log(arrayMap.map((el) => (el += 1)));

// б) Переделайте массив так, чтобы объекты были следующего вида { id: …, title: … }. Использовать функцию map
let newReleases = [
  {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    url: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    url: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
  {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
];
let releasesResult = console.log(
  newReleases.map(({ id, title }) => ({ id, title }))
);

// в) Создать свою реализацию функции filter для массивов
let arrayFilter = [1, 2, 3];
// 1-ый вариант
let arrayFilterResult = arrayFilter.filter((el2) => el2 > 2);
console.log(arrayFilterResult);

// 2-ой вариант
const FindValue = (value) => {
  return value > 2;
};
let arrayFilter2 = [1, 2, 3].filter(FindValue);
console.log(arrayFilter2);

// г) Выведите массив ids для видео у которых рейтинг 5.0. В качестве входных данных
// используйте newReleases из предыдущих заданий.
let ids = newReleases.reduce((item, prev) => {
  if (prev.rating >= 5.0) {
    item.push(prev.id);
  }
  return item;
}, []);
console.log(ids);

// д) Создать свою реализацию функции reduce для массивов
let initialValue = 10;
let arrayReduce = [1, 2, 3].reduce((acum, curr) => {
  return acum + curr;
});
console.log(arrayReduce);

let arrayReduce2 = [1, 2, 3].reduce((acum, curr) => {
  return acum + curr;
}, initialValue);
console.log(arrayReduce2);

// е) С помощью функции reduce получить максимальное значение в массиве
let ratings = [2, 3, 1, 4, 5];
let maxRatings = ratings.reduce((acum, curr) => {
  return Math.max(acum, curr);
});
console.log(maxRatings);

// ж) С помощью функций map, reduce, вывести url у которого самая большая площадь
let boxarts = [
  {
    width: 200,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg",
  },
  {
    width: 150,
    height: 2000,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg",
  },
  {
    width: 300,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg",
  },
  {
    width: 425,
    height: 150,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg",
  },
];

let boxartsReduce = boxarts.reduce((acum, curr) => {
  if (acum.width * acum.height < curr.width * curr.height) {
    acum = curr;
  }
  return acum;
}).url;
console.log(boxartsReduce);

// з) Преобразуйте массив в объект используя функцию reduce. Используйте начальное значение (второй параметр)
let videos = [
  {
    id: 65432445,
    title: "The Chamber",
  },
  {
    id: 675465,
    title: "Fracture",
  },
  {
    id: 70111470,
    title: "Die Hard",
  },
  {
    id: 654356453,
    title: "Bad Boys",
  },
];

let videosObj = videos.reduce((acum, cur) => {
  acum[cur.id] = cur.title;
  return acum;
});
console.log(videosObj);

// ЗАДАНИЕ 2
let Robot = function (name) {
  this.name = name;
};

function add(op1, op2) {
  this.name = this.name || "Human";
  return this.name + " can count to " + (op1 + op2);
}

let voltron = new Robot("Voltron");

// #1 Выведите результат сложения 0 и 1
console.log(add(0, 1));

// #2 Выведи результат сложения Voltron 1 и 2 используя call
console.log(add.call(voltron, 1, 2));

// #3 Выведи результат сложения Voltron 20 и 30 используя apply
console.log(add.apply(voltron, [20, 30]));

// #4 Выведи результат сложения Voltron «drinking» и «beer» используя bind
console.log(add.bind(voltron, "drinking", "beer")());

// #5 Написанный вами код должен вывести console.log имени которое лежит в this.name пятью разными способами
function showName() {
  setTimeout(console.log(this.name), 1000);
}

voltron.bur = function showName() {
  console.log(this.name);
};
voltron.bur();
showName.call(voltron);
showName.apply(voltron);
showName.bind(voltron)();

// ЗАДАНИЕ 3
// А) Создать кнопку по нажатию на которую в консоль выведет фразу ‘Hello
// World’ с задержкой в 5 секунд, при повторном нажатии в течении 5 секунд
// время должно пойти заново
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  setTimeout(() => console.log("Hello World"), 5000);
});

// Б) Создать кнопку по нажатию на которую будет выводить в консоль ‘You
// are welcome! ’ каждые 3 секунды, пока не нажмем на кнопку еще раз
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
  let newBtn;
  if (!newBtn) {
    newBtn = setInterval(() => console.log("You are welcome!"), 3000);
  } else {
    clearInterval(newBtn);
  }
});

// ЗАДАНИЕ 4
// А) Функция должна вывести ‘hi’ через 2 секунды
let delay = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 2000);
});

function logHi() {
  console.log("hi");
}

delay.then(logHi);

// Б) Одна из особенностей Promise, в том что они могут бесконечно
// вызывать .then()
new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(10);
  }, 3000);
  // должно через 3 секунды передать дальше значение - 10
})
  .then((result) => {
    console.log(result);
    return (result += 2);
    // должно вывести в console значение полученное и передать дальше
    // увеличенное на 2
  })
  .then((result) => {
    return new Promise((resolve, reject) => {
      console.log(result);
      setTimeout(() => {
        result += 2;
        resolve(result);
      }, 2000);
    });
    // должно вывести в console значение полученное и передать дальше
    // увеличенное на 2 через 2 секунды
  })
  .then((result) => {
    console.log(result);
    // должно вывести конечный результат
  });
