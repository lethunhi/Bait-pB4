
btnTinh.addEventListener ("click",function(e) {
    e.preventDefault();

    var ngay = document.getElementById("ngay").value;
    var thang = document.getElementById("thang").value;
    var nam = document.getElementById("nam").value;

    console.log(ngay,thang,nam);
    
    switch (thang) {
        case "1":
        case "3":
        case "5":
        case "7":
        case "8":
        case "10":
        case "12":
        
        var soNgayTrongThang = 31;
        console.log(soNgayTrongThang);
        break ;

        case "4":
        case "6":
        case "9":
        case "11":
        
        var soNgayTrongThang = 30;
        console.log(soNgayTrongThang);
        break ;

        case "2" :
            if (nam % 400 == 0 || nam%4==0 && nam%100!= 0) {
                var soNgayTrongThang = 29;
                console.log(soNgayTrongThang);
            } else {
                var soNgayTrongThang = 28;
                console.log(soNgayTrongThang);
            }
            break ;
          
        default:
            var soNgayTrongThang = 0;
    }
    // Tính ngày sau đó

    if (ngay>soNgayTrongThang) {
        var kqNgay = "Thông tin không hợp lệ";
        var kqThang = "";
        var kqNam = "";
    }
    
    else if (ngay<soNgayTrongThang && thang<13) {
        var kqNgay = parseFloat(ngay) +1;
        var kqThang = thang;
        var kqNam = nam;  
        console.log(kqNgay,kqThang,kqNam);

    } else if (ngay = soNgayTrongThang) {
        var kqNgay = 1;
        
        if (thang==12) {
            var kqThang = 1;
            var kqNam = parseFloat(nam) +1;
            console.log (kqThang,kqNam);

        } else {
            var kqThang = parseFloat(thang)+1;
            var kqNam = nam;
            console.log (kqThang,kqNam);
        }
    }
        
        console.log (kqNgay,kqThang,kqNam);

        // Tính ngày trước đó
        var thangTruoc = parseFloat(thang) -1;
        console.log("Tháng trước:"+ thangTruoc);
        
        switch (thangTruoc) {
                    case 1:
                    case 3:
                    case 5:
                    case 7:
                    case 8:
                    case 10:
                    case 12:
                    
                    var soNgayTrongThangTruoc = 31;
                    console.log(soNgayTrongThangTruoc);
                    break ;
            
                    case 4:
                    case 6:
                    case 9:
                    case 11:
                    
                    var soNgayTrongThangTruoc = 30;
                    console.log(soNgayTrongThangTruoc);
                    break ;
            
                    case 2 :
                        if (nam % 400 == 0 || nam%4==0 && nam%100!= 0) {
                            var soNgayTrongThangTruoc = 29;
                            console.log(soNgayTrongThangTruoc);
                        } else {
                            var soNgayTrongThangTruoc = 28;
                            console.log(soNgayTrongThangTruoc);
                        }
                        break ;
                      
                    default:
                        var soNgayTrongThangTruoc = 0;
                }
        
                
                var kqNgay1 = soNgayTrongThangTruoc;
                console.log("Số ngày tháng trước: " + kqNgay1);
        

        if (ngay>soNgayTrongThang) {
            var kqNgay1 = "Thông tin không hợp lệ";
            var kqThang1 = "";
            var kqNam1 = "";
        }
        
        else if (ngay == 1) {

            if (thang==1) {
                var kqNgay1= 31;
                var kqThang1 = 12;
                var kqNam1 = parseFloat(nam) -1;
                console.log (kqNgay1,kqThang1,kqNam1);
    
            } else  {
                var kqThang1 = thang -1;
                var kqNam1 = nam;
                
                
                console.log (kqNgay1,kqThang1,kqNam1);

            }
        }
        else  {
            
            var kqNgay1 = parseFloat(ngay) -1;
            var kqThang1 = thang;
            var kqNam1 = nam;  
            console.log(kqNgay1,kqThang1,kqNam1);
        
        };
        
        console.log (kqNgay1,kqThang1,kqNam1);

        
    var txtThongBao = document.getElementById("txtThongBao");
    txtThongBao.innerHTML = "Ngày sau đó: " + kqNgay+ "-" + kqThang + "-" +kqNam + "<br>" + "Ngày trước đó: " + kqNgay1+ "-" + kqThang1 + "-" +kqNam1  ;
});

btnTinh2.addEventListener ("click", function(e) {
    e.preventDefault ();

    var thang2 = document.getElementById("thang2").value;
    var nam2 = document.getElementById("nam2").value;

    switch (thang2) {
        case "1":
        case "3":
        case "5":
        case "7":
        case "8":
        case "10":
        case "12":
        
        var soNgayTrongThang2 = 31;
        console.log(soNgayTrongThang2);
        break ;

        case "4":
        case "6":
        case "9":
        case "11":
        
        var soNgayTrongThang2 = 30;
        console.log(soNgayTrongThang2);
        break ;

        case "2" :
            if (nam2 % 400 == 0 || nam2%4==0 && nam2%100!= 0) {
                var soNgayTrongThang2 = 29;
                console.log(soNgayTrongThang2);
            } else {
                var soNgayTrongThang2 = 28;
                console.log(soNgayTrongThang2);
            }
            break ;
          
        default:
            var soNgayTrongThang2 = 0;
    }
    var txtThongBao2 =document.getElementById("txtThongBao2");
    txtThongBao2.innerHTML = "Số ngày trong tháng là: " + soNgayTrongThang2;
});


btnTinh3.addEventListener ("click", function (e) {

    e.preventDefault();

    var inputSo = document.getElementById ("inputSo").value;
    
    var donVi = Math.floor(inputSo%10);
    var chuc = Math.floor(inputSo%100 /10);
    var tram = Math.floor(inputSo/100);

    console.log(inputSo,donVi, chuc, tram);
    
    switch (tram) {
        case 1:
            var docTram = "Một trăm";
            break;
        case 2:
            var docTram = "Hai trăm";
            break;
        case 3:
            var docTram = "Ba trăm";
            break;
        case 4:
            var docTram = "Bốn trăm";
            break;
        case 5:
            var docTram = "Năm trăm";
            break;
        case 6:
            var docTram = "Sáu trăm";
            break;
        case 7:
            var docTram = "Bảy trăm";
            break;
        case 8:
            var docTram = "Tám trăm";
            break;
        case 9:
            var docTram = "Chín trăm";
            break;
        default :
        console.log ("Số không hợp lệ")
        
        console.log(docTram);
    }
    switch (chuc) {
        case 0:
            if (donVi == 0) {
                var docChuc = "";
            } else {
                var docChuc = " lẻ";
            }
            break;
        case 1:
            var docChuc = " mười";
            break;
        case 2:
            var docChuc = " hai mươi";
            break;
        case 3:
            var docChuc = " ba mươi";
            break;
        case 4:
            var docChuc = " bốn mươi";
            break;
        case 5:
            var docChuc = " năm mươi";
            break;
        case 6:
            var docChuc = " sáu mươi";
            break;
        case 7:
            var docChuc = " bảy mươi";
            break;
        case 8:
            var docChuc = " tám mươi";
            break;
        case 9:
            var docChuc = " chín mươi";
            break;
        default :
        console.log ("Số không hợp lệ")
        
        console.log(docChuc);
    }
    switch (donVi) {
        case 0:
            var docDonVi = "";
            break;
        case 1:
            var docDonVi = " một";
            break;
        case 2:
            var docDonVi = " hai";
            break;
        case 3:
            var docDonVi = " ba";
            break;
        case 4:
            var docDonVi = " bốn";
            break;
        case 5:
            var docDonVi = " năm";
            break;
        case 6:
            var docDonVi = " sáu";
            break;
        case 7:
            var docDonVi = " bảy";
            break;
        case 8:
            var docDonVi = " tám";
            break;
        case 9:
            var docDonVi = " chín";
            break;
        default :
        console.log ("Số không hợp lệ")
        
        console.log(docDonVi);
    }

    txtThongBao3 = document.getElementById ("txtThongBao3");
    txtThongBao3.innerHTML = docTram + docChuc + docDonVi;
});

const toaDoTruong = 10;

btnTinh4.addEventListener ("click", function(e) {
    e.preventDefault ();

    var sv1 = document.getElementById("sv1").value;
    var sv2 = document.getElementById("sv2").value;
    var sv3 = document.getElementById("sv3").value;
    console.log (sv1,sv2,sv3);

    var khoangCachsv1 = Math.abs(sv1 - toaDoTruong);
    var khoangCachsv2 = Math.abs(sv2 - toaDoTruong);
    var khoangCachsv3 = Math.abs(sv3 - toaDoTruong);

    console.log (khoangCachsv1,khoangCachsv2,khoangCachsv3);

    if (khoangCachsv1>khoangCachsv2 && khoangCachsv2>khoangCachsv3 || khoangCachsv1>khoangCachsv3 && khoangCachsv3>khoangCachsv2 || khoangCachsv1>khoangCachsv2 && khoangCachsv2 == khoangCachsv3) {
        var ketQua4 = "Sinh viên 1 ở xa trường nhất";
    } else if (khoangCachsv2>khoangCachsv1 && khoangCachsv1>khoangCachsv3 || khoangCachsv2>khoangCachsv3 && khoangCachsv3>khoangCachsv1 || khoangCachsv2>khoangCachsv1 && khoangCachsv3 == khoangCachsv1) {
        var ketQua4 = "Sinh viên 2 ở xa trường nhất";
    } else if (khoangCachsv3>khoangCachsv2 && khoangCachsv2>khoangCachsv1 || khoangCachsv3>khoangCachsv1 && khoangCachsv1>khoangCachsv2 || khoangCachsv3>khoangCachsv1 && khoangCachsv1 == khoangCachsv2) {
        var ketQua4 = "Sinh viên 3 ở xa trường nhất";
    }

    if (khoangCachsv1 == khoangCachsv2 && khoangCachsv2 == khoangCachsv3) {
        var ketQua4 = "Ba sinh viên cách trường bằng nhau";
    } else if (khoangCachsv2 == khoangCachsv1 && khoangCachsv1>khoangCachsv3) {
        var ketQua4 = "Sinh viên 1 và 2 ở xa trường nhất";
    } else if (khoangCachsv1 == khoangCachsv3 && khoangCachsv3>khoangCachsv2){
        var ketQua4 = "Sinh viên 1 và 3 ở xa trường nhất";
    }

    txtThongBao4 = document.getElementById ("txtThongBao4");
    txtThongBao4.innerHTML = ketQua4; 
});
