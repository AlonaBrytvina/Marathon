
let filledHearts = document.querySelectorAll('.logo_heart');

let imgHeartUrl = "https://res.cloudinary.com/intellectfox/image/upload/v1629752957/fe/foxgram/posts/like_xw2apm.svg";
let imgFilledHeartUrl = "https://res.cloudinary.com/intellectfox/image/upload/v1629752958/fe/foxgram/posts/like-filled_zurlii.svg";


filledHearts.forEach((iconImgEl) =>{
    iconImgEl.addEventListener('click', (event) => {
    const likesCounter = event.target.parentElement.querySelector('.text_post_likes');
    console.log(event.target.parentElement)
    const counter = +likesCounter.textContent;

        if(event.target.src == imgFilledHeartUrl) {
            event.target.src = imgHeartUrl;
            likesCounter.textContent = counter - 1;
        }else{
            event.target.src = imgFilledHeartUrl;
            likesCounter.textContent = counter + 1;
        }
    });
})


