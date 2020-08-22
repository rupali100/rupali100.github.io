
"use strict";
var xmlhttp = new XMLHttpRequest();
var url = "https://api.spacexdata.com/v3/launches?";

xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var myArr = JSON.parse(this.responseText);
  }
};