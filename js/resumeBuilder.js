

var bio={
	"name":"Niesha Stanley",
	"role":"Application Developer",
	"contacts": {
		"mobile":"313-333-3333",
		"email":"nieshaamos@gmail.com",
		"twitter":"@nieshastanley",
		"github":"https://github.com/nyestanley",
		"blog":"",
		"location":"Detroit, MI"
	},
	"biopic": "images/fry.jpg",
	"welcomeMessage":"Thank you for visiting my online resume!",
	"skills":["HTML","CSS","Javascript", "jQuery", "AJAX"],
	"display":function (){
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedImage = HTMLbioPic.replace("%data%",bio.biopic);
		var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);

		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName); 
		$("#header").append(formattedImage);
		$("#header").append(formattedWelcomeMessage);

		$("#topContacts").append(formattedMobile + formattedEmail + formattedTwitter + formattedGithub + formattedLocation);
		$("#footerContacts").append(formattedMobile + formattedEmail + formattedTwitter + formattedGithub + formattedLocation);

		

		if(bio.skills.length > 0){
			$("#header").append(HTMLskillsStart);
				for(skill in bio.skills){
					formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
					$("#skills").append(formattedSkill);
				}
	
		}
		

	}

};

var work={
	"jobs":[
	{
		"title":"Lead Web Desingner and Programmer",
		"employer": "Motor City Dev Chix",
		"location":"motorcitydevchix.com",
		"dates":"2014-current",
		"description":"Manage new and existing projects for professional web design services"
	},
	{
		"title":"Application Developer",
		"employer": "GE Capital",
		"location":"Van Buren Township, MI",
		"dates":"2012-current",
		"description":"Build and manage business rule engine and manage Underwriting Web Services for Touchless" +
		"systems"
	},
	{
		"title":"Web Design Intern",
		"employer":"Crain Communications",
		"location":"Detroit, MI",
		"dates":"2012",
		"description":"Supported the UI/UX team by implementing and modifying website features."
	}


	],
	"display":function (){
	var formattedEmployer, formattedTitle, formattedWorkDates, formattedLocation, formattedJobDesc;
		for(job in work.jobs){
			$('#workExperience').append(HTMLworkStart);

			formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
			formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
			formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[job].dates)
			formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
			formattedJobDesc = HTMLworkDescription.replace("%data%",work.jobs[job].description);

			$(".work-entry:last").append(formattedEmployer +  formattedTitle  + formattedLocation  
		+ formattedWorkDates +  formattedJobDesc);


		}
	}
};

var education={
	"schools":[
	{
		"name":"Wayne State University",
		"degree":"Bachelor Of Science",
		"dates": "2008-2010",
		"location":"Detroit, MI",
		"majors":"Computer Science",
		"url":"www.wayne.edu"

	}
	],
	"onlineClasses":[
		{
		"school":"Udacity",
		"title":"HTML & CSS",
		"dates":"November 2014",
		"url":"https://www.udacity.com/course/viewer#!/c-ud304-nd/l-2617868617",
		
		},
		{
			"school":"Udacity",
			"title":"Version Control with Git and Github",
			"dates":"January 2015",
			"url":"https://www.udacity.com/course/ud775-nd"
		},
		{
			"school":"Udacity",
			"title":"Javascript Basics",
			"dates":"February 2015",
			"url":"https://www.udacity.com/course/viewer#!/c-ud804-nd"
		},
		{
			"school":"Udacity",
			"title":"Intro to jQuery",
			"dates":"February 2015",
			"url":"https://www.udacity.com/course/viewer#!/c-ud245-nd"
		}
	],
	"display":function(){
		var formattedSchool, formattedDegree, formattedDates, formattedLocation, formattedMajor, formattedTitle, formattedURL;
		for(school in education.schools){
			$('#education').append(HTMLschoolStart);

			formattedSchool = HTMLschoolName.replace("%data%", education.schools[school].name);
			formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			$(".education-entry:last").append(formattedSchool + formattedDegree + formattedDates + formattedLocation + formattedMajor);

		}

		$('#education').append(HTMLonlineClasses);
		for(clas in education.onlineClasses){
			$('#education').append(HTMLschoolStart);

			formattedTitle = HTMLonlineTitle .replace("%data%", education.onlineClasses[clas].title);
			formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[clas].school);
			formattedDates = HTMLonlineDates.replace("%data%", education.onlineClasses[clas].dates);
			formattedURL = HTMLonlineURL.replace("%data%", education.onlineClasses[clas].url);

			$(".education-entry:last").append(formattedTitle + formattedSchool+ formattedDates + formattedURL);

		}
	}
};

var projects={
	"projects":[
		{
			"title":"Udacity Project P1",
			"dates":"December 2014",
			"description":"Implement a web page mock using BootStrap CSS",
			"images":["images/p1thumbnail.png"]
		}
	],
	"display":function(){

		var formattedTitle, formattedDates, formattedDescription, formattedImage;
		for(project in projects.projects){
			$("#projects").append(HTMLprojectStart);

			formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
			formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
			formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);

			$(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription);

			for(image in projects.projects[project].images){

				formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);

				$(".project-entry:last").append(formattedImage);
			}

		}

	}
	
};

bio.display();
work.display();
projects.display();
education.display();


$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});



function inName(){

	var internationalName;

	var name = $('#name').text();

	var spaceIndex = name.indexOf(' ');

	internationalName = name.slice(0,1).toUpperCase() + name.slice(1, spaceIndex) + " " + 
	name.slice(spaceIndex + 1).toUpperCase();

console.log(internationalName);
	return internationalName;
};

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

