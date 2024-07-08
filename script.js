const generateForm = document.querySelector('.image_generator_form');
const imageGallery = document.querySelector('.image_gallery');
const OPENAI_API_KEY = 'OPENAI_API_KEY'; // Your OpenAI API key here
let isImageGenerating = false;

// function that updates the image gallery with the generated images
const updateImageGallery = (imagesDataArray) => {
    imagesDataArray.forEach((imageData, index) => {
        const imageCard = imageGallery.querySelectorAll(".image_card")[index];
        const imgElement = imageCard.querySelector("img");
         // Set the image source to the AI-generated image data
         const aiGeneratedImg = `data:image/png;base64,${imageData.b64_json}`;
         imgElement.src = aiGeneratedImg;
 
         imgElement.onload = () => {
             imageCard.classList.remove('loading_img');
         };
     });
 };
 
 // function that generates AI images based on user input
 const generateAIImages = async (userPrompt, userImgQuantity) => {
     try {
         const response = await fetch(`https://api.openai.com/v1/images/generations`, {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json',
                 'Authorization': `Bearer ${OPENAI_API_KEY}`
             },
             body: JSON.stringify({
                 prompt: userPrompt,
                 max_images: parseInt(userImgQuantity, 10),
                 size: "512x512",
                 response_format: "b64_json"
             })
         });
 