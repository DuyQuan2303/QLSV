// tạo đối tượng dssv từ lớp đối tượng dssv
var dssv = new Danhsachsinhvien();


function getEle(id) {
  return document.getElementById(id);
}

function layThongTinSinhVien() {
  var _maSV = getEle("txtMaSV").value;
  var _tenSV = getEle("txtTenSV").value;
  var _emailSV = getEle("txtEmail").value;
  var _matKhauSV = getEle("txtPass").value;
  var _ngaySinh = getEle("txtNgaySinh").value;
  var _khoaHoc = getEle("khSV").value;
  var _diemToan = getEle("txtDiemToan").value * 1;
  var _diemLy = getEle("txtDiemLy").value * 1;
  var _diemHoa = getEle("txtDiemHoa").value * 1;

  var sinhVien = new Sinhvien(
    _maSV,
    _tenSV,
    _emailSV,
    _matKhauSV,
    _ngaySinh,
    _khoaHoc,
    _diemToan,
    _diemLy,
    _diemHoa
  );
  sinhVien.tinhDiemTB();

  return sinhVien;
}


getEle("btnThemSV").addEventListener("click", function () {

  var sinhVien = layThongTinSinhVien();

    dssv.themSV(sinhVien);

  console.log(dssv.arr);
});
