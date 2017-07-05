var express					=	require('express.oi');
var app						=	express().http().io();
var adapter					=	require('../../adapter-lib.js');
var webview					=	new adapter("webview");
var status					=	{};
var timeout					=	"";
app.use(express.static('/home/pi/QuickSwitch2.0/SwitchServer/adapter/webview/dist'));		// provides static htmls

app.get('/pc', function(req, res) {
	res.sendFile('/home/pi/QuickSwitch2.0/SwitchServer/adapter/webview/dist/index.html');
});

try{
	app.listen(webview.settings.port, function(){
		process.send({"statusMessage": "Läut auf Port:" + webview.settings.port});
	});
}catch(e){
    console.log("Port besetzt");
}