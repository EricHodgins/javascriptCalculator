function print(text) {
	console.log(text);
}

// Calculator Class
var Calculator = function() {
	this.accumulative = 0;
	this.screenText = '';
	this.defaultScreen = '0';
	this.operation = null;
	this.lastNumber = 0;
}

Calculator.prototype.add = function(num) {
	if (this.screenText !== '') {
		this.accumulative += parseFloat(num);	
	} else {
		this.accumulative += parseFloat(this.lastNumber);
	}
	
	
}

Calculator.prototype.equals = function(operation) {
	this[operation](this.screenText);
	this.screenText = this.accumulative.toString();
}

Calculator.prototype.clearAll = function() {
	this.accumulative = 0;
	this.screenText = '';
}


// Calculator UI
var Calc_UI = {
	bindNumpad: function() {
				var ui = this;

				document.getElementById('zero').onclick = function() {				
					calculator.screenText += '0'; 
					ui.displayAnswer();				
				}

				document.getElementById('one').onclick = function() {				
					calculator.screenText += '1'; 
					ui.displayAnswer();				
				}
				document.getElementById('two').onclick = function() {				
					calculator.screenText += '2'; 
					ui.displayAnswer();				
				}
				document.getElementById('three').onclick = function() {				
					calculator.screenText += '3'; 
					ui.displayAnswer();				
				}
				document.getElementById('four').onclick = function() {				
					calculator.screenText += '4'; 
					ui.displayAnswer();				
				}
				document.getElementById('five').onclick = function() {				
					calculator.screenText += '5'; 
					ui.displayAnswer();				
				}
				document.getElementById('six').onclick = function() {				
					calculator.screenText += '6'; 
					ui.displayAnswer();				
				}
				document.getElementById('seven').onclick = function() {				
					calculator.screenText += '7'; 
					ui.displayAnswer();				
				}
				document.getElementById('eight').onclick = function() {				
					calculator.screenText += '8'; 
					ui.displayAnswer();				
				}
				document.getElementById('nine').onclick = function() {				
					calculator.screenText += '9'; 
					ui.displayAnswer();				
				}

				document.getElementById('clearAll').onclick = function() {
					calculator.screenText = '';
					calculator.accumulative = 0;
					ui.displayAnswer();
				}

				document.getElementById('plus').onclick = function() {	
					calculator.operation = "add";
					print(calculator.screenText);	
					if (calculator.screenText !== '') {
						calculator.lastNumber = calculator.screenText;
					}

					calculator.add(calculator.lastNumber);
					calculator.screenText = calculator.accumulative.toString();
					ui.displayAnswer();		
					calculator.screenText = '';															
				}

				document.getElementById('equals').onclick = function() {
					calculator.equals(calculator.operation);
					ui.displayAnswer();	
					calculator.screenText = '';				
				}
			
	},


	displayAnswer: function() {
		var ans = document.getElementById('calc-screen');	
		if (calculator.screenText === '') {
			ans.innerHTML = calculator.defaultScreen;
		} else {
			ans.innerHTML = calculator.screenText;	
		}
		
	}

}

// app
var calculator = new Calculator();

Calc_UI.bindNumpad();