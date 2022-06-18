document.getElementById("docSo").onclick = function() {
    var so = Number(document.getElementById('nhapSo').value);
    var hangTram = Math.floor(so / 100);
    var hangChuc = Math.floor((so - hangTram * 100) / 10);
    var hangDonVi = so - hangTram * 100 - hangChuc * 10;
    var docHangTram = "";
    var docHangChuc = "";
    var docHangDonVi = "";

    if (hangTram === 0) {
        docHangTram = "Không";
    }
    if (hangTram === 1) {
        docHangTram = "Một";
    }
    if (hangTram === 2) {
        docHangTram = "Hai";
    }
    if (hangTram === 3) {
        docHangTram = "Ba";
    }
    if (hangTram === 4) {
        docHangTram = "Bốn";
    }
    if (hangTram === 5) {
        docHangTram = "Năm";
    }
    if (hangTram === 6) {
        docHangTram = "Sáu";
    }
    if (hangTram === 7) {
        docHangTram = "Bảy";
    }
    if (hangTram === 8) {
        docHangTram = "Tám";
    }
    if (hangTram === 9) {
        docHangTram = "Chín";
    }
    if (hangTram === 0) {
        docHangChuc = "Không";
    }
    if (hangChuc === 1) {
        docHangChuc = "Một";
    }
    if (hangChuc === 2) {
        docHangChuc = "Hai";
    }
    if (hangChuc === 3) {
        docHangChuc = "Ba";
    }
    if (hangChuc === 4) {
        docHangChuc = "Bốn";
    }
    if (hangChuc === 5) {
        docHangChuc = "Năm";
    }
    if (hangChuc === 6) {
        docHangChuc = "Sáu";
    }
    if (hangChuc === 7) {
        docHangChuc = "Bảy";
    }
    if (hangChuc === 8) {
        docHangChuc = "Tám";
    }
    if (hangChuc === 9) {
        docHangChuc = "Chín";
    }
    if (hangTram === 0) {
        docHangTram = "Không";
    }
    if (hangDonVi === 1) {
        docHangDonVi = "Một";
    }
    if (hangDonVi === 2) {
        docHangDonVi = "Hai";
    }
    if (hangDonVi === 3) {
        docHangDonVi = "Ba";
    }
    if (hangDonVi === 4) {
        docHangDonVi = "Bốn";
    }
    if (hangDonVi === 5) {
        docHangDonVi = "Năm";
    }
    if (hangDonVi === 6) {
        docHangDonVi = "Sáu";
    }
    if (hangDonVi === 7) {
        docHangDonVi = "Bảy";
    }
    if (hangDonVi === 8) {
        docHangDonVi = "Tám";
    }
    if (hangDonVi === 9) {
        docHangDonVi = "Chín";
    }

    document.getElementById('ketQua').innerHTML = docHangTram + " trăm " + docHangChuc + " Chục " + docHangDonVi + " đơn vị";
}