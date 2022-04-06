function Validation() {
  this.kiemTraRong = function (value, errorID, mess) {
    
    if (value === "") {
      // Loi
      getEle("errorID").innerHTML = mess;
      getEle("errorID").style.display = "block";
      return false;
    } 
    
      //Dung
      getEle("errorID").innerHTML = "";
      getEle("errorID").style.display = "none";
      return true;
    
  };
}
