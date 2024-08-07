// 輪播圖
$(document).ready(function(){
    $('.carousel').slick({
        // 自動播放
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,


    });
});

function biggerPic(el) {
    el.classList.add("biggerPic");
}

// 批次展示照片
var countI = 0;
let picTemple = "";
for (i=1;i<=39;i++) {
    var remainder = i%4;
    
    if (remainder == 1) {
        picTemple = picTemple + '<img class="picBig" onclick="biggerPic(this)" src="img/pic/' + i + '.webp"></img>'
    }else{
        picTemple = picTemple + '<img class="pic" onclick="biggerPic(this)" src="img/pic/' + i + '.webp"></img>'
    }


    
    countI =+1;
}
document.querySelector(".picContainer").innerHTML = picTemple;