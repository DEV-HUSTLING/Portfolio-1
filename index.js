imgCounter = 1
const images = ['img1', 'img2', 'img3'];

setInterval(function () { 
    images.forEach(img => {
        document.querySelector(`.${img}`).style.display = "none";
    });
    profileImg = document.querySelector(`.${images[imgCounter-1]}`)
    profileImg.style.display = "block"
    imgCounter++
    console.log(profileImg.className)

    if(imgCounter > images.length){
        imgCounter = 1
    }
    
}, 1000);
