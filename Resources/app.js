//calle 2b # 18-43 barrio libertadores

var mainWin = Ti.UI.createWindow({
	title : "Objects",
	modal : true,
	backgroundColor : "#fff",
	layout : "horizonal"
	
});

var objectJs = require('objects');

var navGroup = Ti.UI.iOS.createNavigationWindow({
	window: mainWin
});

navGroup.open();
