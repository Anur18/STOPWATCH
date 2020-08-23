// defining variables for storing time values
   let seconds=0;    
   let minutes=0; 
   let hours=0;
// defining variables to display format as 00:00:00
   let ds=0;
   let dm=0;
   let dh=0;

// variable for start stop btns
 let  interval=null;
//variable for stop
 let status="stopped";
 //function for timer
function starttime()

{  
     seconds++;
     if(seconds/60==1){
        seconds=0;
        minutes++;
        if(minutes/60==1){
            minutes=0;
            hours++;
        }
    }
    // for display format as 00:00:00
    if(seconds<10){
        ds="0"+seconds.toString();
    }
    else{
        ds=seconds;
    }
    
    if(minutes<10){
        dm="0"+minutes.toString();
    }
    else{
        dm=minutes;
    }
    
    if(hours<10){
        dh="0"+hours.toString();
    }
    else{
        dh=hours;
    }

    document.getElementById("timer").innerHTML=dh+":"+dm+":"+ds;
    
}

 
 function startstop(){
       if (status=="stopped"){
           interval=window.setInterval(starttime,1000);
           document.getElementById("startstop").innerHTML="STOP";
           status="started";
       }
       else{
           window.clearInterval(interval)
           document.getElementById("startstop").innerHTML="START";
           status="stopped";
       }
 }
 //function for reset
 function reset(){
     window.clearInterval(interval);
     seconds=0;
     minutes=0;
     hours=0;
     document.getElementById("timer").innerHTML="00:00:00";
     document.getElementById("startstop").innerHTML="START";
 }