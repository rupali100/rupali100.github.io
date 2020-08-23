function onClickYear(data){
	this.prevYear = event.target.innerText;
	let filterVal = event.target.innerText; 
	var xmlhttp = new XMLHttpRequest();
	if(this.prevLaunch && this.prevLand ){
		var url = "https://api.spaceXdata.com/v3/launches?limit=100&launch_success="+this.prevLaunch+"&land_success="+this.prevLand+"&launch_year="+filterVal;
	}else if(this.prevLaunch || this.prevLand){
		if(this.prevLaunch){
			var url = "https://api.spaceXdata.com/v3/launches?limit=100&launch_success="+this.prevLaunch+"&launch_year="+filterVal;
			
		}else{
			var url = "https://api.spaceXdata.com/v3/launches?limit=100&land_success="+this.prevLand+"&launch_year="+filterVal;
				
		}
		
	}	
	else{
		var url = "https://api.spaceXdata.com/v3/launches?limit=100&launch_year="+filterVal ;
	}
	
	let spaceXdata;
	xmlhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
	     spaceXdata = JSON.parse(this.responseText);
	    loadSpaceXData(spaceXdata);
	  }
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
};

function onClickLaunch(){
	let filterVal = event.target.innerText; 	
	var xmlhttp = new XMLHttpRequest();
	var url = "https://api.spaceXdata.com/v3/launches?limit=100&launch_success="+filterVal ;
	let spaceXdata;
	xmlhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
	     spaceXdata = JSON.parse(this.responseText);
	    loadSpaceXData(spaceXdata);
	  }
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
	
};

function onClickLand(){
	let filterVal = event.target.innerText; 	
	var xmlhttp = new XMLHttpRequest();
	var url = "https://api.spaceXdata.com/v3/launches?limit=100&land_success="+filterVal ;
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

