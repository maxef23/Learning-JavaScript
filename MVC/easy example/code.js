/* ---------------------------- begin view ----------------------------- */
	
	var view = {

		showResult: function (n) {
			var el = document.getElementById("showResult");
			el.innerHTML = n;
		}

	};

/* ----------------------------- end view ------------------------------ */

	

/* ---------------------------- begin model ---------------------------- */
	
	var model = {
		number: 0,

		calculate: function (x, y) {

			this.number = x * y;
			return this.number;

		}
	};

/* ----------------------------- end model ----------------------------- */


/* -------------------------- begin controller ------------------------- */
	
	var controller = {

		handleClick: function (x, y) {
			var result = model.calculate(x, y);
			view.showResult(result);
		}

	};

/* --------------------------- end controller -------------------------- */




/* --------------------- anonymous initialize function ----------------- */
	(function() {

		var app = {

			init: function () {
				this.main();
				this.event();
			},

			main: function () {

			},

			event: function () {
				var el = document.getElementById("calcUser");
				el.onclick = function () {
					x = document.getElementById("first").value;
					y = document.getElementById("second").value;
					re = /^\d+$/;
					re.test(x) && re.test(y) ? controller.handleClick(x, y) : view.showResult("Проверьте введенные данные");
				}
				
			}

		};
		
		app.init();

	}());
/* --------------------- anonymous initialize function ----------------- */