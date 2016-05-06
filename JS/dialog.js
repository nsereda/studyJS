//класс генерации айдишника
function IdGenerator()
{
	var num = 1;

	this.getID = function()
	{
		return num++;
	}
}

var generator = new IdGenerator();

//класс модального окна
function modalWindow(styles, params) 
{
	var id;
	//стили окна
	var windowStyles = {};
	//текст окна
	var windowParams = {};
	var self = this;

	

	this.setParams = function(param, value)
	{
		if(param === undefined || value === undefined) {
			throw new Error("Значение должно быть не пустым");
		}
		windowParams[param] = value;
	};

	this.setStyle = function(style, value)
	{
		if(style === undefined || value === undefined) {
			throw new Error("Значение должно быть не пустым");
		}

		windowStyles[style] = value;
	};

	var constuctor = function(styles, params)
	{	
		id = generator.getID();
		for(var key in styles) {
			self.setStyle(key, styles[key]);
		}
		for(var key in params){
			self.setParams(key, params[key]);
		}
	};

	constuctor(styles, params);

	this.getID = function()
	{
		return id;
	};

	this.getStyles = function(style)
	{
		if(style) {
			for(style in windowStyles)
				return windowStyles[style];
		} 
		return windowStyles;
	};

	this.getParams = function(param)
	{
		if(param) {
			for(param in windowParams)
				return windowParams[param];
		}
		return windowParams;
	};


	//создание окна
	this.createWindow = function() 
	{
		var div = document.createElement('div');
		div.id = self.getID();

		var styles = self.getStyles();
		for(var key in styles) {
			div.style[key] = styles[key];
		}

		var params = self.getParams();
		for(var key in params) {
			div[key] = params[key];
		}

		document.body.appendChild(div);
	};
	//закрытие окна
	this.removeWindow = function() {};
	//перемещение окна
	this.moveWindowTo = function(x,y) {};

}

var winStyles = {
	'width' : '500',
	'height' : '500',
	'border' : '1px double black',
	'boxShadow' : 'inset 0 0 1em gold, 0 0 1em red',
};

var newWindow = new modalWindow(winStyles);
newWindow.createWindow();
