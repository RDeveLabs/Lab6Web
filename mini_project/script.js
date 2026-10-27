const form = document.getElementById("formPendaftaran");
const pesanError = document.getElementById("error");
const resetButton = document.querySelector(".reset");
const inputNama = document.getElementById("nama");
const inputEmail = document.getElementById("email");
const inputSesi = document.getElementById("sesi");
const karakterNama = document.getElementById("karakterNama");
const karakterEmail = document.getElementById("karakterEmail");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const nama = inputNama.value;
  const email = inputEmail.value;
  const sesi = inputSesi.value;
  const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (nama === "" && email === "" && sesi == "none") {
    pesanError.style.display = "block";
  } else if (nama === "") {
    pesanError.style.display = "block";
    pesanError.textContent = "Nama tidak boleh kosong.";
  } else if (!polaEmail.test(email)) {
    pesanError.style.display = "block";
    pesanError.textContent = "Masukkan email yang valid.";
  } else if (sesi == "none") {
    pesanError.style.display = "block";
    pesanError.textContent = "Sesi harus dipilih.";
  } else {
    pesanError.style.display = "none";
    alert("Validasi berhasil");
    form.reset();
    karakterNama.style.display = "none";
    karakterEmail.style.display = "none";
  }
});

resetButton.addEventListener("click", function () {
  form.reset();
  karakterNama.style.display = "none";
  karakterEmail.style.display = "none";
});

inputNama.addEventListener("input", function () {
  if (inputNama.value.length > 0) {
    karakterNama.style.display = "block";
    karakterNama.textContent = inputNama.value.length;
  } else {
    karakterNama.style.display = "none";
  }
});

inputEmail.addEventListener("input", function () {
  if (inputEmail.value.length > 0) {
    karakterEmail.style.display = "block";
    karakterEmail.textContent = inputEmail.value.length;
  } else {
    karakterEmail.style.display = "none";
  }
});


const dropdown = document.getElementById("sesi");
const info = document.getElementById("info");
const pilihan = document.getElementById("pilihan");
dropdown.addEventListener("change", function(){
  info.style.display = 'block';
  pilihan.textContent = dropdown.value;
})