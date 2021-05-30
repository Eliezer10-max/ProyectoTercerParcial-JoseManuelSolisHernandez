function limpiar() {
document.getElementById("miForm").reset();
}

var sumar = function(n1,n2,n3,n4,n5,n6){
var x1  = parseInt(document.getElementById("x1").value);
var y1  = parseInt(document.getElementById("y1").value);
var z1  = parseInt(document.getElementById("z1").value);
var x2  = parseInt(document.getElementById("x2").value);
var y2  = parseInt(document.getElementById("y2").value);
var z2  = parseInt(document.getElementById("z2").value);
x = x1+x2;
y = y1+y2;
z = z1+z2;
	alert("Sustitucion: "+x1+"x+"+y1+"y+"+z1+"z;  "+x2+"x+"+y2+"y+"+z2+"z");
	return "Al sumarlos: "+x+"x+"+y+"y+"+z+"z";
}

var ace = function(n1){
var kg  = parseInt(document.getElementById("kg").value);
a = 21/kg;
	return "Aceleracion producida: "+a+" m/s²";
}