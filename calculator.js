function print(text) {
	console.log(text);
}

// Calculator Class
var Calculator = function() {
	this.screenText = '';
	this.storedNumber = '';
	this.accumulative = 0;
	this.operation = false;
	this.savedOperation = false;
}

Calculator.prototype.add = function(num) {
	if (this.screenText !== '') {
		this.accumulative += parseFloat(num);
	}
}

Calculator.prototype.subtract = function(num) {
	if (this.screenText !== '') {
		this.accumulative -= parseFloat(num);
		print(this.accumulative);
	}
}

Calculator.prototype.equals = function(operation) {
	if (this.screenText !== '') {
		this[operation](this.storedNumber);
	}
}

Calculator.prototype.clearAll = function() {
	this.screenText = '';
	this.accumulative = 0;
}


// Calculator UI
var Calc_UI = {
	bindNumpad: function() {
				var ui = this;

				document.getElementById('decimal').onclick = function() {				
					calculator.screenText += '.'; 
					calculator.storedNumber = calculator.screenText;
					calculator.operation = false;
					ui.displayAnswer();				
				}				

				document.getElementById('zero').onclick = function() {				
					calculator.screenText += '0'; 
					calculator.storedNumber = calculator.screenText;
					calculator.operation = false;
					ui.displayAnswer();				
				}

				document.getElementById('one').onclick = function() {		
					calculator.screenText += '1';
					calculator.storedNumber = calculator.screenText;
					calculator.operation = false; 					
					ui.displayAnswer();				
				}
				document.getElementById('two').onclick = function() {									
					calculator.screenText += '2';
					calculator.storedNumber = calculator.screenText;
					calculator.operation = false; 			
					ui.displayAnswer();				
				}
				document.getElementById('three').onclick = function() {								
					calculator.screenText += '3';
					calculator.storedNumber = calculator.screenText;
					calculator.operation = false; 				
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
			

				document.getElementById('plus').onclick = function() {	
					if (calculator.operation !== 'add') {						
						calculator.savedOperation = 'add';

						if (calculator.operation !== 'equals') {
							calculator.operation = 'add';
							calculator.add(calculator.screenText);
							calculator.screenText = calculator.accumulative;
							ui.displayAnswer();												
						}

						calculator.screenText = '';
					}

																			
				}

				document.getElementById('minus').onclick = function() {	
					if (calculator.operation !== 'subtract') {						
						calculator.savedOperation = 'subtract';

						if (calculator.operation !== 'equals') {
							calculator.operation = 'subtract';
							calculator.subtract(calculator.screenText);
							calculator.screenText = calculator.accumulative;
							ui.displayAnswer();												
						}

						calculator.screenText = '';
					}

																			
				}

				document.getElementById('equals').onclick = function() {
					calculator.operation = 'equals';
					calculator.equals(calculator.savedOperation);
					calculator.screenText = calculator.accumulative;
					ui.displayAnswer();
				}

				document.getElementById('clearAll').onclick = function() {
					calculator.clearAll();
					ui.displayAnswer();
				}
			
	},


	displayAnswer: function() {
		var ans = document.getElementById('calc-screen');	
		if (calculator.screenText === '') {
			ans.innerHTML = 0;
		} else {
			ans.innerHTML = calculator.screenText;	
		}
		
	}

}

// app
var calculator = new Calculator();

Calc_UI.bindNumpad();