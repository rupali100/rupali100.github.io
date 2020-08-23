function onClickYear(data){
	this.prevYear = event.target.innerText;
	let filterVal = event.target.innerText; 
	var xmlhttp = new XMLHttpRequest();
	if(this.prevLaunch && this.prevLand ){
		var url = "https://api.spaceXdata.com/v3/launches?limit=100&launch_success="+this.prevLaunch.toLowerCase()+"&land_success="+this.prevLand.toLowerCase()+"&launch_year="+filterVal;
	}else if(this.prevLaunch || this.prevLand){
		if(this.prevLaunch){
			var url = "https://api.spaceXdata.com/v3/launches?limit=100&launch_success="+this.prevLaunch.toLowerCase()+"&launch_year="+filterVal;
			
		}else{
			var url = "https://api.spaceXdata.com/v3/launches?limit=100&land_success="+this.prevLand.toLowerCase()+"&launch_year="+filterVal;
				
		}
		
	}	
	else{
		var url = "https://api.spaceXdata.com/v3/launches?limit=100&launch_year="+filterVal ;
	}
	document.location.search=url.split("?")[1]
	
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
	this.prevLaunch= event.target.innerText; 
	let filterVal = event.target.innerText;
	var xmlhttp = new XMLHttpRequest();
	if(this.prevYear && this.prevLand ){
		var url = "https://api.spaceXdata.com/v3/launches?limit=100&launch_year="+this.prevYear+"&land_success="+this.prevLand+"&launch_success="+filterVal.toLowerCase();
	}else if(this.prevLaunch || this.prevLand){
		if(this.prevYear){
			var url = "https://api.spaceXdata.com/v3/launches?limit=100&launch_year="+this.prevYear+"&launch_success="+filterVal.toLowerCase();
			
		}else{
			var url = "https://api.spaceXdata.com/v3/launches?limit=100&land_success="+this.prevLand.toLowerCase()+"&launch_success="+filterVal.toLowerCase();
				
		}
		
	}	
	else{
		var url = "https://api.spaceXdata.com/v3/launches?limit=100&launch_success="+filterVal.toLowerCase() ;
	}
	document.location.search=url.split("?")[1]
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
	this.prevLand= event.target.innerText; 
	let filterVal = event.target.innerText; 	
	var xmlhttp = new XMLHttpRequest();
	if(this.prevYear && this.prevLand ){
		var url = "https://api.spaceXdata.com/v3/launches?limit=100&launch_year="+this.prevYear+"&launch_success="+this.prevLaunch.toLowerCase()+"&land_success="+filterVal.toLowerCase();
	}else if(this.prevLaunch || this.prevLand){
		if(this.prevYear){
			var url = "https://api.spaceXdata.com/v3/launches?limit=100&launch_year="+this.prevYear+"&land_success="+filterVal.toLowerCase();
			
		}else{
			var url = "https://api.spaceXdata.com/v3/launches?limit=100&land_success="+this.prevLaunch.toLowerCase()+"&land_success="+filterVal.toLowerCase();
				
		}
		
	}	
	else{
		var url = "https://api.spaceXdata.com/v3/launches?limit=100&land_success="+filterVal.toLowerCase() ;
	}
	
	document.location.search=url.split("?")[1]
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

