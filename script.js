const generateForm = document.querySelector('.image_generator_form');
const imageGallery = document.querySelector('.image_gallery');
const OPENAI_API_KEY = 'OPENAI_API_KEY'; // Your OpenAI API key here
let isImageGenerating = false;

// function that updates the image gallery with the generated images
const updateImageGallery = (imagesDataArray) => {
    imagesDataArray.forEach((imageData, index) => {
        const imageCard = imageGallery.querySelectorAll(".image_card")[index];
        const imgElement = imageCard.querySelector("img");