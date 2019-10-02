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
function modus() {
  var val1 = document.formnya.nilai1.value;
  var val2 =document.formnya.nilai2.value;
  var val3 =document.formnya.nilai3.value;
    let data = [val1, val2, val3];
    let hitung = 0, max_hitung = 0, modus = 0;
    for (let i = 0; i < data.length; i++) {
        hitung = 0;
        for (let j = 0; j < data.length; j++) {
            if(data[i] == data[j]) {
                hitung++;
            }
        }
        if(hitung > max_hitung) {
            max_hitung = hitung;
            modus = data[i];
        }
    }
    if(max_hitung > 1) {
        return modus;
    }
    else {
        return "Tidak ada modus";
    }
    
}
function hasil() {
  var val1 = document.formnya.nilai1.value;
  var val2 =document.formnya.nilai2.value;
  var val3 =document.formnya.nilai3.value;
	var hasil = document.getElementById("hasilHitung");
    hasil.innerHTML = "<table>\
    <tr><td>Mean</td><td>:</td><td>" + meann(val1,val2,val3) + " </td></tr> \
    <tr><td>Median</td><td>:</td><td>" + mediann(val1,val2,val3) + "</td></tr> \
    <tr><td>Modus</td><td>:</td><td>" + modus(val1,val2,val3) + "</td></tr> \
    <tr><td>Max</td><td>:</td><td>" + maxi(val1,val2,val3) + "</td></tr> \
    <tr><td>Min</td><td>:</td><td>" + mini(val1,val2,val3) + "</td></tr> \
    </table>"
}
