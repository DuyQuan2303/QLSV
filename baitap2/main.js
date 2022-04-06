// tạo đối tượng dssv từ lớp đối tượng dssv
var dssv = new Danhsachsinhvien();
// tao doi tuong validation tu lop doi tuong Validation
var validation = new Validation();


getLocalStorage();
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
  // Set flag
  var isValid = true;
  //Validation
 


  // Check form
  if (!isValid) return null;


  // tao doi tuong
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

  if (sinhVien){
    dssv.themSV(sinhVien);

    taoBang(dssv.arr);

    setLocalStorage();
  }
  
});

function taoBang(arr) {
  var content = "";
  for (var i = 0; i < arr.length; i++) {
    var sinhVien = arr[i];
    content += `
        <tr>
            <td>${sinhVien.maSV}</td>
            <td>${sinhVien.tenSV}</td>
            <td>${sinhVien.emailSV}</td>
            <td>${sinhVien.ngaySinh}</td>
            <td>${sinhVien.khoaHoc}</td>
            <td>${sinhVien.diemTB}</td>
            <td>
            <button class="btn btn-info" onclick="suaSV('${sinhVien.maSV}')">
            <i class="fa fa-edit"></i>
            </button>
            <button class="btn btn-danger" onclick="xoaSV('${sinhVien.maSV}')">
            <i class="fa fa-trash"></i>
            </button>
            </td>
            
        </tr>
        `;
  }
  getEle("tbodySinhVien").innerHTML = content;

  setLocalStorage();
}

/**
 * Xoa SV
 */
function xoaSV(maSV) {
  console.log(dssv.arr);
  dssv.xoaSV(maSV);
  console.log(dssv.arr);
  setLocalStorage();
  getLocalStorage();
}
/**
 * Sua SV
 */
function suaSV(maSV) {
  var sinhVien = dssv.suaSV(maSV);
  console.log(sinhVien);

  // show
  getEle("txtMaSV").value = sinhVien.maSV;
  getEle("txtMaSV").disabled = true;

  getEle("txtTenSV").value = sinhVien.tenSV;
  getEle("txtEmail").value = sinhVien.emailSV;
  getEle("txtPass").value = sinhVien.matKhauSV;
  getEle("txtNgaySinh").value = sinhVien.ngaySinh;
  getEle("khSV").value = sinhVien.khoaHoc;
  getEle("txtDiemToan").value = sinhVien.diemToan;
  getEle("txtDiemLy").value = sinhVien.diemLy;
  getEle("txtDiemHoa").value = sinhVien.diemHoa;
  // bat nut Cap nhat sinh vien
  getEle("btnCapNhatSV").style.display = "inline-block";
  // noen
  setLocalStorage();
  getLocalStorage();
}
// Cap nhat Sinh Vien
getEle("btnCapNhatSV").addEventListener("click", function () {
  // console.log("123");
  var sinhVien = layThongTinSinhVien();
  // console.log(sinhVien);
  dssv.capNhatSV(sinhVien);
  setLocalStorage();
  getLocalStorage();
});

// tim kiem sinh vien
getEle("txtKeyWord").addEventListener("keyup", function () {
  // console.log("keyword")
  var keyWord = getEle("txtKeyWord").value;
  console.log(keyWord);
  var mangTimKiem = dssv.timKiemSV(keyWord);
  taoBang(mangTimKiem);
});

function setLocalStorage() {
  // chuyển data từ json sang string
  var dataString = JSON.stringify(dssv.arr);

  // lưu về storage
  localStorage.setItem("DSSV", dataString);
}

function getLocalStorage() {
  var data = localStorage.getItem("DSSV");
  // chuyen tu string ve json
  if (data) {
    var dataJSON = JSON.parse(data);
    // console.log(dataJSON);

    dssv.arr = dataJSON;
    console.log(dssv.arr);
    taoBang(dssv.arr);
  }
}
