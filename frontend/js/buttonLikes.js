// BTN - 1

const likeBtn = document.getElementById('heart');
const numberOfLikesElement = document.getElementById('number-of-likesFirst');

let numberOfLikes = Number.parseInt(numberOfLikesElement.textContent, 10);
let isLiked = false;

// Functions

const likeClick = () => {
  if (!isLiked) {
    likeBtn.classList.add('isLiked');
    numberOfLikes++;
    numberOfLikesElement.textContent = numberOfLikes;
    isLiked = !isLiked;
  } else {
    likeBtn.classList.remove('isLiked');
    numberOfLikes--;
    numberOfLikesElement.textContent = numberOfLikes;
    isLiked = !isLiked;
  }
};

// Event Listeners

likeBtn.addEventListener('click', likeClick);

// BTN - 2

const likeBtn2 = document.getElementById('heart2');
const numberOfLikesElement2 = document.getElementById('number-of-likesSecond');

let numberOfLikes2 = Number.parseInt(numberOfLikesElement2.textContent, 10);
let isLiked2 = false;

// Functions

const likeClick2 = () => {
  if (!isLiked2) {
    likeBtn2.classList.add('isLiked2');
    numberOfLikes2++;
    numberOfLikesElement2.textContent = numberOfLikes2;
    isLiked2 = !isLiked2;
  } else {
    likeBtn2.classList.remove('isLiked2');
    numberOfLikes2--;
    numberOfLikesElement2.textContent = numberOfLikes2;
    isLiked2 = !isLiked2;
  }
};

// Event Listeners

likeBtn2.addEventListener('click', likeClick2);

