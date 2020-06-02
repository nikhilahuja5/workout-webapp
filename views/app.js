
// let benchPress = {
//    sets: 3,
//     repitations: 15 
//  };

// let shoulderpress = {
//     sets : 4 ,
//     repitations : 8-10
// };

// let lounges = {
//     sets : 5,
//     repitations : 6-8
// };

array = ["excercise-1","excercise-2","excercise-3","excercise-4","excercise-5","excercise-6"];

class workout {
    constructor(sets,repitations,name){
        this.sets = sets,
        this.repitations = repitations,
        this.name = name
    }

    excercise() {
       return "No of Sets to Do: " + this.sets + "<br>" + "No of repitations: "+ this.repitations;
    }
    exName(){
       return this.name
    }
}

// chest Day
excercise1 = new workout(4 , 15,"Barbell BenchPress");
excercise2 = new workout(4, 12, "Chest press");
excercise3 = new workout(3, 15, "Inclined Dumbbell flies");
excercise4 = new workout(3, 10 , "Dips");
excercise5 = new workout(4, 15, "Pushups");
excercise6 = new workout(3, 15, "Pec Desk");
// shoulder Day
excercise7 = new workout(4, 12,"Barbell Standing Press");
excercise8 = new workout(4, 10,"Seated Dumbbell Press");
excercise9 = new workout(5, 10,"Lateral raises");
excercise10 = new workout(4, 20,"Bent over reverse fly");
excercise11 = new workout(3, 15,"Kettlebell Single-Arm Press");
excercise12 = new workout(3, 12,"Front raises");
// bisep trisep Day
excercise13 = new workout(4 , 15, "Barbell Curl");
excercise14 = new workout(4, 10, "Skullcrusher");
excercise15 = new workout(3, 15, "Chin Ups");
excercise16 = new workout(3, 12, "Preacher Curl");
excercise17 = new workout(4, 10, "Trisep Dip");
excercise18 = new workout(3, 12, "Trisep Pushdown");
// Back Day
excercise19 = new workout(4 ,12,"Kettlebell Swings");
excercise20 = new workout(5,8, "Pull Ups");
excercise21 = new workout(3,15,"Barbell Deadlift");
excercise22 = new workout(3,12,"Lat Pull-Downs");
excercise23 = new workout(4,12, "Inverted Row");
excercise24 = new workout(3,20, "Dumbbell SingleArm Row");
// cardio And Abs
excercise25 = new workout(4 , 15, "Burpees");
excercise26 = new workout(4, 15, "Frog Jump");
excercise27 = new workout(3, 12 ,"Bench Runners");
excercise28 = new workout(3, 10 , "Dead Bug");
excercise29 = new workout(4, 15, "Dumbell Side Bend");
excercise30 = new workout(3, 12, "Crunches");
// leg Day
excercise31 = new workout(4 , 15, "Barbell Squats");
excercise32 = new workout(4, 12, "Dumbell Walking Lunges");
excercise33 = new workout(3, 15, "Leg Press");
excercise34 = new workout(3, 12, "Front Barbell Squats");
excercise35 = new workout(4, 15, "Box jump");
excercise36 = new workout(3, 30, "Rope Skipping");




var date = new Date();
var day = date.getDay();
  if(day == 1){
     document.getElementById("1st").innerHTML =excercise1.excercise();
     document.getElementById("2nd").innerHTML =excercise2.excercise();
     document.getElementById("3rd").innerHTML =excercise3.excercise();
     document.getElementById("4th").innerHTML =excercise4.excercise();
     document.getElementById("5th").innerHTML =excercise5.excercise();
     document.getElementById("6th").innerHTML =excercise6.excercise();
     document.getElementById("hed1").innerHTML =excercise1.exName();
     document.getElementById("hed2").innerHTML =excercise2.exName();
     document.getElementById("hed3").innerHTML =excercise3.exName();
     document.getElementById("hed4").innerHTML =excercise4.exName();
     document.getElementById("hed5").innerHTML =excercise5.exName();
     document.getElementById("hed6").innerHTML =excercise6.exName();
 }else if (day == 2) {
     document.getElementById("1st").innerHTML =excercise7.excercise();
     document.getElementById("2nd").innerHTML =excercise8.excercise();
     document.getElementById("3rd").innerHTML =excercise9.excercise();
     document.getElementById("4th").innerHTML =excercise10.excercise();
     document.getElementById("5th").innerHTML =excercise11.excercise();
     document.getElementById("6th").innerHTML =excercise12.excercise();
     document.getElementById("hed1").innerHTML =excercise7.exName();
     document.getElementById("hed2").innerHTML =excercise8.exName();
     document.getElementById("hed3").innerHTML =excercise9.exName();
     document.getElementById("hed4").innerHTML =excercise10.exName();
     document.getElementById("hed5").innerHTML =excercise11.exName();
     document.getElementById("hed6").innerHTML =excercise12.exName();
 }else if (day == 3) {
   document.getElementById("1st").innerHTML =excercise13.excercise();
   document.getElementById("2nd").innerHTML =excercise14.excercise();
   document.getElementById("3rd").innerHTML =excercise15.excercise();
   document.getElementById("4th").innerHTML =excercise16.excercise();
   document.getElementById("5th").innerHTML =excercise17.excercise();
   document.getElementById("6th").innerHTML =excercise18.excercise();
   document.getElementById("hed1").innerHTML =excercise13.exName();
   document.getElementById("hed2").innerHTML =excercise14.exName();
   document.getElementById("hed3").innerHTML =excercise15.exName();
   document.getElementById("hed4").innerHTML =excercise16.exName();
   document.getElementById("hed5").innerHTML =excercise17.exName();
   document.getElementById("hed6").innerHTML =excercise18.exName();
 }else if (day == 4) {
   document.getElementById("1st").innerHTML =excercise19.excercise();
   document.getElementById("2nd").innerHTML =excercise20.excercise();
   document.getElementById("3rd").innerHTML =excercise21.excercise();
   document.getElementById("4th").innerHTML =excercise22.excercise();
   document.getElementById("5th").innerHTML =excercise23.excercise();
   document.getElementById("6th").innerHTML =excercise24.excercise();
   document.getElementById("hed1").innerHTML =excercise19.exName();
   document.getElementById("hed2").innerHTML =excercise20.exName();
   document.getElementById("hed3").innerHTML =excercise21.exName();
   document.getElementById("hed4").innerHTML =excercise22.exName();
   document.getElementById("hed5").innerHTML =excercise23.exName();
   document.getElementById("hed6").innerHTML =excercise24.exName();
 }else if (day == 5) {
   document.getElementById("1st").innerHTML =excercise25.excercise();
   document.getElementById("2nd").innerHTML =excercise26.excercise();
   document.getElementById("3rd").innerHTML =excercise27.excercise();
   document.getElementById("4th").innerHTML =excercise28.excercise();
   document.getElementById("5th").innerHTML =excercise29.excercise();
   document.getElementById("6th").innerHTML =excercise30.excercise();
   document.getElementById("hed1").innerHTML =excercise25.exName();
   document.getElementById("hed2").innerHTML =excercise26.exName();
   document.getElementById("hed3").innerHTML =excercise27.exName();
   document.getElementById("hed4").innerHTML =excercise28.exName();
   document.getElementById("hed5").innerHTML =excercise29.exName();
   document.getElementById("hed6").innerHTML =excercise30.exName();
 }else if (day == 6) {
  document.getElementById("1st").innerHTML =excercise31.excercise();
  document.getElementById("2nd").innerHTML =excercise32.excercise();
  document.getElementById("3rd").innerHTML =excercise33.excercise();
  document.getElementById("4th").innerHTML =excercise34.excercise();
  document.getElementById("5th").innerHTML =excercise35.excercise();
  document.getElementById("6th").innerHTML =excercise36.excercise();
  document.getElementById("hed1").innerHTML =excercise31.exName();
  document.getElementById("hed2").innerHTML =excercise32.exName();
  document.getElementById("hed3").innerHTML =excercise33.exName();
  document.getElementById("hed4").innerHTML =excercise34.exName();
  document.getElementById("hed5").innerHTML =excercise35.exName();
  document.getElementById("hed6").innerHTML =excercise36.exName();
 }else {
    
 }


// timer = setInterval(setTime, 1000);
// }
// function pad(val) {
//   var valString = val + "";
//   if (valString.length < 2) {
//     return "0" + valString;
//   } else {
//     return valString;
//   };
// };

var m = 0, s = 0;
var timer; 

var stopwatch = document.querySelector('.stopwatch');
var lapsContainer = document.querySelector('.laps');

function start(){
  timer = setInterval(run , 1000);
};
function run() {
 stopwatch.textContent = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
  s++;
  if(s == 60){
    s = 0;
    m++
  }
}

function pause(){
  clearInterval(timer);
  timer = false;
}
function stop(){
 
   if(timer){
    var li = document.createElement('p');
    li.innerText = "you take " +(m < 10 ? "0" + m : m) + " minutes and " + (s < 10 ? "0" + s : s) + " seconds to complete your workout";
    lapsContainer.appendChild(li);
  }

  clearInterval(timer);
  timer = false;
  s = 0;
  m = 0;
  stopwatch.textContent = (m < 10 ? "0" + m : m) +":" + (s < 10 ? "0" + s : s) ;

  
}
function resume(){
   start();
}


$(document).ready(function(){
 $("#btn1").click(function(){
   $("#btn1").hide()
   $("#btn2,#btn3").show()
   $("#playlist").show()
 });
});


$(document).ready(function(){
  $("#btn2").click(function(){
    $("#btn2,#btn3,#btn4").hide()
    $("#btn1").show()
    $("#playlist").hide()
    //$("#timer").hide()
  });
 });

 $(document).ready(function(){
  $("#btn3").click(function(){
    $("#btn3").hide()
    $("#btn4").show()
  });
 });

 $(document).ready(function(){
  $("#btn4").click(function(){
    $("#btn4").hide()
    $("#btn3").show()
  });
 });






