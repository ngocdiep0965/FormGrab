/**
 * Đầu vào
 *  - loaiXe
 *  - soKm
 *  - tgCho
 *
 * Xử lý
 *  - function layLoaiXe()
 *      + Dom tới 3 thẻ input của loại xe: radioGrabX, radioGrabSuv, radioGrabBlack
 *      + if(radioGrabX.checked){return "grabX"}
 *      + else if(radioGrabSuv.checked){return "grabSuv"}
 *      + else{return "grabBlack"}
 *  - function tinhTien()
 *      + Dom tới lấy soKm, tgCho từ 2 thẻ input
 *      + Gọi lại hàm layLoaiXe => nhận giá trị loại xe gì?
 *      + switch
 *          case "grabX":
 *
 *          case "grabSuv":
 *
 *          case "grabBlack":
 *
 *  - function tinhKmDau(soKm, giaKmDau):
 *      + return soKm * giaKmDau
 *  - function tinhKmTren1(soKm, giaKmTren1):
 *      + return (soKm - 1) * giaKmTren1;
 *  - function tinhKmTren19(soKm, giaKmTren19);
 *      + return (soKm - 19) * giaKmTren19
 *  - function tinhGiaCho(tgCho, giaCho):
 *      if(tgCgo >= 3) return Math.floor(tgCho / 3) * giaCho
 */


// loại xe
// grab x
const grabX = document.getElementById('grabX');
const donGiaKMDautienGrabX = 8000;
const donGiaTu1Den19KMGrabX = 7500;
const donGiaTren19KMGrabX = 7000;
const donGiaChoGrabX = 2000;

// grab suv
const grabSUV = document.getElementById('grabSUV');
const donGiaKMDautienGrabSUV = 9000;
const donGiaTu1Den19KMGrabSUV = 8500;
const donGiaTren19KMGrabSUV = 8000;
const donGiaChoGrabSUV = 3000;

// grab black
const grabBlack = document.getElementById('grabBlack');
const donGiaKMDautienGrabBlack = 10000;
const donGiaTu1Den19KMGrabBlack = 9500;
const donGiaTren19KMGrabBlack = 9000;
const donGiaChoGrabBlack = 3500;

const thanhTien = document.getElementById('thanhTien');
const xuatTien = document.getElementById('xuatTien');
const showInHoaDon = document.getElementById('showInHoaDon');

function xacDinhLoaiGrab (grabX, grabSUV, grabBlack) {
    let loaiGrab;
    if (grabX) {
        loaiGrab = "grabX";
    }

    if (grabSUV) {
        loaiGrab = "grabSUV";
    }

    if (grabBlack) {
        loaiGrab = "grabBlack";
    }

    return loaiGrab;
}

const soKM = document.getElementById('soKM');
const thoiGianCho = document.getElementById('thoiGianCho');

function tinhTienKMDauTien(donGiaKMdauTien) {
    let tongTienKmDauTien;
    tongTienKmDauTien = donGiaKMdauTien;
    return tongTienKmDauTien;
}
function tinhTienTu1Den19KM(soKM, giaKMdauTien, donGiaTu1Den19KM) {
    let tongTienTu1Den19Km;
    tongTienTu1Den19Km = giaKMdauTien + (soKM-1) * donGiaTu1Den19KM;
    return tongTienTu1Den19Km;
}
function tinhTienTren19KM(soKm, giaKMdauTien, donGiaTu1Den19KM, donGiaTren19KM) {
    let tongTienTren19KM;
    tongTienTren19KM = giaKMdauTien + 18 * donGiaTu1Den19KM + (soKm-19) * donGiaTren19KM;
    return tongTienTren19KM;
}
function tinhTienThoiGianCho(thoiGianCho, donGiaThoiGianCho) {
    let tongTienThoiGianCho;
    tongTienThoiGianCho = Math.floor(thoiGianCho/3) * donGiaThoiGianCho;
    return tongTienThoiGianCho
}

function tinhTienTong (soKM, loaiGrab) {
    let tienThoiGianCho;
    let tongTienTheoKM;
    let tongTien;
    switch (loaiGrab) {
        case "grabX": {
            tienThoiGianCho = tinhTienThoiGianCho(Number(thoiGianCho.value), donGiaChoGrabX);
            if (soKM <= 1 && soKM > 0)  {
                tongTienTheoKM = tinhTienKMDauTien(donGiaKMDautienGrabX);
            } 
            if (soKM > 1 && soKM <= 19) {
                tongTienTheoKM = tinhTienTu1Den19KM(soKM,donGiaKMDautienGrabX, donGiaTu1Den19KMGrabX);
            }
            if (soKM > 19) {
                tongTienTheoKM = tinhTienTren19KM(soKM, donGiaKMDautienGrabX, donGiaTu1Den19KMGrabX, donGiaTren19KMGrabX);
            }
            break;
        }
         
        case "grabSUV": {
            tienThoiGianCho = tinhTienThoiGianCho(Number(thoiGianCho.value), donGiaChoGrabSUV);
            if (soKM <= 1 && soKM > 0)  {
                tongTienTheoKM = tinhTienKMDauTien(donGiaKMDautienGrabSUV);
            } 
            if (soKM > 1 && soKM <= 19) {
                tongTienTheoKM = tinhTienTu1Den19KM(soKM, donGiaKMDautienGrabSUV, donGiaTu1Den19KMGrabSUV);
            }
            if (soKM > 19) {
                tongTienTheoKM = tinhTienTren19KM(soKM, donGiaKMDautienGrabSUV, donGiaTu1Den19KMGrabSUV, donGiaTren19KMGrabSUV);
            }
            break;
        }
        default: {
            tienThoiGianCho = tinhTienThoiGianCho(Number(thoiGianCho.value), donGiaChoGrabBlack);
            if (soKM <= 1 && soKM > 0)  {
                tongTienTheoKM = tinhTienKMDauTien(donGiaKMDautienGrabBlack);
            } 
            if (soKM > 1 && soKM <= 19) {
                tongTienTheoKM = tinhTienTu1Den19KM(soKM, donGiaKMDautienGrabBlack, donGiaTu1Den19KMGrabBlack);
            }
            if (soKM > 19) {
                tongTienTheoKM = tinhTienTren19KM(soKM, donGiaKMDautienGrabBlack, donGiaTu1Den19KMGrabBlack, donGiaTren19KMGrabBlack);
            }
            break;
        }
    }
    tongTien = tongTienTheoKM + tienThoiGianCho;
    return tongTien  
}

const tinhTienBtn = document.getElementById('tinhTien')
tinhTienBtn.onclick = function(e) {
    e.preventDefault()
    // validation
    if (!soKM.value || !thoiGianCho.value || Number(soKM.value) <= 0 ||  Number(thoiGianCho.value) < 0 ) {
        alert ('Tất cả các trường là bắt buộc. Số KM và thời gian chờ phải là số dương lớn hơn 0!');
    } else {
        // tinhTien
        thanhTien.classList.remove('d-none');
        xuatTien.innerHTML = tinhTienTong(Number(soKM.value), xacDinhLoaiGrab(grabX.checked, grabSUV.checked, grabBlack.checked)).toLocaleString();
    }
}


function xuatSuDungKMDauTien (soKM) {
    let inGiaTri

    if(soKM <= 1 ) {
        inGiaTri = soKM.toFixed(1)
    } 

    if (soKM > 1) {
        inGiaTri = "1.0"
    }

    return inGiaTri
}

function donGiaKMDauTienXuatHoaDon (loaiGrab) {
    let donGiaKMDauTienXuatHoaDon
    switch (loaiGrab) {
        case "grabX":{
            donGiaKMDauTienXuatHoaDon = donGiaKMDautienGrabX
            break;
        }
            

        case "grabSUV":{
            donGiaKMDauTienXuatHoaDon = donGiaKMDautienGrabSUV
            break;
        }
    
        default: {
            donGiaKMDauTienXuatHoaDon = donGiaKMDautienGrabBlack
            break;
        }
    }

    return donGiaKMDauTienXuatHoaDon
}

function xuatSuDungTu1Den19KM (soKM) {
    let inGiaTri

    if(soKM <= 1 ) {
        inGiaTri = "0.0"
    } 

    if(soKM > 1 && soKM <= 19) {
        inGiaTri = (soKM -1).toFixed(1)
    } 
    
    if (soKM > 19) {
        inGiaTri = "18.0"
    }

    return inGiaTri
}

function donGiaTu1Den19KMXuatHoaDon (loaiGrab) {
    let donGiaTu1Den19KMXuatHoaDon
    switch (loaiGrab) {
        case "grabX":{
            donGiaTu1Den19KMXuatHoaDon = donGiaTu1Den19KMGrabX
            break;
        }
            

        case "grabSUV":{
            donGiaTu1Den19KMXuatHoaDon = donGiaTu1Den19KMGrabSUV
            break;
        }
    
        default: {
            donGiaTu1Den19KMXuatHoaDon = donGiaTu1Den19KMGrabBlack
            break;
        }
    }

    return donGiaTu1Den19KMXuatHoaDon
}

function xuatSuDungTren19KM (soKM) {
    let inGiaTri

    if(soKM <= 19 ) {
        inGiaTri = "0.0"
    } 

    if(soKM > 19) {
        inGiaTri = (soKM - 19).toFixed(1)
        console.log(inGiaTri)
    } 


    return inGiaTri
}

function donGiaTren19KMXuatHoaDon (loaiGrab) {
    let donGiaTren19KMXuatHoaDon
    switch (loaiGrab) {
        case "grabX":{
            donGiaTren19KMXuatHoaDon = donGiaTren19KMGrabX
            break;
        }
            

        case "grabSUV":{
            donGiaTren19KMXuatHoaDon = donGiaTren19KMGrabSUV
            break;
        }
    
        default: {
            donGiaTren19KMXuatHoaDon = donGiaTren19KMGrabBlack
            break;
        }
    }

    return donGiaTren19KMXuatHoaDon
}

////////////THỜI GIAN CHỜ
function xuatSuDungThoiGianCho (thoiGianCho) {
    let inGiaTri

    inGiaTri = Math.floor(thoiGianCho/3).toFixed(1)


    return inGiaTri
}
function donGiaThoiGianCho (loaiGrab) {
    let donGiaThoiGianCho

    switch (loaiGrab) {
        case "grabX":{
            donGiaThoiGianCho = donGiaChoGrabX
            break;
        }
            

        case "grabSUV":{
            donGiaThoiGianCho = donGiaChoGrabSUV
            break;
        }
    
        default: {
            donGiaThoiGianCho = donGiaChoGrabBlack
            break;
        }
    }

    return donGiaThoiGianCho
}

const inHoaDonBtn = document.getElementById('inHoaDon')

//---------------------------------SỰ KIỆN ONCLICK VÀO NÚT IN HOÁ ĐƠN
inHoaDonBtn.onclick = function(e) {
    if (!soKM.value || !thoiGianCho.value || Number(soKM.value) <= 0 ||  Number(thoiGianCho.value) < 0 ) {
        alert ('Tất cả các trường là bắt buộc. Số KM và thời gian chờ phải là số dương lớn hơn 0!')
    } else {
        // Xu ly xuat ban hoa don

        let useKmDauTien
        let donGiaKMDauTienIn

        let useTu1Den19
        let donGiaTu1Den19KMIn

        let useTren19
        let donGiaTren19KMIn

        let useThoiGianCho
        let donGiaThoiGianChoIn

        useKmDauTien = xuatSuDungKMDauTien(Number(soKM.value))
        donGiaKMDauTienIn = donGiaKMDauTienXuatHoaDon (xacDinhLoaiGrab(grabX.checked, grabSUV.checked, grabBlack.checked))


        useTu1Den19 = xuatSuDungTu1Den19KM(Number(soKM.value))
        donGiaTu1Den19KMIn = donGiaTu1Den19KMXuatHoaDon (xacDinhLoaiGrab(grabX.checked, grabSUV.checked, grabBlack.checked))


        useTren19 = xuatSuDungTren19KM(Number(soKM.value))
        donGiaTren19KMIn = donGiaTren19KMXuatHoaDon (xacDinhLoaiGrab(grabX.checked, grabSUV.checked, grabBlack.checked))

        useThoiGianCho = xuatSuDungThoiGianCho(Number(thoiGianCho.value))
        donGiaThoiGianChoIn = donGiaThoiGianCho (xacDinhLoaiGrab(grabX.checked, grabSUV.checked, grabBlack.checked))
        

        // Xuat hoa don

        showInHoaDon.innerHTML = `
        <div class="modal fade" id="hoaDon" tabindex="-1"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" style="max-width: unset; width: 60%;">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">CHI TIẾT HOÁ ĐƠN</h5>
                    <button type="button" class="close" data-dismiss="modal"
                        aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <tt>
                    <table class="table">
                        <tbody>
                            <tr>
                                <td class="text-center">CHI TIẾT</td>
                                <td class="text-center">SỬ DỤNG</td>
                                <td class="text-center">ĐƠN GIÁ (VND)</td>
                                <td class="text-center">THÀNH TIỀN (VND)</td>
                            </tr>
                            <tr>
                                <td>Số KM đầu tiên</td>
                                <td class="text-center">${useKmDauTien}</td>
                                <td class="text-center">${(donGiaKMDauTienIn)}</td>
                                <td class="text-center">${(donGiaKMDauTienIn)}</td>
                            </tr>
                            <tr>
                                <td>Từ 1 KM đến 19KM </td>
                                <td class="text-center">${useTu1Den19}</td>
                                <td class="text-center">${donGiaTu1Den19KMIn}</td>
                                <td class="text-center">${(useTu1Den19*donGiaTu1Den19KMIn)}</td>
                            </tr>
                            <tr>
                                <td>Trên 19 KM</td>
                                <td class="text-center">${useTren19}</td>
                                <td class="text-center">${(donGiaTren19KMIn)}</td>
                                <td class="text-center">${(useTren19*donGiaTren19KMIn)}</td>
                            </tr>
                            <tr>
                                <td>Thời gian chờ (mỗi 3 phút)</td>
                                <td class="text-center">${useThoiGianCho}</td>
                                <td class="text-center">${(donGiaThoiGianChoIn)}</td>
                                <td class="text-center">${(useThoiGianCho * donGiaThoiGianChoIn)}</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            
                        </tfoot>
                    </table>
                    </tt>
                </div>
                <div class="modal-footer">
                    <tr>
                        <td colspan="2"></td>
                        <td>TỔNG TIỀN:</td>
                        <td>${(donGiaKMDauTienIn + useTu1Den19*donGiaTu1Den19KMIn + useTren19*donGiaTren19KMIn + useThoiGianCho * donGiaThoiGianChoIn)}</td>
                    </tr>
                </div>
            </div>
        </div>
    </div>`
    }
    
}

