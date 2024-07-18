// Fungsi untuk menghitung BMI berdasarkan input pengguna
function calculate() {
  // Mengambil nilai dari input usia, tinggi, berat, dan jenis kelamin
  const age = document.getElementById("age").value;
  const height = document.getElementById("height").value;
  const weight = document.getElementById("weight").value;
  const gender = document.querySelector('input[name="gender"]:checked');

  // Validasi apakah semua input sudah diisi
  if (!age || !height || !weight || !gender) {
    showModal("Harap isi semua kolom.");
    return;
  }

  // Menghitung tinggi dalam meter
  const heightInMeters = height / 100;
  // Menghitung BMI dengan satu angka di belakang koma
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

  // Menampilkan nilai BMI pada elemen dengan id "result-value"
  document.getElementById("result-value").textContent = bmi;

  // Menyiapkan variabel untuk komentar berdasarkan kategori BMI
  let comment = "";

  // Menentukan komentar berdasarkan nilai BMI
  if (bmi < 18.5) {
    comment =
      "Kekurangan Berat Badan - Anda mungkin perlu menambah berat badan. Konsultasikan dengan ahli gizi untuk rencana diet yang sesuai.";
    showImage("assets/kurus.png", bmi); // Menampilkan gambar untuk kategori BMI ini
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    comment = "Berat Badan Ideal - Pertahankan pola hidup sehat!";
    showImage("assets/ideal.png", bmi); // Menampilkan gambar untuk kategori BMI ini
  } else if (bmi >= 25 && bmi <= 29.9) {
    comment =
      "Kelebihan Berat Badan - Pertimbangkan untuk mengadopsi gaya hidup lebih sehat dengan diet seimbang dan olahraga teratur.";
    showImage("assets/gemuk.png", bmi); // Menampilkan gambar untuk kategori BMI ini
  } else {
    comment =
      "Obesitas - Penting untuk mengutamakan manajemen berat badan melalui perubahan diet dan peningkatan aktivitas fisik.";
    showImage("assets/obesitas.png", bmi); // Menampilkan gambar untuk kategori BMI ini
  }

  // Menampilkan bagian hasil-akhir setelah perhitungan selesai
  const hasilAkhirSection = document.getElementById("hasil-akhir");
  hasilAkhirSection.style.display = "block";

  // Menampilkan bagian hasil perhitungan BMI
  const resultSection = document.getElementById("result");
  resultSection.style.display = "block";

  // Menyembunyikan bagian input fitur
  const featuresSection = document.getElementById("features");
  featuresSection.style.display = "none";

  // Menampilkan komentar tentang kategori BMI pada elemen dengan class "comment"
  document.querySelector(".comment").textContent = comment;

  // Update bagian hasil dengan konten dinamis berdasarkan kategori BMI
  const resultComment = document.getElementById("result-comment");
  resultComment.innerHTML = `
    <p> ${comment}.</p>
  `;

  // Update tombol konsultasi berdasarkan kategori BMI
  const consultationButtons = document.getElementById("consultation-buttons");
  consultationButtons.innerHTML = `
    <button>Konsultasi dengan Ahli Gizi via Aplikasi</button>
    <button>Daftar Online dengan Ahli Gizi</button>
  `;

  // Update daftar penyakit berdasarkan kategori BMI
  const diseasesList = document.getElementById("diseases-list");
  diseasesList.innerHTML = `
    <li>Diabetes</li>
    <li>Hipertensi</li>
    <li>Penyakit Jantung</li>
    <li>Osteoarthritis</li>
  `;

  // Update tombol konsultasi dengan dokter berdasarkan kategori BMI
  const doctorButtons = document.getElementById("doctor-buttons");
  doctorButtons.innerHTML = `
    <button>Konsultasi dengan Dokter via Aplikasi</button>
    <button>Daftar Sekarang</button>
  `;
}

// Fungsi untuk menampilkan modal dengan pesan tertentu
function showModal(message) {
  const modalText = document.getElementById("modalText");
  modalText.textContent = message;
  const modal = document.getElementById("myModal");
  modal.style.display = "block";

  const span = document.getElementsByClassName("close")[0];
  span.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}

// Fungsi untuk menampilkan gambar sesuai dengan kategori BMI
function showImage(imagePath, bmi) {
  const resultValue = document.getElementById("result-value");
  resultValue.innerHTML = `
    <img src="${imagePath}" alt="BMI Image" style="max-width: 100%; height: auto;" />
    <p><strong>${bmi}</strong></p>
  `;
}

// Event listener yang dijalankan setelah DOM dimuat
document.addEventListener("DOMContentLoaded", function () {
  // Mengambil elemen checkbox untuk tema gelap
  const checkbox = document.querySelector('input[type="checkbox"]');

  // Menambahkan event listener untuk perubahan pada checkbox
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      enableDarkMode(); // Aktifkan tema gelap jika checkbox dicentang
    } else {
      disableDarkMode(); // Nonaktifkan tema gelap jika checkbox tidak dicentang
    }
  });

  // Fungsi untuk mengaktifkan tema gelap
  function enableDarkMode() {
    document.body.classList.add("dark-mode");
    // Anda juga bisa menyimpan preferensi pengguna di local storage di sini jika diperlukan
  }

  // Fungsi untuk menonaktifkan tema gelap
  function disableDarkMode() {
    document.body.classList.remove("dark-mode");
  }

  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "dark") {
    enableDarkMode(); // Aktifkan tema gelap jika sebelumnya sudah dipilih
    checkbox.checked = true; // Centang checkbox tema gelap
  }
});
