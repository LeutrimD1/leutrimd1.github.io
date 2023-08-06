let mediumQualityImage = new Image();
let highQualityImage = new Image();
let placeholderImage = null;

document.addEventListener('DOMContentLoaded', function() {
    placeholderImage = document.getElementById("10KB");
    mediumQualityImage.src = "./Photos/400KB-Gray-Head-Shot.jpg";
    highQualityImage.src = "./Photos/2MB-Head-Shot.jpg";
    mediumQualityImage.onload = function () {
      placeholderImage.src = mediumQualityImage.src;
      highQualityImage.onload = function () {
        placeholderImage.src = highQualityImage.src;
      }
    };
  });
