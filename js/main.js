const kmDauGrabX = 8000; kmDauGrabSuv = 9000; kmDauGrabBlack = 10000; 
const km1GrabX = 8000; km1GrabSuv = 9000; km1GrabBlack = 10000; 
const km19GrabX = 8000, km19GrabSuv = 9000, km19GrabBlack = 10000; 
const tgChoTren3GX = 2000, tgChoTren3GS = 3000, tgChoTren3GB = 3500; 

function layLoaiXe(){
    var radioGrabX = document.getElementById("grabX");
    var radioGrabSuv = document.getElementById("grabSUV");
    var radioGrabBlack = document.getElementById("grabBlack");
    if (radioGrabX.checked === true){
        return "grabX";
    } else if (radioGrabSuv.checked === true){
            return "grabSuv";
        } else {
            return "grabBlack";
        }
}
document.getElementById("divThanhTien").innerHTML = layLoaiXe();

function tinhTien(){
    var soKM = document.getElementById("soKM").value;
    var thoiGianCho = document.getElementById("timeCho").value;
    switch (layLoaiXe()){
        case 'grabX':
            if(soKM > 19){
                var tienPhaiTra = tinhSoKMDau(soKM,kmDauGrabX) + tinhSoKMTren1(soKM,km1GrabX) + tinhSoKMTren19(soKM,km19GrabX) + tinhThoiGianCho(thoiGianCho,tgChoTren3GX);
            } else if (soKM <= 19 && soKM > 1){
                var tienPhaiTra = tinhSoKMDau(soKM,kmDauGrabX) + tinhSoKMTren1(soKM,km1GrabX) + tinhThoiGianCho(thoiGianCho,tgChoTren3GX);
            } else {
                var tienPhaiTra = tinhSoKMDau(soKM,kmDauGrabX) + tinhThoiGianCho(thoiGianCho,tgChoTren3GX);
            }
            break;
        case 'grabSUV':
            if(soKM > 19){
                var tienPhaiTra = tinhSoKMDau(soKM,kmDauGrabSuv) + tinhSoKMTren1(soKM,km1GrabSuv) + tinhSoKMTren19(soKM,km19GrabSuv) + tinhThoiGianCho(thoiGianCho,tgChoTren3GS);
            } else if (soKM <= 19 && soKM > 1){
                var tienPhaiTra = tinhSoKMDau(soKM,kmDauGrabSuv) + tinhSoKMTren1(soKM,km1GrabSuv) + tinhThoiGianCho(thoiGianCho,tgChoTren3GS);
            } else {
                var tienPhaiTra = tinhSoKMDau(soKM,kmDauGrabSuv) + tinhThoiGianCho(thoiGianCho,tgChoTren3GS);
            }
            break;
        case 'grabBlack':
            if(soKM > 19){
                var tienPhaiTra = tinhSoKMDau(soKM,kmDauGrabBlack) + tinhSoKMTren1(soKM,km1GrabBlack) + tinhSoKMTren19(soKM,km19GrabBlack) + tinhThoiGianCho(thoiGianCho,tgChoTren3GB);
            } else if (soKM <= 19 && soKM > 1){
                var tienPhaiTra = tinhSoKMDau(soKM,kmDauGrabBlack) + tinhSoKMTren1(soKM,km1GrabBlack) + tinhThoiGianCho(thoiGianCho,tgChoTren3GB);
            } else {
                var tienPhaiTra = tinhSoKMDau(soKM,kmDauGrabBlack) + tinhThoiGianCho(thoiGianCho,tgChoTren3GB);
            }
            break;
        default :
            document.getElementById("divThanhTien").innerHTML = "Nhập sai!";
    }
}
console.log(tinhTien()) ;
function tinhSoKMDau(soKM, gia1KMDau){
    return soKM * gia1KMDau;
}
function tinhSoKMTren1(soKM, giaTren1KMDau){
    return (soKM-1) * giaTren1KMDau;
}
function tinhSoKMTren19(soKM, giaTren19KMDau){
    return (soKM-19) * giaTren19KMDau;
}
function tinhThoiGianCho(thoigian, tienCho){
    if (thoigian>=3){
        return Math.floor (thoigian / 3) * tienCho;
    }
}
