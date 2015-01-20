/*
var awesomeThoughts="I am Niesha and I am AWESOME!";

console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME","FUN");

$("#main").append(funThoughts);

var formattedName = HTMLheaderName.replace("%data%", "Niesha Stanley");
var formattedRole = HTMLheaderRole.replace("%data%", "Application Developer");

$("#main").prepend(formattedRole);
$("#main").prepend(formattedName); n

var s = "audacity";

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
	"skills":null

};

var work={};

	work.position="Application Developer";
	work.employer="GE Capital";
	work.yearsWorked=3;
	work.city="Van Buren Township";

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