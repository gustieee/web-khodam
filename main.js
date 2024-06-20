document.addEventListener('DOMContentLoaded', () => {
    const inputNama = document.getElementById('nama');
    const buttonTeraawang = document.getElementById('button');
    const nama1 = document.getElementById('nama1');
    const khodam1 = document.getElementById('khodam1');
    const resetButton = document.getElementById('res');

    const khodamList = [
        'Suprapto Ngebut', 'Badag Genjor', 'Laba-laba Sunda', 'Toren Aer', 'Elang Kuning' , 'Sabun gif' , 'Kartu Tri' , 'Ibnu betboi😈' , 'Joko Kendil' , 'ppk harimau' , 'Nutrisari Jeruk'
    ];

    const teraawangKhodam = () => {
        const nama = inputNama.value.trim();
        if (nama === '') {
            alert('Masukkan nama terlebih dahulu!');
            return;
        }

        const khodam = khodamList[Math.floor(Math.random() * khodamList.length)];

        nama1.innerHTML = `Nama: ${nama}`;
        khodam1.innerHTML = `Khodam: ${khodam}`;
    };

    buttonTeraawang.addEventListener('click', (event) => {
        event.preventDefault();
        teraawangKhodam();
    });

    const resetForm = () => {
        inputNama.value = '';
        nama1.textContent = 'Nama: ';
        khodam1.textContent = 'Khodam: ';
    };

    resetButton.addEventListener('click', (event) => {
        event.preventDefault();
        resetForm();
    });
});
