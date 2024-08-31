var startday = [];
var endday = [];
startday[1] = new Date('2024/08/30 00:00:00'); 
endday[1] = new Date('2024/08/31 23:59:59');
var today = new Date();
for (i = 1; i <= 2; i++) {
    if (startday[i] > today || today > endday[i]) {
        $('#coopon' + i).remove();
    }
}