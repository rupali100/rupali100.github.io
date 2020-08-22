
"use strict";
var xmlhttp = new XMLHttpRequest();
var url = "https://api.spacexdata.com/v3/launches?";
var myArr;
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    myArr = JSON.parse(this.responseText);
  }
};

loadSpaceXComponent = function(){
	
	
}