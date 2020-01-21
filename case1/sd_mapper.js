"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Ashlynn Hickman
   Date: 1/16/20  

*/

var thisTime = new Date();
//at first used February 3, 2018, 3:15:28 a.m. and 
//didn't know it was supposed to fill itself. 
var timeStr = thisTime.toLocaleString();
//toLocaleString method is used to display time???

document.getElementById("timeStamp").innerHTML = timeStr;
//change the inner HTML code of the page element with the ID
//timeStamp to the value of the timeStr variable

var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();
//variables stated for month and hour, and gets time 

var mapNum = (2 * thisMonth + thisHour) % 24;
//variable mapNum determines formula 

var imgStr = '<img src=sd_sky' + mapNum + '.png />';
//determines the image
document.getElementById('planisphere').insertAdjacentHTML('afterbegin', imgStr);
//insert the img variable



