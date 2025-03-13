var slideindex = 1;
showDivs(slideindex);

function plusDivs(n){
    showDivs(slideindex += n);

}

function showDivs(n){
    var i;
    var imgList = document.getElementsByClassName("bg-image");
    console.log(imgList)
    if (n>imgList.length) slideindex = 1;
    else if (n < 1) slideindex = imgList.length

    for(i = 0; i < imgList.length; i++){
        imgList[i].style.display = "none";
    }

    imgList[slideindex - 1].style.display = "block";
    console.log(slideindex);
}

setInterval(() => {
    plusDivs(1);
}, 2000)

document.getElementById("hasil-halo").innerText = "Halo TelUtizen!"

document.getElementById("message-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah halaman refresh

    // Ambil nilai dari input
    let nama = document.getElementById("nama").value.trim();
    let email = document.getElementById("email").value.trim();
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let tgl_lahir = document.getElementById("tgl_lahir").value;
    let gender = document.querySelector('input[name="gender"]:checked');
    let pesan = document.getElementById("saran-kritik").value.trim();

    // Validasi input kosong
    if (nama === "" || tgl_lahir === "" || !gender || pesan === "") {
        alert("Harap isi semua field!");
        return;
    }

    // Validasi email
    if (!emailPattern.test(email)) {
        alert("Harap masukkan alamat email yang valid!");
        return;
    }

    // Ubah teks header
    document.getElementById("hasil-halo").innerText = `Halo ${nama}!`
    document.getElementById("filled-message").innerText = "Terima kasih sudah mengirim pesan untuk kami. Berikut data yang telah kamu submit.";

    // Sembunyikan teks default
    document.getElementById("pesan-default").style.display = "none";

    // Tampilkan hasil data
    document.getElementById("hasil-data").style.display = "block";

    // Masukkan data ke dalam tampilan hasil
    document.getElementById("hasil-nama-home").innerText = nama;
    document.getElementById("hasil-nama").innerText = nama;
    document.getElementById("hasil-email").innerText = email;
    document.getElementById("hasil-tgl-lahir").innerText = tgl_lahir;
    document.getElementById("hasil-gender").innerText = gender.value;
    document.getElementById("hasil-pesan").innerText = pesan;
});
