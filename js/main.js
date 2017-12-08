/**
 * Created by lenovo on 17/12/5 005.
 */
//Initialize Swiper
var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    },
    navigation: {
        nextEl: '.swiper-button-next'
    },
    loop: true
});

var music=document.getElementById("music");
var musicImg=document.querySelectorAll(".musicImg")[0];
var musicBg=document.querySelectorAll(".musicBg")[0];
var audio=document.querySelector("audio");
var flag=1;
music.onclick=function(){
    //音乐部分开始
    if(flag==1){
        musicBg.style.display="none";
        musicImg.style.animation="none";
        audio.pause();
        flag=0;
        //音乐部分结束
    }else{
        musicBg.style.display="block";
        musicImg.style.animation="div1 2s linear infinite";
        audio.play();
        flag=1
    }
};