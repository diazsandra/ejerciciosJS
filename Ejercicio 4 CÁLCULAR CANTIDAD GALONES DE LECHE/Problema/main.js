var L = prompt("Introduce la cantidad de litros producidos en el día")
var G = (parseInt(L)/3.785)
alert("La cantidad de galones producidos en el día es de " + G)

var P = prompt("Introduce el precio por galón")
//Investigar como dar resultados con menos decimales
var T = (parseFloat(P)*parseFloat(G))
alert("La cantidad de dinero por la venta de los galones obtenidos en el día es: $" + T + " pesos")

