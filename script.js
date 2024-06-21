$(document).ready(function() {
    $('#cek-khodam').click(function(event) {
        event.preventDefault(); // prevent form submission
        var nama = $('#nama').val();
        if (nama !== '') {
            var khodamList = ["Laba laba sunda", "Kak Gem", "Kuyang Mullet", "Skibidi rizz", "Labi labi pontianak", "Hitam Berbulu"];
            var randomKhodam = khodamList[Math.floor(Math.random() * khodamList.length)];
            $('#hasil-khodam').html('Khodam Anda adalah: ' + randomKhodam);
        } else {
            alert('Silakan masukkan nama Anda!');
        }
    });
});