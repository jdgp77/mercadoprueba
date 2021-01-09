export const formatMoney = (numero, decimales = 2, decPunto = ',', sepMiles = '.') => {
  numero = roundOut(numero,decimales);
  var stNumero = numero.toString();
  var valor = stNumero.split(".");
  if (valor[0] == undefined) {
    valor[0] = 0;
  }
  if (valor[1] == undefined) {
    var valDecimal = "";
  } else {
    var valDecimal = valor[1];
  }
  while (valDecimal.length < decimales) {
    valDecimal=valDecimal+"0";
  }
  var numeroEntero="";
  var noUltimosTres;
  var valorEnteroTemp = valor[0];
  var valorEnteroTempLeng = valorEnteroTemp.length;
  while (valorEnteroTempLeng>3) {
    noUltimosTres = valorEnteroTemp.substr(valorEnteroTempLeng - 3, valorEnteroTempLeng);
    if(numeroEntero=="") {
      numeroEntero = sepMiles + noUltimosTres;
    }
    else {
      numeroEntero=sepMiles+noUltimosTres+numeroEntero;
    }
    valorEnteroTemp=valorEnteroTemp.substr(0, valorEnteroTempLeng-3);
    valorEnteroTempLeng=valorEnteroTemp.length;
  }
  return '$ ' + valorEnteroTemp + numeroEntero + (decimales !== 0 ? decPunto + valDecimal : '');
}
export const roundOut = function(valor, decimales) {
  let myDecimales = Math.pow(10,decimales);
  return Math.round(valor * myDecimales) / myDecimales;
}