document.getElementById("tinhNgay").onclick = function() {
    var thang = Number(document.getElementById("thang").value);
    var nam = Number(document.getElementById("nam").value);
    var ngay = Number(document.getElementById("ngay").value);

    var ngayTiepTheo = 0;
    var thangTiepTheo = 0;
    var namTiepTheo = 0;

    if (thang = 12 && ngay === 31) {
        namTiepTheo = nam + 1;
        ngayTiepTheo = 1;
        thangTiepTheo = 1;
    }
    if ((thang === 1 || thang === 3 || thang === 5 || thang === 7 || thang === 8 || thang === 10) && ngay === 31) {
        thangTiepTheo = thang + 1;
        ngayTiepTheo = 1;
        namTiepTheo = nam;
    }
    if ((thang === 1 || thang === 3 || thang === 5 || thang === 7 || thang === 8 || thang === 10 || thang === 12) && ngay < 31) {
        thangTiepTheo = thang;
        ngayTiepTheo = ngay + 1;
        namTiepTheo = nam;
    }
    if ((thang === 4 || thang === 6 || thang === 9 || thang === 11) && ngay === 30) {
        thangTiepTheo = thang + 1;
        ngayTiepTheo = 1;
        namTiepTheo = nam;
    }
    if ((thang === 4 || thang === 6 || thang === 9 || thang === 11) && ngay < 30) {
        thangTiepTheo = thang;
        ngayTiepTheo = ngay + 1;
        namTiepTheo = nam;
    }
    if (thang === 2 && ngay === 28) {
        thangTiepTheo = 3;
        ngayTiepTheo = 1;
        namTiepTheo = nam;
    }
    if (thang === 2 && ngay < 28) {
        thangTiepTheo = 2;
        ngayTiepTheo = ngay + 1;
        namTiepTheo = nam;
    }

    console.log(ngayTiepTheo, thangTiepTheo, namTiepTheo);

    document.getElementById('ngayTiepTheo').innerHTML = ngayTiepTheo;
    document.getElementById('thangTiepTheo').innerHTML = thangTiepTheo;
    document.getElementById('namTiepTheo').innerHTML = thangTiepTheo;




}