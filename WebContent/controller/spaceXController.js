var xmlhttp = new XMLHttpRequest();
var url = "https://api.spaceXdata.com/v3/launches?";
let spaceXdata;
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
     spaceXdata = JSON.parse(this.responseText);
    loadSpaceXData(spaceXdata);
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function loadSpaceXData(arr) {
	let arrLength = arr.length;
	let i=0;
	let aSpaceX = [];
	for(i; i<=arrLength-1; i++){

	let oSpaceX = {
						space_image: arr[0].links.mission_patch_small,
						mission_name: arr[i].mission_name,
						mission_id:  arr[i].mission_id,
						launch_year:  arr[i].launch_year,
						succ_launch:  arr[i].launch_success,
						succ_landing: arr[i].rocket.first_stage.cores[0].landing_intent,
					}
					aSpaceX.push(oSpaceX);
	}
	
	let element = document.createElement("div")
	element.appendChild(document.createElement("div"));
	element.childNodes[0].setAttribute("class","cell")
	element.childNodes[0].appendChild(document.createElement("img"));
	element.childNodes[0].childNodes[0].setAttribute("src",aSpaceX[i].space_image);
	element.childNodes[0].childNodes[0].setAttribute("alt","image");
	element.childNodes[0].childNodes[0].setAttribute("class","abc");
	
	element.appendChild(document.createElement("div"))
	element.childNodes[1].setAttribute("class","cell")
	element.childNodes[1].appendChild(document.createElement("strong"));
	element.childNodes[1].childNodes[0].innerText = aSpaceX[i].mission_name;
		
	element.appendChild(document.createElement("div"))
	element.childNodes[2].setAttribute("class","cell")
	element.childNodes[2].appendChild(document.createElement("span"));
	element.childNodes[2].childNodes[0].setAttribute("class","cell");
	element.childNodes[2].childNodes[0].appendChild(document.createElement("strong"));
	element.childNodes[2].childNodes[0].childNodes[0].innerText = "Mission Ids:"
	element.childNodes[2].childNodes[0].childNodes[0].setAttribute("class","cell")
	element.childNodes[2].appendChild(document.createElement("span"));
	element.childNodes[2].childNodes[1].innerText="cfea"
	
	a.appendChild(document.createElement("div"))
	a.appendChild(document.createElement("div"))
	a.appendChild(document.createElement("div"))
	document.body.getElementsByClassName("spaceX")
}