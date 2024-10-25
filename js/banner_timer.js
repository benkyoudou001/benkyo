var startday = [];
var endday = [];
startday[1] = new Date('2024/10/24 18:00:00');
endday[1] = new Date('2024/10/25 23:59:59');
var today = new Date();
for (i = 1; i <= 2; i++) {
    if (startday[i] > today || today > endday[i]) {
        $('#coopon' + i).remove();
    }
}