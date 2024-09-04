const img = ["bau.png", "cua.png", "tom.png", "ca.png", "huou.png", "ga.png"];
const kq = document.querySelectorAll(".kq");
const quay = document.getElementById("quay");
const reset = document.getElementById("reset");
const images = document.querySelectorAll(".select .image img");
const numbers = document.querySelectorAll(".number");
let selectedImages = [];
let totalPoints = 0;
let maxPoints = 3;

reset.addEventListener("click", () => {
  numbers.forEach((number) => {
    number.textContent = 0;
  });
  totalPoints = 0;
  selectedImages = [];
});
images.forEach((image, index) => {
  image.addEventListener("click", function () {
    const number = numbers[index];
    const currentPoints = parseInt(number.textContent);

    if (totalPoints < maxPoints) {
      number.textContent = currentPoints + 1;
      totalPoints++;
      selectedImages.push(img[index]);
    }
  });
});

function turn() {
  const result = [];
  quay.disabled = true;
  quay.classList.add("disabled");
  reset.disabled = true;
  reset.classList.add("disabled");
  const interval = setInterval(() => {
    kq.forEach((kq) => {
      const randomImg = img[Math.floor(Math.random() * img.length)];
      kq.src = randomImg;
    });
  }, 30);

  setTimeout(() => {
    clearInterval(interval);
    kq.forEach((kq) => {
      const randomImg = img[Math.floor(Math.random() * img.length)];
      kq.src = randomImg;
      result.push(randomImg);
      quay.disabled = false;
      quay.classList.remove("disabled");
      reset.disabled = false;
      reset.classList.remove("disabled");
    });
    
    const resultSort = result.sort();
    const selectedImagesSort = selectedImages.sort();
    if (resultSort[0] === selectedImagesSort[0]&&resultSort[1] === selectedImagesSort[1]&&resultSort[2] === selectedImagesSort[2]) {
      console.log("Bạn đã đoán đúng");
    } else {
      console.log("Bạn đã đoán sai");
    }
  }, 3000);
}
