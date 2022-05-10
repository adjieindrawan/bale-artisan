import bf1 from "../assets/images/bf-1.svg";
import bf2 from "../assets/images/bf-2.svg";
import bf3 from "../assets/images/bf-3.svg";

import iyDate from "../assets/images/iy-date.svg";
import iyParty from "../assets/images/iy-party.svg";

import benefitY1 from "../assets/images/bf-y1.svg";
import benefitY2 from "../assets/images/bf-y2.svg";
import benefitY3 from "../assets/images/bf-y3.svg";

export const _Package = [
  {
    title: "Paket Daily",
    desc: "Paket Daily ini cocok buat kamu yang pengen coba atau kamu ada hari khusus buat makan sehat.",
    point: ["Min. Pesan 1 hari", "Harga Normal", "Menu Dipilih Acak"],
  },
  {
    title: "Paket Weekly",
    desc: "Paket Weekly ini cocok buat kamu yang sudah terbiasa nih menikmati makanan sehat.",
    point: ["Min. Pesan 4 hari/minggu", "Harga Khusus", "Menu Dipilih Acak"],
  },
  {
    title: "Paket Monthly",
    desc: "Paket Monthly ini cocok buat kamu yang memang kesehariannya makan dengan makanan sehat.",
    point: ["Min. Pesan 16 hari/bulan", "Harga Special", "Menu Dipilih Acak"],
  },
];

export const _PackageCatering = [
  {
    img: iyDate,
    title: "Paket Daily",
    desc: "Paket Daily ini cocok buat kamu yang pengen coba atau kamu ada hari khusus buat makan sehat.",
    point: ["Min. Pesan 1 hari", "Harga Normal", "Menu Dipilih Acak"],
    link: "https://api.whatsapp.com/send?phone=6282134595795&text=Hi%20Bale%2C%20mau%20tanya%20paket%20berlangganan%20Catering%20dengan%20Paket%20Daily%20dong%3F",
  },
  {
    img: iyDate,
    title: "Paket Weekly",
    desc: "Paket Weekly ini cocok buat kamu yang sudah terbiasa nih menikmati makanan sehat.",
    point: ["Min. Pesan 4 hari/minggu", "Harga Khusus", "Menu Dipilih Acak"],
    link: "https://api.whatsapp.com/send?phone=6282134595795&text=Hi%20Bale%2C%20mau%20tanya%20paket%20berlangganan%20Catering%20dengan%20Paket%20Weekly%20dong%3F",
  },
  {
    img: iyDate,
    title: "Paket Monthly",
    desc: "Paket Monthly ini cocok buat kamu yang memang kesehariannya makan dengan makanan sehat.",
    point: ["Min. Pesan 16 hari/bulan", "Harga Special", "Menu Dipilih Acak"],
    link: "https://api.whatsapp.com/send?phone=6282134595795&text=Hi%20Bale%2C%20mau%20tanya%20paket%20berlangganan%20Catering%20dengan%20Paket%20Monthly%20dong%3F",
  },
  {
    img: iyParty,
    title: "Catering Acara",
    desc: "Bale Artisan bisa bakal bikin menu makan yang sesuai dengan keseruan acara kamu. ",
    point: ["Min. Pesan 20 Pax", "Bebas Atur Budget", "Bebas Pilih Menu"],
    link: "https://api.whatsapp.com/send?phone=6282134595795&text=Hi%20Bale%2C%20aku%20mau%20ada%20acara%20nih%2C%20katanya%20Bale%20ada%20Catering%20untuk%20acara%20ya%3F",
  },
];

export const _Benefits = [
  {
    title: "Pengiriman Cepat",
    desc: "Kita bakal kirim makanan kamu tepat waktu ke lokasi kamu yang termasuk dalam jangkauan layanan kita",
    img: bf1,
  },
  {
    title: "Bahan Berkualitas",
    desc: "Bahan makanan yang kita pilih pastinya segar dan sehat, karena menu kita enaknya ga bikin nyesel.",
    img: bf2,
  },
  {
    title: "TanyaBale",
    desc: "Kamu sangat bisa tanya sepuasnya dan kapan aja tentang layanan Bale Artisan di Whatsapp Chat kita.",
    img: bf3,
  },
];

export const _BenefitsY = [
  {
    title: "Pengiriman Cepat",
    desc: "Kita bakal kirim makanan kamu tepat waktu ke lokasi kamu yang termasuk dalam jangkauan layanan kita",
    img: benefitY1,
  },
  {
    title: "Bahan Berkualitas",
    desc: "Bahan makanan yang kita pilih pastinya segar dan sehat, karena menu kita enaknya ga bikin nyesel.",
    img: benefitY2,
  },
  {
    title: "TanyaBale",
    desc: "Kamu sangat bisa tanya sepuasnya dan kapan aja tentang layanan Bale Artisan di Whatsapp Chat kita.",
    img: benefitY3,
  },
];
