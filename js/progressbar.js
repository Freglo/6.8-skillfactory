let progressBar = $("#myProgressBar");
let progressWidth = $(".progress").width();
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let nowProgress = 0;
btn1.addEventListener('click', event => {
    nowProgress += progressWidth * 0.01;
    progressBar.width(nowProgress + progressWidth * 0.01)
    console.log('Выполнилось btn1')
    });
btn2.addEventListener('click', event => {
    nowProgress += progressWidth * 0.03;
    progressBar.width(nowProgress + progressWidth * 0.03)
    console.log('Выполнилось btn2')
    });    
btn3.addEventListener('click', event => {
    nowProgress += progressWidth * 0.07;
    progressBar.width(nowProgress + progressWidth * 0.07)
    console.log('Выполнилось btn3')
   });