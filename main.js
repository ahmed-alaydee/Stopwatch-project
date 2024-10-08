let = [millisecounds , sconde , minutes , hours]=[0 , 0 , 0 , 0];
let timeRef = document.querySelector(".time-display");

let int  = null;

document.getElementById("start-timer").addEventListener("click" ,()=> {
if(int !== null){
    clearInterval(int);
}

int = setInterval(displayTimer , 10); 
})


document.getElementById("pause-timer").addEventListener("click" , () =>{

    clearInterval(int)
})

document.getElementById("reset-timer").addEventListener("click" , () =>{

    clearInterval(int);
    [millisecounds , sconde , minutes , hours]=[0 , 0 , 0 , 0];
    timeRef.innerHTML = "00 : 00 : 00 :000 ";
});


function displayTimer (){
    millisecounds += 10 ;
    if(millisecounds == 1000){
        millisecounds = 0 ;
        sconde++;
        if(sconde == 60){
            sconde = 0 ;
            minutes++;
            if(minutes== 60){
                minutes = 0 ;
                hours++;
            }
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = sconde < 10 ? "0" + sconde : sconde;


    let ms = millisecounds < 10 
    ? "00" + millisecounds 
    :millisecounds < 100 
    ?"0" + millisecounds
    :millisecounds ; 

    timeRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`


}