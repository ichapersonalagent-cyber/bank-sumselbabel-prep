/* MATERI belajar — persiapan tes Bank Sumsel Babel, posisi Analis Kredit.
   Struktur: const MATERI = [{id, judul, ringkas, sections:[{id, judul, html, poin:[]}]}]
   html memakai tag sederhana: p, ul, ol, li, b, table. Bahasa Indonesia, tanpa emoji.
   Angka & ketentuan memakai fakta terverifikasi per 2026-10-11; angka keuangan BSB
   2024 berlabel "dilaporkan media" (sumber sekunder media RUPS). Konsep 5C/7P/3R,
   tahapan kredit, batas hari kolektibilitas, dan rumus rasio berlabel praktik umum/
   konvensi industri (bukan ketentuan regulasi). Bukan bocoran tes. */

const MATERI = [
{
  id: "dasar-perbankan",
  judul: "Dasar-Dasar Perbankan",
  ringkas: "Fungsi dan jenis bank, otoritas BI/OJK/LPS, produk funding dan lending, bunga, sistem pembayaran, serta profil Bank Sumsel Babel.",
  sections: [
    {
      id: "fungsi-bank",
      judul: "Fungsi dan Peran Bank dalam Perekonomian",
      html: `<p>Bank adalah badan usaha yang menghimpun dana dari masyarakat dalam bentuk simpanan dan menyalurkannya kembali kepada masyarakat dalam bentuk kredit atau pembiayaan. Fungsi intinya adalah <b>intermediasi keuangan</b>: mempertemukan pihak yang kelebihan dana (surplus) dengan pihak yang membutuhkan dana (defisit).</p>
<p>Selain intermediasi, bank menjalankan tiga peran klasik. Pertama, <b>agent of trust</b> — bank dipercaya menyimpan dana masyarakat sehingga kepercayaan adalah modal utama. Kedua, <b>agent of development</b> — melalui penyaluran kredit, bank mendorong pertumbuhan sektor riil seperti UMKM, pertanian, dan perdagangan. Ketiga, <b>agent of service</b> — bank menyediakan layanan jasa keuangan seperti transfer, pembayaran, dan penukaran valuta asing.</p>
<p>Dalam perekonomian, bank juga menjadi jalur transmisi kebijakan moneter. Ketika Bank Indonesia mengubah suku bunga acuan, dampaknya mengalir lewat perbankan: bunga simpanan dan bunga kredit ikut bergerak, yang pada akhirnya memengaruhi konsumsi, investasi, dan inflasi. Karena itu kesehatan bank berdampak langsung pada stabilitas ekonomi.</p>
<p>Contoh nyata intermediasi: pada 2024, Bank Sumsel Babel menghimpun Dana Pihak Ketiga (DPK) sebesar Rp27,9 triliun dan menyalurkan kredit Rp24,5 triliun (angka dilaporkan media dari pemberitaan RUPS). Selisihnya ditempatkan pada instrumen likuid dan cadangan sesuai ketentuan. Analis kredit berada tepat di jantung fungsi ini: memastikan dana masyarakat yang disalurkan kembali sebagai kredit diberikan kepada debitur yang layak, sehingga kepercayaan publik tetap terjaga.</p>
<p>Sebagai BPD, Bank Sumsel Babel juga mengemban misi pembangunan daerah: menyalurkan kredit ke sektor prioritas Sumatera Selatan dan Bangka Belitung seperti UMKM, pertanian, dan perdagangan. Inilah wujud nyata <b>agent of development</b> — bank daerah menjadi motor penggerak ekonomi lokal, bukan sekadar pencari laba. Bagi calon analis, memahami misi ini penting: setiap kredit yang disetujui ikut menentukan denyut ekonomi daerah.</p>`,
      poin: [
        "Fungsi inti bank adalah intermediasi: menghimpun dana masyarakat dan menyalurkannya kembali sebagai kredit.",
        "Tiga peran bank: agent of trust, agent of development, dan agent of service.",
        "Bank menjadi jalur transmisi kebijakan moneter Bank Indonesia ke perekonomian riil.",
        "Contoh: BSB 2024 menghimpun DPK Rp27,9 triliun dan menyalurkan kredit Rp24,5 triliun (dilaporkan media)."
      ]
    },
    {
      id: "jenis-bank",
      judul: "Jenis Bank: Bank Umum vs BPR",
      html: `<p>Berdasarkan UU No. 10 Tahun 1998, bank di Indonesia terbagi menjadi <b>Bank Umum</b> dan <b>Bank Perkreditan Rakyat (BPR)</b>. Keduanya menghimpun dan menyalurkan dana, tetapi ruang gerak usahanya berbeda jauh.</p>
<p>Bank Umum dapat melakukan seluruh kegiatan usaha perbankan: menghimpun dana dalam bentuk <b>giro, tabungan, dan deposito</b>, menyalurkan kredit, menerbitkan surat berharga, melakukan kegiatan valuta asing, dan menyediakan jasa-jasa bank lainnya. Bank Pembangunan Daerah (BPD) seperti Bank Sumsel Babel berstatus <b>bank umum milik pemerintah daerah</b> — bukan BPR — sehingga dapat menawarkan produk selengkap bank umum nasional.</p>
<p>BPR memiliki kegiatan usaha yang terbatas: hanya boleh menghimpun dana dalam bentuk <b>tabungan dan deposito</b> (tidak boleh giro), menyalurkan kredit terutama kepada UMKM, dan <b>dilarang</b> melakukan kegiatan valuta asing, perasuransian, serta penyertaan modal. BPR adalah bank yang dekat dengan ekonomi rakyat di tingkat kabupaten/kota.</p>
<p>Perbedaan juga terlihat pada ketentuan permodalan. Kecukupan modal minimum (KPMM/CAR) bank umum ditetapkan berlapis menurut profil risiko: <b>8%</b> untuk profil risiko peringkat 1, <b>9% sampai di bawah 10%</b> untuk peringkat 2, <b>10% sampai di bawah 11%</b> untuk peringkat 3, dan <b>11% sampai 14%</b> untuk peringkat 4 dan 5, sesuai POJK 11/2016. Sementara itu BPR wajib memelihara KPMM paling rendah <b>12%</b> dari ATMR dengan modal inti paling rendah 8%, sesuai POJK 5/2015. Struktur permodalan berlapis ini mencerminkan kompleksitas risiko yang lebih besar pada bank umum.</p>
<p>Contoh pembeda praktis: nasabah perusahaan yang membutuhkan fasilitas <b>giro</b> untuk operasional dan transaksi <b>valas</b> untuk impor bahan baku hanya dapat dilayani bank umum. Inilah alasan BSB — sebagai BPD berstatus bank umum — dapat menjadi bank utama pemerintah daerah: mengelola kas daerah, menyalurkan kredit program, sekaligus melayani kebutuhan valas nasabah korporasi.</p>`,
      poin: [
        "Bank Umum boleh menghimpun giro, tabungan, deposito dan bertransaksi valas; BPR hanya tabungan dan deposito, fokus UMKM.",
        "Bank Sumsel Babel adalah BPD berstatus bank umum milik pemerintah daerah, bukan BPR.",
        "KPMM bank umum 8%–14% berlapis sesuai profil risiko (POJK 11/2016); BPR minimal 12% (POJK 5/2015)."
      ]
    },
    {
      id: "otoritas-keuangan",
      judul: "Otoritas: Bank Indonesia, OJK, dan LPS",
      html: `<p>Tiga lembaga memegang peran kunci dalam arsitektur keuangan Indonesia, masing-masing dengan mandat yang berbeda. Memahami pembagian tugas ini penting karena analis kredit bekerja di dalam kerangka yang mereka tetapkan.</p>
<p><b>Bank Indonesia (BI)</b> adalah bank sentral. Tujuannya mencapai dan memelihara <b>stabilitas nilai Rupiah</b>, yang dijalankan melalui tiga bidang: kebijakan moneter (menjaga inflasi dan nilai tukar), <b>stabilitas sistem pembayaran</b>, dan <b>stabilitas sistem keuangan</b> (bersama otoritas lain). Instrumen BI antara lain suku bunga acuan (BI-Rate) dan Giro Wajib Minimum (GWM), yaitu persentase tertentu dari Dana Pihak Ketiga yang wajib diparkir bank di BI.</p>
<p><b>Otoritas Jasa Keuangan (OJK)</b> mengatur dan mengawasi seluruh industri jasa keuangan, termasuk perbankan. Bank wajib <b>berizin dan diawasi OJK</b> — frasa ini tercantum pada seluruh materi resmi Bank Sumsel Babel. OJK menetapkan aturan kehati-hatian (misalnya POJK tentang KPMM, kualitas aset, dan APU-PPT), mengelola Sistem Layanan Informasi Keuangan (SLIK), serta melindungi konsumen jasa keuangan.</p>
<p><b>Lembaga Penjamin Simpanan (LPS)</b> menjamin simpanan nasabah bank peserta penjaminan. Nilai penjaminan maksimum <b>Rp2 miliar per nasabah per bank</b>. Simpanan dijamin sepanjang tercatat pada pembukuan bank, tingkat bunganya tidak melebihi Tingkat Bunga Penjaminan (TBP), dan nasabah tidak menyebabkan bank menjadi gagal. TBP periode Juli–September 2026 ditetapkan sebesar <b>3,75%</b> untuk Bank Umum dalam Rupiah, <b>6,25%</b> untuk BPR, dan <b>2%</b> untuk simpanan valuta asing. Bank peserta membayar premi penjaminan sebesar <b>0,1%</b> dari rata-rata saldo bulanan, dibayarkan dua kali setahun.</p>
<p>Ringkasnya: BI menjaga stabilitas makro dan sistem pembayaran, OJK mengawasi perilaku dan kesehatan bank secara mikro, dan LPS menjadi jaring pengaman simpanan masyarakat bila bank gagal.</p>
<p>Pembagian peran ini sering keluar dalam tes: <b>BI = makro</b> (moneter, sistem pembayaran), <b>OJK = mikro</b> (pengawasan bank dan perlindungan konsumen), <b>LPS = jaring pengaman</b> (penjaminan simpanan dan resolusi bank gagal). Satu kalimat kunci: bank yang sehat diawasi OJK, beroperasi dalam sistem pembayaran BI, dan simpanannya dijamin LPS — tiga lapis perlindungan bagi nasabah.</p>`,
      poin: [
        "BI: bank sentral dengan tujuan stabilitas nilai Rupiah, sistem pembayaran, dan sistem keuangan.",
        "OJK: mengatur dan mengawasi bank; setiap bank wajib berizin dan diawasi OJK, termasuk BSB.",
        "LPS menjamin simpanan maks Rp2 miliar per nasabah per bank; TBP Jul–Sep 2026: 3,75% (BU IDR), 6,25% (BPR), 2% (valas); premi 0,1% dari rata-rata saldo bulanan, 2x setahun.",
        "GWM adalah persentase DPK yang wajib ditempatkan bank di Bank Indonesia."
      ]
    },
    {
      id: "produk-funding",
      judul: "Produk Penghimpunan Dana: Giro, Tabungan, Deposito, dan DPK",
      html: `<p>Dana yang dihimpun bank dari masyarakat disebut <b>Dana Pihak Ketiga (DPK)</b>, terdiri dari tiga produk utama: giro, tabungan, dan deposito. Komposisi ketiganya menentukan biaya dana (cost of fund) bank.</p>
<p><b>Giro</b> adalah simpanan yang penarikannya dapat dilakukan setiap saat dengan menggunakan cek, bilyet giro, atau pemindahbukuan. Giro umumnya dipakai nasabah bisnis untuk transaksi operasional. Di Bank Sumsel Babel, produknya bernama <b>Giro Demang</b>. Karena sifatnya transaksional, bunga giro relatif rendah sehingga menjadi sumber dana murah.</p>
<p><b>Tabungan</b> adalah simpanan yang penarikan dan penyetorannya dapat dilakukan sesuai syarat tertentu, umumnya melalui ATM atau teller. BSB memiliki ragam tabungan: <b>Tabungan Pesirah</b> (dengan varian Bisnis, Junior, dan Raden), <b>Simpeda</b> (Simpanan Pembangunan Daerah), <b>Simpel</b> (Simpanan Pelajar), <b>Tabunganku</b>, dan <b>Tabungan Seluler</b>. Tabungan berbiaya dana rendah dan dikenal sebagai bagian dari dana murah (CASA: Current Account Saving Account) bersama giro.</p>
<p><b>Deposito</b> adalah simpanan berjangka yang penarikannya hanya dapat dilakukan pada waktu tertentu sesuai perjanjian. Imbalannya berupa bunga yang lebih tinggi dibanding tabungan, tetapi pencairan sebelum jatuh tempo umumnya kena penalti. BSB menawarkan <b>Deposito Berjangka</b> dan <b>Depati</b> (Deposito Tanpa Penalti) — produk yang memberi fleksibilitas pencairan. Perlu diingat: agar simpanan dijamin LPS, bunganya tidak boleh melebihi Tingkat Bunga Penjaminan yang berlaku.</p>
<p>Bagi analis kredit, DPK penting karena menjadi <b>sumber dana penyaluran kredit</b>. Pada 2024, DPK BSB tercatat Rp27,9 triliun (dilaporkan media). Rasio kredit terhadap DPK (LDR) bank ini 87,77% — artinya hampir 88% dana masyarakat sudah disalurkan sebagai kredit, sisanya menjadi bantalan likuiditas.</p>
<p>Strategi funding bank sehat adalah memaksimalkan <b>CASA</b> (giro + tabungan) karena biayanya murah — semakin tinggi porsi CASA, semakin rendah cost of fund, semakin lebar spread kredit. Inilah alasan bank berlomba-lomba mengembangkan layanan digital dan produk tabungan menarik: Tabungan Pesirah, Simpel, hingga Tabungan Seluler BSB pada dasarnya adalah instrumen untuk mengerek porsi dana murah.</p>`,
      poin: [
        "DPK terdiri dari giro, tabungan, dan deposito; giro + tabungan disebut dana murah (CASA).",
        "Produk funding BSB: Giro Demang; Tabungan Pesirah (Bisnis/Junior/Raden), Simpeda, Simpel, Tabunganku, Tabungan Seluler; Deposito Berjangka dan Depati (tanpa penalti).",
        "Bunga simpanan yang melebihi Tingkat Bunga Penjaminan LPS membuat simpanan tidak dijamin.",
        "DPK BSB 2024 Rp27,9 triliun menjadi sumber penyaluran kredit Rp24,5 triliun (dilaporkan media)."
      ]
    },
    {
      id: "produk-lending",
      judul: "Produk Penyaluran Dana dan Jenis Kredit",
      html: `<p>Penyaluran dana adalah sisi <b>lending</b>: bank memberikan kredit atau pembiayaan kepada debitur dengan harapan dana kembali beserta bunga. Menurut penggunaannya, kredit dibagi menjadi tiga: <b>kredit modal kerja</b> (membiayai operasional sehari-hari seperti pembelian stok), <b>kredit investasi</b> (membiayai aset tetap seperti mesin, kendaraan operasional, atau pembangunan), dan <b>kredit konsumsi</b> (untuk kebutuhan pribadi, seperti kredit multiguna atau kendaraan).</p>
<p>Bank Sumsel Babel memiliki lini kredit yang lengkap. <b>KSG (Kredit Serba Guna)</b> adalah kredit konsumsi/multiguna dengan ketentuan plafon maksimum <b>Rp200 juta bagi debitur berpenghasilan tidak tetap</b>. Selain itu tersedia <b>KUR</b> (Kredit Usaha Rakyat, kredit program pemerintah bersubsidi untuk UMKM), <b>KUM</b> (Kredit Usaha Mikro), <b>KUKPEDES</b> (kredit untuk perangkat desa), <b>KGS</b>, <b>KKB</b> (Kredit Kendaraan Bermotor), dan <b>Kredit Investasi</b> untuk pembiayaan aset produktif jangka menengah-panjang.</p>
<p>Pendapatan bank dari sisi lending berasal dari <b>selisih bunga</b> (spread): bunga kredit yang dibebankan ke debitur dikurangi biaya dana dan biaya operasional. Komponen pembentuk bunga kredit meliputi biaya dana (cost of fund), biaya overhead, premi risiko (cadangan kerugian), dan margin keuntungan. Inilah alasan analis kredit begitu penting: salah menilai risiko debitur berarti premi risiko tidak cukup menutup kerugian, dan spread bank tergerus.</p>
<p>Setiap rupiah kredit yang disalurkan wajib didukung analisis kelayakan — keyakinan atas kemauan dan kemampuan debitur melunasi, sebagaimana diamanatkan Pasal 8 ayat 1 UU No. 10 Tahun 1998. Prinsip inilah yang menjadi fondasi seluruh materi analisis kredit pada modul 3.</p>
<p>Contoh penerapan: KUR BSB disalurkan ke warung dan bengkel dengan bunga bersubsidi pemerintah — risikonya kecil bagi bank tetapi dampaknya besar bagi UMKM. Sebaliknya Kredit Investasi bernilai miliaran rupiah menuntut analisis arus kas proyeksi yang mendalam karena tenornya panjang. Perbedaan karakteristik inilah yang membuat analis harus menguasai banyak jenis produk, bukan satu pola analisis.</p>`,
      poin: [
        "Tiga jenis kredit menurut penggunaan: modal kerja, investasi, dan konsumsi.",
        "Produk kredit BSB: KSG (plafon maks Rp200 juta bagi berpenghasilan tidak tetap), KUR, KUM, KUKPEDES, KGS, KKB, dan Kredit Investasi.",
        "Pendapatan lending berasal dari spread: bunga kredit minus biaya dana, overhead, premi risiko, dan margin.",
        "Jangkar hukum analisis kredit: Pasal 8 ayat 1 UU No. 10 Tahun 1998 — keyakinan atas itikad dan kemampuan debitur berdasar analisis mendalam."
      ]
    },
    {
      id: "bunga-pembayaran",
      judul: "Suku Bunga dan Sistem Pembayaran Nasional",
      html: `<p>Suku bunga adalah harga dari uang. Di Indonesia, rantai suku bunga dimulai dari <b>BI-Rate</b> (suku bunga acuan Bank Indonesia). Kenaikan BI-Rate membuat dana antarbank lebih mahal, bank menaikkan bunga simpanan agar DPK tidak lari, dan pada gilirannya bunga kredit ikut naik. Rantai ini disebut <b>mekanisme transmisi kebijakan moneter</b> dan analis kredit perlu memahaminya karena perubahan bunga memengaruhi kemampuan bayar debitur berbunga mengambang.</p>
<p>Bunga simpanan juga dipengaruhi Tingkat Bunga Penjaminan LPS: bank yang menawarkan bunga di atas TBP membuat simpanannya <b>tidak dijamin</b> LPS, sehingga bank sehat umumnya menahan bunga simpanan di bawah TBP. TBP periode Juli–September 2026: 3,75% untuk Bank Umum Rupiah, 6,25% untuk BPR, dan 2% untuk valas.</p>
<p>Di sisi pembayaran, Bank Indonesia mengoperasikan tiga sistem utama. <b>BI-FAST</b> adalah infrastruktur transfer <b>ritel yang beroperasi 24 jam setiap hari</b>, diluncurkan pada <b>21 Desember 2021</b> — nasabah dapat transfer antarbank kapan pun secara nyaris real-time. <b>SKNBI</b> (Sistem Kliring Nasional BI) memproses transfer dan kliring untuk nilai <b>di bawah Rp1 miliar</b> secara batch. <b>BI-RTGS</b> memproses transaksi bernilai besar, yaitu <b>Rp1 miliar ke atas</b>, secara real-time dan gross (per transaksi, tanpa netting).</p>
<p>Selain itu BI mewajibkan <b>GWM (Giro Wajib Minimum)</b>, yaitu persentase tertentu dari DPK yang harus ditempatkan bank dalam bentuk giro di BI. GWM berfungsi ganda: sebagai bantalan likuiditas sistem dan sebagai instrumen makroprudensial — ketika BI ingin mengerem laju kredit, GWM dapat dinaikkan sehingga dana yang bisa disalurkan bank berkurang.</p>
<p>Contoh dampak ke debitur: kredit modal kerja Rp500 juta berbunga floating 10% — bila BI-Rate naik dan bunga kredit disesuaikan menjadi 11%, beban bunga tahunan naik Rp5 juta. Kelihatannya kecil, tetapi bagi UMKM dengan margin tipis kenaikan ini dapat menekan DSCR di bawah 1,2x. Karena itu analis wajib menguji sensitivitas kenaikan bunga dalam setiap analisa kredit floating.</p>`,
      poin: [
        "Rantai suku bunga: BI-Rate → bunga simpanan → bunga kredit; memengaruhi kemampuan bayar debitur.",
        "Bunga simpanan di atas TBP LPS membuat simpanan tidak dijamin LPS.",
        "BI-FAST: transfer ritel 24/7 sejak 21/12/2021; SKNBI untuk <Rp1 miliar; BI-RTGS untuk ≥Rp1 miliar secara real-time.",
        "GWM adalah persentase DPK yang wajib diparkir di BI; berfungsi sebagai bantalan likuiditas dan instrumen makroprudensial."
      ]
    },
    {
      id: "profil-bsb",
      judul: "Profil Bank Sumsel Babel",
      html: `<p><b>PT Bank Pembangunan Daerah Sumatera Selatan dan Bangka Belitung</b> — dikenal sebagai <b>Bank Sumsel Babel (BSB)</b> — adalah Bank Pembangunan Daerah milik pemerintah daerah. Bank ini <b>berdiri pada 6 November 1957</b>, dan pada <b>2009</b> namanya berubah dari Bank Sumsel menjadi Bank Sumsel Babel seiring pemekaran Provinsi Kepulauan Bangka Belitung. Sebagai BUMD, sahamnya dimiliki oleh <b>Pemerintah Provinsi Sumatera Selatan dan Pemerintah Provinsi Kepulauan Bangka Belitung</b> beserta pemerintah kabupaten/kota di kedua provinsi.</p>
<p>Kantor pusat BSB berlokasi di <b>Jl. Gubernur H. Ahmad Bastari No. 7, Palembang</b>. Bank ini <b>berizin dan diawasi oleh OJK dan Bank Indonesia</b> serta menjadi <b>peserta penjaminan LPS</b>, sehingga simpanan nasabahnya dijamin sesuai ketentuan. Layanan nasabah dilayani melalui <b>call center 1500711</b>.</p>
<p>Visi BSB adalah <b>"Menjadi Bank terkemuka dan terpercaya dengan kinerja unggul berbasis layanan digital"</b>. Budaya kerjanya dirumuskan dalam nilai <b>BSB PACAK</b>: <b>P</b>rofesional, <b>A</b>manah, <b>C</b>ustomer Focus, <b>A</b>gility, dan <b>K</b>olaboratif — akronim yang mudah diingat karena "pacak" dalam bahasa Palembang berarti keren/hebat.</p>
<p>Kinerja keuangan (angka berikut <b>dilaporkan media</b> dari pemberitaan RUPS, sumber sekunder): pada 2024, BSB membukukan <b>aset Rp39,3 triliun</b>, DPK Rp27,9 triliun, kredit Rp24,5 triliun, dan <b>laba Rp475,8 miliar</b>, dengan CAR 22,50%, NPL net 0,50%, LDR 87,77%, NIM 6,65%, dan ROE 10,20%. Pada 2025, kinerja berlanjut: <b>laba Rp504,9 miliar</b>, CAR 23,68%, NPL net 0,72%, LDR 84,32%, NIM 6,38%, ROE 10,55%, serta peringkat <b>idA+ dengan outlook Stable dari PEFINDO</b>. Angka-angka ini menunjukkan bank daerah yang permodalannya sangat kuat (CAR jauh di atas minimum 8%–14%) dengan kualitas kredit terjaga.</p>`,
      poin: [
        "BSB: PT Bank Pembangunan Daerah Sumatera Selatan dan Bangka Belitung; berdiri 6 Nov 1957; berganti nama 2009; BUMD milik Pemprov Sumsel & Babel.",
        "Kantor pusat Jl. Gubernur H. Ahmad Bastari No. 7 Palembang; berizin & diawasi OJK dan BI; peserta penjaminan LPS; call center 1500711.",
        "Visi: Menjadi Bank terkemuka dan terpercaya dengan kinerja unggul berbasis layanan digital; budaya BSB PACAK (Profesional, Amanah, Customer Focus, Agility, Kolaboratif).",
        "Keuangan (dilaporkan media): 2024 aset Rp39,3T, DPK Rp27,9T, kredit Rp24,5T, laba Rp475,8M, CAR 22,50%, NPL net 0,50%, LDR 87,77%, NIM 6,65%, ROE 10,20%; 2025 laba Rp504,9M, CAR 23,68%, NPL net 0,72%, LDR 84,32%, NIM 6,38%, ROE 10,55%, rating PEFINDO idA+/Stable."
      ]
    }
  ]
},
{
  id: "regulasi-kepatuhan",
  judul: "Regulasi dan Kepatuhan Perbankan",
  ringkas: "Prinsip kehati-hatian, KYC/CDD, APU-PPT, perlindungan konsumen, GCG, dan budaya kepatuhan.",
  sections: [
    {
      id: "prudent-banking",
      judul: "Prinsip Kehati-hatian (Prudent Banking)",
      html: `<p><b>Prudent banking</b> adalah prinsip kehati-hatian dalam pengelolaan bank: setiap keputusan bisnis — terutama pemberian kredit — harus didasarkan pada analisis yang cermat, manajemen risiko yang memadai, dan kepatuhan pada ketentuan. Prinsip ini bukan sekadar slogan; ia menjadi benang merah seluruh regulasi perbankan Indonesia.</p>
<p>Landasan hukumnya antara lain UU No. 10 Tahun 1998 tentang Perbankan. <b>Pasal 8 ayat 1</b> mewajibkan bank memiliki keyakinan berdasarkan <b>analisis yang mendalam atas itikad dan kemampuan serta kesanggupan debitur</b> untuk melunasi utangnya sebelum memberikan kredit. Artinya, kredit tidak boleh diberikan atas dasar hubungan, tekanan, atau asumsi — harus ada analisis terdokumentasi.</p>
<p>Dalam praktik pengawasan, OJK menilai penerapan prinsip kehati-hatian melalui ketentuan kecukupan modal (KPMM/CAR berlapis 8%–14% sesuai POJK 11/2016), kualitas aset dan pembentukan cadangan (POJK 40/2019), batas maksimum pemberian kredit (BMPK), serta penilaian tingkat kesehatan bank. Bank yang melanggar prinsip kehati-hatian dapat dikenai sanksi administratif hingga pencabutan izin usaha.</p>
<p>Bagi seorang analis kredit, prudent banking diterjemahkan menjadi disiplin kerja sehari-hari: verifikasi data debitur, analisis arus kas yang realistis (bukan sekadar ikut angka pengajuan), penilaian agunan yang independen, dokumentasi lengkap, dan keberanian mengatakan <b>tidak</b> pada kredit yang tidak layak — walau diajukan oleh nasabah besar. Integritas analis adalah garis pertahanan pertama bank.</p>
<p>Contoh pelanggaran prinsip ini: analis menyetujui kredit berdasar "janji lisan" debitur tanpa verifikasi mutasi rekening, atau menaikkan taksiran agunan agar plafon lolos komite. Kedua praktik ini — sekecil apa pun — adalah benih kredit macet. Dalam wawancara, tunjukkan pemahaman bahwa prudent banking bukan menghambat bisnis, melainkan <b>melindungi bisnis</b> dari kerugian yang seharusnya bisa dicegah. Calon analis yang memahami ini sejak awal akan lebih siap menghadapi tekanan target bisnis tanpa mengorbankan kualitas analisis.</p>`,
      poin: [
        "Prudent banking: setiap keputusan kredit wajib berdasar analisis cermat, manajemen risiko, dan kepatuhan regulasi.",
        "Pasal 8 ayat 1 UU 10/1998 mewajibkan keyakinan atas itikad dan kemampuan debitur berdasar analisis mendalam.",
        "OJK menegakkan prinsip ini lewat KPMM, kualitas aset, BMPK, dan penilaian kesehatan bank.",
        "Wujud sehari-hari analis: verifikasi data, arus kas realistis, agunan independen, dokumentasi lengkap, berani menolak kredit tak layak."
      ]
    },
    {
      id: "kyc-cdd",
      judul: "KYC dan CDD: Kenali Nasabahmu",
      html: `<p><b>KYC (Know Your Customer)</b> adalah kewajiban bank untuk mengenal identitas nasabahnya, sedangkan <b>CDD (Customer Due Diligence)</b> adalah proses uji tuntas untuk menilai profil risiko nasabah: siapa dia, dari mana sumber dananya, apa tujuan hubungannya dengan bank, dan apakah profil transaksinya wajar. Keduanya adalah fondasi pertahanan bank terhadap pencucian uang dan pendanaan terorisme.</p>
<p>Proses CDD pada umumnya mencakup: <b>identifikasi dan verifikasi</b> identitas nasabah (KTP, NPWP, dokumen badan usaha, struktur kepemilikan), <b>penilaian profil risiko</b> (jenis pekerjaan/usaha, negara asal, pola transaksi yang diperkirakan), dan <b>pemantauan berkelanjutan</b> atas transaksi nasabah dibandingkan profilnya. Untuk nasabah berisiko tinggi — misalnya pejabat publik (PEP), usaha berisiko tinggi, atau struktur kepemilikan rumit — bank wajib menerapkan <b>Enhanced Due Diligence (EDD)</b> dengan pendalaman lebih jauh dan persetujuan pejabat yang lebih senior.</p>
<p>CDD bukan pekerjaan satu kali saat pembukaan rekening. Bank wajib melakukan <b>pengkinian data</b> secara berkala dan <b>pemantauan transaksi</b>: transaksi yang menyimpang dari profil nasabah — misalnya rekening tabungan perorangan yang tiba-tiba menerima transfer miliaran rupiah dari luar negeri — harus ditelaah dan bila mencurigakan dilaporkan sebagai Laporan Transaksi Keuangan Mencurigakan (LTKM) ke PPATK.</p>
<p>Dalam konteks analisis kredit, CDD berarti analis wajib memastikan identitas dan legalitas calon debitur sahih: dokumen badan usaha (NIB, akta, pengesahan), identitas pengurus, serta kewajaran sumber dana setoran modal dan agunan. Debitur yang dokumennya tidak bisa diverifikasi adalah debitur yang tidak boleh dibiayai.</p>
<p>Contoh penerapan EDD: calon debitur adalah pejabat daerah yang mengajukan kredit Rp2 miliar dengan setoran uang muka tunai Rp600 juta. Prosedur normal tidak cukup — analis wajib menelusuri sumber dana Rp600 juta tersebut (apakah dari penghasilan yang wajar?), mendapatkan persetujuan pejabat senior, dan memantau mutasi rekeningnya lebih ketat. Prinsipnya: <b>semakin tinggi risiko nasabah, semakin dalam uji tuntasnya</b>.</p>`,
      poin: [
        "KYC/CDD: kenali identitas, sumber dana, tujuan hubungan usaha, dan kewajaran profil transaksi nasabah.",
        "Nasabah berisiko tinggi (PEP, usaha berisiko, struktur rumit) wajib dikenai Enhanced Due Diligence (EDD).",
        "CDD berkelanjutan: pengkinian data berkala dan pemantauan transaksi terhadap profil nasabah.",
        "Transaksi menyimpang yang mencurigakan wajib dilaporkan sebagai LTKM ke PPATK."
      ]
    },
    {
      id: "apu-ppt",
      judul: "APU-PPT dan Pelaporan ke PPATK",
      html: `<p><b>APU-PPT</b> adalah program Anti Pencucian Uang dan Pencegahan Pendanaan Terorisme yang wajib diterapkan seluruh penyedia jasa keuangan, termasuk bank. Kerangka acuannya saat ini adalah <b>POJK Nomor 8 Tahun 2023</b> tentang Penerapan Program APU, PPT, dan PPPSPM bagi sektor jasa keuangan.</p>
<p>POJK 8/2023 mewajibkan bank menerapkan setidaknya empat pilar. Pertama, <b>pengawasan aktif direksi dan dewan komisaris</b> terhadap program APU-PPT. Kedua, <b>kebijakan dan prosedur</b> tertulis, mencakup CDD/KYC, identifikasi beneficial owner, dan penanganan nasabah berisiko tinggi. Ketiga, <b>pengendalian intern dan sistem informasi manajemen</b> yang mampu mendeteksi pola transaksi mencurigakan. Keempat, <b>sumber daya manusia dan pelatihan</b> agar seluruh pegawai memahami kewajiban ini.</p>
<p>Kewajiban operasionalnya meliputi: melakukan <b>CDD</b> saat memulai hubungan usaha, <b>memantau transaksi nasabah</b> dan mencocokkannya dengan profil risiko, <b>menyusun profil nasabah</b> berbasis risiko, serta <b>melaporkan</b> transaksi keuangan tunai di atas ambang batas (LTKT), transaksi keuangan mencurigakan (LTKM), dan transaksi terkait pendanaan terorisme kepada <b>PPATK</b> (Pusat Pelaporan dan Analisis Transaksi Keuangan).</p>
<p>Bagi analis kredit, relevansi APU-PPT sangat langsung: dana untuk setoran modal, uang muka, atau pelunasan yang sumbernya tidak jelas adalah <b>red flag</b>. Analis wajib menanyakan dan mendokumentasikan sumber dana, menolak memproses pengajuan dengan dana mencurigakan, dan meneruskan temuan ke unit kepatuhan. Pembiayaan terhadap hasil kejahatan dapat menyeret bank ke ranah pidana — risikonya bukan sekadar kredit macet.</p>
<p>Contoh red flag dalam pengajuan kredit: calon debitur wiraswasta mengaku omzet Rp50 juta/bulan tetapi menyetor uang muka Rp300 juta tunai tanpa dokumen pendukung; atau dana pelunasan dipercepat berasal dari transfer pihak ketiga yang tidak dikenal. Kedua pola ini wajib didokumentasikan dan dilaporkan ke unit kepatuhan. Ingat: <b>analis bukan penyidik</b> — tugasnya mengenali tanda bahaya dan meneruskannya, bukan membuktikan kejahatan.</p>`,
      poin: [
        "APU-PPT mengacu pada POJK 8/2023: cegah pencucian uang dan pendanaan terorisme di sektor jasa keuangan.",
        "Empat pilar: pengawasan aktif direksi/komisaris, kebijakan-prosedur, pengendalian intern & SIM, SDM & pelatihan.",
        "Kewajiban bank: CDD/KYC, pantau transaksi vs profil nasabah, susun profil nasabah, lapor LTKT/LTKM ke PPATK.",
        "Analis wajib menelusuri sumber dana debitur; dana mencurigakan adalah red flag yang harus diteruskan ke unit kepatuhan."
      ]
    },
    {
      id: "perlindungan-konsumen",
      judul: "Perlindungan Konsumen (POJK 22/2023)",
      html: `<p>Bank berhadapan dengan jutaan nasabah yang posisi tawarnya lebih lemah, sehingga OJK menetapkan kerangka perlindungan konsumen yang kuat melalui <b>POJK Nomor 22 Tahun 2023</b> tentang Pelindungan Konsumen dan Masyarakat di Sektor Jasa Keuangan. Regulasi ini mewajibkan bank memperlakukan nasabah secara adil sejak tahap pemasaran hingga penanganan pengaduan.</p>
<p>Prinsip-prinsip utamanya meliputi: <b>transparansi informasi</b> — bank wajib menyampaikan informasi produk secara jelas, akurat, dan tidak menyesatkan, termasuk rincian biaya, bunga, denda, dan risiko; <b>perlakuan adil</b> — dilarang diskriminasi dan praktik penjualan yang memaksa; <b>keandalan</b> sistem dan layanan; <b>kerahasiaan dan keamanan data</b> konsumen; serta <b>penanganan pengaduan yang efektif</b> dengan mekanisme yang mudah diakses dan batas waktu penyelesaian.</p>
<p>Dalam konteks perkreditan, perlindungan konsumen berarti analis dan pemasar kredit wajib menjelaskan secara jujur: berapa <b>bunga efektif</b> yang dikenakan, bagaimana skema angsuran dihitung, berapa <b>denda keterlambatan</b> dan biaya-biaya lain, serta apa konsekuensi gagal bayar termasuk eksekusi agunan. Praktik seperti menyembunyikan biaya, menjanjikan persetujuan yang belum pasti, atau memaksa nasabah mengambil produk tambahan (tying) melanggar ketentuan ini.</p>
<p>Pelanggaran perlindungan konsumen dapat berujung pada sanksi administratif OJK, gugatan perdata, dan kerusakan reputasi. Bagi calon analis kredit, pesannya jelas: <b>penjelasan yang transparan kepada debitur bukan pilihan, melainkan kewajiban regulasi</b> — dan dokumentasikan setiap penjelasan penting yang diberikan.</p>
<p>Contoh yang benar: sebelum debitur menandatangani perjanjian KSG, analis menjelaskan "Bapak membayar angsuran Rp3,5 juta per bulan selama 24 bulan dengan bunga efektif 11% per tahun; bila terlambat ada denda 2% dari angsuran tertunggak; agunan SHM dapat dieksekusi bila gagal bayar" — lalu debitur menandatangani lembar pernyataan telah memahami. Transparansi seperti ini melindungi nasabah sekaligus melindungi bank dari sengketa di kemudian hari.</p>`,
      poin: [
        "Perlindungan konsumen jasa keuangan diatur POJK 22/2023: transparansi, perlakuan adil, keamanan data, penanganan pengaduan.",
        "Bank wajib menjelaskan jujur: bunga efektif, skema angsuran, denda, biaya, dan konsekuensi gagal bayar.",
        "Dilarang: informasi menyesatkan, penjualan memaksa, dan tying produk.",
        "Pelanggaran berisiko sanksi OJK, gugatan, dan kerusakan reputasi bank."
      ]
    },
    {
      id: "gcg",
      judul: "Good Corporate Governance (GCG)",
      html: `<p><b>GCG (Good Corporate Governance)</b> adalah tata kelola perusahaan yang baik: sistem yang mengatur hubungan antara pemegang saham, dewan komisaris, direksi, dan pemangku kepentingan lainnya agar bank dikelola secara sehat, transparan, dan akuntabel. Bagi bank — apalagi BUMD seperti BSB yang mengelola dana publik daerah — GCG adalah fondasi kepercayaan.</p>
<p>Lima prinsip GCG yang dikenal luas adalah: <b>Transparency</b> (keterbukaan informasi material), <b>Accountability</b> (kejelasan fungsi dan pertanggungjawaban setiap organ), <b>Responsibility</b> (kepatuhan pada peraturan dan tanggung jawab sosial), <b>Independency</b> (pengelolaan bebas benturan kepentingan), dan <b>Fairness</b> (keadilan bagi seluruh pemangku kepentingan). Kelimanya disingkat <b>TARIF</b>.</p>
<p>Dalam proses kredit, GCG diwujudkan melalui mekanisme <b>four eyes principle</b>: pemrakarsa kredit (relationship/analis) berbeda dengan pemberi persetujuan (komite/atasan), sehingga tidak ada satu orang yang memutus sendiri. Ada pula <b>batas wewenang memutus kredit (BWMP)</b> berjenjang sesuai plafon, larangan memutus kredit untuk pihak terkait tanpa prosedur khusus (BMPK dan ketentuan pihak terkait), serta kewajiban <b>menghindari benturan kepentingan</b> — analis tidak boleh menangani pengajuan dari keluarga atau pihak yang memberinya gratifikasi.</p>
<p>Budaya kerja <b>BSB PACAK</b> menopang GCG dari sisi perilaku: <b>Profesional</b> dan <b>Amanah</b> menuntut analis bekerja kompeten dan dapat dipercaya, <b>Customer Focus</b> menuntut layanan adil bagi nasabah, sementara <b>Agility</b> dan <b>Kolaboratif</b> menuntut kerja cepat namun tetap melalui mekanisme pengawasan yang benar.</p>
<p>Contoh benturan kepentingan: analis menangani pengajuan kredit dari perusahaan milik pamannya sendiri. Tindakan yang benar menurut GCG adalah <b>mengundurkan diri</b> dari penanganan perkara tersebut dan melaporkannya ke atasan — bukan sekadar "bersikap objektif". Integritas tidak diukur dari niat, melainkan dari menghindari situasi yang menguji niat. Inilah makna independency dalam TARIF.</p>`,
      poin: [
        "GCG bertumpu pada lima prinsip TARIF: Transparency, Accountability, Responsibility, Independency, Fairness.",
        "Dalam kredit: four eyes principle, batas wewenang memutus kredit berjenjang, aturan pihak terkait/BMPK.",
        "Analis wajib menghindari benturan kepentingan: tidak menangani pengajuan keluarga atau yang disertai gratifikasi.",
        "Nilai BSB PACAK (Profesional, Amanah, Customer Focus, Agility, Kolaboratif) adalah perwujudan perilaku GCG."
      ]
    },
    {
      id: "budaya-kepatuhan",
      judul: "Budaya Kepatuhan dan Sanksi Pelanggaran",
      html: `<p>Regulasi sehebat apa pun tidak berguna tanpa <b>budaya kepatuhan</b> — kesadaran setiap pegawai bahwa aturan ditaati bukan karena takut sanksi, melainkan karena itulah cara kerja yang benar. OJK menilai fungsi kepatuhan bank sebagai bagian dari penilaian tingkat kesehatan, dan bank wajib memiliki direktur kepatuhan serta satuan kerja kepatuhan yang independen.</p>
<p>Pelanggaran ketentuan perbankan berlapis sanksinya. <b>Sanksi administratif</b> dari OJK/BI dapat berupa teguran tertulis, denda, pembatasan kegiatan usaha, hingga pencabutan izin. <b>Sanksi pidana</b> mengancam perbuatan seperti penggelapan, pemalsuan dokumen, dan pencucian uang — baik bagi pelaku maupun pihak bank yang lalai menerapkan APU-PPT. Di level internal, pelanggaran kode etik berujung pada sanksi kepegawaian hingga pemutusan hubungan kerja.</p>
<p>Beberapa pelanggaran klasik di area perkreditan yang wajib dihindari analis: <b>kredit fiktif</b> (kredit atas nama orang yang tidak ada/tidak tahu), <b>mark-up agunan</b> (menaikkan nilai taksiran agar plafon lolos), <b>evergreening</b> (memberi kredit baru untuk menutup tunggakan kredit lama agar terlihat lancar), dan <b>gratifikasi</b> dari calon debitur. Keempatnya adalah bentuk fraud yang merusak bank dari dalam.</p>
<p>Prinsip praktisnya sederhana: <b>apabila ragu, eskalasi</b>. Sampaikan keraguan kepada atasan atau unit kepatuhan, dokumentasikan secara tertulis, dan jangan pernah menandatangani analisis yang tidak diyakini kebenarannya. Tanda tangan analis pada nota analisa kredit adalah pernyataan profesional — ia melekat selama kredit itu hidup, bahkan hingga menjadi macet bertahun-tahun kemudian.</p>
<p>Contoh eskalasi yang benar: analis menemukan agunan yang ditaksir Rp500 juta ternyata berdasarkan NJOP Rp200 juta tanpa dasar penilaian — ia menulis memo keberatan, meminta penilaian ulang oleh KJPP, dan menyimpan tembusan memo tersebut. Bila kredit itu kelak bermasalah, memo tersebut adalah bukti ia bekerja profesional. <b>Dokumentasi adalah perisai analis</b>: yang tidak tertulis dianggap tidak dilakukan.</p>`,
      poin: [
        "Budaya kepatuhan: aturan ditaati sebagai cara kerja yang benar, didukung direktur dan satuan kerja kepatuhan yang independen.",
        "Sanksi berlapis: administratif (teguran, denda, cabut izin), pidana (penggelapan, pemalsuan, pencucian uang), dan sanksi kepegawaian.",
        "Empat fraud klasik kredit: kredit fiktif, mark-up agunan, evergreening, dan gratifikasi.",
        "Prinsip analis: apabila ragu, eskalasi dan dokumentasikan; tanda tangan pada nota analisa adalah pernyataan profesional."
      ]
    }
  ]
},
{
  id: "analisis-kredit",
  judul: "Analisis Kredit",
  ringkas: "Prinsip 5C, 7P, 3R, tahapan kredit, analisis usaha dan arus kas, jaminan, kapasitas bayar, kolektibilitas, NPL, restrukturisasi, dan mitigasi risiko.",
  sections: [
    {
      id: "prinsip-5c",
      judul: "Prinsip 5C dalam Analisis Kredit",
      html: `<p><b>5C</b> adalah kerangka analisis kredit yang paling dikenal: <b>Character, Capacity, Capital, Collateral, dan Condition</b>. Perlu dicatat: 5C adalah <b>praktik umum/konvensi industri (bukan ketentuan regulasi)</b> — tidak ada POJK yang mewajibkan format 5C, tetapi hampir seluruh bank menggunakannya karena terbukti efektif. Jangkar hukum kewajiban menganalisis kelayakan debitur tetap pada <b>Pasal 8 ayat 1 UU No. 10 Tahun 1998</b>: keyakinan atas itikad dan kemampuan debitur berdasar analisis mendalam.</p>
<p><b>Character</b> menilai itikad/watak calon debitur: apakah ia jujur dan bertanggung jawab? Alatnya antara lain riwayat kredit pada <b>SLIK OJK</b>, reputasi di lingkungan usaha, dan verifikasi referensi. Debitur dengan riwayat menunggak berulang adalah sinyal merah sekuat apa pun angkanya.</p>
<p><b>Capacity</b> menilai kemampuan membayar: apakah arus kas usaha atau penghasilan cukup menutup angsuran? Dianalisis lewat laporan keuangan, mutasi rekening, dan perhitungan <b>DSCR</b> (Debt Service Coverage Ratio). <b>Capital</b> menilai modal sendiri yang ditanam debitur — semakin besar setoran modal sendiri (misalnya uang muka 30%), semakin besar komitmen dan semakin kecil risiko bank.</p>
<p><b>Collateral</b> adalah jaminan/agunan sebagai <b>sumber pembayaran kedua (second way out)</b>; sumber pembayaran utama (first way out) tetap arus kas usaha. <b>Condition</b> menilai kondisi ekonomi dan prospek sektor usaha debitur: usaha yang prospektif hari ini bisa tertekan oleh perubahan regulasi, harga komoditas, atau daya beli.</p>
<p>Contoh penerapan: pengajuan KSG Rp150 juta dari karyawan bergaji Rp8 juta/bulan dengan SLIK lancar (character baik), cicilan yang diajukan Rp3,2 juta/bulan (capacity: rasio cicilan 40% — masih wajar), tanpa agunan khusus (collateral: mengandalkan SK pengangkatan dan potong gaji), dan kondisi ekonomi stabil. Keputusan awal: layak diproses lebih lanjut dengan verifikasi slip gaji dan SLIK pasangan.</p>`,
      poin: [
        "5C = Character, Capacity, Capital, Collateral, Condition; merupakan praktik umum/konvensi industri (bukan ketentuan regulasi).",
        "Jangkar hukum analisis kelayakan: Pasal 8 ayat 1 UU 10/1998 (keyakinan atas itikad & kemampuan debitur).",
        "First way out adalah arus kas usaha; collateral hanya second way out.",
        "Character dinilai dari SLIK OJK dan reputasi; capacity dari arus kas dan DSCR."
      ]
    },
    {
      id: "prinsip-7p-3r",
      judul: "Prinsip 7P dan 3R",
      html: `<p>Selain 5C, literatur perbankan mengenal dua kerangka pelengkap: <b>7P</b> dan <b>3R</b>. Keduanya juga berstatus <b>praktik umum/konvensi industri (bukan ketentuan regulasi)</b>, berguna sebagai daftar periksa agar analisis tidak ada yang terlewat.</p>
<p><b>7P</b> terdiri dari: <b>Personality</b> (kepribadian dan itikad calon debitur), <b>Party</b> (golongan debitur: perorangan, badan usaha, atau kelompok — masing-masing berisiko berbeda), <b>Purpose</b> (tujuan penggunaan kredit: harus produktif dan legal), <b>Prospect</b> (prospek usaha dan kemampuan menghasilkan laba di masa depan), <b>Payment</b> (sumber dan cara pembayaran kembali), <b>Profitability</b> (apakah usaha cukup menguntungkan untuk menutup bunga dan angsuran), dan <b>Protection</b> (perlindungan berupa agunan, asuransi, dan pengikatan yang sempurna).</p>
<p><b>3R</b> adalah singkatan dari <b>Return, Repayment, dan Risk Bearing Ability</b>. <b>Return</b>: apakah hasil usaha debitur cukup untuk membayar kewajiban? <b>Repayment</b>: dari mana sumber pembayaran kembali dan bagaimana jadwalnya sesuai dengan siklus usaha? <b>Risk Bearing Ability</b>: seberapa besar kemampuan debitur menanggung risiko bila usaha terganggu — diukur dari permodalan dan cadangan yang dimiliki.</p>
<p>Dalam praktik nota analisa kredit bank, unsur 5C, 7P, dan 3R sering <b>digabung dan disederhanakan</b> menjadi bab-bab seperti: data debitur, tujuan kredit, analisis usaha dan keuangan, analisis agunan, analisis risiko dan mitigasi, serta kesimpulan dan rekomendasi. Penguji atau pewawancara biasanya tidak menuntut hafalan harfiah, melainkan pemahaman: bisakah Anda menjelaskan mengapa setiap unsur penting dan bagaimana memverifikasinya di lapangan?</p>
<p>Contoh pemakaian 7P: menganalisis pengajuan kredit dari <b>Party</b> berupa CV konstruksi (badan usaha jasa konstruksi — berisiko musiman), <b>Purpose</b> membeli alat berat (produktif), <b>Prospect</b> didukung kontrak proyek 2 tahun, <b>Payment</b> dari termin proyek, <b>Profitability</b> margin proyek 12%, <b>Protection</b> alat berat difidusia. Kerangka 7P memastikan tidak ada sudut pandang yang terlewat sebelum komite bertanya.</p>`,
      poin: [
        "7P: Personality, Party, Purpose, Prospect, Payment, Profitability, Protection.",
        "3R: Return, Repayment, Risk Bearing Ability.",
        "7P dan 3R adalah praktik umum/konvensi industri (bukan ketentuan regulasi); berfungsi sebagai daftar periksa analisis.",
        "Dalam nota analisa, unsur-unsur ini digabung menjadi bab analisis yang sistematis dan terverifikasi."
      ]
    },
    {
      id: "tahapan-kredit",
      judul: "Tahapan Proses Pemberian Kredit",
      html: `<p>Pemberian kredit mengikuti alur baku dari pengajuan hingga pelunasan. Tahapan berikut adalah <b>praktik umum/konvensi industri (bukan ketentuan regulasi)</b> — detailnya dapat berbeda antarbank, tetapi urutan logikanya sama.</p>
<ol>
<li><b>Pengajuan dan pengumpulan dokumen:</b> calon debitur mengisi formulir dan menyerahkan KTP, NPWP, slip gaji atau laporan keuangan, dokumen legalitas usaha, dan dokumen agunan.</li>
<li><b>Verifikasi dan pengecekan SLIK:</b> analis memverifikasi keaslian dokumen dan menarik iDeb SLIK OJK untuk melihat riwayat kredit di seluruh lembaga keuangan.</li>
<li><b>Analisis dan penilaian (analisa kredit):</b> analis menilai 5C, menghitung kemampuan bayar, menaksir agunan, lalu menuangkannya dalam <b>nota analisa kredit (NAK)</b> beserta rekomendasi: setuju, setuju dengan syarat, atau tolak.</li>
<li><b>Persetujuan (komite kredit):</b> keputusan diambil berjenjang sesuai <b>batas wewenang memutus kredit</b>; analis tidak memutus sendiri (four eyes principle).</li>
<li><b>Pengikatan dan asuransi:</b> perjanjian kredit ditandatangani, agunan diikat secara hukum (misalnya Hak Tanggungan untuk tanah), dan agunan/jiwa diasuransikan.</li>
<li><b>Pencairan (disbursement):</b> dana dicairkan setelah seluruh syarat terpenuhi, idealnya langsung ke peruntukan (misalnya ke supplier).</li>
<li><b>Monitoring dan pembinaan:</b> bank memantau pembayaran angsuran, memantau kondisi usaha, dan membina debitur.</li>
<li><b>Pelunasan dan penyelesaian:</b> kredit lunas, agunan diserahkan kembali (roya Hak Tanggungan), atau bila macet ditempuh penagihan/restrukturisasi/eksekusi.</li>
</ol>
<p>Kunci yang sering diuji: analis <b>wajib independen</b> dari fungsi pemasaran, dan setiap tahap harus <b>terdokumentasi</b> — kredit yang bagus tetapi dokumennya tidak lengkap tetap bermasalah saat audit.</p>
<p>Contoh kegagalan dokumentasi: kredit Rp300 juta disetujui dan dicairkan, tetapi fotokopi KTP pasangan debitur tidak ada di berkas — saat kredit macet dan bank hendak menagih harta bersama, posisi hukum bank lemah. Pelajaran: <b>checklist dokumen</b> sebelum pencairan bukan birokrasi, melainkan benteng hukum bank. Analis yang disiplin checklist menyelamatkan bank dari masalah bertahun-tahun kemudian.</p>`,
      poin: [
        "Alur kredit: pengajuan → verifikasi & SLIK → analisa (NAK) → persetujuan komite → pengikatan & asuransi → pencairan → monitoring → pelunasan.",
        "Tahapan ini adalah praktik umum/konvensi industri (bukan ketentuan regulasi); detail berbeda antarbank.",
        "Four eyes principle: analis mengusulkan, komite/atasan memutus; analis tidak memutus sendiri.",
        "Setiap tahap wajib terdokumentasi; agunan tanah diikat dengan Hak Tanggungan."
      ]
    },
    {
      id: "analisis-usaha",
      judul: "Analisis Usaha dan Arus Kas Debitur",
      html: `<p>Inti analisis kredit adalah menjawab satu pertanyaan: <b>apakah usaha debitur menghasilkan kas yang cukup untuk membayar angsuran?</b> Jawabannya dicari lewat analisis usaha (kualitatif) dan analisis arus kas (kuantitatif).</p>
<p>Analisis usaha menilai: jenis dan skala usaha, pengalaman pengelola, pangsa pasar dan persaingan, keandalan pemasok dan pelanggan, serta prospek sektor. Kunjungan langsung ke lokasi usaha (<b>on-site visit</b>) wajib dilakukan untuk memverifikasi bahwa usaha benar-benar ada dan beroperasi — bukan sekadar di atas kertas. Cocokkan omzet yang diakui dengan bukti fisik: stok barang, nota penjualan, dan mutasi rekening.</p>
<p>Analisis arus kas memisahkan <b>laba akuntansi</b> dari <b>kas riil</b>. Usaha bisa "laba" tetapi kasnya macet di piutang atau stok — inilah jebakan yang paling sering menjerat analis pemula. Fokuskan pada <b>arus kas operasi</b>: kas masuk dari pelanggan dikurangi kas keluar untuk operasional. Selisih inilah yang tersedia untuk membayar angsuran (debt service).</p>
<p>Contoh: Toko "Berkah Jaya" mengaku omzet Rp45 juta/bulan dengan margin 15% (laba Rp6,75 juta). Verifikasi mutasi rekening menunjukkan rata-rata pemasukan Rp42 juta/bulan, dan wawancara mengungkap piutang ke pelanggan Rp20 juta. Arus kas operasi realistis diperkirakan Rp5,5 juta/bulan. Dengan angsuran yang diajukan Rp3,5 juta/bulan, DSCR = 5,5 / 3,5 = <b>1,57x</b> — cukup aman (di atas 1,2x). Prinsipnya: <b>gunakan angka hasil verifikasi, bukan angka pengakuan</b>, dan selalu uji dengan skenario pesimis (omzet turun 20%).</p>
<p>Contoh verifikasi silang: debitur mengaku omzet Rp100 juta/bulan, tetapi mutasi rekening hanya menunjukkan Rp60 juta dan stok di gudang terlihat sepi saat kunjungan. Selisih Rp40 juta harus dijelaskan — mungkin penjualan tunai tanpa pencatatan, mungkin pula angka yang digelembungkan. Analis yang baik tidak menuduh, tetapi <b>meminta bukti</b>: nota penjualan 3 bulan terakhir dan daftar pelanggan tetap. Tanpa bukti, gunakan angka terendah yang terverifikasi.</p>`,
      poin: [
        "Pertanyaan inti: apakah kas usaha cukup menutup angsuran? Bedakan laba akuntansi dari kas riil.",
        "Wajib on-site visit: verifikasi keberadaan usaha, cocokkan omzet dengan stok, nota, dan mutasi rekening.",
        "Gunakan angka hasil verifikasi (bukan pengakuan) dan uji dengan skenario pesimis.",
        "Contoh: arus kas operasi Rp5,5 jt vs angsuran Rp3,5 jt menghasilkan DSCR 1,57x — layak."
      ]
    },
    {
      id: "jaminan-kredit",
      judul: "Jaminan/Agunan Kredit",
      html: `<p><b>Agunan (collateral)</b> adalah jaminan kebendaan yang diserahkan debitur sebagai <b>sumber pembayaran kedua (second way out)</b> apabila sumber pembayaran utama (arus kas usaha) gagal. Prinsip yang tidak boleh dilupakan: <b>bank memberikan kredit karena yakin debitur mampu membayar, bukan karena agunannya bagus</b>. Agunan yang bagus tidak menyelamatkan kredit yang sejak awal tidak layak.</p>
<p>Syarat agunan yang baik: <b>bernilai ekonomis</b> (marketable — mudah dijual), <b>nilai cukup</b> menutup plafon (umumnya bank mensyaratkan coverage tertentu sebagai praktik umum), <b>dokumen sah dan dapat diikat</b> secara hukum, serta <b>tidak dalam sengketa</b>. Jenis agunan umum: tanah dan bangunan (diikat dengan <b>Hak Tanggungan</b>), kendaraan bermotor (fidusia), mesin dan persediaan (fidusia), deposito/tabungan (gadai/cessie), serta garansi atau aval.</p>
<p>Penilaian agunan harus dilakukan oleh <b>penilai independen</b> (internal bersertifikat atau KJPP — Kantor Jasa Penilai Publik) dengan dua pendekatan nilai: <b>nilai pasar</b> (harga wajar saat ini) dan <b>nilai likuidasi</b> (harga bila dijual cepat dalam kondisi tertekan, umumnya 70%–80% dari nilai pasar). Bank memakai nilai likuidasi sebagai dasar perhitungan coverage agar konservatif.</p>
<p>Contoh: ruko diagunkan dengan nilai pasar Rp500 juta menurut KJPP; nilai likuidasi 75% = Rp375 juta. Plafon yang diajukan Rp250 juta menghasilkan coverage 375/250 = <b>150%</b> — memadai. Namun analis tetap wajib memastikan IMB/PBG, PBB, dan status sertifikat bersih sebelum merekomendasikan persetujuan.</p>
<p>Contoh jebakan agunan: ruko strategis senilai Rp1 miliar diagunkan untuk kredit Rp200 juta — coverage 500%, terlihat sangat aman. Namun arus kas usaha debitur hanya Rp3 juta/bulan sementara angsuran Rp8 juta/bulan (DSCR 0,375x). Kredit seperti ini <b>tetap harus ditolak</b>: agunan besar tidak mengubah fakta debitur tidak mampu membayar, dan eksekusi agunan memakan waktu serta biaya. Ingat hierarki: capacity dulu, collateral kemudian.</p>`,
      poin: [
        "Agunan adalah second way out; first way out tetap arus kas usaha. Kredit dinilai dari kemampuan bayar, bukan bagusnya agunan.",
        "Syarat agunan: marketable, nilai cukup, dokumen sah dan dapat diikat, tidak bersengketa.",
        "Tanah/bangunan diikat Hak Tanggungan; kendaraan/mesin/persediaan dengan fidusia; deposito dengan gadai.",
        "Gunakan nilai likuidasi (±70–80% nilai pasar) dari penilai independen/KJPP sebagai dasar coverage yang konservatif."
      ]
    },
    {
      id: "kapasitas-bayar",
      judul: "Kapasitas Bayar dan Debt Service Coverage Ratio",
      html: `<p><b>Kapasitas bayar (capacity)</b> adalah kemampuan debitur memenuhi seluruh kewajiban utangnya dari penghasilan atau arus kas yang dimiliki. Ini adalah unsur 5C yang paling kuantitatif dan paling sering diuji — baik dalam hitungan maupun dalam diskusi kasus.</p>
<p>Untuk debitur perorangan/karyawan, kapasitas diukur dengan <b>Debt Service Ratio (DSR)</b>: total cicilan utang per bulan dibagi penghasilan per bulan. Praktik umum industri menahan DSR maksimal sekitar <b>30%–40%</b> dari penghasilan (bukan ketentuan regulasi). Contoh: karyawan bergaji Rp8 juta dengan cicilan KPR Rp2 juta mengajukan KSG dengan cicilan Rp1,5 juta → total cicilan Rp3,5 juta → DSR = 3,5/8 = <b>43,75%</b> — di atas ambang wajar, sehingga plafon perlu diturunkan atau pengajuan ditolak.</p>
<p>Untuk debitur usaha, ukurannya adalah <b>DSCR (Debt Service Coverage Ratio)</b> = arus kas operasi (atau EBITDA yang disesuaikan) dibagi total kewajiban utang setahun (angsuran pokok + bunga). Patokan praktik umum: DSCR minimal <b>1,2x</b> — artinya setiap Rp1 kewajiban didukung Rp1,2 kas. Di bawah 1,0x berarti kas tidak cukup membayar utang: kredit tidak layak apa pun agunannya.</p>
<p>Tiga kesalahan umum analis: (1) memakai <b>omzet</b> sebagai dasar, bukan arus kas bersih; (2) lupa memasukkan <b>cicilan di bank lain</b> (wajib dicek via SLIK); (3) tidak menguji <b>skenario stres</b> — bagaimana bila omzet turun 20% atau bunga naik? Kapasitas bayar yang hanya "pas-pasan" pada skenario normal adalah kapasitas yang rapuh.</p>
<p>Contoh hitungan DSR lengkap: gaji Rp10 juta, cicilan KPR Rp2,5 juta (SLIK), cicilan motor Rp800 ribu (SLIK), pengajuan KKB cicilan Rp2 juta → total Rp5,3 juta → DSR = <b>53%</b>. Keputusan: plafon KKB diturunkan hingga cicilan ±Rp1,2 juta atau tenor diperpanjang. Prinsipnya: <b>analis menghitung dengan seluruh kewajiban dari SLIK</b>, bukan hanya cicilan yang diajukan.</p>`,
      poin: [
        "DSR perorangan = total cicilan / penghasilan; praktik umum maksimal ±30–40% (bukan ketentuan regulasi).",
        "DSCR usaha = arus kas operasi / total kewajiban utang; patokan praktik umum minimal 1,2x.",
        "DSCR di bawah 1,0x berarti kas tidak cukup membayar utang — kredit tidak layak.",
        "Wajib masukkan cicilan di bank lain (cek SLIK) dan uji skenario stres sebelum merekomendasikan."
      ]
    },
    {
      id: "kolektibilitas-npl",
      judul: "Kolektibilitas Kredit dan NPL",
      html: `<p><b>Kolektibilitas</b> adalah penggolongan kualitas kredit berdasarkan ketepatan pembayaran dan kondisi debitur. Menurut <b>POJK 40/2019</b>, kualitas aset dinilai dari tiga faktor: <b>prospek usaha, kinerja debitur, dan kemampuan membayar</b>. Hasilnya lima golongan: <b>Lancar</b>, <b>Dalam Perhatian Khusus (DPK)</b>, <b>Kurang Lancar</b>, <b>Diragukan</b>, dan <b>Macet</b>.</p>
<p>Batas keterlambatan hari untuk tiap golongan mengikuti <b>praktik umum/konvensi industri (bukan ketentuan regulasi)</b>: DPK untuk tunggakan <b>1–90 hari</b>, Kurang Lancar <b>91–120 hari</b>, Diragukan <b>121–180 hari</b>, dan Macet untuk tunggakan <b>lebih dari 180 hari</b>. Kredit golongan Kurang Lancar, Diragukan, dan Macet dikategorikan sebagai <b>kredit bermasalah (non-performing loan)</b>.</p>
<p><b>NPL (Non-Performing Loan)</b> adalah rasio kredit bermasalah terhadap total kredit. <b>NPL net</b> (setelah dikurangi cadangan) mengikuti <b>praktik umum/konvensi industri (bukan ketentuan regulasi)</b> dalam perhitungannya. NPL adalah indikator kesehatan bank yang paling disorot: OJK menetapkan ambang perhatian sekitar 5% (net), dan bank dengan NPL tinggi wajib membentuk cadangan (CKPN) lebih besar yang menggerus laba. Sebagai gambaran, NPL net Bank Sumsel Babel tercatat <b>0,50%</b> pada 2024 dan <b>0,72%</b> pada 2025 (dilaporkan media) — jauh di bawah ambang 5%, menunjukkan kualitas kredit yang sangat terjaga.</p>
<p>Bagi analis, kolektibilitas bukan sekadar label: penurunan golongan memicu pembentukan cadangan, menurunkan laba bank, dan menjadi catatan kinerja unit. Mencegah penurunan kualitas lewat monitoring dini jauh lebih murah daripada menagih kredit yang telanjur macet.</p>
<p>Contoh dampak penurunan golongan: kredit Rp1 miliar turun dari Lancar ke Kurang Lancar — bank wajib membentuk CKPN lebih besar, misalnya dari 1% menjadi 15% dari baki debet, artinya Rp150 juta langsung menjadi beban dan menggerus laba. Inilah alasan unit bisnis "menjerit" saat kredit turun kolektibilitas: bukan sekadar label administratif, melainkan <b>pukulan langsung ke laba</b>. Monitoring dini tunggakan 1–30 hari adalah pekerjaan paling bernilai.</p>`,
      poin: [
        "Lima golongan kolektibilitas (POJK 40/2019): Lancar, DPK, Kurang Lancar, Diragukan, Macet; dinilai dari prospek usaha, kinerja debitur, kemampuan membayar.",
        "Batas hari (praktik umum, bukan regulasi): DPK 1–90, Kurang Lancar 91–120, Diragukan 121–180, Macet >180 hari.",
        "NPL = kredit bermasalah (Kurang Lancar, Diragukan, Macet) / total kredit; NPL net mengikuti konvensi industri.",
        "NPL net BSB 0,50% (2024) dan 0,72% (2025), dilaporkan media — jauh di bawah ambang perhatian ±5%."
      ]
    },
    {
      id: "restrukturisasi-mitigasi",
      judul: "Restrukturisasi Kredit dan Mitigasi Risiko",
      html: `<p>Tidak semua kredit bermasalah harus langsung dieksekusi. <b>Restrukturisasi kredit</b> adalah upaya perbaikan agar debitur yang masih berprospek dan beritikad baik dapat kembali membayar. Bentuknya antara lain: <b>penjadwalan ulang (rescheduling)</b> — memperpanjang tenor sehingga angsuran mengecil; <b>persyaratan ulang (reconditioning)</b> — mengubah suku bunga, menunda pembayaran bunga, atau mengubah skema angsuran; dan <b>penataan ulang (restructuring)</b> — mengubah struktur pembiayaan secara menyeluruh, termasuk konversi sebagian utang.</p>
<p>Restrukturisasi hanya tepat bila memenuhi syarat: usaha debitur <b>masih memiliki prospek</b>, debitur <b>beritikad baik</b> (kooperatif dan transparan), dan proyeksi arus kas pasca-restrukturisasi <b>mampu menutup kewajiban baru</b> (DSCR minimal 1,0x pada skenario realistis). Memberi restrukturisasi kepada usaha yang sudah mati hanya menunda pengakuan kerugian — praktik yang disebut <b>evergreening</b> dan tergolong pelanggaran.</p>
<p>Selain restrukturisasi, bank memiliki perangkat <b>mitigasi risiko</b> berlapis. <b>Pencegahan</b>: analisis 5C yang ketat, agunan yang diikat sempurna, dan asuransi (jiwa untuk debitur perorangan, kerugian untuk agunan). <b>Deteksi dini</b>: monitoring tunggakan harian, kunjungan berkala, dan pemantauan mutasi rekening untuk menangkap penurunan omzet. <b>Penanganan</b>: penagihan berjenjang (telepon, surat, kunjungan), restrukturisasi, hingga <b>eksekusi agunan</b> atau gugatan bila debitur tidak kooperatif.</p>
<p>Contoh: debitur KUR toko sembako menunggak 60 hari (DPK) karena banjir merusak stok. Usaha masih berjalan, debitur kooperatif, agunan SHM coverage 140%. Keputusan tepat: rescheduling — perpanjang tenor 12 bulan menjadi 24 bulan sehingga angsuran turun ±45% dan DSCR kembali di atas 1,2x — disertai penjadwalan ulang yang dituangkan dalam adendum perjanjian.</p>
<p>Contoh reconditioning: debitur kredit investasi hotel terdampak sepi wisatawan — angsuran Rp20 juta/bulan tidak terbayar. Bank mengubah skema menjadi <b>bayar bunga saja</b> Rp8 juta/bulan selama 12 bulan (grace period pokok), tenor diperpanjang 12 bulan. DSCR debitur pulih dari 0,6x menjadi 1,25x. Syarat: debitur kooperatif, proyeksi okupansi membaik, dan agunan coverage 160%. Restrukturisasi yang berhasil menyelamatkan debitur <b>dan</b> bank.</p>`,
      poin: [
        "Tiga bentuk restrukturisasi: rescheduling (tenor), reconditioning (bunga/skema), restructuring (struktur pembiayaan).",
        "Syarat restrukturisasi: prospek usaha masih ada, debitur beritikad baik, DSCR pasca-restrukturisasi minimal 1,0x.",
        "Evergreening (kredit baru untuk menutup tunggakan agar terlihat lancar) adalah pelanggaran.",
        "Mitigasi berlapis: pencegahan (5C, agunan, asuransi), deteksi dini (monitoring), penanganan (tagih, restrukturisasi, eksekusi)."
      ]
    }
  ]
},
{
  id: "slik-rasio-hitungan",
  judul: "SLIK, Rasio Keuangan, dan Hitungan Kredit",
  ringkas: "Membaca SLIK/iDeb, laporan keuangan, rasio-rasio kunci, serta perhitungan angsuran dan bunga.",
  sections: [
    {
      id: "slik-ideb",
      judul: "SLIK OJK dan iDeb",
      html: `<p><b>SLIK (Sistem Layanan Informasi Keuangan)</b> adalah sistem informasi yang dikelola OJK berisi riwayat kredit/debitur dari seluruh lembaga keuangan pelapor: bank umum, BPR, lembaga pembiayaan, hingga fintech lending. SLIK menggantikan peran BI Checking sejak pengelolaannya dialihkan ke OJK.</p>
<p>Melalui SLIK, bank dapat melihat <b>iDeb (Informasi Debitur Individual)</b>: daftar seluruh fasilitas kredit yang dimiliki seseorang/badan usaha, plafon dan baki debet masing-masing, kolektibilitas tiap fasilitas, serta riwayat tunggakan. Masyarakat dapat mengakses iDeb miliknya sendiri secara daring melalui <b>idebku.ojk.go.id</b> atau datang langsung (<b>walk-in</b>) ke kantor OJK setempat.</p>
<p>Bagi analis kredit, SLIK adalah alat verifikasi <b>character</b> dan <b>capacity</b> yang tidak tergantikan. Dari iDeb analis memastikan: (1) apakah calon debitur <b>jujur</b> mengungkapkan seluruh utangnya — utang yang disembunyikan adalah red flag serius; (2) berapa <b>total cicilan berjalan</b> di semua lembaga untuk dihitung dalam DSR/DSCR; (3) bagaimana <b>riwayat kolektibilitas</b> — tunggakan berulang di masa lalu memprediksi perilaku di masa depan.</p>
<p>Contoh pembacaan: iDeb menunjukkan calon debitur memiliki KPR kolektibilitas 1 (Lancar) cicilan Rp2 juta, kartu kredit kolektibilitas 2 (DPK) dengan tunggakan Rp5 juta, dan KTA yang sudah lunas. Kesimpulan: kapasitas harus memasukkan cicilan Rp2 juta + minimum payment kartu kredit, dan tunggakan kartu kredit perlu penjelasan tertulis serta bukti pelunasan sebelum pengajuan diproses lebih lanjut.</p>
<p>Contoh red flag SLIK: calon debitur mengaku "tidak punya utang", tetapi iDeb menunjukkan KTA Rp50 juta kolektibilitas 2 di multifinance. Ketidakjujuran ini cukup untuk menghentikan proses — bukan karena nominalnya, melainkan karena <b>character</b>-nya gagal. Prinsip analis: angka bisa diperbaiki dengan restrukturisasi, tetapi ketidakjujuran tidak bisa diperbaiki dengan analisis.</p>`,
      poin: [
        "SLIK OJK memuat riwayat kredit dari seluruh lembaga keuangan; menggantikan BI Checking.",
        "iDeb diakses via idebku.ojk.go.id atau walk-in ke kantor OJK.",
        "Analis memakai SLIK untuk verifikasi kejujuran (utang disembunyikan = red flag), total cicilan, dan riwayat kolektibilitas.",
        "Tunggakan pada fasilitas mana pun wajib dijelaskan dan diselesaikan sebelum pengajuan diproses."
      ]
    },
    {
      id: "membaca-neraca",
      judul: "Membaca Neraca",
      html: `<p><b>Neraca</b> adalah potret posisi keuangan perusahaan pada satu titik waktu, disusun dari persamaan dasar akuntansi: <b>Aset = Liabilitas + Ekuitas</b>. Analis kredit membaca neraca untuk menilai struktur permodalan, likuiditas, dan ketergantungan pada utang.</p>
<p><b>Aset</b> dibagi menjadi aset lancar (kas, piutang, persediaan — dapat menjadi kas dalam < 1 tahun) dan aset tidak lancar (tanah, bangunan, mesin). <b>Liabilitas</b> dibagi menjadi utang jangka pendek (jatuh tempo < 1 tahun: utang usaha, utang bank jangka pendek) dan utang jangka panjang. <b>Ekuitas</b> adalah modal pemilik: setoran modal ditambah laba ditahan.</p>
<p>Tiga hal yang pertama kali dicek analis: (1) <b>modal kerja bersih</b> = aset lancar − utang jangka pendek; bila negatif, perusahaan tidak mampu membayar kewajiban jangka pendeknya dari aset lancarnya — sinyal bahaya; (2) <b>komposisi utang vs modal</b> — utang yang jauh lebih besar dari ekuitas berarti perusahaan sangat levered dan rapuh; (3) <b>kualitas aset</b> — piutang dan persediaan yang membengkak tanpa kenaikan penjualan mengindikasikan kas macet.</p>
<p>Contoh: PT Sinar Abadi memiliki aset lancar Rp800 juta, utang jangka pendek Rp600 juta → modal kerja bersih <b>Rp200 juta (positif)</b>. Total liabilitas Rp900 juta vs ekuitas Rp700 juta → DER = 900/700 = <b>1,29x</b>. Piutang naik 60% sementara penjualan naik 10% → perlu ditanyakan: apakah ada piutang macet yang belum dicadangkan? Neraca yang "sehat di permukaan" sering menyimpan masalah pada rincian akunnya.</p>
<p>Contoh jebakan ekuitas: perusahaan mencatat ekuitas Rp2 miliar, tetapi Rp1,2 miliar di antaranya adalah <b>revaluasi aset</b> (kenaikan nilai tanah di atas kertas), bukan setoran modal tunai. Ekuitas "kertas" ini tidak bisa dipakai membayar utang. Analis yang teliti memisahkan ekuitas berkualitas (modal disetor + laba ditahan riil) dari ekuitas kertas sebelum menghitung DER yang sesungguhnya.</p>`,
      poin: [
        "Persamaan dasar: Aset = Liabilitas + Ekuitas; neraca adalah potret pada satu titik waktu.",
        "Cek pertama: modal kerja bersih (aset lancar − utang jangka pendek); negatif = sinyal bahaya likuiditas.",
        "Cek kedua: perbandingan utang vs ekuitas (leverage); cek ketiga: kualitas piutang dan persediaan.",
        "Kenaikan piutang yang jauh melampaui kenaikan penjualan mengindikasikan potensi piutang macet."
      ]
    },
    {
      id: "laba-rugi-arus-kas",
      judul: "Laporan Laba Rugi dan Arus Kas",
      html: `<p><b>Laporan laba rugi</b> menunjukkan kinerja selama satu periode: penjualan − harga pokok penjualan = <b>laba kotor</b>; dikurangi biaya operasional = <b>laba operasi (EBIT)</b>; dikurangi bunga dan pajak = <b>laba bersih</b>. Analis memperhatikan tren <b>marjin</b>: apakah laba tumbuh karena penjualan naik (sehat) atau karena biaya dipangkas sekali saja (tidak berkelanjutan)?</p>
<p><b>Laporan arus kas</b> dibagi tiga aktivitas: <b>operasi</b> (kas dari bisnis inti), <b>investasi</b> (pembelian/penjualan aset tetap), dan <b>pendanaan</b> (penarikan/pembayaran utang, setoran modal, dividen). Kaidah praktisnya: perusahaan sehat menghasilkan <b>arus kas operasi positif</b> yang cukup membiayai investasinya; bila arus kas operasi negatif tetapi perusahaan bertahan, biasanya ia hidup dari utang baru — pola yang tidak berkelanjutan.</p>
<p>Perbedaan laba dan kas adalah jebakan klasik. Penjualan kredit dicatat sebagai pendapatan (menaikkan laba) padahal kasnya belum diterima — ia tertahan di <b>piutang</b>. Sebaliknya pembelian stok besar menguras kas tanpa langsung menjadi beban. Karena itu analis kredit <b>selalu mengutamakan arus kas operasi</b> dibanding laba bersih saat mengukur kemampuan bayar.</p>
<p>Contoh: PT Sinar Abadi melaporkan laba bersih Rp300 juta, tetapi arus kas operasinya <b>negatif Rp50 juta</b> karena piutang naik Rp250 juta dan persediaan naik Rp100 juta. Kesimpulan: laba Rp300 juta itu "laba kertas" — kasnya macet di piutang dan gudang. Kredit modal kerja baru berisiko menambah tumpukan piutang; analis harus meminta aging schedule piutang dan menelusuri debitur-debitur terbesarnya sebelum merekomendasikan.</p>
<p>Contoh pola sehat vs tidak: Perusahaan A laba Rp200 juta dengan arus kas operasi Rp250 juta (kas > laba — kualitas laba bagus, piutang tertagih baik). Perusahaan B laba Rp500 juta dengan arus kas operasi negatif Rp100 juta (laba kertas). Bank lebih aman membiayai A walau labanya lebih kecil. Inilah mengapa analis senior selalu membuka <b>laporan arus kas terlebih dahulu</b>, baru kemudian laba rugi.</p>`,
      poin: [
        "Laba rugi: penjualan → laba kotor → EBIT → laba bersih; perhatikan tren marjin dan sumber pertumbuhan laba.",
        "Arus kas: operasi, investasi, pendanaan; perusahaan sehat berarus kas operasi positif.",
        "Laba bisa menipu: penjualan kredit menaikkan laba tetapi kas tertahan di piutang.",
        "Analis mengutamakan arus kas operasi dibanding laba bersih untuk mengukur kemampuan bayar."
      ]
    },
    {
      id: "rasio-likuiditas-solvabilitas",
      judul: "Rasio Likuiditas dan Solvabilitas",
      html: `<p>Rasio mengubah angka laporan keuangan menjadi indikator yang dapat dibandingkan. Dua kelompok pertama yang wajib dikuasai: <b>likuiditas</b> (mampukah membayar kewajiban jangka pendek?) dan <b>solvabilitas/leverage</b> (seberapa besar ketergantungan pada utang?).</p>
<p><b>Current Ratio</b> = aset lancar ÷ liabilitas jangka pendek. Mengukur kemampuan membayar utang jangka pendek dari aset lancar. Patokan praktik umum: minimal <b>1,0x</b> (lebih aman di atas 1,2x). Di bawah 1,0x berarti aset lancar tidak cukup menutup utang jangka pendek.</p>
<p><b>Quick Ratio (Acid Test)</b> = (aset lancar − persediaan) ÷ liabilitas jangka pendek. Lebih ketat karena persediaan — aset lancar yang paling sulit dicairkan — dikeluarkan. Berguna untuk usaha dagang dengan stok besar.</p>
<p><b>DER (Debt to Equity Ratio)</b> = total liabilitas ÷ total ekuitas. Mengukur seberapa besar utang dibanding modal sendiri. Semakin tinggi DER, semakin berisiko: pemberi pinjaman menanggung porsi risiko lebih besar daripada pemilik. Praktik umum industri menganggap DER di atas <b>2x–3x</b> mulai berisiko tinggi untuk perusahaan non-keuangan (bukan ketentuan regulasi; ambang berbeda per sektor).</p>
<table>
<tr><th>Rasio</th><th>Rumus</th><th>Patokan praktik umum</th></tr>
<tr><td>Current Ratio</td><td>Aset lancar / utang jangka pendek</td><td>Minimal 1,0x (aman &gt; 1,2x)</td></tr>
<tr><td>Quick Ratio</td><td>(Aset lancar − persediaan) / utang jangka pendek</td><td>Minimal 1,0x</td></tr>
<tr><td>DER</td><td>Total liabilitas / total ekuitas</td><td>Waspada &gt; 2–3x</td></tr>
</table>
<p>Contoh: aset lancar Rp800 juta, persediaan Rp300 juta, utang jangka pendek Rp600 juta, total liabilitas Rp900 juta, ekuitas Rp700 juta → Current Ratio = <b>1,33x</b>, Quick Ratio = <b>0,83x</b>, DER = <b>1,29x</b>. Kesimpulan: likuiditas cukup tetapi tipis bila persediaan sulit dijual; leverage masih wajar.</p>
<p>Contoh salah tafsir: Current Ratio 2,5x terlihat sangat likuid, tetapi 80% aset lancarnya adalah persediaan usang yang tak laku — Quick Ratio-nya hanya 0,5x. Tanpa Quick Ratio, analis akan terkecoh. Pelajaran: <b>rasio likuiditas wajib dibaca berpasangan</b> (Current + Quick), dan selalu tanyakan umur serta perputaran persediaan sebelum menyimpulkan.</p>`,
      poin: [
        "Current Ratio = aset lancar / utang jangka pendek; patokan praktik umum minimal 1,0x.",
        "Quick Ratio mengeluarkan persediaan — lebih ketat untuk usaha dagang.",
        "DER = total liabilitas / ekuitas; di atas ±2–3x mulai berisiko tinggi (konvensi industri, bukan regulasi).",
        "Selalu baca rasio bersama tren dan kualitas akunnya, bukan sebagai angka tunggal."
      ]
    },
    {
      id: "rasio-profitabilitas",
      judul: "Rasio Profitabilitas: NPM, ROA, ROE",
      html: `<p><b>Profitabilitas</b> mengukur kemampuan perusahaan menghasilkan laba — fondasi jangka panjang kemampuan membayar utang. Tiga rasio utamanya:</p>
<p><b>NPM (Net Profit Margin)</b> = laba bersih ÷ penjualan. Menunjukkan berapa rupiah laba dari setiap Rp100 penjualan. NPM 10% berarti tiap Rp100 omzet menghasilkan Rp10 laba bersih. NPM yang menurun dari tahun ke tahun menandakan tekanan harga atau biaya yang membengkak.</p>
<p><b>ROA (Return on Assets)</b> = laba bersih ÷ total aset. Mengukur seberapa efisien seluruh aset menghasilkan laba. ROA 5% berarti tiap Rp100 aset menghasilkan Rp5 laba setahun.</p>
<p><b>ROE (Return on Equity)</b> = laba bersih ÷ ekuitas. Mengukur imbal hasil bagi pemilik modal. ROE selalu lebih tinggi dari ROA pada perusahaan berutang (karena penyebutnya lebih kecil) — selisih keduanya mencerminkan efek leverage. Sebagai gambaran skala bank: ROE Bank Sumsel Babel tercatat <b>10,20%</b> pada 2024 dan <b>10,55%</b> pada 2025 (dilaporkan media).</p>
<p>Contoh: PT Sinar Abadi — penjualan Rp2 miliar, laba bersih Rp300 juta, total aset Rp1,6 miliar, ekuitas Rp700 juta → NPM = <b>15%</b>, ROA = <b>18,75%</b>, ROE = <b>42,9%</b>. ROE yang jauh melampaui ROA menandakan leverage besar bekerja — menguntungkan saat usaha bagus, berbahaya saat usaha turun. Analis wajib membandingkan rasio dengan <b>rata-rata industrinya</b>: NPM 15% luar biasa untuk toko kelontong, tetapi biasa saja untuk jasa konsultasi.</p>
<p>Contoh tren vs angka: NPM perusahaan turun dari 18% (2022) → 14% (2023) → 9% (2024) — masih "bagus" secara absolut, tetapi trennya menurun tajam. Analis wajib bertanya: apakah karena perang harga, biaya bahan baku naik, atau pelanggan besar berpindah? <b>Tren tiga tahun lebih bercerita</b> daripada satu angka tahun berjalan. Minta laporan 3 tahun terakhir untuk setiap analisis.</p>`,
      poin: [
        "NPM = laba bersih / penjualan; ROA = laba bersih / total aset; ROE = laba bersih / ekuitas.",
        "Selisih ROE dan ROA mencerminkan efek leverage: makin besar utang, makin lebar selisihnya.",
        "Contoh skala: ROE BSB 10,20% (2024) dan 10,55% (2025), dilaporkan media.",
        "Bandingkan rasio dengan rata-rata industri sejenis, bukan dengan angka mutlak."
      ]
    },
    {
      id: "dscr",
      judul: "Rasio Kemampuan Bayar: DSCR",
      html: `<p><b>DSCR (Debt Service Coverage Ratio)</b> adalah rasio terpenting dalam analisis kredit usaha karena langsung menjawab: cukupkah kas untuk membayar utang? Rumusnya: <b>DSCR = arus kas operasi (atau EBITDA disesuaikan) ÷ total kewajiban pembayaran utang (debt service)</b> dalam periode yang sama. Debt service mencakup angsuran pokok <b>plus</b> bunga, untuk <b>seluruh</b> fasilitas utang — termasuk di bank/lessor lain berdasarkan data SLIK.</p>
<p>Patokan praktik umum (bukan ketentuan regulasi): DSCR minimal <b>1,2x</b> untuk kredit baru, dan <b>1,0x</b> sebagai batas mutlak kemampuan bertahan. DSCR 1,2x berarti setiap Rp1 kewajiban didukung Rp1,2 kas — ada bantalan 20% untuk gejolak usaha. DSCR di bawah 1,0x berarti kas tidak cukup: debitur harus menggerogoti modal atau berutang baru untuk membayar utang lama.</p>
<p>Contoh hitungan lengkap: UD Maju Jaya mengajukan kredit investasi Rp500 juta, tenor 5 tahun, bunga 10% efektif → angsuran ±Rp10,62 juta/bulan ≈ <b>Rp127,5 juta/tahun</b>. EBITDA tahun berjalan Rp220 juta; setelah dikurangi pajak dan belanja modal rutin (maintenance capex) Rp40 juta, kas tersedia untuk debt service = <b>Rp180 juta</b>. DSCR = 180 / 127,5 = <b>1,41x</b> — di atas 1,2x, layak dari sisi kapasitas.</p>
<p>Uji stres wajib dilakukan: bila EBITDA turun 20% menjadi Rp176 juta, kas tersedia = Rp136 juta → DSCR = <b>1,07x</b> — masih di atas 1,0x tetapi tipis. Analis yang baik menyajikan <b>tiga skenario</b> (normal, pesimis, stres) dalam nota analisa, bukan satu angka optimis. Keputusan yang hanya aman pada skenario terbaik adalah keputusan yang rapuh.</p>
<p>Contoh kesalahan fatal: analis menghitung DSCR hanya dari angsuran kredit yang diajukan — 180/127,5 = <b>1,41x</b> (layak). Setelah memasukkan cicilan existing Rp54 juta/tahun dari SLIK — 180/181,5 = <b>0,99x</b> (tidak layak). Satu baris data SLIK yang terlewat membalikkan keputusan. <b>Selalu tarik iDeb terbaru</b> sebelum menghitung DSCR final.</p>`,
      poin: [
        "DSCR = arus kas operasi (atau EBITDA disesuaikan) / total debt service (pokok + bunga seluruh utang).",
        "Patokan praktik umum: minimal 1,2x untuk kredit baru; 1,0x batas mutlak (bukan ketentuan regulasi).",
        "Debt service wajib mencakup seluruh fasilitas utang, termasuk di lembaga lain (cek SLIK).",
        "Sajikan tiga skenario (normal, pesimis, stres) dalam nota analisa; jangan hanya mengandalkan skenario terbaik."
      ]
    },
    {
      id: "angsuran-bunga",
      judul: "Hitungan Angsuran dan Bunga Kredit",
      html: `<p>Analis kredit wajib mampu menghitung angsuran secara manual — untuk memverifikasi sistem, menjelaskan kepada debitur (amanat transparansi POJK 22/2023), dan menguji kewajaran penawaran. Tiga metode perhitungan bunga yang umum:</p>
<p><b>1. Bunga flat:</b> bunga dihitung dari <b>plafon awal</b> selama tenor. Rumus: bunga per bulan = plafon × suku bunga tahunan ÷ 12; angsuran = (plafon ÷ tenor bulan) + bunga per bulan. Contoh: Rp120 juta, 12% p.a., 12 bulan → bunga = 120 jt × 12% ÷ 12 = <b>Rp1,2 juta/bulan</b>; angsuran pokok = Rp10 juta → total <b>Rp11,2 juta/bulan</b>. Sederhana tetapi mahal bagi debitur karena bunga tidak turun mengikuti sisa pokok.</p>
<p><b>2. Bunga efektif:</b> bunga dihitung dari <b>sisa pokok (baki debet)</b> sehingga menurun tiap bulan. Angsuran biasanya dibuat tetap (anuitas) dengan rumus: A = P × i ÷ [1 − (1+i)^−n]. Contoh: Rp120 juta, 12% p.a. (i = 1%/bulan), 12 bulan → angsuran ± <b>Rp10,66 juta/bulan</b>. Total bunga efektif setara ±6,6% dari plafon — jauh lebih murah dari flat 12%.</p>
<p><b>3. Anuitas:</b> bukan metode bunga tersendiri, melainkan pola angsuran <b>tetap tiap bulan</b> dengan komposisi bunga menurun dan pokok menaik — umumnya dipadukan dengan bunga efektif (seperti contoh di atas).</p>
<p>Contoh relevansi: KSG BSB dengan plafon <b>Rp200 juta</b> (maksimum bagi berpenghasilan tidak tetap), tenor 36 bulan, bunga efektif 11% p.a. (i ± 0,9167%/bulan) → angsuran ± <b>Rp6,55 juta/bulan</b>. Bila penghasilan debitur Rp10 juta, DSR = 65,5% — tidak layak; plafon atau tenor harus disesuaikan hingga DSR masuk akal. Inilah hubungan langsung antara hitungan bunga dan keputusan kredit.</p>`,
      poin: [
        "Bunga flat dihitung dari plafon awal (mahal); bunga efektif dari sisa baki debet (lebih murah dan adil).",
        "Rumus anuitas: A = P × i / [1 − (1+i)^−n]; menghasilkan angsuran tetap dengan bunga menurun.",
        "Contoh: Rp120 jt, 12% p.a., 12 bln → flat Rp11,2 jt/bln vs efektif ±Rp10,66 jt/bln.",
        "Kewajiban transparansi (POJK 22/2023): analis harus bisa menjelaskan hitungan bunga kepada debitur."
      ]
    }
  ]
},
{
  id: "risiko-kesehatan-bank",
  judul: "Risiko dan Kesehatan Bank",
  ringkas: "CAR/KPMM, LDR/RIM, BOPO, NIM, jenis-jenis risiko bank, dan cara membaca kesehatan bank.",
  sections: [
    {
      id: "car-kpmm",
      judul: "CAR/KPMM: Kecukupan Permodalan Bank",
      html: `<p><b>CAR (Capital Adequacy Ratio)</b> atau <b>KPMM</b> (Kewajiban Penyediaan Modal Minimum) mengukur kemampuan bank menyerap kerugian dari modal sendiri. Rumus dasarnya: <b>CAR = modal bank ÷ ATMR (Aset Tertimbang Menurut Risiko)</b>. ATMR membobot setiap aset sesuai risikonya: kredit berisiko tinggi berbobot besar, surat berharga pemerintah berbobot kecil.</p>
<p>Ketentuan minimum mengikuti <b>POJK 11/2016</b> dan berlapis menurut profil risiko bank: <b>8%</b> untuk peringkat profil risiko 1, <b>9% sampai di bawah 10%</b> untuk peringkat 2, <b>10% sampai di bawah 11%</b> untuk peringkat 3, dan <b>11% sampai 14%</b> untuk peringkat 4 dan 5. Bank dengan profil risiko lebih buruk wajib memegang modal lebih tebal. Untuk BPR, ketentuannya tersendiri: KPMM paling rendah <b>12%</b> dengan modal inti paling rendah 8% (POJK 5/2015).</p>
<p>Mengapa modal penting? Setiap kredit macet yang akhirnya hapus buku memakan modal bank. Bank dengan CAR tipis (misalnya 9%) hanya punya sedikit ruang sebelum modalnya tergerus di bawah minimum — sedangkan bank dengan CAR tebal dapat menyerap guncangan besar tanpa membahayakan dana nasabah.</p>
<p>Contoh nyata: CAR Bank Sumsel Babel tercatat <b>22,50%</b> pada 2024 dan <b>23,68%</b> pada 2025 (dilaporkan media) — hampir tiga kali lipat minimum untuk profil risiko terbaik. Ini berarti BSB memiliki bantalan modal yang sangat kuat untuk ekspansi kredit maupun menyerap potensi kerugian, sekaligus menjadi keunggulan kompetitif sebagai BPD.</p>
<p>Contoh cara modal tergerus: bank dengan CAR 10% mengalami kredit macet Rp500 miliar yang harus dihapusbukukan — modal inti berkurang Rp500 miliar dan CAR bisa jatuh di bawah minimum, memaksa bank menambah modal atau dibatasi ekspansinya oleh OJK. Inilah hubungan langsung antara <b>kualitas analisis kredit hari ini</b> dan <b>kecukupan modal bank esok hari</b>: setiap kredit macet yang lolos analisis menggerogoti CAR.</p>`,
      poin: [
        "CAR/KPMM = modal bank / ATMR; mengukur kemampuan menyerap kerugian.",
        "Minimum berlapis (POJK 11/2016): 8% (profil risiko 1), 9–<10% (2), 10–<11% (3), 11–14% (4/5); BPR 12% (POJK 5/2015).",
        "CAR tebal = ruang besar menyerap kerugian dan ekspansi kredit tanpa membahayakan dana nasabah.",
        "CAR BSB 22,50% (2024) dan 23,68% (2025), dilaporkan media — jauh di atas minimum."
      ]
    },
    {
      id: "ldr-rim",
      judul: "LDR, LFR, dan RIM: Mengukur Fungsi Intermediasi",
      html: `<p><b>LDR (Loan to Deposit Ratio)</b> = total kredit ÷ DPK. Rasio ini mengukur seberapa besar dana masyarakat yang sudah disalurkan sebagai kredit — sekaligus indikator likuiditas: LDR terlalu tinggi berarti bantalan likuiditas tipis, LDR terlalu rendah berarti fungsi intermediasi tidak optimal. Rumus LDR mengikuti <b>praktik umum/konvensi industri (bukan ketentuan regulasi)</b>.</p>
<p>Bank Indonesia kemudian mengembangkan <b>LFR (Loan to Funding Ratio)</b> dan kini <b>RIM (Rasio Intermediasi Makroprudensial)</b> sebagai instrumen makroprudensial — menggantikan peran LDR sebagai alat kebijakan. RIM dirancang lebih luas karena memasukkan surat berharga dan pembiayaan lain selain kredit murni. <b>Target RIM yang sehat berada pada kisaran 84%–94%</b>: bank di bawah 84% dinilai kurang menyalurkan dana (dikenai disinsentif GWM), di atas 94% dinilai terlalu agresif.</p>
<p>Hubungan dengan analis kredit menjadi jelas: setiap kredit yang disetujui analis <b>menaikkan LDR/RIM</b> bank. Di bank dengan LDR sudah tinggi, analis harus lebih selektif — kredit baru berarti likuiditas makin ketat. Sebaliknya bank dengan LDR rendah memiliki ruang ekspansi dan justru membutuhkan analis yang agresif namun tetap prudent mencari debitur layak.</p>
<p>Contoh: LDR Bank Sumsel Babel tercatat <b>87,77%</b> pada 2024 dan <b>84,32%</b> pada 2025 (dilaporkan media) — keduanya berada dalam koridor sehat 84%–94%. Penurunan LDR 2025 menunjukkan pertumbuhan DPK yang lebih cepat dari penyaluran kredit, memberi ruang ekspansi kredit yang sehat bagi analis di tahun berikutnya.</p>
<p>Contoh dilema likuiditas: bank dengan LDR 95% menerima pengajuan kredit Rp10 miliar dari debitur sangat layak (DSCR 2x, agunan 200%). Menyetujui berarti LDR makin ketat dan bank harus mencari dana mahal; menolak berarti kehilangan debitur bagus ke kompetitor. Solusi sehat: setujui dengan <b>syarat pencairan bertahap</b> sambil menggenjot penghimpunan DPK. Analis yang memahami LDR tidak hanya menilai debitur, tetapi juga <b>timing pencairan</b>.</p>`,
      poin: [
        "LDR = kredit / DPK; rumusnya mengikuti praktik umum/konvensi industri (bukan ketentuan regulasi).",
        "RIM menggantikan LDR sebagai instrumen makroprudensial BI; target sehat 84%–94%.",
        "Setiap kredit yang disetujui analis menaikkan LDR/RIM — analis ikut mengelola likuiditas bank.",
        "LDR BSB 87,77% (2024) dan 84,32% (2025), dilaporkan media — dalam koridor sehat."
      ]
    },
    {
      id: "bopo-nim",
      judul: "BOPO dan NIM: Efisiensi dan Margin Bank",
      html: `<p>Dua rasio kunci menilai apakah bank dikelola secara efisien dan menguntungkan dari bisnis intinya. Keduanya mengikuti <b>praktik umum/konvensi industri (bukan ketentuan regulasi)</b> dalam rumus dan patokannya.</p>
<p><b>BOPO</b> = beban operasional ÷ pendapatan operasional. Mengukur efisiensi: berapa rupiah biaya untuk menghasilkan Rp100 pendapatan. Semakin <b>kecil</b> BOPO semakin efisien. BOPO yang membengkak biasanya berasal dari biaya tenaga kerja, biaya promosi, atau — yang relevan bagi analis — <b>biaya cadangan kerugian (CKPN)</b> akibat kredit bermasalah.</p>
<p><b>NIM (Net Interest Margin)</b> = pendapatan bunga bersih ÷ rata-rata aset produktif. Mengukur kemampuan bank menghasilkan margin dari selisih bunga kredit dan biaya dana. Semakin <b>besar</b> NIM semakin baik, tetapi NIM yang terlalu tinggi juga bisa menandakan bank mengambil risiko kredit berlebihan (bunga tinggi = debitur berisiko).</p>
<p>Keterkaitan dengan pekerjaan analis sangat langsung: kredit macet memaksa bank membentuk CKPN → beban operasional naik → <b>BOPO naik</b>; kredit yang direstrukturisasi dengan bunga turun atau hapus bunga → pendapatan bunga turun → <b>NIM turun</b>. Setiap keputusan analis hari ini tercermin pada BOPO dan NIM bank dua-tiga tahun ke depan. NIM Bank Sumsel Babel tercatat <b>6,65%</b> (2024) dan <b>6,38%</b> (2025), dilaporkan media — level yang sehat untuk bank daerah.</p>
<p>Contoh hitung BOPO sederhana: pendapatan operasional Rp1.000 miliar, beban operasional Rp850 miliar (termasuk CKPN Rp100 miliar) → BOPO = 85%. Bila kredit bermasalah naik dan CKPN bertambah Rp50 miliar → BOPO menjadi 90%. Kenaikan 5 poin ini sepenuhnya berasal dari <b>kegagalan analisis kredit masa lalu</b>. Efisiensi bank bukan hanya soal hemat biaya kantor — terutama soal kualitas kredit. Setiap analis yang menyetujui kredit hari ini ikut menentukan BOPO bank tiga tahun ke depan.</p>`,
      poin: [
        "BOPO = beban operasional / pendapatan operasional; makin kecil makin efisien; rumus & patokan mengikuti konvensi industri.",
        "NIM = pendapatan bunga bersih / rata-rata aset produktif; makin besar makin baik (waspadai NIM tinggi dari risiko berlebih).",
        "Kredit macet menaikkan BOPO (via CKPN) dan menekan NIM — keputusan analis berdampak langsung.",
        "NIM BSB 6,65% (2024) dan 6,38% (2025), dilaporkan media — level sehat untuk bank daerah."
      ]
    },
    {
      id: "risiko-kredit",
      judul: "Risiko Kredit",
      html: `<p><b>Risiko kredit</b> adalah risiko kerugian akibat debitur gagal memenuhi kewajibannya — risiko terbesar dan paling melekat pada bisnis bank. Inilah risiko yang menjadi "makanan sehari-hari" analis kredit, sehingga modul ini pantas dipahami paling dalam.</p>
<p>Sumber risiko kredit antara lain: <b>analisis yang lemah</b> (angka tidak diverifikasi, agunan mark-up), <b>konsentrasi</b> (terlalu banyak kredit pada satu debitur, satu sektor, atau satu wilayah — bila sektor itu jatuh, banyak kredit jatuh bersamaan), <b>related party</b> (kredit kepada pihak terkait pemilik/pengurus yang diputus tanpa objektivitas), dan <b>perubahan kondisi</b> (bencana, regulasi, atau krisis yang menekan kemampuan bayar).</p>
<p>Pengelolaannya berlapis. <b>Sebelum pencairan</b>: analisis 5C, batas maksimum pemberian kredit (BMPK) untuk mencegah konsentrasi, dan agunan yang diikat sempurna. <b>Setelah pencairan</b>: monitoring kolektibilitas, pembentukan <b>CKPN (Cadangan Kerugian Penurunan Nilai)</b> sesuai kualitas aset, dan penagihan dini. Indikatornya: <b>NPL</b> — kredit Kurang Lancar, Diragukan, dan Macet dibagi total kredit.</p>
<p>Contoh keterkaitan: bank menyalurkan 40% kreditnya ke satu sektor perkebunan. Harga komoditas jatuh 30% → arus kas debitur terpukul → DSCR turun di bawah 1,0x → kolektibilitas merosot → NPL naik → CKPN membengkak → laba turun. Satu keputusan konsentrasi di hulu menimbulkan efek domino. Karena itu analis wajib memperhatikan <b>eksposur sektoral</b> bank, bukan hanya kelayakan debitur individual.</p>
<p>Contoh mitigasi konsentrasi: bank menetapkan <b>limit sektoral</b> — maksimal 25% portofolio untuk sektor perdagangan, 20% untuk pertanian. Ketika pengajuan baru membuat eksposur perdagangan menyentuh 24%, analis dan komite menjadi ekstra selektif: hanya debitur terbaik yang lolos. Limit seperti ini adalah <b>rem portofolio</b> yang melindungi bank dari euforia menyalurkan kredit ke sektor yang sedang "panas".</p>`,
      poin: [
        "Risiko kredit: kerugian akibat debitur gagal bayar — risiko terbesar bank dan fokus utama analis.",
        "Sumber: analisis lemah, konsentrasi (debitur/sektor/wilayah), related party, perubahan kondisi ekonomi.",
        "Pengelolaan: 5C + BMPK sebelum cair; monitoring, CKPN, dan penagihan dini setelah cair; indikator NPL.",
        "Konsentrasi sektor menimbulkan efek domino: harga jatuh → DSCR turun → NPL naik → laba tergerus."
      ]
    },
    {
      id: "risiko-likuiditas-pasar",
      judul: "Risiko Likuiditas dan Risiko Pasar",
      html: `<p><b>Risiko likuiditas</b> adalah risiko bank tidak mampu memenuhi kewajiban jangka pendeknya — misalnya penarikan dana nasabah besar-besaran (rush) atau gagal membayar kewajiban antarbank. Akarnya adalah <b>mismatch jangka waktu</b>: bank menghimpun dana jangka pendek (tabungan, deposito 1 bulan) tetapi menyalurkannya sebagai kredit jangka panjang (KPR 15 tahun, kredit investasi 5 tahun). Bila banyak nasabah menarik dana bersamaan, bank kekurangan kas walau asetnya besar.</p>
<p>Pengelolaan likuiditas dilakukan lewat: menjaga <b>cadangan kas dan secondary reserve</b> (surat berharga likuid), memantau rasio LDR/RIM dan <b>profil maturitas</b> (arus kas masuk vs keluar per jangka waktu), serta menjaga <b>GWM</b> sesuai ketentuan BI. Kepercayaan adalah intinya: bank yang dipercaya tidak akan mengalami rush.</p>
<p><b>Risiko pasar</b> adalah risiko kerugian akibat pergerakan harga pasar: <b>suku bunga</b> (kenaikan BI-Rate menaikkan biaya dana lebih cepat dari penyesuaian bunga kredit → NIM tertekan), <b>kurs valuta asing</b> (bank dengan posisi valas terbuka merugi bila Rupiah melemah), dan <b>harga surat berharga</b> (obligasi yang dimiliki turun nilainya bila suku bunga naik).</p>
<p>Keterkaitan dengan analis: kredit berbunga <b>mengambang (floating)</b> memindahkan risiko suku bunga ke debitur — bila BI-Rate naik, angsuran debitur naik dan DSCR turun. Analis wajib menguji sensitivitas DSCR terhadap kenaikan bunga 1–2% dan memastikan debitur memahami konsekuensi bunga floating, sesuai kewajiban transparansi POJK 22/2023.</p>
<p>Contoh mismatch: bank menghimpun deposito 1 bulan Rp10 triliun tetapi menyalurkannya sebagai KPR 15 tahun. Bila 20% deposan tidak memperpanjang sekaligus, bank butuh Rp2 triliun dalam sebulan — tanpa secondary reserve yang cukup, bank terpaksa meminjam mahal di pasar uang. Inilah mengapa <b>profil maturitas</b> dipantau harian oleh unit treasury, dan mengapa analis perlu memahami bahwa kredit jangka panjang yang ia setujui ikut membentuk mismatch ini.</p>`,
      poin: [
        "Risiko likuiditas: gagal memenuhi kewajiban jangka pendek akibat mismatch jangka waktu dana vs kredit.",
        "Dikelola via cadangan kas, secondary reserve, profil maturitas, GWM, dan menjaga kepercayaan nasabah.",
        "Risiko pasar: pergerakan suku bunga, kurs valas, dan harga surat berharga yang menggerus NIM/modal.",
        "Kredit floating memindahkan risiko bunga ke debitur — analis wajib uji sensitivitas DSCR dan jelaskan risikonya."
      ]
    },
    {
      id: "risiko-operasional",
      judul: "Risiko Operasional, Hukum, dan Kepatuhan",
      html: `<p><b>Risiko operasional</b> adalah risiko kerugian akibat kegagalan proses internal, kesalahan manusia, kegagalan sistem, atau kejadian eksternal. Contoh di area kredit: salah input plafon, dokumen agunan hilang, sistem core banking error saat pendebetan angsuran, atau pegawai yang memalsukan tanda tangan. Pengelolaannya: SOP yang jelas, pemisahan tugas, rekonsiliasi, dan <b>four eyes principle</b>.</p>
<p><b>Risiko hukum</b> adalah risiko tuntutan atau kekalahan hukum akibat perjanjian yang lemah atau dokumen tidak sempurna. Contoh klasik: agunan tanah yang <b>gagal dieksekusi</b> karena pengikatan Hak Tanggungan cacat, sertifikat ternyata ganda, atau debitur menggugat bank atas eksekusi yang prosedurnya keliru. Pencegahannya: legal review atas setiap pengikatan dan kelengkapan dokumen sebelum pencairan (prinsip: <b>tidak ada pencairan sebelum dokumen sempurna</b>).</p>
<p><b>Risiko kepatuhan</b> adalah risiko sanksi akibat pelanggaran ketentuan: denda OJK karena BMPK dilanggar, sanksi APU-PPT karena CDD tidak dilakukan, atau gugatan konsumen karena informasi produk tidak transparan (POJK 22/2023). Risiko ini juga mencakup <b>risiko reputasi</b> — pemberitaan negatif dapat memicu penarikan dana nasabah.</p>
<p>Ketiga risiko ini bertemu pada satu titik: <b>kedisiplinan analis</b>. NAK yang asal-asalan, verifikasi yang dilompati, dan dokumen yang "menyusul kemudian" adalah benih dari ketiga risiko sekaligus. Bank yang kuat bukan bank yang tidak pernah salah, melainkan bank yang sistemnya menangkap kesalahan sebelum menjadi kerugian.</p>
<p>Contoh four eyes principle: analis mengusulkan kredit Rp750 juta; atasannya me-review dan menemukan proyeksi omzet tidak didukung kontrak — pengajuan dikembalikan untuk verifikasi ulang. Tanpa lapisan kedua ini, kredit lemah akan lolos. Prinsipnya: <b>tidak ada keputusan kredit satu tanda tangan</b> untuk nilai material. Lapisan review bukan penghambat, melainkan asuransi termurah bank. Analis yang terbuka terhadap review justru menunjukkan profesionalisme, bukan kelemahan.</p>`,
      poin: [
        "Risiko operasional: gagal proses internal, human error, gagal sistem; diatasi dengan SOP, pemisahan tugas, four eyes principle.",
        "Risiko hukum: perjanjian/dokumen lemah membuat agunan gagal dieksekusi; prinsipnya tidak cair sebelum dokumen sempurna.",
        "Risiko kepatuhan: sanksi akibat langgar BMPK, APU-PPT, atau POJK 22/2023; merembet ke risiko reputasi.",
        "Kedisiplinan analis (verifikasi, dokumentasi, NAK berkualitas) adalah pertahanan pertama ketiga risiko ini."
      ]
    },
    {
      id: "membaca-kesehatan-bank",
      judul: "Membaca Kesehatan Bank: Studi Angka BSB",
      html: `<p>Menilai kesehatan bank berarti membaca sekumpulan rasio secara bersamaan — tidak ada satu rasio pun yang berdiri sendiri. Gunakan angka Bank Sumsel Babel berikut (dilaporkan media dari pemberitaan RUPS, sumber sekunder) sebagai latihan membaca:</p>
<table>
<tr><th>Indikator</th><th>2024</th><th>2025</th><th>Bacaan</th></tr>
<tr><td>CAR</td><td>22,50%</td><td>23,68%</td><td>Sangat kuat, jauh di atas minimum 8%–14%</td></tr>
<tr><td>NPL net</td><td>0,50%</td><td>0,72%</td><td>Sangat rendah, jauh di bawah ambang ±5%</td></tr>
<tr><td>LDR</td><td>87,77%</td><td>84,32%</td><td>Dalam koridor sehat 84%–94%</td></tr>
<tr><td>NIM</td><td>6,65%</td><td>6,38%</td><td>Sehat untuk bank daerah</td></tr>
<tr><td>ROE</td><td>10,20%</td><td>10,55%</td><td>Profitabilitas stabil, imbal hasil dua digit</td></tr>
<tr><td>Laba</td><td>Rp475,8 M</td><td>Rp504,9 M</td><td>Tumbuh ±6% YoY</td></tr>
</table>
<p>Cara membacanya berlapis. <b>Permodalan (CAR)</b> 23,68% berarti bank punya bantalan sangat tebal — siap ekspansi dan tahan guncangan. <b>Kualitas aset (NPL net)</b> 0,72% memang naik tipis dari 0,50%, tetapi levelnya masih sangat rendah; analis tetap perlu mewaspadai trennya, bukan hanya angkanya. <b>Likuiditas (LDR)</b> turun ke 84,32% memberi ruang penyaluran kredit yang sehat.</p>
<p><b>Rentabilitas (NIM &amp; ROE)</b>: NIM turun tipis 6,65% ke 6,38% sementara ROE naik 10,20% ke 10,55% — kombinasi yang menunjukkan efisiensi atau pendapatan non-bunga membaik sehingga laba tetap tumbuh. Ditambah peringkat <b>idA+ outlook Stable dari PEFINDO</b>, profil BSB adalah bank daerah yang sehat, efisien, dan layak dipercaya. Latihan seperti inilah yang diharapkan dari seorang analis: bukan menghafal angka, melainkan <b>merangkai cerita</b> dari angka-angka itu.</p>
<p>Contoh pertanyaan wawancara: "NPL BSB naik dari 0,50% ke 0,72% — apakah ini bahaya?" Jawaban yang baik: levelnya masih sangat rendah (jauh di bawah ±5%), tetapi <b>trennya perlu dijelaskan</b> — apakah karena ekspansi ke segmen berisiko, kondisi ekonomi daerah, atau sekadar efek basis kecil. Analis yang baik tidak panik melihat kenaikan, tetapi juga tidak mengabaikannya: ia meminta penjelasan dan memantau triwulan berikutnya.</p>`,
      poin: [
        "Kesehatan bank dibaca berlapis: permodalan (CAR), kualitas aset (NPL), likuiditas (LDR/RIM), rentabilitas (NIM, ROE, BOPO).",
        "BSB (dilaporkan media): CAR 23,68%, NPL net 0,72%, LDR 84,32%, NIM 6,38%, ROE 10,55% pada 2025; laba tumbuh ke Rp504,9 M; rating PEFINDO idA+/Stable.",
        "Baca tren, bukan angka tunggal: NPL naik tipis 0,50% ke 0,72% tetap sangat rendah tetapi wajib dimonitor.",
        "Kemampuan analis diuji dari merangkai cerita di balik angka, bukan menghafal angka."
      ]
    }
  ]
},
{
  id: "studi-kasus",
  judul: "Studi Kasus Analisis Kredit",
  ringkas: "Lima studi kasus: UMKM, kredit investasi, kemampuan bayar lemah, laporan keuangan bermasalah, dan indikasi fraud — masing-masing dengan fakta, analisis, dan keputusan.",
  sections: [
    {
      id: "kasus-umkm",
      judul: "Kasus 1: Kredit Modal Kerja UMKM",
      html: `<p><b>Fakta.</b> Ibu Ratna, 38 tahun, pemilik Toko Kelontong "Berkah Jaya" di Palembang. Usaha berjalan 6 tahun, omzet diakui Rp45 juta/bulan. Mengajukan kredit modal kerja <b>Rp75 juta</b>, tenor 24 bulan, untuk menambah stok menjelang musim ramai. SLIK: satu KTA lama sudah lunas, kolektibilitas 1, tanpa tunggakan. Agunan: SHM ruko senilai pasar Rp350 juta (KJPP), nilai likuidasi 75% = Rp262,5 juta. Suami karyawan swasta bergaji Rp5 juta/bulan, tanpa utang.</p>
<p><b>Analisis.</b> <i>Character</i>: SLIK bersih, reputasi baik di lingkungan pasar — lolos. <i>Capacity</i>: verifikasi mutasi rekening 6 bulan menunjukkan rata-rata pemasukan Rp42 juta/bulan; margin kotor ±15% → laba kotor ±Rp6,3 juta; setelah biaya operasional ±Rp1,5 juta, arus kas operasi ±<b>Rp4,8 juta/bulan</b>. Angsuran diajukan (bunga efektif 11% p.a.): ±<b>Rp3,5 juta/bulan</b> → DSCR = 4,8/3,5 = <b>1,37x</b> (di atas 1,2x). <i>Capital</i>: modal sendiri dalam usaha ±Rp60 juta (stok + ruko milik sendiri) — komitmen memadai. <i>Collateral</i>: coverage = 262,5/75 = <b>350%</b> — sangat cukup. <i>Condition</i>: sembako defensif terhadap krisis, lokasi strategis. Kebutuhan modal kerja terkonfirmasi: perputaran stok 30 hari × HPP ±Rp38 juta ≈ Rp38 juta + buffer = wajar di Rp75 juta.</p>
<p><b>Keputusan: SETUJU dengan syarat.</b> Syarat: (1) pencairan bertahap 2 termin mengikuti pembelian stok dengan bukti nota supplier; (2) asuransi jiwa debitur; (3) pengikatan Hak Tanggungan atas SHM; (4) monitoring mutasi rekening tiap triwulan. Kredit ini memenuhi seluruh 5C dengan DSCR aman dan agunan berlebih — contoh kredit UMKM yang ideal.</p>
<p>Latihan lanjutan: hitung ulang bila tenor dipersingkat menjadi 12 bulan — angsuran menjadi ±Rp6,6 juta/bulan vs arus kas Rp4,8 juta → DSCR 0,73x (tidak layak). Pelajaran: <b>struktur kredit (tenor) sama pentingnya dengan plafon</b>. Analis tidak hanya memutuskan "ya/tidak", tetapi merancang struktur yang membuat kredit layak: tenor tepat, angsuran terjangkau, agunan cukup.</p>`,
      poin: [
        "Fakta kunci: omzet terverifikasi Rp42 jt/bln (bukan Rp45 jt pengakuan), SLIK bersih, agunan SHM coverage 350%.",
        "DSCR 1,37x di atas patokan 1,2x; kebutuhan modal kerja terkonfirmasi dari perputaran stok.",
        "Keputusan: SETUJU dengan syarat — pencairan bertahap ke supplier, Hak Tanggungan, asuransi jiwa, monitoring triwulanan.",
        "Pelajaran: verifikasi angka pengakuan dengan mutasi rekening dan uji kewajaran kebutuhan dana."
      ]
    },
    {
      id: "kasus-investasi",
      judul: "Kasus 2: Kredit Investasi Penggilingan Padi",
      html: `<p><b>Fakta.</b> CV Maju Bersama, usaha penggilingan padi di Ogan Ilir, berdiri 2012. Mengajukan <b>Kredit Investasi Rp500 juta</b>, tenor 5 tahun, untuk membeli mesin penggilingan baru berkapasitas 2x lipat. Laporan keuangan: penjualan Rp2,4 miliar/tahun, EBITDA Rp330 juta/tahun. SLIK: satu kredit modal kerja Rp200 juta kolektibilitas 1, cicilan ±Rp4,5 juta/bulan (±Rp54 juta/tahun). Agunan: tanah + bangunan pabrik (likuidasi Rp700 juta) plus mesin baru yang dibeli (fidusia, nilai Rp500 juta).</p>
<p><b>Analisis.</b> <i>Prospect &amp; Purpose</i> (7P): tujuan jelas dan produktif — kapasitas naik 2x di daerah lumbung padi; kontrak pasok gabah dengan 3 kelompok tani sudah ada. <i>Capacity</i>: proyeksi konservatif — utilisasi naik 60% (bukan 100%), EBITDA proyeksi Rp450 juta; dikurangi pajak ±Rp45 juta dan maintenance capex Rp40 juta → kas untuk debt service ±<b>Rp365 juta/tahun</b>. Debt service baru: angsuran Rp500 juta/5 thn bunga 10% efektif ≈ <b>Rp127,5 juta/tahun</b>; ditambah cicilan existing Rp54 juta → total <b>Rp181,5 juta/tahun</b>. DSCR = 365/181,5 = <b>2,01x</b> — sangat aman. Skenario stres (EBITDA turun 30%): DSCR ±1,35x — masih di atas 1,2x. <i>Collateral</i>: (700 + 500×70% fidusia ±350) = ±Rp1,05 miliar vs plafon Rp500 juta → coverage ±210%.</p>
<p><b>Keputusan: SETUJU dengan syarat.</b> Syarat: (1) disbursement langsung ke supplier mesin (bukan ke rekening debitur); (2) fidusia atas mesin baru + Hak Tanggungan pabrik; (3) asuransi mesin; (4) covenant: DSCR tahunan ≥1,2x, dilarang menarik dividen bila DSCR &lt;1,3x; (5) grace period pokok 3 bulan selama instalasi. Pelajaran: kredit investasi dinilai dari <b>proyeksi arus kas masa depan</b> yang konservatif dan terverifikasi, bukan kinerja masa lalu semata.</p>`,
      poin: [
        "Kredit investasi dinilai dari proyeksi arus kas masa depan — gunakan asumsi konservatif (utilisasi 60%, bukan 100%).",
        "DSCR proyeksi 2,01x; skenario stres turun 30% masih 1,35x — di atas patokan 1,2x.",
        "Keputusan: SETUJU dengan syarat — cair ke supplier, fidusia mesin, covenant DSCR, grace period instalasi.",
        "Collateral coverage ±210% mendukung, tetapi keputusan bertumpu pada arus kas proyeksi."
      ]
    },
    {
      id: "kasus-bayar-lemah",
      judul: "Kasus 3: Kemampuan Bayar Lemah (Kredit Konsumsi)",
      html: `<p><b>Fakta.</b> Bapak Andi, 30 tahun, karyawan kontrak bergaji <b>Rp6 juta/bulan</b> (kontrak tersisa 1,5 tahun). Mengajukan <b>KSG Rp150 juta</b>, tenor 36 bulan, untuk renovasi rumah orang tua. SLIK: kartu kredit limit Rp10 juta, tunggakan Rp4 juta kolektibilitas 2 (DPK); KPR tidak ada. Slip gaji menunjukkan potongan koperasi Rp500 ribu/bulan. Tidak ada agunan selain SK pengangkatan.</p>
<p><b>Analisis.</b> <i>Character</i>: <b>merah</b> — tunggakan kartu kredit Rp4 juta kolektibilitas 2 menunjukkan disiplin bayar bermasalah; wajib dilunasi dan dijelaskan sebelum pengajuan diproses. <i>Capacity</i>: cicilan KSG Rp150 juta/36 bln bunga efektif 11% ≈ <b>Rp4,9 juta/bulan</b>. Total kewajiban: 4,9 jt + minimum payment kartu kredit ±Rp400 ribu + potongan koperasi Rp500 ribu = <b>±Rp5,8 juta</b> vs penghasilan Rp6 juta → DSR = <b>96,7%</b> — jauh di atas ambang wajar ±30–40%. Praktik umum industri menahan DSR maksimal sekitar 30%–40% (bukan ketentuan regulasi); 96,7% berarti debitur hampir pasti gagal bayar. <i>Condition</i>: status karyawan kontrak menambah risiko keberlanjutan penghasilan. <i>Capital/Collateral</i>: tidak ada.</p>
<p><b>Keputusan: TOLAK</b> (atau tawarkan alternatif). Alasan: DSR 96,7% tidak memenuhi kapasitas bayar; character bermasalah (tunggakan kartu kredit). Alternatif yang dapat ditawarkan: (1) lunasi dulu tunggakan kartu kredit dan tutup kartunya; (2) ajukan ulang dengan plafon maksimal ±Rp40 juta (cicilan ±Rp1,3 juta → DSR ±30% termasuk kewajiban lain); atau (3) tunda hingga status karyawan tetap. Pelajaran: <b>kebutuhan yang mulia (renovasi rumah orang tua) tidak mengubah matematika kemampuan bayar</b> — empati boleh, tetapi keputusan harus objektif.</p>
<p>Latihan wawancara: pewawancara bertanya "Andi adalah saudara Anda — apa keputusan Anda?" Jawaban yang benar tetap <b>TOLAK dengan alternatif</b>, plus penjelasan bahwa analis wajib menghindari benturan kepentingan (GCG) dan mengundurkan diri dari penanganan bila ada hubungan keluarga. Integritas diuji justru pada kasus yang melibatkan orang dekat — di sinilah nilai <b>Amanah</b> dalam BSB PACAK dibuktikan.</p>`,
      poin: [
        "DSR 96,7% (kewajiban Rp5,8 jt vs gaji Rp6 jt) — jauh di atas ambang wajar ±30–40% (praktik umum).",
        "Character merah: tunggakan kartu kredit kolektibilitas 2 wajib diselesaikan sebelum pengajuan diproses.",
        "Keputusan: TOLAK; alternatif: plafon ±Rp40 jt (DSR ±30%), lunasi tunggakan, atau tunggu status karyawan tetap.",
        "Pelajaran: tujuan mulia tidak mengubah matematika kemampuan bayar — keputusan harus objektif."
      ]
    },
    {
      id: "kasus-lapkeu-bermasalah",
      judul: "Kasus 4: Laporan Keuangan Bermasalah",
      html: `<p><b>Fakta.</b> PT Cahaya Timur, distributor bahan bangunan, mengajukan kredit modal kerja <b>Rp1 miliar</b>. Laporan keuangan (diaudit KAP lokal): penjualan naik 25% YoY menjadi Rp8 miliar, <b>laba bersih naik 40%</b> menjadi Rp640 juta. Sekilas sangat menarik. Namun rincian neraca: piutang naik <b>80%</b> menjadi Rp2,7 miliar; persediaan naik 45%; utang bank jangka pendek sudah Rp900 juta. Arus kas operasi: <b>negatif Rp350 juta</b>.</p>
<p><b>Analisis.</b> Ini pola klasik <b>"laba kertas"</b>: laba naik karena penjualan kredit, tetapi kasnya macet di piutang. Hitungan rasio: Current Ratio = aset lancar Rp3,9 miliar / utang jangka pendek Rp2,6 miliar = <b>1,5x</b> (terlihat cukup); Quick Ratio = (3,9 − 1,0 persediaan)/2,6 = <b>1,1x</b> (tipis); DER = total liabilitas Rp3,4 miliar / ekuitas Rp1,8 miliar = <b>1,9x</b> (tinggi). <i>Aging schedule</i> piutang (diminta analis) menunjukkan 35% piutang berumur &gt;90 hari — indikasi koleksi bermasalah atau <b>penjualan fiktif</b> untuk menggelembungkan laporan. DSCR berbasis arus kas operasi negatif = <b>di bawah 1,0x</b> — kas tidak cukup membayar utang existing, apalagi tambahan Rp1 miliar.</p>
<p><b>Keputusan: TOLAK untuk saat ini</b> (pending perbaikan). Syarat bila ingin diajukan ulang: (1) audit khusus atas piutang &gt;90 hari dengan konfirmasi ke debitur-debitur terbesar; (2) arus kas operasi positif minimal 2 triwulan berturut-turut; (3) turunkan DER di bawah 1,5x via setoran modal; (4) laporan keuangan diaudit KAP yang lebih kredibel. Pelajaran: <b>jangan terpesona laba yang naik</b> — analis dibayar untuk membaca arus kas dan kualitas piutang, bukan headline laba bersih.</p>
<p>Latihan verifikasi: untuk memastikan piutang Rp2,7 miliar itu riil, analis meminta <b>konfirmasi piutang</b> — surat ke 5 debitur terbesar yang menyatakan saldo utangnya. Bila 2 dari 5 tidak menjawab atau menyangkal, itu konfirmasi kuat adanya masalah. Teknik konfirmasi pihak ketiga seperti ini adalah standar audit yang wajib diadopsi analis untuk pengajuan bernilai besar.</p>`,
      poin: [
        "Pola 'laba kertas': laba naik 40% tetapi arus kas operasi negatif Rp350 jt — kas macet di piutang (+80%).",
        "35% piutang berumur >90 hari: indikasi koleksi bermasalah atau penjualan fiktif — wajib konfirmasi ke debitur terbesar.",
        "DSCR berbasis kas negatif (<1,0x) berarti tak mampu membayar utang existing, apalagi tambahan Rp1 M.",
        "Keputusan: TOLAK sementara; syarat pengajuan ulang: audit piutang, arus kas operasi positif 2 triwulan, DER <1,5x."
      ]
    },
    {
      id: "kasus-fraud",
      judul: "Kasus 5: Indikasi Fraud",
      html: `<p><b>Fakta.</b> Sdr. Budi mengajukan KSG Rp180 juta dengan agunan SHM. Dokumen terlihat lengkap. Namun verifikasi menemukan kejanggalan berlapis: (1) NIK pada KTP berbeda satu digit dengan NIK pada KK dan data Dukcapil tidak cocok; (2) slip gaji dari "PT Fiktif Jaya" — perusahaan tidak terdaftar pada NIB/OSS dan alamat kantor ternyata ruko kosong; (3) iDeb SLIK menunjukkan ia memiliki KTA Rp100 juta di bank lain <b>kolektibilitas 3 (Kurang Lancar)</b> yang tidak diungkapkan pada formulir; (4) SHM yang diagunkan ternyata <b>sedang diagunkan di bank lain</b> (cek BPN menunjukkan Hak Tanggungan aktif).</p>
<p><b>Analisis.</b> Ini bukan sekadar pengajuan lemah — ini <b>indikasi fraud berlapis</b>: pemalsuan identitas, pekerjaan fiktif, penyembunyian utang bermasalah, dan <b>agunan ganda</b> (double pledging). Setiap temuan berdiri sendiri sudah cukup untuk menolak; kombinasinya menunjukkan niat jahat (<i>fraudulent intent</i>), bukan sekadar debitur bermasalah. Dari sisi APU-PPT (POJK 8/2023), identitas yang tidak terverifikasi dan dokumen palsu adalah pelanggaran CDD yang serius.</p>
<p><b>Keputusan: TOLAK dan ESKALASI.</b> (1) Tolak pengajuan secara tertulis dengan alasan hasil verifikasi; (2) laporkan temuan ke <b>unit kepatuhan/APU-PPT</b> dan atasan langsung — jangan ditangani sendiri; (3) simpan seluruh bukti verifikasi; (4) bila ada indikasi pemalsuan dokumen, pertimbangkan laporan ke kepolisian sesuai kebijakan bank; (5) masukkan nama ke daftar pantauan internal agar tidak mengajukan di cabang lain. Pelajaran: <b>satu kejanggalan dokumen adalah alasan verifikasi lebih dalam; dua kejanggalan adalah alasan berhenti</b>. Analis yang "membantu meloloskan" dokumen bermasalah berubah status dari analis menjadi pelaku.</p>
<p>Latihan deteksi: fraud sering tercium dari <b>ketidakkonsistenan kecil</b> — tanda tangan berbeda antara KTP dan formulir, nomor telepon yang tidak aktif, atau debitur yang enggan disurvei ke rumahnya. Analis yang teliti mencatat setiap inkonsistensi dalam NAK. Ingat kaidah: dokumen boleh difotokopi, tetapi <b>verifikasi tidak boleh difotokopi</b> — setiap verifikasi harus dilakukan sendiri dan didokumentasikan.</p>`,
      poin: [
        "Empat red flag berlapis: NIK tak cocok Dukcapil, perusahaan fiktif, utang macet disembunyikan (SLIK kol-3), agunan ganda.",
        "Kombinasi temuan = indikasi fraudulent intent, bukan sekadar pengajuan lemah; juga pelanggaran CDD (POJK 8/2023).",
        "Keputusan: TOLAK dan ESKALASI ke unit kepatuhan/APU-PPT; simpan bukti; pertimbangkan lapor polisi; masukkan daftar pantauan.",
        "Prinsip: satu kejanggalan = verifikasi lebih dalam; dua kejanggalan = berhenti. Jangan pernah 'membantu meloloskan'."
      ]
    },
    {
      id: "keputusan-komite",
      judul: "Kasus 6: Simulasi Keputusan Komite Kredit",
      html: `<p><b>Fakta.</b> Anda diminta mempresentasikan ringkasan lima kasus di atas dalam simulasi komite kredit — format yang umum dipakai untuk menguji calon analis: diberi <b>fakta singkat</b>, diminta menyampaikan <b>analisis</b> (5C + angka kunci), lalu <b>keputusan</b> (setuju/tolak/bersyarat) beserta mitigasinya dalam waktu terbatas.</p>
<p><b>Analisis (kerangka presentasi).</b> Gunakan struktur baku: (1) <b>profil debitur &amp; tujuan kredit</b> — siapa, untuk apa, berapa, tenor berapa; (2) <b>5C ringkas</b> — character (SLIK), capacity (DSCR/DSR + angka), capital, collateral (coverage), condition; (3) <b>risiko utama &amp; mitigasi</b> — sebutkan 2–3 risiko terbesar dan bagaimana masing-masing ditutup (misalnya risiko harga → covenant DSCR; risiko eksekusi → HT sempurna); (4) <b>rekomendasi tegas</b> — jangan "tergantung komite". Komite menghargai analis yang berani berpendapat dengan dasar angka.</p>
<p><b>Keputusan (rekap lima kasus).</b> Kasus 1 (UMKM): SETUJU bersyarat — DSCR 1,37x, coverage 350%. Kasus 2 (investasi): SETUJU bersyarat — DSCR proyeksi 2,01x, cair ke supplier. Kasus 3 (konsumsi): TOLAK — DSR 96,7%, character merah. Kasus 4 (lapkeu): TOLAK sementara — laba kertas, kas operasi negatif. Kasus 5 (fraud): TOLAK + eskalasi kepatuhan. Pola yang dinilai: <b>konsistensi logika</b> — kasus 1 dan 2 disetujui karena kasnya cukup, kasus 3–5 ditolak karena kasnya tidak cukup atau integritasnya gagal.</p>
<p>Catatan penutup: rekrutmen resmi Bank Sumsel Babel tahun 2026 hanya mempublikasikan tahapan <b>Pendaftaran → Seleksi Berkas → Wawancara (HR &amp; user) → Onboarding</b>. Tidak ada bocoran format tes dalam materi ini — yang diuji adalah <b>cara berpikir analis</b>: fakta, angka, keputusan. Kuasai kerangka di atas, dan setiap bentuk soal studi kasus dapat dihadapi dengan struktur yang sama.</p>
<p>Tips wawancara HR: selain penguasaan materi, tunjukkan <b>motivasi menjadi analis kredit BSB</b> — misalnya ketertarikan pada misi BPD membangun ekonomi daerah, kesiapan ditempatkan di cabang, dan komitmen pada nilai BSB PACAK. Pewawancara user (calon atasan) menilai cara berpikir teknis; pewawancara HR menilai karakter dan kecocokan budaya. Siapkan contoh pengalaman yang menunjukkan ketelitian, keberanian berkata tidak, dan integritas Anda.</p>`,
      poin: [
        "Struktur presentasi komite: profil & tujuan → 5C ringkas + angka → risiko utama & mitigasi → rekomendasi tegas.",
        "Rekap: kasus 1–2 SETUJU bersyarat (kas cukup); kasus 3–5 TOLAK (kas tak cukup / integritas gagal).",
        "Komite menilai konsistensi logika dan keberanian berpendapat berdasar angka, bukan jawaban 'aman'.",
        "Rekrutmen resmi BSB 2026: Pendaftaran → Seleksi Berkas → Wawancara (HR & user) → Onboarding; tidak ada bocoran tes — kuasai cara berpikir analis."
      ]
    }
  ]
}
];
