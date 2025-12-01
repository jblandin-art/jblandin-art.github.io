const frontImg = document.querySelector(".front");
const backImg = document.querySelector(".back");

// List of images to cycle
const images = [
"https://img.freepik.com/premium-photo/car-detailing-with-orbital-polisher-auto-repair-shop_875825-47814.jpg",
  "https://www.pressurewashersdirect.com/images/stories/submitted/social_img_166_76af37582f7638d1aff549051bc452fb.jpg",
  "https://colonialcw.com/wp-content/uploads/2021/06/stock-photo-car-detailing-series-cleaning-car-interior-482645425.jpg",
  "https://www.youfixcars.com/wp-content/uploads/2017/10/car-detailing.jpg"
];

let current = 0;
let next = 1;

// Preload the first back image to prevent flicker
backImg.src = images[next];

// Small delay to ensure first image is loaded
setTimeout(() => {
  const fadeImages = () => {
    // Set back image src to next image
    backImg.src = images[next];

    // Fade in back image
    backImg.style.opacity = 1;

    // Fade out front image
    frontImg.style.opacity = 0;

    // After fade transition, swap roles
    setTimeout(() => {
      frontImg.src = backImg.src;
      frontImg.style.opacity = 1;  // reset front opacity
      backImg.style.opacity = 0;   // reset back opacity

      current = next;
      next = (next + 1) % images.length;
    }, 500); // match CSS transition duration
  };

  // Start cycling images every 3 seconds
  setInterval(fadeImages, 3000);
}, 50); // small delay to let first back image load
