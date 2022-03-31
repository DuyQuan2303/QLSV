function Danhsachsinhvien() {
  this.arr = [];

  // Thêm sinh viên
  this.themSV = function (sv) {
    this.arr.push(sv);
  };

//   Tìm vị trí sinh viên 
this.timViTriSV = function (maSV){
    var index = -1;
    for (var i = 0; i < this.arr.length; i++) {
      var sinhVien = this.arr[i];
      if (sinhVien.maSV === maSV) {
        index = i;
        break;
      }
    }
    return index;
}
  // Xóa sinh viên
  this.xoaSV = function (maSV) {
    /**
     * Tạo biến index = -1
     * duyệt mảng arr
     * nếu sinhVien.maSV trùng với maSV cần xóa
     * => gán cho index vị trí tìm thấy; break
     * xóa phần tử trong mảng
     */
    var index = this.timViTriSV(maSV);

    if (index !== -1) {
      this.arr.splice(index, 1);
    }
  };

  // Sửa sinh viên
  this.suaSV = function (maSV) {
    var index = this.timViTriSV(maSV);

    if (index !== -1){
        // lay object sinh vien trong arr dua vao index 
        var sinhVien = this.arr[index];
        return sinhVien;
    }
    return null ;
  };

  // Cập nhật sinh viên
  this.capNhatSV = function () {};

  // Tìm kiếm sinh viên
  this.timKiemSV = function () {};
}
