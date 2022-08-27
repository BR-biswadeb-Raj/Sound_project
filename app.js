const mysong=document.querySelector(".mysong");
const btn=document.querySelector(".btn")
var count=0;


/*btn.addEventListener("click",()=>{
    
    if(count == 0){
        count = 1;
        mysong.play();
        btn.src="images/pause.png";
    }else{
        count =0;
        mysong.pause();
        btn.src="images/play.png"

    }
})*/
 btn.addEventListener("click",()=>{
    if(mysong.paused){
        mysong.play();
        btn.src="images/pause.png";
    }else{
        mysong.pause();
        btn.src="images/play.png"
    }
 })