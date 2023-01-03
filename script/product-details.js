let descriptionBtn = document.querySelector("#descriptionBtn");
let descriptionBox = document.querySelector("#descriptionBox");
let isShow = false;

descriptionBtn.addEventListener("click", function () {
    if (isShow) {
        descriptionBox.style.display = "none"
        isShow = false
    } else {
        descriptionBox.style.display = "block";
        isShow = true;
    }
})
let specificationBtn = document.querySelector("#specificationBtn");
let specificationBox = document.querySelector("#product-specification-box");

specificationBtn.addEventListener("click", function () {
    if (isShow) {
        specificationBox.style.display = "none"
        isShow = false
    } else {
        specificationBox.style.display = "block";
        isShow = true;
    }
})

let commentBtn = document.querySelector("#commentBtn");
let commentBox = document.querySelector("#comment-box");

commentBtn.addEventListener("click", function () {
    if (isShow) {
        commentBox.style.display = "none"
        isShow = false
    } else {
        commentBox.style.display = "block";
        isShow = true;
    }
});

let reviewBtn = document.querySelector("#reviewBtn");
let reviewBox = document.querySelector("#review");

reviewBtn.addEventListener("click", function () {
    if (isShow) {
        reviewBox.style.display = "none"
        isShow = false
    } else {
        reviewBox.style.display = "block";
        isShow = true;
    }
})