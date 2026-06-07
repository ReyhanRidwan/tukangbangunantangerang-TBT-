/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Service, FAQItem, Article, Testimonial } from '../types';
import { IMAGES } from './images';

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Renovasi Rumah Mewah Karawaci Baru',
    category: 'Renovasi Total',
    before: IMAGES.project1_before,
    after: IMAGES.project1_after,
    gallery: IMAGES.project1_gallery,
    challenge: 'Dinding lama lembab parah akibat rembesan air dari atap bocor, dan struktur beton lantai dua mengalami keretakan rambut di area ruang tamu utama.',
    solution: 'Melakukan injeksi beton struktur kokoh, mengganti sistem talang air beton menjadi pipa PVC eksternal premium, membongkar seluruh plesteran lembab, mengaplikasikan waterproofing double-coating, serta memasang granit baru 60x60 bertekstur glossy modern.',
    client: 'Bpk. Ridwan Hakim',
    year: '2025',
    size: '180 m²',
    location: 'Karawaci Baru, Kota Tangerang',
  },
  {
    id: 'p2',
    title: 'Pembangunan Modern Villa Minimalis Pinang',
    category: 'Bangun Baru',
    before: IMAGES.project2_before,
    after: IMAGES.project2_after,
    gallery: IMAGES.project2_gallery,
    challenge: 'Kontur tanah rawa labil di Tangerang selatan dengan daya dukung rendah, berpotensi membuat bangunan amblas atau miring di kemudian hari.',
    solution: 'Menerapkan fondasi tiang pancang (cakar ayam ganda) sedalam 12 meter dengan tulangan besi beton ulir diameter 16mm SNI secara presisi untuk menjamin ketahanan gempa dan pergeseran struktur tanah rawa.',
    client: 'Ibu Dr. Amalia',
    year: '2025 - 2026',
    size: '250 m²',
    location: 'Kec. Pinang, Kota Tangerang',
  },
  {
    id: 'p3',
    title: 'Desain & Konstruksi Ruko Modern Modernland',
    category: 'Arsitektur & Konstruksi',
    before: IMAGES.project3_before,
    after: IMAGES.project3_after,
    gallery: IMAGES.project3_gallery,
    challenge: 'Layout ruang ruko 3 lantai sangat terbatas tetapi pemilik membutuhkan pencahayaan alami maksimal serta ventilasi udara mengalir bebas tanpa menggunakan penyejuk udara (AC) berlebih.',
    solution: 'Membangun void di bagian tengah bangunan ruko, menggunakan atap transparan skylight pelindung UV, kusen aluminium YKK kedap suara, serta mengadopsi konsep sirkulasi udara bertingkat (cross ventilation).',
    client: 'PT. Sukses Gemilang Abadi',
    year: '2026',
    size: '320 m²',
    location: 'Modernland, Kota Tangerang',
  },
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Bangun Rumah Baru Dari Nol',
    iconName: 'Hammer',
    image: IMAGES.serviceNewBuilding,
    description: 'Wujudkan rumah impian Anda dengan struktur kokoh bergaransi. Kami mengurus semuanya dari desain arsitektural 3D, perhitungan kekuatan struktur beton, hingga serah terima kunci.',
    features: [
      'Pondasi cakar ayam ekstra kokoh bergaransi 5 tahun',
      'Pembesian beton menggunakan besi SNI ulir penuh',
      'Desain arsitektur visual 3D & denah AutoCAD Gratis',
      'Tim pengawas proyek sipil berdedikasi di lapangan',
      'Laporan progres pengerjaan mingguan terinci dengan dokumentasi foto',
    ],
  },
  {
    id: 's2',
    title: 'Renovasi Rumah Total & Parsial',
    iconName: 'ShieldAlert',
    image: IMAGES.serviceRenovation,
    description: 'Perbarui tampilan rumah Anda menjadi lebih fungsional dan modern. Kami ahli dalam menangani dak lantai dua beton, mengatasi atap rembes menahun, dan makeover interior ruko.',
    features: [
      'Pekerjaan dak lantai cor murni Ready Mix berkualitas K-225',
      'Pencegahan & solusi dinding lembab basah bergaransi',
      'Penggantian kusen kayu lapuk ke bahan aluminium Alexindo/YKK',
      'Pemasangan granit lantai dekoratif 60x60 / 80x80 presisi tinggi',
      'Makover kamar mandi estetik modern dengan waterproofing ketat',
    ],
  },
  {
    id: 's3',
    title: 'Perencanaan Arsitektur & Interior',
    iconName: 'Compass',
    image: IMAGES.serviceArchitecture,
    description: 'Dapatkan gambar kerja super lengkap dan fungsional. Perencanaan matang dari TBT Tangerang menghindarkan Anda dari pembongkaran sia-sia di tengah masa pengerjaan konstruksi.',
    features: [
      'Visualisasi render 3D Lumion definisi tinggi eksterior & interior',
      'Buku RAB matang yang transparan (Mencegah overbudget)',
      'Gambar kerja teknis lengkap (Arsitektur, Struktur, Plambing, Listrik)',
      'Bimbingan pengurusan IMB/PBG kota Tangerang dari asosiasi resmi',
      'Desain custom furniture dapur (Kitchen Set), backdrop TV, lemari tanam',
    ],
  },
  {
    id: 's4',
    title: 'Konstruksi Finishing & Kanopi',
    iconName: 'Paintbrush',
    image: IMAGES.serviceAdditional,
    description: 'Berikan sentuhan nilai estetika tinggi pada hunian Anda. Pengecatan luar tahan cuaca ekstrem, kanopi kaca temper modern, pagar las minimalis, dan plafon PVC drop ceiling.',
    features: [
      'Pengecatan khusus eksterior anti pudar bergaransi jamur Jotun Shield',
      'Pemasangan plafon PVC awet anti air & rayap dengan drop ceiling',
      'Instalasi kanopi rangka besi galvanis lapis atap kaca / polycarbonate',
      'Pagar modern minimalis laser cutting besi presisi',
      'Instalasi kelistrikan aman bersertifikasi uji kelayakan teknis',
    ],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Bpk. H. Ahmad Fauzi',
    role: 'Pemilik Rumah Tinggal - Sukasari',
    content: 'Tukang Bangunan Tangerang luar biasa! Proyek renovasi total rumah kami di Sukasari selesai tepat waktu bahkan 10 hari lebih cepat. RAB-nya transparan, tidak ada tambahan biaya tak terduga di tengah jalan. Sangat merekomendasikan Ir. Hendra dan tim!',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Ibu Lilis Suryani',
    role: 'Pengusaha Café - Karawaci',
    content: 'Sangat puas dengan pekerjaan interior ruko café kami. Desain void cahayanya benar-benar menghemat listrik di siang hari. Tukang-tukangnya sopan, bersih, dan sangat teliti merapikan sudut keramik granit.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Bpk. Christopher Wijaya',
    role: 'Pemilik Cluster - Pinang',
    content: 'Konstruksi pondasi cakar ayam bertulang rancangan tim TBT benar-benar kokoh meskipun tanah kavling kami berada dekat aliran air rawa. Garansi resmi tertulis bermeterai membuat keluarga saya merasa tenang.',
    rating: 5,
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'f1',
    question: 'Bagaimana metode pembayaran proyek konstruksi di TBT?',
    answer: 'Pembayaran proyek dilakukan secara bertahap (termyn) sesuai dengan kemajuan fisik di lapangan yang disepakati dalam kontrak kerja. Biasanya dibagi menjadi 4 tahap: DP awal pengerjaan (30%), Termyn II pengerjaan dinding (30%), Termyn III pengerjaan atap (30%), dan pelunasan 10% setelah serah terima kunci dan masa retensi pemeliharaan selesai.',
    category: 'biaya',
  },
  {
    id: 'f2',
    question: 'Apakah biaya konsultasi, gambar 3D, dan survei lokasi dipungut biaya?',
    answer: 'Sama sekali GRATIS! Kami memberikan layanan gratis konsultasi online via WhatsApp, survei pengukuran lokasi fisik ke area Tangerang, pengerjaan denah tata letak awal, hingga pembuatan RAB kasar bagi calon klien kami.',
    category: 'layanan',
  },
  {
    id: 'f3',
    question: 'Berapa lama masa garansi pemeliharaan tertulis yang diberikan?',
    answer: 'Kami memberikan Garansi Pemeliharaan Fisik selama 3 hingga 6 bulan pasca serah terima kunci (tergantung skala bangunan). Garansi mencakup kebocoran atap dak beton, instalasi plambing air mampet, keretakan plesteran, dan cacat struktural lainnya. Kami tuangkan garansi resmi ini tertulis dalam Surat Perjanjian Kontrak Kerja (SPK) bermeterai.',
    category: 'waktu',
  },
  {
    id: 'f4',
    question: 'Mengapa material yang digunakan oleh TBT lebih terjamin mutunya?',
    answer: 'Kami hanya menggunakan material bersertifikasi SNI dan bekerja sama langsung dengan distributor resmi agen Tangerang (Semen Tiga Roda/Gresik, Besi Ulir SNI murni, Kabel Supreme/Eterna, Cat Jotun/Propan). Setiap pengiriman material dicatat oleh logistik kami untuk memastikan tidak ada pemalsuan mutu.',
    category: 'layanan',
  },
  {
    id: 'f5',
    question: 'Bagaimana jika cuaca buruk atau material telat menghambat estimasi waktu?',
    answer: 'Kami selalu mencantumkan klausul "Force Majeure" dan durasi pengerjaan cadangan (buffer time) di dalam SPK. Bila terjadi kendala di luar kendali teknis, kami mengadakan koordinasi intensif bersama klien beserta alternatif lembur tim tukang guna mengejar keterlambatan tanpa sedikitpun mengurangi kualitas bangunan.',
    category: 'waktu',
  },
];

export const ARTICLES: Article[] = [
  {
    id: 'a1',
    title: 'Panduan Lengkap Menghitung RAB Bangun Rumah Baru di Tangerang',
    summary: 'Mencegah pembengkakan dana di tengah jalan dengan memahami rumus dasar perhitungan volume bahan, jasa tukang harian vs borongan, dan biaya izin PBG Tangerang.',
    content: 'Mendirikan rumah tinggal adalah salah satu investasi terbesar dalam hidup Anda. Sayangnya, banyak pemula terjebak dengan istilah "Harga Murah" namun berujung mangkrat dan terbengkalai karena RAB (Rencana Anggaran Biaya) yang kacau. Perencanaan RAB yang baik harus memisahkan Biaya Pekerjaan Sipil (pondasi, galian, kolom beton), Pekerjaan Arsitektural (dinding bata, plester, keramik, kusen), Pekerjaan MEP (kabel listrik, pipa air bersih/kotor), serta Pekerjaan Finishing luar dalam. Pastikan Anda menguji material beton dengan uji silinder/kubus mandiri bila membangun di Tangerang.',
    image: IMAGES.serviceArchitecture,
    date: '05 Juni 2026',
    readTime: '5 Menit Baca',
    category: 'Anggaran & Biaya',
  },
  {
    id: 'a2',
    title: '5 Karakter Tanah Tangerang & Fondasi Cakar Ayam Terbaiknya',
    summary: 'Mengapa area perumahan Tangerang tertentu memerlukan tiang pancang khusus dan bagaimana cara cakar ayam menyiasati tanah lempung atau eks rawa basah.',
    content: 'Kota Tangerang memiliki ragam struktur tanah yang unik. Bagian Karawaci cenderung memiliki tanah keras sedang, sementara area Pinang dan sebagian Cipondoh didominasi bekas tanah rawa basah yang sangat dinamis. Membangun fondasi rumah tinggal 2 lantai di atas tanah eks-rawa mewajibkan penggunaan fondasi footplate (cakar ayam) minimal berdiameter 80x80cm dengan tapak beton minimal K-225 berselimut besi ulir SNI murni 12mm sampai 14mm agar tidak terjadi keruntuhan diferensial.',
    image: IMAGES.teamConstruction,
    date: '31 Mei 2026',
    readTime: '6 Menit Baca',
    category: 'Spesialis Struktur',
  },
  {
    id: 'a3',
    title: 'Tips Desain Void Rumah Minimalis untuk Pencahayaan Alami Optimal',
    summary: 'Bagaimana TBT mengubah ruko sempit menjadi terasa luas, sejuk, dan hemat energi listrik menggunakan void estetik dan atap kaca skylight pelindung UV.',
    content: 'Membeli tanah berukuran sempit di tengah kepadatan kota Tangerang mengharuskan kita kreatif. Solusi tercerdas adalah mendesain Void (lubang menerus vertikal antara lantai bawah dan lantai atas). Void berfungsi melancarkan sirkulasi udara bertingkat (Efek Cerobong Angin) sehingga udara panas mengalir bebas ke atas keluar ruangan, sekaligus memasukkan sinar matahari sehat di pagi hari melalui panel atap kaca temper laminated ganda.',
    image: IMAGES.serviceArchitecture,
    date: '18 Mei 2026',
    readTime: '4 Menit Baca',
    category: 'Arsitektur Modern',
  },
  {
    id: 'a4',
    title: 'Renovasi Bertahap vs Renovasi Sekaligus: Mana Lebih Menguntungkan?',
    summary: 'Analisis mendalam perbandingan anggaran, kenyamanan keluarga saat pengerjaan berlangsung, dan efisiensi waktu kerja logistik tukang di lapangan.',
    content: 'Klien sering bertanya, lebih baik merenovasi rumah secara mencicil (per kamar/ruangan) atau merenovasi total sekaligus? Renovasi bertahap terasa lebih ringan di arus kas keuangan, tetapi membutuhkan ongkos logistik transportasi bahan bangunan berulang kali yang sebenarnya menaikkan biaya keseluruhan hingga 25%. Di sisi lain, merenovasi total sekaligus memiliki efisiensi waktu pengerjaan 40% lebih cepat karena pengaturan tenaga tukang yang optimal.',
    image: IMAGES.serviceRenovation,
    date: '02 Mei 2026',
    readTime: '5 Menit Baca',
    category: 'Tips Renovasi',
  },
  {
    id: 'a5',
    title: 'Mendeteksi & Menghentikan Kebocoran Dak Beton Atap Saat Musim Hujan',
    summary: 'Langkah taktis mengatasi rembesan air menahun pada atap dak flat dengan teknik waterproofing polyurethane coating (PU) yang elastis tahan lama.',
    content: 'Atap dak beton minimalis datar sedang naik daun di Tangerang karena memberikan kesan perkotaan yang modern. Namun, bila pengerjaan cor saringan air (slope / kemiringan) tidak minimal 2-3 derajat ke arah lubang pembuangan, air hujan akan tergenang yang perlahan mengeringkan struktur beton hingga retak rambut dan rembes ke plafon gypsum. Gunakan metode kuretase pembersihan lumut, pelapisan semen mortar elastis antiair, dan tutupi dengan waterproofing berbasis Polyurethane (PU) yang tahan paparan terik sinar UV.',
    image: IMAGES.serviceAdditional,
    date: '15 April 2026',
    readTime: '7 Menit Baca',
    category: 'Pemeliharaan Rumah',
  },
];
