var fs = require("fs");
var path = require('path');
var Handlebars = require("handlebars");

function render(resume) {
	var bootstrapcss = fs.readFileSync(__dirname + "/bootstrap.css", "utf-8");
	var css = fs.readFileSync(__dirname + "/style.css", "utf-8");
	var printcss = fs.readFileSync(__dirname + "/print.css", "utf-8");
	resume.basics.picture = "../" + resume.basics.picture;
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