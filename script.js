const memeArray = [
  "https://i.imgur.com/bSi4xLb.png",
  "https://i.imgur.com/6y0G7N0.png",
  "https://i.imgur.com/LXnRao1.png",
  "https://i.imgur.com/Qqoxh1N.png"
];
const captionsArray = [
  "When you code all night 😅",
  "Debugging be like 🕵️‍♂️",
  "Coding: Because adulting is hard 💻",
  "Nothing works, but it's okay! 🤷‍♀️",
  "Just one more bug to fix... or maybe ten 🤭"
];
const memeImage = document.getElementById("random-meme");       
const captionText = document.getElementById("random-caption"); 
const generateButton = document.getElementById("generator-button"); 
generateButton.addEventListener("click", () => {
  

  const randomMemeIndex = Math.floor(Math.random() * memeArray.length);
  const randomCaptionIndex = Math.floor(Math.random() * captionsArray.length);
  
  
  memeImage.src = memeArray[randomMemeIndex];
  
 
  captionText.innerText = captionsArray[randomCaptionIndex];
});