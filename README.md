# Praktikum 6: JavaScript DOM dan Event Handling - Lab6Web

Nama : Raihan Arrasyid Monadika  
NIM : 312510206  
Kelas : I251B  
Mata Kuliah : Pemrograman Web

## 1. Langkah-Langkah Praktikum & Implementasi

### Latihan 1: Mengubah Teks dengan DOM
Membuat kerangka HTML (`index.html`, `style.css`, `script.js`) dengan atribut `defer` pada tag `<script>`. Elemen dipilih dengan `getElementById()` lalu teks judul dan paragraf diubah memakai `textContent`.

<img src="screenshot/kode1.png">  
<img src="screenshot/kode1lanjutan.png">  
<img src="screenshot/hasil1.png">  

### Latihan 2: Event Click
Menambahkan event `click` pada tombol. Setiap tombol diklik, teks paragraf berubah dan menampilkan waktu saat itu dengan `new Date().toLocaleTimeString()`.

<img src="screenshot/kode2.png">  
<img src="screenshot/hasil2.png">  

### Latihan 3: Mengubah Kelas dan Gaya CSS
Membuat class `.highlight` dan `.teks-besar` pada `style.css`. Tombol "Tombol Gaya" memakai `classList.toggle()` untuk menambah atau mencabut kedua class pada paragraf setiap kali diklik.

<img src="screenshot/kode3.png">  
<img src="screenshot/kode3lanjutan.png">  
<img src="screenshot/kode3lanjutan1.png">  
<img src="screenshot/hasi3.png">  
<img src="screenshot/hasil3lanjutan.png">  
<img src="screenshot/hasil3lanjutan1.png">  

### Latihan 4: Event Input dan Penghitung Karakter
Membuat input nama (maksimal 40 karakter) dengan event `input` yang memperbarui jumlah karakter secara langsung saat pengguna mengetik.

<img src="screenshot/kode4.png">  
<img src="screenshot/kode4lanjutan.png">  
<img src="screenshot/hasil4.png">  
<img src="screenshot/hasil4lanjutan.png">  

### Latihan 5: Validasi Form Pendaftaran
Membuat form nama, email, dan usia dengan event `submit`. `event.preventDefault()` mencegah halaman dimuat ulang, lalu input diperiksa berurutan: nama, format email (regex), dan usia 17-100. Pesan hasil ditampilkan pada paragraf `#pesanForm`.

<img src="screenshot/kode5.png">  
<img src="screenshot/kode5lanjutan.png">  
<img src="screenshot/hasil5.png">  

Pengujian lima kondisi:

| Kondisi | Hasil |
|---------|-------|
| Semua input kosong | "Nama wajib diisi." |
| Nama terisi, email kosong | "Masukkan email yang valid." |
| Email salah format (`raihandika#gmail.com`) | "Masukkan email yang valid." |
| Nama dan email valid, usia kosong | "Usia harus berupa bilangan bulat 17–100." |
| Semua input valid | "Validasi berhasil. Form siap diproses." |

<img src="screenshot/hasil5lanjutan.png">  
<img src="screenshot/hasil5lanjutan1.png">  
<img src="screenshot/hasil5lanjutan2.png">  
<img src="screenshot/hasil5lanjutan3.png">  
<img src="screenshot/hasil5lanjutan4.png">  

### Latihan 6: Daftar Tugas Sederhana (To-do List)
Membuat aplikasi daftar tugas. Elemen `<li>`, `<span>`, dan `<button>` dibuat dengan `createElement()`, lalu ditambahkan ke `<ul>` dengan `append()` dan `appendChild()`. Tombol "Tandai selesai" memberi class `selesai` (teks dicoret) dan mengubah teks tombolnya. Teks tugas dimasukkan lewat `textContent`, sehingga aman dari injeksi HTML.

<img src="screenshot/kode6.png">  
<img src="screenshot/kode6lanjutan.png">  
<img src="screenshot/kode6lanjutan1.png">  
<img src="screenshot/hasil6.png">  
<img src="screenshot/hasil6lanjutan.png">  
<img src="screenshot/hasil6lanjutan1.png">  

## 2. Mini Project: Form Pendaftaran Workshop

Halaman pendaftaran workshop yang dipisahkan ke `index.html`, `style.css`, dan `script.js` di folder `mini_project/`, dengan tampilan responsif untuk desktop dan mobile (gambar disembunyikan pada layar ≤ 1095px, dan layout menyesuaikan pada layar ≤ 588px).

Fitur interaktif yang dibuat:
1. **Validasi form (event `submit`)**: memeriksa nama, email, dan pilihan sesi. Pesan kesalahan tampil di atas form, sedangkan jika valid muncul alert "Validasi berhasil" lalu form di-reset.
2. **Penghitung karakter (event `input`)**: jumlah karakter nama dan email tampil di samping label saat pengguna mengetik, dan disembunyikan bila kolom kosong.
3. **Ringkasan pilihan sesi (event `change`)**: teks "Sesi dipilih" muncul dan berubah mengikuti pilihan dropdown.
4. **Tombol Reset (event `click`)**: mengosongkan seluruh input beserta penghitung karakternya.

Tampilan desktop dan mobile:

<img src="screenshot/miniproject_desktop.png">  
<img src="screenshot/miniproject_mobile.png">  

Pengujian validasi dan fitur interaktif:

| Kondisi | Hasil |
|---------|-------|
| Semua kosong | "Formulir wajib diisi." |
| Nama terisi, email salah format | "Masukkan email yang valid." (penghitung karakter nama dan email aktif) |
| Nama dan email valid, sesi belum dipilih | "Sesi harus dipilih." |
| Memilih sesi pada dropdown | Muncul teks "Sesi dipilih: ..." |
| Semua input valid | Alert "Validasi berhasil" |

<img src="screenshot/miniproject_validasi.png">  
<img src="screenshot/miniproject_validasinama_penghitungkarakter.png">  
<img src="screenshot/miniproject_validasiemail_penghitungkarakter.png">  
<img src="screenshot/miniproject_dropdown_yang%20_dipilih.png">  
<img src="screenshot/miniproject_selesai.png">  

## 3. Eksperimen Mandiri

### Eksperimen 1: Tombol Hapus pada To-do List
Menambahkan tombol "Hapus" pada setiap tugas. Event `click` memanggil `daftarTugas.removeChild(item)` untuk menghapus tugas yang dipilih.

<img src="screenshot/kode7.png">  
<img src="screenshot/hasil7.png">  
<img src="screenshot/hasil7lanjutan.png">  

### Eksperimen 2: Validasi Nama Minimal Tiga Karakter
Menambahkan kondisi pada validasi form agar nama yang terlalu pendek ditolak dengan pesan "Masukkan nama, minimal 3 karakter". Pada pengujian, nama `w` ditolak, sedangkan input valid lolos.

<img src="screenshot/kode8.png">  
<img src="screenshot/hasil8.png">  
<img src="screenshot/hasil8lanjutan.png">  

### Eksperimen 3: Event Change pada Dropdown Sesi Workshop
Menambahkan event `change` pada dropdown `#sesi` untuk menampilkan sesi yang dipilih di bawahnya. Teks "Sesi dipilih" disembunyikan lewat CSS dan baru ditampilkan saat dropdown pertama kali berubah.

<img src="screenshot/kode9.png">  
<img src="screenshot/kode9lanjutan.png">  
<img src="screenshot/hasil9.png">  
<img src="screenshot/hasil9lanjutan.png">  

### Eksperimen 4: Tombol Sembunyikan/Tampilkan Paragraf dengan Class CSS
Membuat class `.sembunyi { display: none; }` dan tombol yang menjalankan `classList.toggle("sembunyi")` pada paragraf. Teks tombol berganti antara "Sembunyikan" dan "Tampilkan" mengikuti status paragraf.

<img src="screenshot/kode10.png">  
<img src="screenshot/kode10lanjutan.png">  
<img src="screenshot/kode10lanjutan1.png">  
<img src="screenshot/hasil10.png">  
<img src="screenshot/hasil10lanjutan.png">  
<img src="screenshot/hasil10lanjutan1.png">  

### Eksperimen 5: Memindahkan Script Tanpa `defer` ke Bagian Head
Atribut `defer` dihapus sehingga `<script src="script.js">` dijalankan di `<head>`. Hasilnya, Console menampilkan error `Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')`.

**Penyebab:** tanpa `defer`, browser menjalankan script saat sedang membaca `<head>`, padahal elemen di `<body>` belum dibuat. Akibatnya `document.getElementById()` mengembalikan `null`, dan memanggil `addEventListener` pada `null` menyebabkan error. Dengan `defer`, script baru dijalankan setelah seluruh HTML selesai di-parsing sehingga elemen sudah tersedia. Alternatif lain adalah meletakkan `<script>` di akhir `<body>`.

<img src="screenshot/kode11.png">  
<img src="screenshot/hasil11.png">  

## 4. Pertanyaan Evaluasi

1. **Apa yang dimaksud dengan DOM dan apa manfaatnya?**
   * *Jawaban:* DOM (Document Object Model) adalah representasi dokumen HTML dalam bentuk struktur pohon objek yang dapat diakses dan dimanipulasi oleh JavaScript. Manfaatnya, JavaScript dapat memilih elemen, mengubah teks, atribut, dan gaya, menambah atau menghapus elemen, serta merespons tindakan pengguna tanpa memuat ulang halaman.

2. **Apa perbedaan `getElementById()`, `querySelector()`, dan `querySelectorAll()`?**
   * *Jawaban:*
     * `getElementById()` memilih satu elemen berdasarkan `id`, dan mengembalikan `null` jika tidak ditemukan.
     * `querySelector()` memilih elemen **pertama** yang cocok dengan selector CSS (id, class, tag, dan sebagainya).
     * `querySelectorAll()` memilih **semua** elemen yang cocok dan mengembalikannya sebagai NodeList yang bisa diulang dengan `forEach`.
     ```js
     const judul = document.getElementById("judul");
     const tombol = document.querySelector("#tombolAksi");
     const semuaItem = document.querySelectorAll(".item");
     ```

3. **Apa fungsi `addEventListener()` dan sebutkan tiga contoh event?**
   * *Jawaban:* `addEventListener()` menghubungkan sebuah event pada elemen dengan fungsi yang dijalankan saat event itu terjadi. Satu elemen dapat memiliki beberapa listener sekaligus. Contoh event: `click` (tombol diklik), `input` (pengguna mengetik pada input), dan `submit` (form dikirim). Event lain misalnya `change`, `keydown`, dan `mouseover`.
     ```js
     tombol.addEventListener("click", function () {
       pesan.textContent = "Tombol diklik!";
     });
     ```

4. **Mengapa `event.preventDefault()` digunakan pada event submit form?**
   * *Jawaban:* Perilaku bawaan form saat disubmit adalah mengirim data dan memuat ulang halaman, sehingga isian dan pesan validasi hilang sebelum sempat diperiksa. `preventDefault()` membatalkan perilaku itu agar JavaScript dapat memvalidasi input dan menampilkan pesan pada halaman yang sama.

5. **Apa perbedaan `textContent` dan `innerHTML` dari sisi penggunaan dan keamanan?**
   * *Jawaban:*
     * `textContent` membaca atau mengubah isi elemen sebagai **teks biasa**. Tag HTML yang dimasukkan tidak ditafsirkan, tetapi ditampilkan apa adanya.
     * `innerHTML` membaca atau mengubah isi elemen sebagai **markup HTML**, sehingga bisa menyisipkan elemen baru.
     * Dari sisi keamanan, memasukkan teks dari pengguna ke `innerHTML` berisiko XSS (misalnya `<img src=x onerror=alert(1)>` akan dieksekusi). Karena itu teks pengguna sebaiknya memakai `textContent`, dan `innerHTML` hanya untuk markup yang dibuat sendiri. Pada To-do List di praktikum ini, teks tugas ditampilkan dengan `textContent`.

6. **Bagaimana `classList.toggle()` membantu mengubah tampilan elemen?**
   * *Jawaban:* `classList.toggle("nama")` menambahkan class jika elemen belum memilikinya, dan mencabutnya jika sudah ada. Jadi satu event listener cukup untuk beralih antara dua tampilan tanpa pengecekan manual, sedangkan `add()` hanya menambah dan `remove()` hanya mencabut. Contohnya pada praktikum ini: `teksGaya.classList.toggle("highlight")` untuk menyorot paragraf, dan `paragraf.classList.toggle("sembunyi")` untuk menyembunyikan atau menampilkan paragraf.

7. **Sebutkan minimal tiga skenario pengujian validasi form.**
   * *Jawaban:* Skenario yang diuji pada form pendaftaran (Latihan 5 dan Mini Project):

     | No | Skenario | Input | Hasil |
     |----|----------|-------|-------|
     | 1 | Semua input kosong | nama, email, usia kosong | "Nama wajib diisi." |
     | 2 | Email tidak valid | nama `raihan`, email `raihandika#gmail.com` | "Masukkan email yang valid." |
     | 3 | Usia kosong atau di luar 17-100 | nama dan email valid, usia kosong | "Usia harus berupa bilangan bulat 17–100." |
     | 4 | Sesi belum dipilih (mini project) | nama dan email valid, sesi `Pilih...` | "Sesi harus dipilih." |
     | 5 | Semua input valid | nama, email, dan usia sesuai aturan | "Validasi berhasil. Form siap diproses." |
