 /*let image1 = "images/beach1.jpg";
let image2 = "images/beach2.jpg";
let image3 = "images/beach3.jpg";
let image4 = "images/beach4.jpg";*/

// instead of creating a variable to hold each image location, let's use an array which will hold as many image locations as we want
// one line of code, split onto multiple lines so it's easier to read
let arrImages = [
    "images/beach1.jpg",
    "images/beach2.jpg",
    "images/beach3.jpg",
    "images/beach4.jpg"
];

// this variable will keep track of the current image that we are showing
let currentImageIndex = 0;

// function to show the image on the page
function showImage(index){
    // set up a nickname/shortcut to the img tag on the page
    let imageSlide = document.getElementById("imgSlide");

    // set the image source (image file name) to the location of the image from the array
    imageSlide.src = arrImages[index];
}

// move to the previous slide
function prevSlide(){
    // subtract 1 from currentImageIndex 
    // equivalent to currentImageIndex = currentImageIndex - 1
    currentImageIndex--;

    // check to see if the index is now below 0
    if (currentImageIndex < 0){
        //option 1 - stay on last image
        //currentImageIndex = 0;

        //option 2 - go to the last image; loop around
        // find the last index in the array by subtracting 1 from the length
        currentImageIndex = arrImages.length - 1;
    }

    // show the previous image
    showImage(currentImageIndex);
}

// move to the next slide
function nextSlide(){
    // add 1 to currentImageIndex 
    // equivalent to currentImageIndex = currentImageIndex + 1
    currentImageIndex++;

    // check to see if the index is now greater than or equal to the length of the array
    if (currentImageIndex >= arrImages.length){
        //option 1 - stay on last image
        //currentImageIndex = arrImages.length - 1;

        //option 2 - loop around to the beginning of the slideshow
        currentImageIndex = 0;
    }

    // show the next image
    showImage(currentImageIndex);
}

showImage(currentImageIndex);