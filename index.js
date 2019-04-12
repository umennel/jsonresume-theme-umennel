var fs = require("fs");
var path = require('path');
var Handlebars = require("handlebars");

function render(resume) {
	var bootstrapcss = fs.readFileSync(__dirname + "/bootstrap.css", "utf-8");
	var css = fs.readFileSync(__dirname + "/style.css", "utf-8");
	var printcss = fs.readFileSync(__dirname + "/print.css", "utf-8");
	var tpl = fs.readFileSync(__dirname + "/resume.hbs", "utf-8");
	var partialsDir = path.join(__dirname, 'partials');
	var filenames = fs.readdirSync(partialsDir);

	filenames.forEach(function (filename) {
	  var matches = /^([^.]+).hbs$/.exec(filename);
	  if (!matches) {
	    return;
	  }
	  var name = matches[1];
	  var filepath = path.join(partialsDir, filename)
	  var template = fs.readFileSync(filepath, 'utf8');

	  Handlebars.registerPartial(name, template);
	});

	Handlebars.registerHelper('toLowerCase', function(str) {
		return str.toLowerCase();
	});

	Handlebars.registerHelper('getMonth', function(dateStr) {
		var months = ["January", "February", "March", "April", "May", "June",
			"July", "August", "September", "October", "November", "December"];
		return months[parseInt(dateStr.substr(5,2))-1] || '';
	});

	Handlebars.registerHelper('getYear', function(dateStr) {
		return dateStr.substr(0,4);
	});

	Handlebars.registerHelper('join', function(array, separator) {
		return array.join(separator);
	});

	return Handlebars.compile(tpl)({
		bootstrapcss: bootstrapcss,
		css: css,
		printcss: printcss,
		resume: resume
	});
}

module.exports = {
	render: render
};