function Sinhvien(
  _maSV,
  _tenSV,
  _emailSV,
  _matKhauSV,
  _ngaySinh,
  _khoaHoc,
  _diemToan,
  _diemLy,
  _diemHoa
) {
  this.maSV = _maSV;
  this.tenSV = _tenSV;
  this.emailSV = _emailSV;
  this.matKhauSV = _matKhauSV;
  this.ngaySinh = _ngaySinh;
  this.khoaHoc = _khoaHoc;
  this.diemToan = _diemToan;
  this.diemLy = _diemLy;
  this.diemHoa = _diemHoa;
  
  this.diemTB = function () {
   return  (this.diemToan + this.diemLy + this.diemHoa) / 3;
  };
}
