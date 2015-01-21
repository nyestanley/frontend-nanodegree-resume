/*
var awesomeThoughts="I am Niesha and I am AWESOME!";

console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME","FUN");

$("#main").append(funThoughts);*/

var formattedName = HTMLheaderName.replace("%data%", "Niesha Stanley");
var formattedRole = HTMLheaderRole.replace("%data%", "Application Developer");

$("#main").prepend(formattedRole);
$("#main").prepend(formattedName); 

/*var s = "audacity";

var udacityizer = function(s){

	s = "U" +s.slice(1);
	return s;
}

console.log(udacityizer));
var bio={
	"name":"Niesha",
	"role":"Application Developer",
	"contact info": "nieshaamos@gmail.com",
	"picture URL": null,
	"welcome message":null,
	"skills":null

};

$("#main").append(bio.name);

var work={};

	work.position="Application Developer";
	work.employer="GE Capital";
	work.yearsWorked=3;
	work.city="Van Buren Township";

var education={};

	education["school"]="Wayne State University";
	education["years attended"]=3;
	education["school location"]="Detroit";

$("#main").append(work.position);
$("#main").append(education.school);*/

var bio={
	"name":"Niesha",
	"role":"Application Developer",
	"contact info": "nieshaamos@gmail.com",
	"picture URL": null,
	"welcome message":null,
	"skills":["HTML","CSS","Javascript"]

};

var work={
	"jobs":[
	{
		"position":"Lead Web Desingner and Programmer",
		"employer": "Motor City Dev Chix",
		"location":"motorcitydevchix.com",
		"dates worked":"2014-current",
		"job description":"Manage new and existing projects for professional web design services"
	},
	{
		"position":"Application Developer",
		"employer": "GE Capital",
		"location":"Van Buren Township",
		"dates worked":"2012-current",
		"job description":"Build and manage business rule engine and manage Underwriting Web Services for Touchless" +
		"systems"
	},
	{
		"position":"Web Design Intern",
		"employer":"Crain Communications",
		"location":"Detroit",
		"dates worked":"2012",
		"job description":"Implemented and installed plugins for company publications"
	}


	]
}

var education={
	"schools":[
	{
		"name":"Wayne State University",
		"city":"Detroit",
		"degree":"BS",
		"major":"Computer Science",
		"concentrations":["software engineering","web technology"],
		"graduation year":"2010"

	},
	{
		"name":"Udacity",
		"degree":["Front End Web Developer","Full Stack Developer"]
	}
	]
}

var projects={
	"portfolioURL":"motorcitydevchix.com"
}

if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);

	var formattedSkill;
	for(skill in bio.skills){
	formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
	$("#skills").append(formattedSkill);
	}
	
}

function displayWork(){
	var formattedEmployer, formattedTitle, formattedWorkDates, formattedLocation, formattedJobDesc;
	for(job in work.jobs){
	$('#workExperience').append(HTMLworkStart);

	formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].position);
	formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[job]["dates worked"])
	formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
	formattedJobDesc = HTMLworkDescription.replace("%data%",work.jobs[job]["job description"]);

	$(".work-entry:last").append(formattedEmployer +  formattedTitle  + formattedLocation  
+ formattedWorkDates +  formattedJobDesc);


	}
}

displayWork();

/*$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});*/



function inName(){

	var internationalName;

	var name = $('#name').text();

	var spaceIndex = name.indexOf(' ');

	internationalName = name.slice(0,1).toUpperCase() + name.slice(1, spaceIndex) + " " + 
	name.slice(spaceIndex + 1).toUpperCase();

console.log(internationalName);
	return internationalName;
}

$("#main").append(internationalizeButton);

