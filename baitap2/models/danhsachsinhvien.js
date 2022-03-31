function Danhsachsinhvien() {
  this.arr = [];

  // Thêm sinh viên
  this.themSV = function (sv) {
    this.arr.push(sv);
  };
  // Xóa sinh viên
  this.xoaSV = function (maSV) {
    /**
     * Tạo biến index = -1
     * duyệt mảng arr
     * nếu sinhVien.maSV trùng với maSV cần xóa
     * => gán cho index vị trí tìm thấy; break
     * xóa phần tử trong mảng
     */
    var index = -1;
    for (var i = 0; i < this.arr.length; i++) {
      var sinhVien = this.arr[i];
      if (sinhVien.maSV === maSV) {
        index = i;
        break;
      }
    }
    if (index !== -1) {
      this.arr.splice(index, 1);
    }
  };

  // Sửa sinh viên
  this.suaSV = function () {};

  // Cập nhật sinh viên
  this.capNhatSV = function () {};

  // Tìm kiếm sinh viên
  this.timKiemSV = function () {};
}
