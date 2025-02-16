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

const li = document.querySelector(".gallery");
const album = images
  .map(
    ({ url, alt }) =>
      `<li style="list-style-type: none; margin: 50px"><img src="${url}" alt="${alt}" width="30%" height="30%" style="display: flex; align-items:center; border-width: 2px; border-style: dashed; border-color: blueviolet; border-radius: 50%; "></li>`
  )
  .join("");
li.insertAdjacentHTML("beforeend", album);
