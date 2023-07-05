var imgdog=200;
var minwidth=100;
var maxwidth=300;
var imgvalue=document.getElementById("imgdiv");
var warningvlaue=document.getElementById("warning");
var widthvalue=document.getElementById("widthsize");

function decrease(){
    if(imgdog<=minwidth){
        warningvlaue.style.display="flex";
        warningvlaue.innerHTML="Can't Visible. Increase the size of the Image.";
    }
    else{
        imgdog=imgdog-5;
        console.log(imgdog);
        var pixels=imgdog+"px";
    imgvalue.style.width=pixels;
    warningvlaue.style.display="none";
    widthvalue.textContent=pixels;
    }
}
function increase(){
    if(imgdog>=maxwidth){
        warningvlaue.style.display="flex";
        warningvlaue.innerHTML="Too big. Decrease the size of the Image";
    }
    else{
        imgdog=imgdog+5;
        var pixel=imgdog+"px";
        imgvalue.style.width=pixel;
        widthvalue.textContent=pixel;
        warningvlaue.style.display="none";
    }
}