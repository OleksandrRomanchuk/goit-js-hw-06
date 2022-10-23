const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// ---------------
// Good day Alyona! I remember that the <li> is not an interactive element. Sorry!
// ---------------

const gallery = document.querySelector(".gallery");

const galleryMarkup = images
  .map(({ url, alt }) => {
    return `<li class='gallery__item'><img class='gallery__image' src="${url}" alt="${alt}"></li>`;
  })
  .join("");

gallery.insertAdjacentHTML("beforeend", galleryMarkup);

// const galleryMarkup = images
//   .map(({ url, alt }) => {
//     return `<li><img src="${url}" alt="${alt}"></li>`;
//   })
//   .join("");

// gallery.insertAdjacentHTML("beforeend", galleryMarkup);

// const items = document.querySelectorAll("li");
// items.forEach((item) => item.classList.add("gallery__item"));

// const itemsImage = document.querySelectorAll("img");
// itemsImage.forEach((img) => item.classList.add("gallery__image"));
