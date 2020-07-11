// var sec = 0; //counter
// var inter; //its a variable where set Internel store 

// function time() { //this is a function where sec is increament by 1
//                             //and print in console
//     sec++;
//     console.log(sec);

// }
// inter = setInterval(time , 1000); //here timer fuction call and its reapeting this by 1 sec
// setTimeout(function(){
//     clearInterval(inter);
// } , 5000);

var msec=00;
var sec=00;
var min=00;
var intervel;
var msech = document.getElementById("msec");
var sech = document.getElementById("sec");
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
interval = setInterval(watch,10);
}

function pause(){
    clearInterval(interval);
}

function reset() {
    msec =00;
    sec = 00;
    min = 00;
    msech.innerHTML= msec;
    sech.innerHTML = sec +":";
    minh.innerHTML =  min +":";
    
    pause();
}


// function record() {
//   var re = [];
//   re[1] = document.getElementById("msec").innerHTML;
//   document.write(re[1]);



// name.value =("NAME =" +" " + name +"<br>");

// document.write(min +":" + " " + sec + ":" +" " +msec);
 


// var re = [record()];
// re = record();

