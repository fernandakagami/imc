function calcularImc()
{
	var peso = document.getElementById('peso').value;
	var altura = document.getElementById('altura').value;

	var calculo = peso / (altura * altura);

	if(calculo<18.5){
		alert("Você está abaixo do peso. Seu IMC é: " + calculo);
	}
	else if(calculo>=18.5 && calculo<=25){
		alert("Você está no peso ideal. Seu IMC é: " + calculo);
	}
	else if(calculo>25 && calculo<30) {
	alert("Você está com sobrepeso. Seu IMC é: " + calculo);
	}
	else if(calculo>=30 && calculo<=35) {
	alert("Você está com obesidade grau 1. Seu IMC é: " + calculo);
	}
	else if(calculo>35 && calculo<40) {
	alert("Você está com obesidade grau 2. Seu IMC é: " + calculo);
	}
	else if (calculo>=40){
	alert("Você está com obesidade grau 3. Seu IMC é: " + calculo);
	}
}

