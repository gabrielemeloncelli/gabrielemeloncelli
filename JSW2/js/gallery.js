/*Name this external file gallery.js*/

// Declare the variables that are set once when the page is loaded
let imgDiv;
let originalContent;

// I put a bit of unobtrusive code to get the image div element once
// but I need to wait after the document has completely loaded the DOM

addEventListener("DOMContentLoaded", (event) => {
    imgDiv = document.getElementById('image');
    originalContent = imgDiv.innerHTML;
}
);

function upDate(previewPic){
    
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */

       // Use a class to switch the background color
       // See the .image_full selector in the CSS file
       imgDiv.className =  'image_full';
       // Change the text / HTML content    
       imgDiv.innerHTML = previewPic.alt;
       // Change the bacground image
       imgDiv.style.backgroundImage = "url('" + previewPic.src + "')";
        
       }
   
       function unDo(){
        /* In this function you should 
       1) Update the url for the background image of the div with the id = "image" 
       back to the orginal-image.  You can use the css code to see what that original URL was
       
       2) Change the text  of the div with the id = "image" 
       back to the original text.  You can use the html code to see what that original text was
       */
       // Use a class to switch the background color
       // See the .image_empty selector in the CSS file
       imgDiv.className =  'image_empty';
       // Change the text / HTML content    
       imgDiv.innerHTML = originalContent;
       // Change the bacground image
       imgDiv.style.backgroundImage = "url('')";
           
       }
