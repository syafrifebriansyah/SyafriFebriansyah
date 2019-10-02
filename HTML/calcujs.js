function maxi(){
	var val1 = document.formnya.nilai1.value;
	var val2 =document.formnya.nilai2.value;
	var val3 =document.formnya.nilai3.value;
	var max =Math.max(val1,val2,val3);
	//document.getElementById('maxi').value = max;
	return max; 
}

function mini(){
	var val1 = document.formnya.nilai1.value;
	var val2 =document.formnya.nilai2.value;
	var val3 =document.formnya.nilai3.value;
	var mini =Math.min(val1,val2,val3);
	//document.getElementById('mini').value = max;
	return mini; 
}

function meann(){
	var val1 = document.formnya.nilai1.value;
	var val2 =document.formnya.nilai2.value;
	var val3 =document.formnya.nilai3.value;
	var mean =(parseInt(val1)+parseInt(val2)+parseInt(val3))/3;
	//document.getElementById('meann').value = mean;
	return mean; 
}

function mediann(){
	var val1 = document.formnya.nilai1.value;
	var val2 =document.formnya.nilai2.value;
	var val3 =document.formnya.nilai3.value;
	var jum  = new Array(val1,val2,val3).sort();
	//document.getElementById('mediann').value = median;
	return jum[1]; 
}
function bersihkan() {
	var val1 = document.formnya.nilai1.value = "";
	var val2 =document.formnya.nilai2.value = "";
	var val3 =document.formnya.nilai3.value = "";
	var hasil = document.getElementById("hasilHitung");
    hasil.innerHTML = "";
}
function hasil() {
	var hasil = document.getElementById("hasilHitung");
    hasil.innerHTML = "<table>\
    <tr>\
    <td>\
    Mean\
    </td>\
    <td>\
    :\
    </td>\
    <td>\
    "+ meann() +"\
    </td>\
    </tr>\
    <td>\
    Median\
    </td>\
    <td>\
    :\
    </td>\
    <td>\
    "+ mediann() +"\
    </td>\
    </tr>\
    <td>\
    Max\
    </td>\
    <td>\
    :\
    </td>\
    <td>\
    "+ maxi() +"\
    </td>\
    </tr>\
    <td>\
    Min\
    </td>\
    <td>\
    :\
    </td>\
    <td>\
    "+ mini() +"\
    </td>\
    </tr>\
    </table>"
}
