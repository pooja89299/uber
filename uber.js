console.log("**WELCOME TO MY UBER CAR****")
const p=require("readline-sync")
var current_location=p.question("write your current location,(katarj/pune/satara/Tulshibaug) ")
if (current_location=="katarj" || current_location=="pune" || current_location=="satara" || current_location=="Tulshibaug"){
    console.log("its avaiable**")
}else {
    console.log("not avaible any service")   
}
//user input for your drop location***
var drop_location=p.question("* your drop location(tulsi bhag/flora/khopi* ")
if (drop_location=="tulsi bhag" || drop_location=="flora" || drop_location=="khopi"){
    console.log(drop_location," yes servies is available")
}else{
    console.log("service is not available")
}
// userinput for option vehical
var vehical=p.question("*which vehical do you want .car/auto * ")

var Driver_details=[
    {"name":"Sanjay",
    "mobile_no":9027484938,
    "location":"khedshivapur",
    "feeedback":"drive slow and safe ",
    "rate":650,
    "type":"car"},

    {"name":"Ajay",
    "mobile_no":9827484938,
    "location":"katraj",
    "feeedback":"drive slow and safe ",
    "rate":360,
    "type":"auto"},

    {"name":"Akshay",
    "mobile_no":9927789939,
    "location":"khedshivapur",
    "feeedback":"drive safe  ",
    "rate":550,
    "type":"car"},

    {"name":"mohit",
    "mobile_no":9527484938,
    "location":"sawrgate",
    "feeedback":"drive fast and safe ",
    "rate":600,
    "type":"car"},

    {"name":"Akshay",
    "mobile_no":9027484938,
    "location":"khedshivapur",
    "feeedback":"drive fast and safe ",
    "rate":300,
    "type":"auto"
    },
    {"name":"mohit",
    "mobile_no":9527484938,
    "location":"pune",
    "feeedback":"drive fast and safe ",
    "rate":600,
    "type":"car"},

]

// for (i=0;i<Driver_details.length;i++){
    // console.log(Driver_details[i])
for (i in Driver_details)    {
    if (Driver_details[i]["type"]==vehical){
        console.log(Driver_details[i])
    }
    }
driverName=p.question("choose driver name * ")
for (i in Driver_details){
    if (Driver_details[i]["name"]==driverName){
        console.log(Driver_details[i])





        // console.log("VEHICAL COME IN 10 MIN ")
        // console.log("THANK YOU FOR BOOKING \n HAPPY JOURNEY**")

    }
}
// console.log(Driver_details[i],"cab come in 20 min")


place=p.question("choose which location near by you")
for (i in Driver_details){
    if (Driver_details[i]["location"]==place){
        console.log(Driver_details[i])
        console.log("VEHICAL COME IN 10 MIN ")
        console.log("THANK YOU FOR BOOKING \n HAPPY JOURNEY**")
    }
}
