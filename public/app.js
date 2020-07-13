// CODING BY : HASEEB ALAM RAFIQ
var msec=00;
var sec=00;
var min=00;
var intervel;
var msech = document.getElementById("msec");
var sech = document.getElementById("sec");
var minh = document.getElementById("min");
function watch(){
    var msech = document.getElementById("msec");
    msec++;
    msech.innerHTML = msec;
    if (msec >=100){
        var sech = document.getElementById("sec");
        sec++;
        sech.innerHTML= sec + ":";
        msec = 00;        
    }
    else if (sec >=60){
        var minh = document.getElementById("min");
        min++;
        minh.innerHTML = min + ":";
        sec = 00;
    }

}
function start(){
    if (!intervel){
        intervel = setInterval(watch,10);
        // agr time nhi hy tu yeh timer chalo else may kuch bhi
        // nhi ho button disabled.
    }
    else if (!pause()){
            intervel = setInterval(watch,10);
            // agr pause k buttons meand function on click nhi
            // tu timer start hona chaheye.
        }
}


function pause(){
    clearInterval(intervel); 
}
function reset() {
    msec = 00;
    sec = 00;
    min = 00;
    msech.innerHTML= 00;
    sech.innerHTML = sec + ":";
    minh.innerHTML = min + ":";
    pause();
}
var text="";
var li;
var ul; 
// THIS FUNCTION IS IMPORTANT FOR CREATE HTML THROGHT JS. 
 function lap() {
     li = document.createElement("li");
     text = document.createTextNode(minh.innerHTML + sech.innerHTML + msech.innerHTML);
    li.appendChild(text);
     ul = document.getElementById("ul");
    ul.appendChild(li);  
}



function resetlap() {
    text.innerHTML = "";
    ul = document.getElementById("ul");
    ul.innerHTML = "";
}

var h = document.createElement("h1");
var intro = document.createTextNode("DEVELOP & DESIGN BY \n HASEEB ALAM RAFIQ");
h.appendChild(intro);
var di = document.getElementById("intro");
di.appendChild(h);
