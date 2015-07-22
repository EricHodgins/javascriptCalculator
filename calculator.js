function print(text) {
	console.log(text);
}

// Calculator Class
var Calculator = function() {
	this.screenText = '';
	this.formula = '';
	this.formulaTracking = '';
	this.accumulative = '';
	this.equalsPressed = false;
}

Calculator.prototype.calculateFormula = function(formula) {
	this.accumulative = eval(formula);
	this.formula = this.accumulative;
	this.screenText = this.accumulative;	
}

Calculator.prototype.equals = function(formula) {
	this.calculateFormula(formula);
}

Calculator.prototype.clearAll = function() {
	this.formula = '';
	this.formulaTracking = '';
	this.screenText = '';
	this.accumulative = '';
	this.equalsPressed = false;
}


// Calculator UI
var Calc_UI = {
	bindNumpad: function() {
				var ui = this;
				var numbersPad = document.getElementsByClassName("number");
				for (var i = 0; i < numbersPad.length; i++) {
					function bindAllnumbers(idx) {
						numbersPad[idx].onclick = function() {
							if (calculator.equalsPressed === true) {
								calculator.clearAll();							
							}						
							calculator.screenText += numbersPad[idx].getAttribute('value');							
							calculator.formula += numbersPad[idx].getAttribute('value');
							calculator.formulaTracking += numbersPad[idx].getAttribute('value');
							ui.displayAnswer();
						}
					}

					bindAllnumbers(i);
				}

				document.getElementById('clearAll').onclick = function() {
					calculator.clearAll();
					ui.displayAnswer();
				}

				document.getElementById('plus').onclick = function() {	
					if (/^([-/*///+/])$/.test(calculator.formula[calculator.formula.length - 2]) ) {		
						print('adjust');				
						ui.adjustFormula(' + ');
					} else {
						print('add');						
						ui.addToFormula(' + ');
					}												
				}

				document.getElementById('minus').onclick = function() {	
					if (/^([/+//*//-])$/.test(calculator.formula[calculator.formula.length - 2]) ) {
						ui.adjustFormula(' - ');
					} else {
						ui.addToFormula(' - ');
					}																						
				}

				document.getElementById('multiply').onclick = function() {	
					if (/^([/+//*//-])$/.test(calculator.formula[calculator.formula.length - 2]) ) {
						ui.adjustFormula(' * ');
					} else {
						ui.addToFormula(' * ');
					}																	
				}

				document.getElementById('divide').onclick = function() {	
					if (/^([/+//*/-/])$/.test(calculator.formula[calculator.formula.length - 2]) ) {						
						ui.adjustFormula(' / ');
					} else {					
						ui.addToFormula(' / ');	
					}															
				}

				document.getElementById('plusMinus').onclick = function() {
					calculator.formula = calculator.formula.toString();
					calculator.screenText = calculator.formula;
					
					if (calculator.screenText[0] !== "-" && calculator.formula >= 0) {																			
						calculator.screenText = "- " + calculator.screenText;
						calculator.formula = calculator.formula.substr(0, calculator.formula.length - 1);
						calculator.formula += calculator.screenText;					
					} else {						
						calculator.formula = calculator.formula.substr(1, calculator.formula.length - 1);						
					}
					ui.displayAnswer();
				}

				document.getElementById('equals').onclick = function() {
					calculator.equals(calculator.formula);
					ui.displayAnswer();		
					calculator.formula = calculator.screenText;
					calculator.screenText = '';
					calculator.equalsPressed = true;
				}
			
	},

	addToFormula: function(operation) {
		if (calculator.formula !== '') {
			calculator.calculateFormula(calculator.formula);
			calculator.formula += operation;
			calculator.formulaTracking += operation;
			this.displayAnswer();
			calculator.screenText = '';
			calculator.equalsPressed = false;
		}	
	},

	adjustFormula: function(newOperator) {
		calculator.formula = calculator.formula.substr(0, calculator.formula.length - 3);
		calculator.formulaTracking = calculator.formulaTracking.substr(0, calculator.formulaTracking.length - 3);
		calculator.formula += newOperator;
		calculator.formulaTracking += newOperator;
		calculator.equalsPressed = false;
	},


	displayAnswer: function() {
		var ans = document.getElementById('calc-screen');	
		if (calculator.screenText === '') {
			ans.innerHTML = '0';
		} else {
			ans.innerHTML = calculator.screenText;	
		}	
	}
}

// app
var calculator = new Calculator();
Calc_UI.bindNumpad();