const Signo_Aries = "Aries"
const Signo_Tauro = "Tauro"
const Signo_Geminis = "Geminis"
const Signo_Cancer = "Cancer"
const Signo_Leo = "Leo"
const Signo_Virgo = "Virgo"
const Signo_Libra = "Libra"
const Signo_Escorpio = "Escorpio"
const Signo_Sagitario = "Sagitario"
const Signo_Capricornio = "Capricornio"
const Signo_Acuario = "Acuario"
const Signo_Piscis = "Piscis"
//Signos zodiacales

let mes = 0
let dia = 0

//Si no se ingresa un mes correcto seguira preguntando
while(mes < 1 || mes > 12){
  mes = parseInt(prompt("Ingrese mes de nacimiento (1-12)"))
  if(!mes || mes < 1 || mes > 12){
    alert("El mes ingresado es incorrecto")
    mes = 0
  }
}

// Si no se ingresa un dia correcto seguira preguntando
while(dia < 1 || dia > 31){
  dia = parseInt(prompt("Ingrese dia de nacimiento (1-31)"))
  if (!dia || dia < 1 || dia > 31){
    alert("El dia ingresado es incorrecto")
    dia = 0
  }
}

//Fechas signos zodiacales
//Aries (21 de marzo - 20 de abril)
if ((mes == 3) && (dia >= 21 && dia <= 31)){
      alert("Su signo zodiacal es "+Signo_Aries)
} else if ((mes == 4) && (dia >= 1 && dia <= 20)){
      alert("Su signo zodiacal es "+Signo_Aries)
}

//Tauro (21 de abril - 20 de mayo)
else if ((mes == 4) && (dia >= 21 && dia <= 30)){
      alert("Su signo zodiacal es "+Signo_Tauro)
} else if ((mes == 5) && (dia >= 1 && dia <= 20)){
      alert("Su signo zodiacal es "+Signo_Tauro)
}

//Geminis (21 de mayo - 20 de junio)
else if ((mes == 5) && (dia >= 21 && dia <= 31)){
      alert("Su signo zodiacal es "+Signo_Geminis)
} else if ((mes == 6) && (dia >= 1 && dia <= 20)){
      alert("Su signo zodiacal es "+Signo_Geminis)
}

//Cáncer (21 de junio - 22 de julio)
else if ((mes == 6) && (dia >= 21 && dia <= 30)){
      alert("Su signo zodiacal es "+Signo_Cancer)
} else if ((mes == 7) && (dia >= 1 && dia <= 22)){
      alert("Su signo zodiacal es "+Signo_Cancer)
}

//Leo (23 de julio - 23 de agosto)
else if ((mes == 7) && (dia >= 23 && dia <= 31)){
      alert("Su signo zodiacal es "+Signo_Leo)
} else if ((mes == 8) && (dia >= 1 && dia <= 23)){
      alert("Su signo zodiacal es "+Signo_Leo)
}

//Virgo (24 de agosto - 22 de septiembre)
else if ((mes == 8) && (dia >= 24 && dia <= 31)){
      alert("Su signo zodiacal es "+Signo_Virgo)
} else if ((mes == 9) && (dia >= 1 && dia <= 22)){
      alert("Su signo zodiacal es "+Signo_Virgo)
}

//Libra (23 de septiembre - 23 de octubre)
else if ((mes == 9) && (dia >= 23 && dia <= 30)){
      alert("Su signo zodiacal es "+Signo_Libra)
} else if ((mes == 10) && (dia >= 1 && dia <= 23)){
      alert("Su signo zodiacal es "+Signo_Libra)
}

//Escorpio (24 de octubre - 22 de noviembre)
else if ((mes == 10) && (dia >= 24 && dia <= 31)){
      alert("Su signo zodiacal es "+Signo_Escorpio)
} else if ((mes == 11) && (dia >= 1 && dia <= 22)){
      alert("Su signo zodiacal es "+Signo_Escorpio)
}

//Sagitario (23 de noviembre - 21 de diciembre)
else if ((mes == 11) && (dia >= 23 && dia <= 30)){
      alert("Su signo zodiacal es "+Signo_Sagitario)
}
else if ((mes == 12) && (dia >= 1 && dia <= 21)){
      alert("Su signo zodiacal es "+Signo_Sagitario)
}

//Capricornio (22 de diciembre - 20 de enero)
else if ((mes == 12) && (dia >= 22 && dia <= 31)){
      alert("Su signo zodiacal es "+Signo_Capricornio)
} else if ((mes == 1) && (dia >= 1 && dia <= 20)){
      alert("Su signo zodiacal es "+Signo_Capricornio)
}

//Acuario (21 de enero - 19 de febrero)
 
else if ((mes == 1) && (dia >= 21 && dia <= 31)){
      alert("Su signo zodiacal es "+Signo_Acuario)
} else if ((mes == 2) && (dia >= 1 && dia <= 19)){
      alert("Su signo zodiacal es "+Signo_Acuario)
}

//Piscis (20 de febrero - 20 de marzo)
else if ((mes == 2) && (dia >= 20 && dia <= 29)){
      alert("Su signo zodiacal es "+Signo_Piscis)
} else if ((mes == 2) && (dia == 30 || dia == 31)){
      alert("El mes de febrero solo tiene 28 o 29 dias")
} else if ((mes == 3) && (dia >= 1 && dia <= 20)){
      alert("Su signo zodiacal es "+Signo_Piscis)
}