
document.addEventListener('DOMContentLoaded', (event) => {

  async function fetchFilenames() {
    try {
      const response = await fetch('http://localhost:3000/get-filenames');
      const data = await response.json();
      const fileList = data.files;
      const imageContainer = document.querySelector('.image-container');
      console.log(data.files.length);
      for(let i = 0; i < data.files.length; i++){
        console.log(data.files[i]);
        const image = document.createElement('img');
        image.src = `../Immagini sito/${data.files[i]}`;
        imageContainer.appendChild(image);
      }
      // console.log(data.files[0]);

      // data.files.forEach((index, file) => {
      //   // console.log('file');
      //   // console.log(file);
        
      // });
    } catch (error) {
      console.error('Error fetching filenames:', error);
    }
  }

  
  fetchFilenames();
  // document.querySelector('#prova').addEventListener('click', () => { //esegue il codice ogni volta che si clicca il bottone

  // });
});