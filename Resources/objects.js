var objView = Ti.UI.createView({
	backgroundColor: "#999",
	top: 10,
	width: 250,
	height: 400
});

//literal object
var metal = {
	"name" : "Metal Gear",
	"type" : "Action game",
	"favorite" : "Yes",
	"opinion" : function(){
		var objViewText = Ti.UI.createLabel({
		text : this.name + " is an " + this.type + " and " + this.favorite + " this is one of my favorites games.",
		left: 10,
		color : "#fff",
		top: 10,
		font: {fontSize: 10, fontFamily:"helvetica",fontWeight:"bold"}
		});
		objView.add(objViewText);
	}
};

var bioshock = {
	"name" : "Bioshock",
	"type" : "Shooter game",
	"favorite" : "Yes",
	"opinion" : function(){
		var objViewText = Ti.UI.createLabel({
		text : this.name + " is a " + this.type + " and " + this.favorite + " this is one of my favorites games.",
		left: 10,
		color : "#fff",
		top: 33,
		font: {fontSize: 10, fontFamily:"helvetica",fontWeight:"bold"}
		});
		objView.add(objViewText);
	}
};

var tooHuman = {
	"name" : "Too Human",
	"type" : "Shooter/RPG game",
	"favorite" : "NOT",
	"opinion" : function(){
		var objViewText = Ti.UI.createLabel({
		text : this.name + " is a " + this.type + " and " + this.favorite + " this is not one of my favorites games.",
		left: 10,
		color : "#fff",
		top: 56,
		font: {fontSize: 10, fontFamily:"helvetica",fontWeight:"bold"}
		});
		objView.add(objViewText);
	}
};

var bioshock = {
	"name" : "Bioshock",
	"type" : "Shooter game",
	"favorite" : "Yes",
	"opinion" : function(){
		var objViewText = Ti.UI.createLabel({
		text : this.name + " is a " + this.type + " and " + this.favorite + " this is one of my favorites games.",
		left: 10,
		color : "#fff",
		top: 33,
		font: {fontSize: 10, fontFamily:"helvetica",fontWeight:"bold"}
		});
		objView.add(objViewText);
	}
};

var gearsOfWar = {
	"name" : "Gears Of War",
	"type" : "Shooter game",
	"favorite" : "Yes",
	"opinion" : function(){
		var objViewText = Ti.UI.createLabel({
		text : this.name + " is a " + this.type + " and " + this.favorite + " this is one of my favorites games.",
		left: 10,
		color : "#fff",
		top: 79,
		font: {fontSize: 10, fontFamily:"helvetica",fontWeight:"bold"}
		});
		objView.add(objViewText);
	}
};

var final = {
	"name" : "Final Fantasy Series",
	"type" : "RPG game",
	"favorite" : "Yes",
	"opinion" : function(){
		var objViewText = Ti.UI.createLabel({
		text : this.name + " is a " + this.type + " and " + this.favorite + " this is one of my favorites Series.",
		left: 10,
		color : "#fff",
		top: 102,
		font: {fontSize: 10, fontFamily:"helvetica",fontWeight:"bold"}
		});
		objView.add(objViewText);
	}
};

final.opinion();
gearsOfWar.opinion();
tooHuman.opinion();
bioshock.opinion();
metal.opinion();

// End of literal Object

// Dot Notatiton

var terminator = new Object();
	terminator.name = "Terminator";
	terminator.type = "Action movie";
	terminator.favorite = "Yes";
	terminator.opinion = function(){
		var objViewText = Ti.UI.createLabel({
		text : this.name + " is an " + this.type + " and " + this.favorite + " is one of my favorites movies.",
		left: 10,
		color : "#fff",
		top: 140,
		font: {fontSize: 10, fontFamily:"helvetica",fontWeight:"bold"}
		});
		objView.add(objViewText);
	terminator.likeit = function (){
		console.log("I love it!!");
	};
	};
	
var battlefield = new Object();
	battlefield.name = "Battlefield";
	battlefield.type = "Action movie";
	battlefield.favorite = "Yes";
	battlefield.opinion = function(){
		var objViewText = Ti.UI.createLabel({
		text : this.name + " is an " + this.type + " and " + this.favorite + "  is one of my favorites movies.",
		left: 10,
		color : "#fff",
		top: 163,
		font: {fontSize: 10, fontFamily:"helvetica",fontWeight:"bold"}
		});
		objView.add(objViewText);
	battlefield.likeit = function (){
		console.log("I love it!!");
	};
	};
	
var insidious = new Object();
	insidious.name = "Insidious";
	insidious.type = "Horror movie";
	insidious.favorite = "Yes";
	insidious.opinion = function(){
		var objViewText = Ti.UI.createLabel({
		text : this.name + " is an " + this.type + " and " + this.favorite + "  is one of my favorites movies.",
		left: 10,
		color : "#fff",
		top: 186,
		font: {fontSize: 10, fontFamily:"helvetica",fontWeight:"bold"}
		});
		objView.add(objViewText);
	insidious.likeit = function (){
		console.log("I love it!!");
	};
	};
	
var mama = new Object();
	mama.name = "Mama";
	mama.type = "Horror movie";
	mama.favorite = "Yes";
	mama.opinion = function(){
		var objViewText = Ti.UI.createLabel({
		text : this.name + " is an " + this.type + " and " + this.favorite + "  is one of my favorites movies.",
		left: 10,
		color : "#fff",
		top: 209,
		font: {fontSize: 10, fontFamily:"helvetica",fontWeight:"bold"}
		});
		objView.add(objViewText);
	mama.likeit = function (){
		console.log("I love it!!");
	};
	};

var robocop = new Object();
	robocop.name = "Mama";
	robocop.type = "Horror movie";
	robocop.favorite = "Yes";
	robocop.opinion = function(){
		var objViewText = Ti.UI.createLabel({
		text : this.name + " is an " + this.type + " and " + this.favorite + "  is one of my favorites movies.",
		left: 10,
		color : "#fff",
		top: 232,
		font: {fontSize: 10, fontFamily:"helvetica",fontWeight:"bold"}
		});
		objView.add(objViewText);
	robocop.likeit = function (){
		console.log("I love it!!");
	};
	};
	

robocop.opinion();	
mama.opinion();
insidious.opinion();	
terminator.opinion();
battlefield.opinion();	

mainWin.add(objView);
exports.objView =objView;

//End of Dot notation