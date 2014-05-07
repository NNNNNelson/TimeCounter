var lowSecond=0, second=0, minute=0, hour=0;
var timeFlag=0;
var timeID;

function boot()
{	
	//Make the "Start" button enabled.
	document.getElementById("start").disabled=false;
	
	//Base on the screen 
	var percent;
	percent=document.body.clientWidth/1680;
	percent=percent*100 + "%";
	// document.getElementById("emPercent").innerHTML=percent;
	document.getElementById("wholeBody").style.fontSize=percent;
}

function mousedown(obj)
{
	obj.style.color="white";
}

function mouseup(obj)
{
	obj.style.color="#00FF00";
}

function start()
{
	setInterval("countTime()",100);
	document.getElementById("start").disabled=true;
	// document.getElementById("start").style.color="grey";
	// document.getElementById("start").style.backgroundColor="black";
}

function countTime()
{
	lowSecond++;
	
	if(lowSecond > 9)
	{
		second++;
		lowSecond=0;
		
		if(second > 59)
		{
			minute++;
			second=0;
			
			if(minute > 59)
			{
				hour++;
				minute=0;
			}
		}
	}				
	document.getElementById("timeDisplaying").innerHTML=hour + ":" + minute + ":" + second + "." + "<span id='lowSecond'>" + lowSecond + "</span>";
}

function restart()
{
	var clearID;
	var i;
	
	timeFlag=lowSecond=second=minute=hour=0;
	for(i=1;i<11;i++)
	{	clearID="time"+i;
		document.getElementById(clearID).innerHTML="";
	}
	
	window.location.reload(true);
}

function recordTime()
{
	timeFlag++;
	if(timeFlag <= 10)
	{
		timeID="time"+timeFlag;
		document.getElementById(timeID).innerHTML="Your " + timeFlag + " time is: " + hour + ":" + minute + ":" + second + "." + "<span id='displayPanelLowSecond'>" + lowSecond + "</span>";
	}
	else
	{
		alert("Maximum 10 records are allowed!\nYou need to restart.");
	}
}		
