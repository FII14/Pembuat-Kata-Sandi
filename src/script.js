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
    document.getElementById("downloadBtn").disabled = true;
  } else if (!hurufBesar && !hurufKecil && !angka && !simbol) {
    document.getElementById("password").innerHTML = "";
    document.getElementById("error").innerHTML = "Pilih setidaknya satu jenis karakter untuk kata sandi.";
    document.getElementById("downloadBtn").disabled = true;
  } else {
    var kataSandi = "";
    for (var i = 0; i < panjang; i++) {
      kataSandi += karakter.charAt(Math.floor(Math.random() * karakter.length));
    }
    document.getElementById("password").innerHTML = kataSandi;
    document.getElementById("error").innerHTML = "";
    document.getElementById("downloadBtn").disabled = false;
    document.getElementById("downloadBtn").setAttribute("onclick", "downloadKataSandi('" + kataSandi + "')");
  }
}

function downloadKataSandi(kataSandi) {
  var now = new Date();
  var tanggal = now.toISOString().split("T")[0];
  var jam = now.getHours().toString().padStart(2, "0") + "-" + now.getMinutes().toString().padStart(2, "0");
  var namaFile = "kata_sandi_" + tanggal + "_" + jam + ".txt";
  var file = new Blob([kataSandi], { type: "text/plain" });

  var a = document.createElement("a");
  var url = URL.createObjectURL(file);
  a.href = url;
  a.download = namaFile;
  document.body.appendChild(a);
  a.click();
  setTimeout(function () {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }, 100);
}

document.getElementById("generateBtn").addEventListener("click", generateKataSandi);
document.getElementById("downloadBtn").addEventListener("click", function () {
  var password = document.getElementById("password").innerHTML;
  downloadKataSandi(password);
});
  
