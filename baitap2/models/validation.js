function Validation() {
  this.kiemTraRong = function (value, errorID, mess) {
    if (value === "") {
      // Loi
      getEle(errorID).innerHTML = mess;
      getEle(errorID).style.display = "block";
      return false;
    }

    //Dung
    getEle(errorID).innerHTML = "";
    getEle(errorID).style.display = "none";
    return true;
  };

  this.kiemTraDoDaiKyTu = function (value, errorID, mess, min, max) {
    if (value.trim().length >= min && value.trim().length <= max) {
      getEle(errorID).innerHTML = "";
      getEle(errorID).style.display = "none";
      return false;
    }
    getEle(errorID).innerHTML = mess;
    getEle(errorID).style.display = "block";
    return true;
  };

  this.kiemTraChuoiKyTu = function (value, errorID, mess) {
    var letter =
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
      "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
      "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
    if (value.match(letter)) {
      getEle(errorID).innerHTML = "";
      getEle(errorID).style.display = "none";
      return true;
    }
    getEle(errorID).innerHTML = mess;
    getEle(errorID).style.display = "block";
    return false;
  };

  this.kiemTraEmail = function (value, errorID, mess) {
    var letter = "/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/";
    if (value.match(letter)) {
      getEle(errorID).innerHTML = "";
      getEle(errorID).style.display = "none";
      return true;
    }
    getEle(errorID).innerHTML = mess;
    getEle(errorID).style.display = "block";
    return false;
  };
}
