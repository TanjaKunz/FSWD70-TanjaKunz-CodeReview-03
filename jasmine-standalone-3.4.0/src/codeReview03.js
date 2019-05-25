function calcInsurance(country, HP, age) {

if (country == "austria") {
	insurance = (HP *  100) / age + 50;
	} else if (country == "greece") {
	 	insurance = HP *  150 / (parseInt(age) + 3) + 50;
	} else {
		insurance = (HP *  120) / age + 100;
	};

	return insurance
}