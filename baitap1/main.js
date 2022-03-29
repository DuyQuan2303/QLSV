function getEle(id) {
  return document.getElementById(id);
}

// Hien thi thong tin
function hienThiThongTin() {
  // DOM lay thong tin tu cac the input
  var maSV = getEle("txtMaSV").value;
  var tenSV = getEle("txtTenSV").value;
  var loaiSV = getEle("loaiSV").value;
  var diemToan = getEle("txtDiemToan").value * 1;
  var diemVan = getEle("txtDiemVan").value * 1;

  // xu ly
  // 1: Tinh DTB
  var dtb = tinhDTB(diemToan, diemVan);

  // Xep loai
  var loai = xeploai(dtb);
  // Show thong tin

  getEle("spanTenSV").innerHTML = tenSV;
  getEle("spanMaSV").innerHTML = maSV;
  getEle("spanLoaiSV").innerHTML = loaiSV;
  getEle("spanDTB").innerHTML = dtb;
  getEle("spanXepLoai").innerHTML = loai;
}

function tinhDTB(toan, van) {
  return (toan + van) / 2;
}

function xeploai(dtb) {
  if (8 <= dtb && dtb <= 10) {
    // gioi
    return "Gioi";
  } else if (6 <= dtb && dtb < 8) {
    // kha
    return "Kha";
  } else if (5 <= dtb && dtb < 6) {
    // trung binh
    return "TB";
  } else {
    // yeu
    return "Yeu";
  }
}
