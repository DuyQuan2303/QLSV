function getEle(id) {
  return document.getElementById(id);
}

function hienThiThongTin() {
  // DOM lay thong tin tu cac the input
  var _maSV = getEle("txtMaSV").value;
  var _tenSV = getEle("txtTenSV").value;
  var _loaiSV = getEle("loaiSV").value;
  var _diemToan = getEle("txtDiemToan").value * 1;
  var _diemVan = getEle("txtDiemVan").value * 1;

  /**
   * Đối tượng gồm 2 thành phần
   * - Thuộc tính (property): Nhũng thông tin của đối tượng
   * - Phương thức(method): Chức năng của đối tượng
   */
  // Property
  // var sinhVien = {
  //   /**
  //    * key: value
  //    *    - key: do mình tự đặt tên
  //    *    - value: giá trị
  //    */
  //   maSV: _maSV,
  //   tenSV: _tenSV,
  //   loaiSV: _loaiSV,
  //   diemToan: _diemToan,
  //   diemVan: _diemVan,
  //   diemTB: 0,

  //   // Method
  //   tinhDTB: function () {
  //     this.diemTB = (this.diemToan + this.diemVan) / 2;
  //   },

  //   xeploai: function (dtb) {
  //       if (8 <= dtb && dtb <= 10) {
  //           // gioi
  //           return "Gioi";
  //         } else if (6 <= dtb && dtb < 8) {
  //           // kha
  //           return "Kha";
  //         } else if (5 <= dtb && dtb < 6) {
  //           // trung binh
  //           return "TB";
  //         } else {
  //           // yeu
  //           return "Yeu";
  //         }
  //   },
  // };
  sinhVien.tinhDTB();
  var loai = sinhVien.xeploai(sinhVien.diemTB)


  getEle("spanTenSV").innerHTML = sinhVien.tenSV;
  getEle("spanMaSV").innerHTML = sinhVien.maSV;
  getEle("spanLoaiSV").innerHTML = sinhVien.loaiSV;
  getEle("spanDTB").innerHTML = sinhVien.diemTB;
  getEle("spanXepLoai").innerHTML = loai;
}
