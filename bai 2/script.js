document.getElementById("tinhSoNgay").onclick = function() {
    var thang = Number(document.getElementById("thang").value);
    var nam = Number(document.getElementById("nam").value);
    var ketqua = 0;

    if (nam % 4 !== 0 && nam > 0 && thang > 0 && thang < 13) {
        if (thang === 1 || thang === 3 || thang === 5 || thang === 7 || thang === 8 || thang === 10 || thang === 12) {
            ketqua = 31;
        }
        if (thang === 4 || thang === 6 || thang === 9 || thang === 11) {
            ketqua = 30;
        }
        if (thang === 2) {
            ketqua = 28;
        }
    }
    if (nam % 4 === 0 && nam > 0 && thang > 0 && thang < 13) {
        if (thang === 1 || thang === 3 || thang === 5 || thang === 7 || thang === 8 || thang === 10 || thang === 12) {
            ketqua = 31;
        }
        if (thang === 4 || thang === 6 || thang === 9 || thang === 11) {
            ketqua = 30;
        }
        if (thang === 2) {
            ketqua = 29;
        }
    }
    if (nam < 1 || thang < 1 || thang > 12) {
        ketqua = "vui lòng nhập lại năm và tháng"
    }
    var ketQua = ketqua + "";
    document.getElementById('ketQua').innerHTML = ketQua;

    console.log(ketQua, ketqua);

}