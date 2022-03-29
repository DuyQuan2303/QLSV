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

  taoBang(dssv.arr);

  
});

// function taoBang(arr) {
//   console.log(arr);
//     //   reset tbody 

//   getEle("tbodySinhVien").innerHTML = "";

//   for (var i = 0; i < arr.length; i++) {
//     var sinhVien = arr[i];

//     //   tao dong`
//     var tagTR = document.createElement("tr");
//     // tao cot
//     var tagTD_maSV = document.createElement("td");
//     var tagTD_tenSV = document.createElement("td");
//     var tagTD_emailSV = document.createElement("td");
//     var tagTD_ngaySinh = document.createElement("td");
//     var tagTD_khoaHoc = document.createElement("td");
//     var tagTD_DTB = document.createElement("td");

//     // gán nội dung cho cột
//     tagTD_maSV.innerHTML = sinhVien.maSV;
//     tagTD_tenSV.innerHTML = sinhVien.tenSV;
//     tagTD_emailSV.innerHTML = sinhVien.emailSV;
//     tagTD_ngaySinh.innerHTML = sinhVien.ngaySinh;
//     tagTD_khoaHoc.innerHTML = sinhVien.khoaHoc;
//     tagTD_DTB.innerHTML = sinhVien.diemTB;

//     // append tung cot vao dong
//     tagTR.appendChild(tagTD_maSV);
//     tagTR.appendChild(tagTD_tenSV);
//     tagTR.appendChild(tagTD_emailSV);
//     tagTR.appendChild(tagTD_ngaySinh);
//     tagTR.appendChild(tagTD_khoaHoc);
//     tagTR.appendChild(tagTD_DTB);

//     // append dong vao tbody
//   getEle("tbodySinhVien").appendChild(tagTR);
    
//   }
// }



function taoBang(arr){
    var content = "";
    for(var i = 0 ; i < arr.length; i++){
        var sinhVien = arr[i];
        content += `
        <tr>
            <td>${sinhVien.maSV}</td>
            <td>${sinhVien.tenSV}</td>
            <td>${sinhVien.emailSV}</td>
            <td>${sinhVien.ngaySinh}</td>
            <td>${sinhVien.khoaHoc}</td>
            <td>${sinhVien.diemTB}</td>

            
        </tr>
        `
    }
    getEle("tbodySinhVien").innerHTML = content ; 
}