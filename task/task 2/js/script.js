timerID = null;
let active = 0;
function ChangePage(num){
        if(document.getElementById){
            obj[active].style.visibility = "hidden";
            active = num;
            obj[active].style.top = 0;
            obj[active].style.visibility = "visible";
        }
}
function ScrollUp(speed){
        if(document.getElementById){
            if(parseInt(obj[active].style.top) < 0){
                obj[active].style.top = parseInt(obj[active].style.top) + speed + "px";
        }
            timerID = setTimeout("ScrollUp("+speed+")",30);
        }
}
function ScrollDown(speed){
        if(document.getElementById){
            if(parseInt(obj[active].style.top) > document.getElementById('cont').offsetHeight - obj[active].offsetHeight){
                obj[active].style.top = parseInt(obj[active].style.top) - speed + "px";
        }
            timerID = setTimeout("ScrollDown("+speed+")",30);
        }
}
function ScrollStop(){
        if(document.getElementById){
            clearTimeout(timerID);
        }
}
function ScrollPageInit() {
        if(document.getElementById){
            obj = document.getElementById("cont").getElementsByTagName("div");
            obj['page1'].style.visibility = "visible";
            obj['page1'].style.top = 0;
        }
        if(document.addEventListener){
            for(i=0;i<document.getElementsByTagName('a').length;i++){
                document.getElementsByTagName('a')[i].style.position = "relative";
        }
        }
}

