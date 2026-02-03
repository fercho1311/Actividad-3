let reintentar = "si"


//Se repetira el juego si el jugador quiere
while(reintentar == "si" || reintentar == "Si" || reintentar == "SI"){ 

let user = 0

//La persona debe ingresar un numero, si ingresa un texto o un numero que no corresponda se preguntara hasta que se ingrese correctamente
  while(user < 3 || user > 6){
    user = parseInt(prompt("Ingrese un numero entre 3 y 6"))
    if(!user || user < 3 || user > 6){
      alert("El dato ingresado es incorrecto, ingrese un numero entre 3 y 6")
      user = 0
    }
  }

//Numero aleatorio de la computadora
  const cpu = Math.random()

  function NumAleatorio(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(cpu * (max - min +1) + 1)
  }

  let Numero_azar = NumAleatorio(1, 9)
  console.log(NumAleatorio(1,9))

  let question = ""

//La persona debe ingresar la respuesta indicada sino se repetira hasta que se ingrese correctamente
  while(question == ""){
    question = prompt("Adivine si su numero ingresado es mayor, menor o igual al de la computadora (Indique su respuesta con mayor, menor o igual)")
      if(question != "mayor" && question != "menor" && question != "igual"){
        alert("El dato ingresado es incorrecto ingrese mayor, menor o igual")
        question = ""

//Si la persona responde mayor se elegira la respuesta que corresponda
    }   
  if(question == "mayor"){
    if(user > Numero_azar){
      alert("La computadora eligio " +Numero_azar +", y usted eligió " +user+ " Su elección es mayor ¡Ha adivinado!")
    } else if(user < Numero_azar){
      alert("La computadora eligio " +Numero_azar +", y usted eligió " +user+ " Su elección es menor ¡No ha adivinado!")
   } else if(user == Numero_azar){
      alert("La computadora eligio " +Numero_azar +", y usted eligió " +user+ " Su elección es igual ¡No ha adivinado!")
    }
    }

//Si la persona responde menor se elegira la respuesta que corresponda
  else if(question == "menor"){
    if(user < Numero_azar){
       alert("La computadora eligio " +Numero_azar +", y usted eligió " +user+ " Su elección es menor ¡Ha adivinado!")
    } else if(user > Numero_azar){
        alert("La computadora eligio " +Numero_azar +", y usted eligió " +user+ " Su elección es mayor ¡No ha adivinado!")
    } else if(user == Numero_azar){
      alert("La computadora eligio " +Numero_azar +", y usted eligió " +user+ " Su elección es igual ¡No ha adivinado!")
    }
    }

//Si la persona responde igual se elegira la respuesta que corresponda
  else if(question == "igual"){
    if(user == Numero_azar){
      alert("La computadora eligio " +Numero_azar +", y usted eligió " +user+ " Su elección es igual ¡Ha adivinado!")
    } else if(user > Numero_azar){
      alert("La computadora eligio " +Numero_azar +", y usted eligió " +user+ " Su elección es mayor ¡No ha adivinado!")
    }  else if(user < Numero_azar){
      alert("La computadora eligio " +Numero_azar +", y usted eligió " +user+ " Su elección es menor ¡No ha adivinado!")
   }
  }
  }
  reintentar = prompt("¿Quiere volver a jugar? Si o no")
    if(reintentar != "si" && reintentar != "Si" && reintentar != "SI"){
    alert("Fernando Castellanos carne: 26000111")
  }
}
