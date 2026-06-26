// Import library axios untuk melakukan HTTP Request
import axios from "axios";

// Fungsi handler yang akan dijalankan saat endpoint dipanggil
// req = request dari client
// res = response yang akan dikirim ke client
export default async function handler(req, res) {

  // Mengirim GET request ke API JSONPlaceholder
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/posts/1/comments',
    {
      headers: {
        // Mengizinkan semua jenis encoding response
        "Accept-Encoding": "*",
      },
    }
  );

  // Mengirim data hasil request ke client
  // Status 200 = request berhasil
  // response.data berisi data dari API
  res.status(200).json(response.data);
}
