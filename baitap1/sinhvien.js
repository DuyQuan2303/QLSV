// lớp đối tượng Sinhvien ( viet hoa chu cai dau)
// hamf khởi tạo của lớp đối tượng sinh viên
function Sinhvien(_maSV, _tenSV, _loaiSV, _diemToan, _diemVan) {
  this.maSV = _maSV;
  this.tenSV = _tenSV;
  this.loaiSV = _loaiSV;
  this.diemToan = _diemToan;
  this.diemVan = _diemVan;
  this.diemTB = 0;

  this.tinhDTB = function () {
    this.diemTB = (this.diemToan + this.diemVan) / 2;
  };

  this.xepLoai = function (dtb) {
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
  };
}
