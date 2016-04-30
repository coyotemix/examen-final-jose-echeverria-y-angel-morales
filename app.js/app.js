var html="";
var local1 =
{
	ciudad:"Playas",numSalas: 3, direccion:"barrio central"
};
var local2 =
{
	ciudad:"Guyaquil",numSalas: 5, direccion:"quito y 10 de agosto"
};
var local3 =
{
	ciudad:"Posorja",numSalas: 2, direccion:"centro de posorja"
};


var local =[];
local.push(local1);local.push(local2);local.push(local3);




for (var i=0; i < local.length; i ++)
{
listHTML = '<ul><li>' + local[i].ciudad + '<br>'+local[i].numSalas+ '<br>'+local[i].direccion+ '<br>'+'</li></ul>';
				var infoDiv = document.getElementById("info-locales"); 
				infoDiv.innerHTML+=listHTML;
			}