function getInfo() {
	var name = document.getElementById("name").value;
	var age = document.getElementById("age").value;
	var country = document.getElementById("country").value;
	var HP = document.getElementById("HP").value;
	

	var customer = {
		name: name,
		age: age,
		country: country,
		HP: HP,
		msg: function() {
			var insurance;

			if (country == "austria") {
				insurance = (this.HP *  100) / this.age + 50;
			} else if (country == "greece") {
			 	insurance = this.HP *  150 / (parseInt(this.age) + 3) + 50;
			} else {
				insurance = (this.HP *  120) / this.age + 100;
			};

			return "Dear " + this.name + ", insurance for a car with a HP of " + this.HP + " is <br><b>" + insurance.toFixed(2) + "</b>"
		}
	}

	var result = document.getElementById("result");
	result.innerHTML = customer.msg();
	
	return false
}


document.getElementById("btn").addEventListener("click", getInfo, false);





