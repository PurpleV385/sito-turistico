
document.addEventListener('DOMContentLoaded', (event) => {

  async function fetchFilenames() {
    try {
      const response = await fetch('http://localhost:3000/get-filenames');
      const data = await response.json();
      const fileList = data.files;
      const imageContainer = document.querySelector('.image-container');
      // console.log(data.files.length);
      for(let i = 0; i < data.files.length; i++){
        // console.log(data.files[i]);
        const image = document.createElement('img');
        image.src = `../Immagini sito/${data.files[i]}`;
        imageContainer.appendChild(image);
      }
    } catch (error) {
      console.error('Error fetching filenames:', error);
    }
  }

  fetchFilenames();
});