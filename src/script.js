function generateKataSandi() {
  var panjang = document.getElementById("length").value;
  var hurufBesar = document.getElementById("hurufBesar").checked;
  var hurufKecil = document.getElementById("hurufKecil").checked;
  var angka = document.getElementById("angka").checked;
  var simbol = document.getElementById("simbol").checked;
  var karakter = "";

  if (hurufBesar) {
    karakter += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (hurufKecil) {
    karakter += "abcdefghijklmnopqrstuvwxyz";
  }
  if (angka) {
    karakter += "0123456789";
  }
  if (simbol) {
    karakter += "!@#$%^&*()_+=-{}[]|\:;?,.<>";
  }

  if (panjang < 8 || panjang > 16) {
    document.getElementById("password").innerHTML = "";
    document.getElementById("error").innerHTML = "Panjang kata sandi harus antara 8 dan 16 karakter.";
  } else if (!hurufBesar && !hurufKecil && !angka && !simbol) {
    document.getElementById("password").innerHTML = "";
    document.getElementById("error").innerHTML = "Pilih setidaknya satu jenis karakter untuk kata sandi.";
  } else {
    var kataSandi = "";
    for (var i = 0; i < panjang; i++) {
      kataSandi += karakter.charAt(Math.floor(Math.random() * karakter.length));
    }
    document.getElementById("password").innerHTML = kataSandi;
    document.getElementById("error").innerHTML = "";
  }
}

document.getElementById("generateBtn").addEventListener("click", generateKataSandi);
    
