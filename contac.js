function submitForm() {
    // Ambil data dari form
    var fullName = document.querySelector('input[name="fullName"]').value;
    var email = document.querySelector('input[name="email"]').value;
    var phoneNumber = document.querySelector('input[name="phoneNumber"]').value;
    var message = document.querySelector('textarea[name="message"]').value;

    // Simpan data ke localStorage
    var contactData = {
        fullName: fullName,
        email: email,
        phoneNumber: phoneNumber,
        message: message
    };
    localStorage.setItem('contactData', JSON.stringify(contactData));

    // Tampilkan notifikasi pesan terkirim
    document.getElementById('notification').style.display = 'block';

    // Reset form
    document.getElementById('contactForm').reset();

    // Sembunyikan notifikasi setelah beberapa detik
    setTimeout(function() {
        document.getElementById('notification').style.display = 'none';
    }, 3000);
}