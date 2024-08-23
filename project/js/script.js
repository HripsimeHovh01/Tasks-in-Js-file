
"use strict";

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// Задания на урок:

// 1) Удалить все рекламные блоки со страницы (правая часть сайта)

const promo = document.querySelectorAll(".promo__adv img");

promo.forEach(item => item.remove());


// 2) Изменить жанр фильма, поменять "комедия" на "драма"

const genre = document.querySelector(".promo__genre");

genre.textContent = "драма";

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS

const bg = document.querySelector(".promo__bg");
bg.style.backgroundImage = "url(img/bg.jpg)";

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту 

// 5) Добавить нумерацию выведенных фильмов */

const movieList = document.querySelector(".promo__interactive-list");
movieDB.movies.sort().forEach((movie, index) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">
    ${index + 1}.
    ${movie}
    <div class="delete"></div>
    </li> 
    `;
});







