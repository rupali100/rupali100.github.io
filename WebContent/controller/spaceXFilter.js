function onClickYear(data){
	let filterVal = event.target.innerText;
	return "dd";
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
	
}