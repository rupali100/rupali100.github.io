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

function loadSpaceXData(spaceXdata) {
	let arrLength = arr.length;
	let i=0;
	let aSpaceX = [];
	for(i; i<=arrLength-1; i++){

	let oSpaceX = {
						mission_name: arr[i].mission_name,
						mission_id:  arr[i].mission_id,
						launch_year:  arr[i].launch_year,
						succ_launch:  arr[i].launch_success,
						succ_landing: arr[i].rocket.first_stage.cores[0].landing_intent,
					}
					aSpaceX.push(oSpaceX);
	}
}