/* DATA PENDUKUNG — Website Persiapan Tes Bank Sumsel Babel (Analis Kredit)
   Kontrak:
   const WAWANCARA=[{id,kategori:"HRD"|"User",pertanyaan,tips:[],contoh}];
   const GLOSARIUM=[{istilah,definisi}];            // urut abjad A-Z
   const FLASHCARD=[{depan,belakang,modul}];
   const RUMUS=[{nama,rumus,keterangan,contoh}];
   const RINGKASAN=[{modul,judul,poin:[]}];
   const CHECKLIST=[{item,detail}];
   const SUMBER=[{nama,url,tanggal,jenis:"resmi"|"pengalaman",catatan}];
   Bahasa Indonesia, tanpa emoji. Fakta Bank Sumsel Babel terverifikasi 2026-10-11. */

const WAWANCARA = [
  // ============================ HRD (12) ============================
  {
    id: "W-01",
    kategori: "HRD",
    pertanyaan: "Ceritakan tentang diri Anda secara singkat.",
    tips: [
      "Batasi 1-2 menit dengan struktur: latar belakang, pengalaman relevan, alasan melamar.",
      "Tonjolkan pengalaman menganalisis data, laporan keuangan, atau kajian usaha.",
      "Tutup dengan motivasi menjadi Analis Kredit di Bank Sumsel Babel.",
      "Hindari mengulang seluruh isi CV baris per baris."
    ],
    contoh: "Saya [nama], lulusan [jurusan] [universitas] tahun [tahun]. Latar belakang saya banyak bersentuhan dengan analisis data dan laporan keuangan, termasuk [pengalaman atau proyek relevan]. Ketertarikan saya pada analisis kredit tumbuh karena peran ini menggabungkan ketajaman analisis dengan dampak nyata bagi pelaku usaha. Saya melamar ke Bank Sumsel Babel karena ingin berkontribusi pada pertumbuhan ekonomi Sumatera Selatan dan Bangka Belitung melalui pembiayaan yang sehat. Saya siap ditempatkan di seluruh wilayah kerja bank dan berkomitmen menjaga integritas dalam setiap rekomendasi kredit."
  },
  {
    id: "W-02",
    kategori: "HRD",
    pertanyaan: "Mengapa Anda memilih Bank Sumsel Babel?",
    tips: [
      "Tunjukkan riset: sebut fakta spesifik bank, bukan jawaban generik.",
      "Kaitkan visi dan budaya BSB PACAK dengan nilai pribadi Anda.",
      "Tekankan peran BUMD dalam pembangunan daerah.",
      "Hindari alasan yang semata-mata soal gaji atau lokasi."
    ],
    contoh: "Bank Sumsel Babel adalah BUMD milik Pemprov Sumatera Selatan dan Kepulauan Bangka Belitung yang berdiri sejak 6 November 1957, sehingga memiliki akar kuat di daerah. Visi menjadi bank terkemuka dan terpercaya berbasis layanan digital sejalan dengan minat saya pada transformasi perbankan. Budaya BSB PACAK, yaitu Profesional, Amanah, Customer Focus, Agility, dan Kolaboratif, mencerminkan cara saya bekerja. Saya ingin karier saya berdampak langsung pada masyarakat dan UMKM daerah, dan BSB adalah tempat yang tepat untuk itu."
  },
  {
    id: "W-03",
    kategori: "HRD",
    pertanyaan: "Apa yang Anda ketahui tentang Bank Sumsel Babel?",
    tips: [
      "Sebutkan fakta terverifikasi: nama lengkap, status BUMD, tahun berdiri, kantor pusat.",
      "Sebutkan 2-3 produk bank agar terlihat melakukan riset.",
      "Sebutkan status pengawasan OJK dan BI serta penjaminan LPS.",
      "Jangan mengarang angka keuangan yang tidak Anda verifikasi."
    ],
    contoh: "PT Bank Pembangunan Daerah Sumatera Selatan dan Bangka Belitung adalah BUMD milik Pemprov Sumsel dan Kepulauan Babel, berdiri 6 November 1957 dan berkantor pusat di Jl. Gubernur H. Ahmad Bastari No. 7 Palembang. Visinya menjadi bank terkemuka dan terpercaya dengan kinerja unggul berbasis layanan digital, dengan budaya kerja BSB PACAK. Produknya antara lain Tabungan Pesirah, Simpeda, Depati atau Deposito Tanpa Penalti, dan Giro Demang, serta KSG atau Kredit Serba Guna, KUR, dan Kredit Investasi di sisi pembiayaan. Bank ini berizin dan diawasi OJK dan Bank Indonesia serta menjadi peserta penjaminan LPS, dengan call center 1500711."
  },
  {
    id: "W-04",
    kategori: "HRD",
    pertanyaan: "Apa kelebihan terbesar Anda?",
    tips: [
      "Pilih 2 kelebihan yang relevan dengan analis kredit: ketelitian, integritas, kemampuan analisis.",
      "Dukung dengan contoh singkat, bukan klaim kosong.",
      "Kaitkan dengan kebutuhan peran.",
      "Jangan menyebut terlalu banyak kelebihan hingga terdengar tidak fokus."
    ],
    contoh: "Kelebihan utama saya adalah ketelitian dalam membaca angka dan kedisiplinan mengikuti prosedur. Dalam [pengalaman], saya terbiasa memverifikasi data berlapis sebelum mengambil kesimpulan sehingga jarang terjadi kesalahan analisis. Saya juga terbiasa bekerja dengan tenggat waktu tanpa mengorbankan kualitas. Kedua hal ini sangat relevan karena analis kredit harus cermat menilai kelayakan debitur sekaligus patuh pada ketentuan yang berlaku."
  },
  {
    id: "W-05",
    kategori: "HRD",
    pertanyaan: "Apa kekurangan Anda dan bagaimana cara mengatasinya?",
    tips: [
      "Pilih kekurangan yang jujur namun tidak fatal untuk peran analis.",
      "Selalu sertakan langkah perbaikan konkret yang sudah dilakukan.",
      "Hindari klise tanpa bukti."
    ],
    contoh: "Kekurangan saya adalah cenderung membutuhkan waktu lebih lama saat mempelajari sistem atau regulasi baru karena ingin memahaminya sampai tuntas. Untuk mengatasinya, saya membuat ringkasan dan checklist pribadi setiap mempelajari ketentuan baru, misalnya saat mempelajari POJK tentang kualitas aset. Cara ini membuat saya memang lebih lambat di awal, tetapi setelah itu saya bekerja cepat dan jarang mengulang kesalahan yang sama."
  },
  {
    id: "W-06",
    kategori: "HRD",
    pertanyaan: "Bagaimana jika ada kerabat atau kenalan yang meminta bantuan meloloskan kreditnya?",
    tips: [
      "Tegaskan integritas di atas hubungan pribadi.",
      "Jelaskan mekanisme: perlakukan profesional sesuai SOP dan laporkan potensi benturan kepentingan ke atasan.",
      "Tunjukkan pemahaman bahwa analis tidak memutus sendiri, ada komite kredit."
    ],
    contoh: "Saya akan menolak intervensi dalam bentuk apa pun karena keputusan kredit harus berdasarkan analisis objektif, bukan hubungan pribadi. Pengajuan dari kerabat tetap saya perlakukan seperti nasabah lain: wajib memenuhi seluruh persyaratan dan lolos analisis 5C. Saya juga akan melaporkan potensi benturan kepentingan kepada atasan sejak awal agar penanganannya transparan. Integritas adalah modal utama analis kredit, dan satu pengecualian bisa merusak kepercayaan terhadap seluruh proses."
  },
  {
    id: "W-07",
    kategori: "HRD",
    pertanyaan: "Di mana Anda melihat diri Anda lima tahun ke depan?",
    tips: [
      "Tunjukkan komitmen jangka panjang pada bank dan bidang perkreditan.",
      "Susun jenjang realistis: analis, analis senior, hingga memimpin tim.",
      "Kaitkan dengan kontribusi, bukan sekadar jabatan."
    ],
    contoh: "Dalam lima tahun saya ingin tumbuh menjadi analis kredit senior yang dipercaya menangani debitur kompleks dan membimbing analis junior. Saya akan memperdalam sertifikasi dan pemahaman regulasi agar kualitas analisis saya semakin tajam. Target saya adalah berkontribusi nyata menekan NPL dan memperluas pembiayaan sehat di wilayah kerja saya. Saya melihat Bank Sumsel Babel sebagai tempat berkarier jangka panjang, bukan batu loncatan."
  },
  {
    id: "W-08",
    kategori: "HRD",
    pertanyaan: "Apakah Anda bersedia ditempatkan di seluruh wilayah Sumatera Selatan dan Bangka Belitung, termasuk daerah terpencil?",
    tips: [
      "Jawab tegas ya dan tunjukkan kesiapan mental.",
      "Sebutkan pemahaman bahwa BPD melayani hingga daerah.",
      "Hindari mengajukan syarat-syarat penempatan."
    ],
    contoh: "Ya, saya bersedia ditempatkan di seluruh wilayah kerja Bank Sumsel Babel, termasuk daerah terpencil. Saya memahami bahwa sebagai BPD, bank ini justru memiliki misi melayani masyarakat hingga ke pelosok daerah. Saya terbiasa beradaptasi dengan lingkungan baru dan melihat penempatan daerah sebagai kesempatan memahami karakter usaha lokal secara langsung. Kesiapan ini sudah saya diskusikan dengan keluarga."
  },
  {
    id: "W-09",
    kategori: "HRD",
    pertanyaan: "Bagaimana Anda menghadapi tekanan dan target kerja?",
    tips: [
      "Beri contoh konkret menghadapi tenggat atau beban kerja tinggi.",
      "Tunjukkan sistem kerja: prioritas, checklist, komunikasi dini.",
      "Kaitkan dengan ritme kerja analis kredit yang berbasis target dan SLA."
    ],
    contoh: "Saya menghadapi tekanan dengan memecah pekerjaan besar menjadi prioritas harian yang terukur. Dalam [pengalaman], saya pernah menangani beberapa tenggat bersamaan dengan membuat daftar prioritas dan berkomunikasi dini jika ada kendala. Saya juga menjaga kualitas istirahat agar tetap fokus. Saya memahami analis kredit bekerja dengan target dan SLA, dan saya justru termotivasi oleh ritme kerja yang jelas seperti itu."
  },
  {
    id: "W-10",
    kategori: "HRD",
    pertanyaan: "Ceritakan pengalaman Anda bekerja dalam tim dan menyelesaikan perbedaan pendapat.",
    tips: [
      "Gunakan struktur STAR: situasi, tugas, aksi, hasil.",
      "Tunjukkan peran aktif Anda, bukan sekadar pengamat.",
      "Akhiri dengan pelajaran yang diambil."
    ],
    contoh: "Dalam [proyek atau pekerjaan], tim kami berbeda pendapat soal [isu] menjelang tenggat. Saya mengusulkan agar setiap pihak menyampaikan datanya, lalu kami menilai opsi berdasarkan fakta bukan opini. Akhirnya tim sepakat pada solusi gabungan dan proyek selesai tepat waktu. Dari pengalaman itu saya belajar bahwa perbedaan pendapat yang dikelola dengan data justru menghasilkan keputusan lebih baik, prinsip yang juga saya pegang dalam analisis kredit."
  },
  {
    id: "W-11",
    kategori: "HRD",
    pertanyaan: "Berapa gaji yang Anda harapkan?",
    tips: [
      "Utamakan mengikuti ketentuan dan struktur penggajian bank.",
      "Jika diminta angka, beri rentang wajar berbasis riset, bukan angka kaku.",
      "Tekankan prioritas Anda adalah jenjang karier dan pembelajaran."
    ],
    contoh: "Saya mengikuti ketentuan penggajian yang berlaku di Bank Sumsel Babel untuk posisi ini. Yang menjadi prioritas saya adalah kesempatan berkembang sebagai analis kredit dan berkontribusi jangka panjang. Saya percaya kompensasi yang adil akan mengikuti kinerja, dan saya siap membuktikan nilai saya melalui hasil kerja."
  },
  {
    id: "W-12",
    kategori: "HRD",
    pertanyaan: "Kapan Anda bisa mulai bekerja? Apakah ada yang ingin Anda tanyakan?",
    tips: [
      "Sampaikan ketersediaan yang realistis dan fleksibel.",
      "Siapkan 2-3 pertanyaan cerdas soal peran, bukan soal gaji atau cuti.",
      "Contoh pertanyaan: jenjang analis, program pengembangan, tantangan kredit di wilayah kerja."
    ],
    contoh: "Saya bisa mulai bekerja [segera atau setelah masa pemberitahuan X minggu] dan siap mengikuti seluruh tahapan onboarding. Jika boleh, saya ingin bertanya: bagaimana jenjang pengembangan analis kredit di bank ini, dan apa tantangan terbesar penyaluran kredit sehat di wilayah kerja Bank Sumsel Babel saat ini? Terima kasih atas kesempatan wawancara ini."
  },

  // ============================ User (12) ============================
  {
    id: "W-13",
    kategori: "User",
    pertanyaan: "Jelaskan prinsip 5C dalam analisis kredit.",
    tips: [
      "Hafalkan kepanjangan dan makna tiap C.",
      "Beri contoh indikator konkret untuk tiap C.",
      "Tegaskan kelima C dinilai menyeluruh dan tidak bisa saling menggantikan."
    ],
    contoh: "Prinsip 5C adalah Character, Capacity, Capital, Collateral, dan Condition. Character menilai watak dan reputasi debitur, misalnya riwayat SLIK dan rekam jejak usaha. Capacity menilai kemampuan membayar dari arus kas, umumnya diukur dengan DSCR. Capital menilai modal sendiri yang ditanam debitur sebagai bukti komitmen. Collateral menilai agunan sebagai sumber pembayaran kedua. Condition menilai kondisi ekonomi dan prospek usaha. Kelimanya harus dinilai menyeluruh karena kelemahan pada satu C tidak bisa ditutup sepenuhnya oleh C yang lain."
  },
  {
    id: "W-14",
    kategori: "User",
    pertanyaan: "Bagaimana langkah Anda menganalisis kelayakan pemberian kredit?",
    tips: [
      "Susun alur sistematis: permohonan, verifikasi, analisis, rekomendasi.",
      "Sebutkan sumber data: dokumen, SLIK, on the spot, rekening koran.",
      "Akhiri dengan struktur rekomendasi dalam Memorandum Analisis Kredit."
    ],
    contoh: "Pertama saya memverifikasi kelengkapan dokumen permohonan dan legalitas usaha debitur. Kedua, saya memeriksa riwayat kredit melalui SLIK OJK serta menganalisis laporan keuangan dan rekening koran untuk menilai arus kas. Ketiga, saya melakukan on the spot untuk memverifikasi kondisi usaha dan agunan secara langsung. Keempat, saya menilai 5C dan menghitung rasio kunci seperti DSCR, DER, dan current ratio. Terakhir, saya menuangkan semuanya dalam Memorandum Analisis Kredit berisi rekomendasi, struktur fasilitas, dan mitigasi risiko untuk diputus komite kredit."
  },
  {
    id: "W-15",
    kategori: "User",
    pertanyaan: "KASUS: Calon debitur menawarkan agunan yang sangat besar, tetapi arus kas usahanya lemah. Apa keputusan Anda?",
    tips: [
      "Pegang prinsip: sumber pembayaran utama adalah arus kas, agunan hanya sumber kedua.",
      "Tolak atau tunda dengan alasan terukur, tawarkan skema yang sesuai kemampuan.",
      "Tunjukkan keberanian berkata tidak demi kualitas portofolio."
    ],
    contoh: "Saya akan merekomendasikan penolakan atau penundaan pengajuan tersebut. Prinsip dasar perkreditan adalah sumber pembayaran utama berasal dari arus kas usaha, sedangkan agunan hanyalah sumber pembayaran kedua jika terjadi gagal bayar. Arus kas yang lemah berarti debitur tidak mampu membayar angsuran dari usahanya, dan menyetujui kredit hanya karena agunan besar sama dengan berspekulasi pada likuidasi agunan. Sebagai alternatif, saya bisa menawarkan skema yang disesuaikan, misalnya plafon lebih kecil atau tenor disesuaikan, setelah debitur memperbaiki arus kasnya. Keputusan ini pahit di awal, tetapi melindungi bank dari potensi NPL."
  },
  {
    id: "W-16",
    kategori: "User",
    pertanyaan: "Apa risiko kredit terbesar yang Anda lihat saat ini dan bagaimana memitigasinya?",
    tips: [
      "Pilih risiko yang relevan dengan konteks daerah: fluktuasi harga komoditas, UMKM, konsentrasi sektor.",
      "Jelaskan mitigasi konkret: diversifikasi, covenant, monitoring, CKPN.",
      "Hindari jawaban terlalu umum tanpa contoh."
    ],
    contoh: "Risiko terbesar yang saya lihat adalah ketergantungan debitur pada sektor komoditas seperti sawit dan karet yang harganya fluktuatif, karena wilayah Sumsel dan Babel banyak ditopang sektor tersebut. Mitigasinya dimulai dari analisis: stress test arus kas dengan skenario harga turun. Dari sisi struktur, saya akan mengusulkan covenant pemeliharaan rasio keuangan, diversifikasi portofolio antar sektor, dan agunan memadai dengan haircut konservatif. Dari sisi monitoring, kunjungan berkala dan pemantauan dini kolektibilitas agar masalah terdeteksi sebelum menjadi macet, didukung pencadangan CKPN yang cukup."
  },
  {
    id: "W-17",
    kategori: "User",
    pertanyaan: "Bagaimana Anda menangani debitur yang mulai menunggak?",
    tips: [
      "Tunjukkan tahapan: deteksi dini, pendekatan persuasif, restrukturisasi, hingga penyelesaian.",
      "Sebutkan 3R: rescheduling, reconditioning, restructuring.",
      "Tekankan dokumentasi dan kepatuhan prosedur."
    ],
    contoh: "Langkah pertama adalah deteksi dini melalui monitoring tunggakan dan segera menghubungi debitur untuk memahami akar masalahnya. Jika masalahnya sementara, saya akan menawarkan solusi seperti rescheduling atau reconditioning sesuai ketentuan restrukturisasi yang berlaku. Pendekatan saya persuasif namun tegas: debitur harus menunjukkan itikad baik, misalnya dengan membayar sebagian kewajiban. Seluruh proses saya dokumentasikan dan laporkan berjenjang. Jika upaya penyelamatan gagal, saya akan mengusulkan langkah penyelesaian sesuai prosedur, termasuk eksekusi agunan sebagai jalan terakhir."
  },
  {
    id: "W-18",
    kategori: "User",
    pertanyaan: "Apa bedanya analis kredit dengan account officer?",
    tips: [
      "Analis fokus pada analisis risiko dan rekomendasi; AO fokus pada pemasaran dan hubungan nasabah.",
      "Keduanya saling melengkapi dengan pemisahan fungsi yang sehat.",
      "Tunjukkan pemahaman four eyes principle."
    ],
    contoh: "Account officer berfokus pada sisi bisnis: mencari nasabah, memasarkan produk kredit, dan membina hubungan dengan debitur. Analis kredit berfokus pada sisi risiko: menilai kelayakan, menghitung kemampuan bayar, dan memberikan rekomendasi objektif. Pemisahan fungsi ini disengaja agar keputusan kredit tidak bias oleh target pemasaran, sejalan dengan prinsip kehati-hatian. Dalam praktiknya keduanya harus bekerja sama: AO menyediakan informasi nasabah, analis memastikan kualitasnya sebelum komite kredit memutus."
  },
  {
    id: "W-19",
    kategori: "User",
    pertanyaan: "Mengapa Anda memilih posisi Analis Kredit?",
    tips: [
      "Kaitkan latar belakang dan minat pada analisis dengan peran ini.",
      "Tunjukkan pemahaman tentang tanggung jawab dan dampak peran.",
      "Hindari alasan administratif seperti karena lowongannya tersedia."
    ],
    contoh: "Saya memilih Analis Kredit karena peran ini menggabungkan dua hal yang saya sukai: analisis data yang mendalam dan dampak nyata bagi dunia usaha. Setiap rekomendasi yang saya buat menentukan apakah sebuah usaha mendapat modal untuk tumbuh, sekaligus menjaga kesehatan bank. Latar belakang saya dalam analisis laporan keuangan menjadi modal yang relevan. Saya juga tertarik pada aspek pengambilan keputusannya: analis harus berani berkata tidak berdasarkan data, dan itu adalah tantangan profesional yang saya cari."
  },
  {
    id: "W-20",
    kategori: "User",
    pertanyaan: "Jika DSCR calon debitur 1,1 dan DER-nya 3,5, bagaimana penilaian Anda?",
    tips: [
      "Interpretasikan angka: DSCR tipis dan DER tinggi berarti leverage berisiko.",
      "Jelaskan tindak lanjut: verifikasi arus kas, stress test, struktur mitigasi.",
      "Tunjukkan ambang umum: DSCR yang sehat umumnya di atas 1,2 sampai 1,5."
    ],
    contoh: "DSCR 1,1 berarti arus kas hanya 10 persen di atas kewajiban pembayaran utang, sehingga sangat tipis dan rentan terhadap guncangan. DER 3,5 menunjukkan struktur modal sangat bertumpu pada utang, yang memperbesar risiko. Kombinasi keduanya memberi sinyal merah: debitur agresif berutang dengan bantalan arus kas minimal. Saya akan memverifikasi ulang proyeksi arus kasnya, melakukan stress test penurunan pendapatan, dan kemungkinan merekomendasikan penolakan atau plafon jauh lebih kecil dengan covenant ketat. Tanpa mitigasi kuat, pengajuan seperti ini sulit saya rekomendasikan."
  },
  {
    id: "W-21",
    kategori: "User",
    pertanyaan: "Jenis agunan apa saja yang umum dan bagaimana Anda menilainya?",
    tips: [
      "Sebutkan: tanah atau bangunan (Hak Tanggungan), kendaraan atau mesin atau persediaan (fidusia), deposito (gadai).",
      "Jelaskan penilaian: nilai pasar, nilai likuidasi, haircut.",
      "Tekankan verifikasi legalitas dan pengikatan yang sempurna."
    ],
    contoh: "Agunan umum meliputi tanah dan bangunan yang diikat Hak Tanggungan, kendaraan, mesin, dan persediaan yang diikat fidusia, serta deposito atau tabungan yang digadaikan. Penilaian saya mencakup tiga lapis: nilai pasar wajar berdasarkan penilai independen atau data pembanding, nilai likuidasi sebagai estimasi harga jual cepat, dan haircut untuk menentukan coverage yang aman. Saya juga memverifikasi legalitas seperti sertifikat dan BPKB, serta memastikan agunan tidak sedang dijaminkan di tempat lain. Pengikatan harus sempurna secara hukum karena agunan yang cacat hukum tidak bisa dieksekusi saat dibutuhkan."
  },
  {
    id: "W-22",
    kategori: "User",
    pertanyaan: "Bagaimana cara Anda membaca informasi debitur di SLIK OJK?",
    tips: [
      "Jelaskan SLIK: riwayat fasilitas, kolektibilitas, baki debet di seluruh lembaga keuangan.",
      "Fokus pada kolektibilitas, tunggakan, jumlah kreditur, dan pola pembayaran.",
      "Tegaskan SLIK bukan satu-satunya dasar keputusan."
    ],
    contoh: "SLIK OJK memuat riwayat seluruh fasilitas kredit debitur: plafon, baki debet, kolektibilitas 1 sampai 5, dan tunggakan di seluruh lembaga keuangan. Yang saya perhatikan pertama adalah kolektibilitas terburuk dan trennya: kolektibilitas 3 ke atas atau pola yang memburuk adalah sinyal merah. Saya juga melihat jumlah kreditur untuk mendeteksi over-leverage dan membandingkan total kewajiban dengan kapasitas usahanya. Namun SLIK hanya mencatat masa lalu formal, sehingga saya tetap memverifikasi kondisi terkini lewat rekening koran dan kunjungan langsung sebelum menyimpulkan."
  },
  {
    id: "W-23",
    kategori: "User",
    pertanyaan: "Jelaskan penggolongan kualitas aset atau kolektibilitas kredit.",
    tips: [
      "Hafalkan 5 golongan: 1 Lancar, 2 DPK, 3 Kurang Lancar, 4 Diragukan, 5 Macet.",
      "Kaitkan dengan POJK 40/2019 tentang kualitas aset.",
      "Sebutkan implikasi: NPL dihitung dari kolektibilitas 3 sampai 5."
    ],
    contoh: "Berdasarkan POJK 40/2019 tentang kualitas aset, kredit digolongkan menjadi lima kolektibilitas: 1 Lancar, 2 Dalam Perhatian Khusus, 3 Kurang Lancar, 4 Diragukan, dan 5 Macet. Penggolongan didasarkan pada ketepatan pembayaran dengan tolok ukur hari keterlambatan serta prospek usaha debitur. Kredit dengan kolektibilitas 3, 4, dan 5 dikategorikan sebagai Non-Performing Loan yang memengaruhi rasio NPL bank. Bagi analis, menjaga agar debitur binaannya tidak turun kolektibilitas adalah bagian dari tanggung jawab monitoring."
  },
  {
    id: "W-24",
    kategori: "User",
    pertanyaan: "Jelaskan produk kredit Bank Sumsel Babel yang Anda ketahui.",
    tips: [
      "Sebutkan KSG, KUR, dan Kredit Investasi beserta sasarannya.",
      "Tunjukkan pemahaman perbedaan peruntukan: konsumtif versus produktif.",
      "Kaitkan dengan peran analis di masing-masing segmen."
    ],
    contoh: "Setahu saya, Bank Sumsel Babel memiliki KSG atau Kredit Serba Guna untuk kebutuhan konsumtif seperti karyawan, KUR untuk membantu permodalan UMKM dengan skema penjaminan pemerintah, dan Kredit Investasi untuk pembiayaan barang modal usaha. Ketiganya memiliki karakter risiko berbeda: KSG mengandalkan penghasilan tetap, KUR mengandalkan kelayakan usaha mikro dan kecil, dan Kredit Investasi membutuhkan analisis proyek jangka panjang. Sebagai analis, saya harus menyesuaikan kedalaman analisis dengan karakteristik masing-masing produk tersebut."
  }
];

const GLOSARIUM = [
  { istilah: "Administrasi Kredit", definisi: "Seluruh kegiatan pencatatan, pengarsipan, dan penatausahaan dokumen kredit sejak pengajuan hingga pelunasan, termasuk pengikatan agunan." },
  { istilah: "Agunan", definisi: "Jaminan kebendaan maupun non-kebendaan yang diserahkan debitur sebagai sumber pembayaran kedua apabila kredit bermasalah." },
  { istilah: "Agunan Pokok", definisi: "Agunan utama yang menjadi dasar pemberian kredit, umumnya berupa objek yang dibiayai atau harta utama debitur." },
  { istilah: "Agunan Tambahan", definisi: "Agunan pelengkap di luar agunan pokok untuk memperkuat coverage apabila nilai agunan pokok belum mencukupi." },
  { istilah: "Amortisasi", definisi: "Pelunasan utang secara bertahap melalui angsuran berkala yang terdiri dari pokok dan bunga hingga lunas." },
  { istilah: "Analis Kredit", definisi: "Pejabat bank yang bertugas menilai kelayakan calon debitur dan memberikan rekomendasi persetujuan atau penolakan kredit secara objektif." },
  { istilah: "Anuitas", definisi: "Skema angsuran dengan jumlah pembayaran tetap setiap periode, di mana porsi bunga menurun dan porsi pokok meningkat seiring waktu." },
  { istilah: "APU-PPT", definisi: "Anti Pencucian Uang dan Pencegahan Pendanaan Terorisme; kewajiban bank mengenali nasabah dan melaporkan transaksi mencurigakan, diatur dalam POJK 8/2023." },
  { istilah: "Arus Kas (Cash Flow)", definisi: "Aliran kas masuk dan keluar dari kegiatan usaha debitur; menjadi dasar utama menilai kemampuan membayar kredit." },
  { istilah: "Aset Produktif", definisi: "Penanaman dana bank yang menghasilkan pendapatan, seperti kredit, surat berharga, dan penempatan antarbank." },
  { istilah: "Audit Internal", definisi: "Fungsi pengawasan independen di dalam bank yang menilai kecukupan pengendalian internal, termasuk proses perkreditan." },
  { istilah: "Bank Pembangunan Daerah (BPD)", definisi: "Bank milik pemerintah daerah yang berfungsi mendorong pembangunan ekonomi daerah; Bank Sumsel Babel adalah BPD milik Pemprov Sumsel dan Kepulauan Babel." },
  { istilah: "BI FAST", definisi: "Sistem pembayaran ritel nasional Bank Indonesia yang memungkinkan transfer antarbank secara real-time dengan biaya murah." },
  { istilah: "BI Rate", definisi: "Suku bunga acuan Bank Indonesia yang menjadi sinyal arah kebijakan moneter dan memengaruhi suku bunga kredit perbankan." },
  { istilah: "BMPK (Batas Maksimum Pemberian Kredit)", definisi: "Batas maksimum penyediaan dana bank kepada satu debitur atau grup untuk membatasi konsentrasi risiko, dikenal juga sebagai legal lending limit." },
  { istilah: "BOPO", definisi: "Rasio Beban Operasional terhadap Pendapatan Operasional; semakin rendah semakin efisien. Rumus: beban operasional dibagi pendapatan operasional." },
  { istilah: "Bunga Efektif", definisi: "Metode perhitungan bunga berdasarkan sisa pokok pinjaman, sehingga total bunga lebih kecil dibanding bunga flat." },
  { istilah: "Bunga Flat", definisi: "Metode perhitungan bunga berdasarkan pokok awal pinjaman selama tenor, sehingga angsuran bunga tetap setiap periode." },
  { istilah: "CAR / KPMM", definisi: "Capital Adequacy Ratio atau Kewajiban Penyediaan Modal Minimum; rasio modal bank terhadap aset tertimbang menurut risiko, diatur dalam POJK 11/2016." },
  { istilah: "CKPN (Cadangan Kerugian Penurunan Nilai)", definisi: "Cadangan yang dibentuk bank untuk mengantisipasi potensi kerugian atas aset produktif, termasuk kredit bermasalah." },
  { istilah: "Credit Scoring", definisi: "Penilaian kuantitatif atas kelayakan kredit calon debitur menggunakan skor berdasarkan data historis dan karakteristik nasabah." },
  { istilah: "Current Ratio", definisi: "Rasio likuiditas jangka pendek: aset lancar dibagi kewajiban lancar; menunjukkan kemampuan membayar utang jangka pendek." },
  { istilah: "Dana Pihak Ketiga (DPK)", definisi: "Dana yang dihimpun bank dari masyarakat berupa tabungan, giro, dan deposito; menjadi sumber utama penyaluran kredit." },
  { istilah: "DAR (Debt to Asset Ratio)", definisi: "Rasio total utang terhadap total aset; mengukur seberapa besar aset perusahaan dibiayai oleh utang." },
  { istilah: "Debitur", definisi: "Pihak yang menerima fasilitas kredit atau pembiayaan dari bank dan berkewajiban membayar kembali beserta bunganya." },
  { istilah: "Deposito", definisi: "Simpanan berjangka dengan tenor tertentu yang hanya dapat dicairkan sesuai jangka waktu; contoh produk BSB adalah Depati atau Deposito Tanpa Penalti." },
  { istilah: "DER (Debt to Equity Ratio)", definisi: "Rasio total utang terhadap modal sendiri; mengukur tingkat leverage perusahaan. Semakin tinggi semakin berisiko." },
  { istilah: "Diversifikasi", definisi: "Penyebaran portofolio kredit ke berbagai sektor, wilayah, dan segmen untuk mengurangi konsentrasi risiko." },
  { istilah: "DPD (Days Past Due)", definisi: "Jumlah hari keterlambatan pembayaran kewajiban debitur; menjadi dasar penentuan kolektibilitas kredit." },
  { istilah: "DSCR (Debt Service Coverage Ratio)", definisi: "Rasio kemampuan membayar utang: laba operasi atau arus kas dibagi total kewajiban utang (pokok plus bunga); sehat umumnya di atas 1,2." },
  { istilah: "Due Diligence", definisi: "Pemeriksaan mendalam atas legalitas, keuangan, dan reputasi calon debitur sebelum kredit diputus." },
  { istilah: "Eksposur Kredit", definisi: "Total nilai penyaluran dana bank yang berisiko tidak kembali, mencakup baki debet dan komitmen yang belum ditarik." },
  { istilah: "Ekuitas", definisi: "Modal sendiri perusahaan, yaitu selisih antara total aset dan total utang; menjadi penyebut dalam rasio DER dan ROE." },
  { istilah: "Fasilitas Kredit", definisi: "Layanan penyediaan dana oleh bank kepada debitur dalam bentuk plafon tertentu dengan syarat dan jangka waktu yang disepakati." },
  { istilah: "Fidusia", definisi: "Pengalihan hak kepemilikan atas benda bergerak sebagai jaminan utang tanpa memindahkan penguasaan fisik barangnya, misalnya kendaraan dan mesin." },
  { istilah: "Giro", definisi: "Simpanan yang penarikannya dapat dilakukan dengan cek atau bilyet giro; contoh produk BSB adalah Giro Demang." },
  { istilah: "GPM (Gross Profit Margin)", definisi: "Rasio laba kotor terhadap penjualan; mengukur efisiensi produksi atau margin dasar usaha debitur." },
  { istilah: "GWM (Giro Wajib Minimum)", definisi: "Dana minimum yang wajib dipelihara bank dalam rekening giro di Bank Indonesia sebagai instrumen pengendalian moneter." },
  { istilah: "Haircut", definisi: "Potongan atas nilai agunan untuk menentukan nilai yang diakui bank, sebagai bantalan apabila agunan harus dilikuidasi." },
  { istilah: "Hak Tanggungan", definisi: "Hak jaminan atas tanah beserta benda yang berkaitan dengannya untuk pelunasan utang tertentu, memberikan kedudukan diutamakan bagi kreditur." },
  { istilah: "Kolektibilitas", definisi: "Penggolongan kualitas kredit menjadi 1 Lancar, 2 Dalam Perhatian Khusus, 3 Kurang Lancar, 4 Diragukan, dan 5 Macet menurut POJK 40/2019." },
  { istilah: "Kredit", definisi: "Penyediaan uang atau tagihan berdasarkan kesepakatan pinjam-meminjam yang mewajibkan peminjam melunasi setelah jangka waktu tertentu dengan bunga." },
  { istilah: "Kredit Investasi", definisi: "Kredit jangka menengah atau panjang untuk membiayai barang modal seperti mesin, bangunan pabrik, dan perluasan usaha." },
  { istilah: "Kredit Konsumtif", definisi: "Kredit untuk kebutuhan konsumsi pribadi, misalnya KSG atau Kredit Serba Guna, yang sumber pembayarannya dari penghasilan tetap." },
  { istilah: "Kredit Modal Kerja", definisi: "Kredit jangka pendek untuk membiayai kebutuhan operasional usaha seperti pembelian bahan baku dan piutang dagang." },
  { istilah: "Kredit Produktif", definisi: "Kredit yang disalurkan untuk kegiatan usaha yang menghasilkan pendapatan, mencakup kredit modal kerja dan kredit investasi." },
  { istilah: "Kredit Serba Guna (KSG)", definisi: "Produk kredit konsumtif Bank Sumsel Babel untuk berbagai kebutuhan, umumnya dengan sumber pembayaran dari penghasilan tetap debitur." },
  { istilah: "Kualitas Aset", definisi: "Penilaian atas kondisi penanaman dana bank berdasarkan prospek usaha, kinerja debitur, dan kemampuan membayar, diatur dalam POJK 40/2019." },
  { istilah: "KUR (Kredit Usaha Rakyat)", definisi: "Kredit bersubsidi pemerintah untuk UMKM dengan suku bunga rendah dan penjaminan, disalurkan oleh bank termasuk BSB." },
  { istilah: "LDR (Loan to Deposit Ratio)", definisi: "Rasio total kredit terhadap dana pihak ketiga; mengukur fungsi intermediasi sekaligus tekanan likuiditas bank." },
  { istilah: "Likuidasi", definisi: "Penjualan agunan atau aset untuk memperoleh dana tunai, umumnya dilakukan saat debitur gagal bayar." },
  { istilah: "Likuiditas", definisi: "Kemampuan perusahaan atau bank memenuhi kewajiban jangka pendeknya dengan aset lancar yang tersedia." },
  { istilah: "Limit Kredit", definisi: "Batas maksimum penarikan fasilitas kredit yang disetujui bank untuk seorang debitur dalam jangka waktu tertentu." },
  { istilah: "LTV (Loan to Value)", definisi: "Rasio plafon kredit terhadap nilai agunan; semakin rendah semakin aman karena bantalan agunan lebih besar." },
  { istilah: "Memorandum Analisis Kredit (MAK)", definisi: "Dokumen analisis tertulis berisi penilaian kelayakan debitur, struktur fasilitas yang diusulkan, dan rekomendasi untuk komite kredit." },
  { istilah: "Modal Kerja", definisi: "Dana yang digunakan untuk membiayai operasional harian perusahaan, dihitung dari aset lancar dikurangi kewajiban lancar." },
  { istilah: "Monitoring Kredit", definisi: "Pemantauan berkala atas kinerja debitur dan kolektibilitas kredit setelah pencairan untuk mendeteksi masalah sejak dini." },
  { istilah: "Nasabah", definisi: "Pihak yang menggunakan jasa bank, baik sebagai penyimpan dana maupun penerima fasilitas kredit." },
  { istilah: "NIM (Net Interest Margin)", definisi: "Rasio pendapatan bunga bersih terhadap rata-rata aset produktif; mengukur kemampuan bank menghasilkan margin dari kegiatan intermediasi." },
  { istilah: "NPL (Non-Performing Loan)", definisi: "Rasio kredit bermasalah (kolektibilitas 3 sampai 5) terhadap total kredit; indikator utama kualitas portofolio kredit bank." },
  { istilah: "NPM (Net Profit Margin)", definisi: "Rasio laba bersih terhadap penjualan; mengukur kemampuan perusahaan menghasilkan laba dari pendapatannya." },
  { istilah: "OJK (Otoritas Jasa Keuangan)", definisi: "Lembaga independen yang mengatur dan mengawasi seluruh kegiatan jasa keuangan di Indonesia, termasuk perbankan." },
  { istilah: "On the Spot (OTS)", definisi: "Kunjungan langsung analis ke lokasi usaha dan agunan debitur untuk memverifikasi kondisi sebenarnya di lapangan." },
  { istilah: "Plafon Kredit", definisi: "Jumlah maksimum kredit yang disetujui bank untuk debitur, menjadi batas atas penarikan fasilitas." },
  { istilah: "Prinsip 5C", definisi: "Lima pilar penilaian kredit: Character, Capacity, Capital, Collateral, dan Condition of Economy." },
  { istilah: "Prinsip 7P", definisi: "Perluasan analisis kredit: Personality, Party, Purpose, Prospect, Payment, Profitability, dan Protection." },
  { istilah: "Quick Ratio", definisi: "Rasio likuiditas yang lebih ketat dari current ratio: (aset lancar dikurangi persediaan) dibagi kewajiban lancar." },
  { istilah: "Reconditioning", definisi: "Perubahan sebagian syarat kredit seperti penurunan suku bunga atau pengurangan tunggakan bunga dalam rangka penyelamatan kredit." },
  { istilah: "Rekening Koran", definisi: "Catatan mutasi rekening bank nasabah yang dianalisis untuk menilai pola arus kas dan kebiasaan pembayaran debitur." },
  { istilah: "Rescheduling", definisi: "Penjadwalan ulang jangka waktu kredit, misalnya perpanjangan tenor atau penundaan pembayaran pokok, untuk debitur yang kesulitan sementara." },
  { istilah: "Restrukturisasi Kredit", definisi: "Upaya perbaikan kredit bermasalah melalui rescheduling, reconditioning, atau restructuring sesuai ketentuan yang berlaku." },
  { istilah: "RIM (Rasio Intermediasi Makroprudensial)", definisi: "Rasio makroprudensial Bank Indonesia yang menggantikan LDR sebagai acuan fungsi intermediasi perbankan." },
  { istilah: "Risiko Kredit", definisi: "Risiko kerugian akibat debitur gagal memenuhi kewajibannya sesuai perjanjian; risiko utama yang dikelola analis kredit." },
  { istilah: "ROA (Return on Assets)", definisi: "Rasio laba terhadap total aset; mengukur efisiensi perusahaan atau bank dalam menggunakan asetnya." },
  { istilah: "ROE (Return on Equity)", definisi: "Rasio laba terhadap modal sendiri; mengukur tingkat pengembalian bagi pemilik modal." },
  { istilah: "SLIK (Sistem Layanan Informasi Keuangan)", definisi: "Sistem informasi OJK berisi riwayat kredit debitur di seluruh lembaga keuangan, pengganti BI Checking." },
  { istilah: "Suku Bunga Acuan", definisi: "Suku bunga yang ditetapkan bank sentral sebagai rujukan penetapan suku bunga simpanan dan kredit perbankan." },
  { istilah: "Tabungan", definisi: "Simpanan yang penarikannya dapat dilakukan sesuai syarat tertentu; contoh produk BSB adalah Tabungan Pesirah dan Simpeda." },
  { istilah: "Tenor", definisi: "Jangka waktu fasilitas kredit sejak pencairan hingga jatuh tempo pelunasan seluruh kewajiban." },
  { istilah: "Write-off (Hapus Buku)", definisi: "Penghapusan kredit macet dari pembukuan bank setelah seluruh upaya penagihan gagal, tanpa menghapus hak tagih secara hukum." }
];

const FLASHCARD = [
  // ---------- dasar-perbankan (12) ----------
  { depan: "Apa definisi bank menurut UU No. 10 Tahun 1998?", belakang: "Badan usaha yang menghimpun dana dari masyarakat dalam bentuk simpanan dan menyalurkannya dalam bentuk kredit atau bentuk lain untuk meningkatkan taraf hidup rakyat.", modul: "dasar-perbankan" },
  { depan: "Sebutkan tiga fungsi utama bank.", belakang: "Menghimpun dana (funding), menyalurkan dana (lending), dan memberikan jasa bank lainnya seperti transfer dan kliring.", modul: "dasar-perbankan" },
  { depan: "Apa status Bank Sumsel Babel?", belakang: "BUMD milik Pemerintah Provinsi Sumatera Selatan dan Kepulauan Bangka Belitung, berdiri 6 November 1957.", modul: "dasar-perbankan" },
  { depan: "Di mana kantor pusat Bank Sumsel Babel?", belakang: "Jl. Gubernur H. Ahmad Bastari No. 7, Palembang.", modul: "dasar-perbankan" },
  { depan: "Apa visi Bank Sumsel Babel?", belakang: "Menjadi Bank terkemuka dan terpercaya dengan kinerja unggul berbasis layanan digital.", modul: "dasar-perbankan" },
  { depan: "Apa kepanjangan budaya BSB PACAK?", belakang: "Profesional, Amanah, Customer Focus, Agility, Kolaboratif.", modul: "dasar-perbankan" },
  { depan: "Berapa nomor call center Bank Sumsel Babel?", belakang: "1500711.", modul: "dasar-perbankan" },
  { depan: "Sebutkan produk simpanan Bank Sumsel Babel.", belakang: "Tabungan Pesirah, Simpeda, Depati (Deposito Tanpa Penalti), dan Giro Demang.", modul: "dasar-perbankan" },
  { depan: "Apa kepanjangan Depati?", belakang: "Deposito Tanpa Penalti, produk deposito Bank Sumsel Babel.", modul: "dasar-perbankan" },
  { depan: "Sebutkan tiga fungsi Bank Indonesia.", belakang: "Menetapkan dan melaksanakan kebijakan moneter, mengatur dan menjaga kelancaran sistem pembayaran, serta mengatur dan mengawasi bank (tugas pengawasan kini di OJK).", modul: "dasar-perbankan" },
  { depan: "Sampai berapa simpanan nasabah dijamin LPS?", belakang: "Maksimal Rp2 miliar per nasabah per bank, sepanjang memenuhi syarat penjaminan.", modul: "dasar-perbankan" },
  { depan: "Sebutkan produk pembiayaan Bank Sumsel Babel.", belakang: "KSG (Kredit Serba Guna), KUR, dan Kredit Investasi.", modul: "dasar-perbankan" },

  // ---------- regulasi-kepatuhan (12) ----------
  { depan: "Apa tugas utama OJK?", belakang: "Mengatur dan mengawasi kegiatan jasa keuangan, termasuk perbankan, pasar modal, dan industri keuangan non-bank, serta melindungi konsumen.", modul: "regulasi-kepatuhan" },
  { depan: "POJK 11/2016 mengatur tentang apa?", belakang: "Kewajiban Penyediaan Modal Minimum (KPMM) atau CAR bank umum.", modul: "regulasi-kepatuhan" },
  { depan: "POJK 40/2019 mengatur tentang apa?", belakang: "Penilaian kualitas aset bank umum, termasuk penggolongan kolektibilitas 1 sampai 5.", modul: "regulasi-kepatuhan" },
  { depan: "POJK 8/2023 mengatur tentang apa?", belakang: "Penerapan program APU-PPT (Anti Pencucian Uang dan Pencegahan Pendanaan Terorisme).", modul: "regulasi-kepatuhan" },
  { depan: "POJK 22/2023 mengatur tentang apa?", belakang: "Pelindungan konsumen dan masyarakat di sektor jasa keuangan.", modul: "regulasi-kepatuhan" },
  { depan: "Apa kepanjangan APU-PPT?", belakang: "Anti Pencucian Uang dan Pencegahan Pendanaan Terorisme.", modul: "regulasi-kepatuhan" },
  { depan: "Apa itu BMPK?", belakang: "Batas Maksimum Pemberian Kredit: batas penyediaan dana bank kepada satu debitur atau grup untuk membatasi konsentrasi risiko.", modul: "regulasi-kepatuhan" },
  { depan: "Apa itu SLIK OJK?", belakang: "Sistem Layanan Informasi Keuangan: database riwayat kredit debitur di seluruh lembaga keuangan, pengganti BI Checking.", modul: "regulasi-kepatuhan" },
  { depan: "Apa prinsip mengenal nasabah (KYC)?", belakang: "Kewajiban bank mengidentifikasi, memverifikasi, dan memantau profil serta transaksi nasabah untuk mencegah pencucian uang.", modul: "regulasi-kepatuhan" },
  { depan: "Apa itu rahasia bank?", belakang: "Kewajiban bank merahasiakan keterangan mengenai nasabah penyimpan dan simpanannya, kecuali dalam hal yang diizinkan undang-undang.", modul: "regulasi-kepatuhan" },
  { depan: "Apa itu GWM?", belakang: "Giro Wajib Minimum: dana minimum yang wajib dipelihara bank di rekening giro Bank Indonesia.", modul: "regulasi-kepatuhan" },
  { depan: "Apa itu RIM?", belakang: "Rasio Intermediasi Makroprudensial: rasio makroprudensial Bank Indonesia yang menjadi acuan fungsi intermediasi perbankan.", modul: "regulasi-kepatuhan" },

  // ---------- analisis-kredit (12) ----------
  { depan: "Sebutkan prinsip 5C.", belakang: "Character, Capacity, Capital, Collateral, Condition of Economy.", modul: "analisis-kredit" },
  { depan: "Sebutkan prinsip 7P.", belakang: "Personality, Party, Purpose, Prospect, Payment, Profitability, Protection.", modul: "analisis-kredit" },
  { depan: "Apa yang dinilai dari Character?", belakang: "Watak, integritas, dan reputasi calon debitur, misalnya riwayat SLIK dan rekam jejak usaha.", modul: "analisis-kredit" },
  { depan: "Apa yang dinilai dari Capacity?", belakang: "Kemampuan membayar dari arus kas usaha, umumnya diukur dengan DSCR.", modul: "analisis-kredit" },
  { depan: "Berapa DSCR yang umumnya dianggap sehat?", belakang: "Di atas 1,2 sampai 1,5; DSCR 1,1 berarti bantalan arus kas sangat tipis.", modul: "analisis-kredit" },
  { depan: "Sebutkan empat jenis pengikatan agunan.", belakang: "Hak Tanggungan (tanah/bangunan), fidusia (kendaraan/mesin/persediaan), gadai (deposito/tabungan), dan garansi.", modul: "analisis-kredit" },
  { depan: "Apa itu LTV?", belakang: "Loan to Value: rasio plafon kredit terhadap nilai agunan; semakin rendah semakin aman.", modul: "analisis-kredit" },
  { depan: "Apa itu MAK?", belakang: "Memorandum Analisis Kredit: dokumen tertulis berisi penilaian kelayakan dan rekomendasi untuk komite kredit.", modul: "analisis-kredit" },
  { depan: "Apa tujuan on the spot (OTS)?", belakang: "Memverifikasi secara langsung kondisi usaha, keberadaan, dan nilai agunan debitur di lapangan.", modul: "analisis-kredit" },
  { depan: "Apa sumber pembayaran utama kredit menurut prinsip kehati-hatian?", belakang: "Arus kas usaha debitur; agunan hanyalah sumber pembayaran kedua.", modul: "analisis-kredit" },
  { depan: "Apa itu KSG?", belakang: "Kredit Serba Guna: produk kredit konsumtif Bank Sumsel Babel dengan sumber pembayaran dari penghasilan tetap.", modul: "analisis-kredit" },
  { depan: "Apa itu KUR?", belakang: "Kredit Usaha Rakyat: kredit bersubsidi pemerintah untuk UMKM dengan bunga rendah dan skema penjaminan.", modul: "analisis-kredit" },

  // ---------- slik-rasio-hitungan (12) ----------
  { depan: "Rumus Current Ratio?", belakang: "Aset lancar dibagi kewajiban lancar.", modul: "slik-rasio-hitungan" },
  { depan: "Rumus Quick Ratio?", belakang: "(Aset lancar dikurangi persediaan) dibagi kewajiban lancar.", modul: "slik-rasio-hitungan" },
  { depan: "Rumus DER?", belakang: "Total utang dibagi total ekuitas (modal sendiri).", modul: "slik-rasio-hitungan" },
  { depan: "Rumus DSCR?", belakang: "Arus kas atau laba operasi dibagi total kewajiban utang (pokok plus bunga).", modul: "slik-rasio-hitungan" },
  { depan: "Rumus angsuran anuitas?", belakang: "A = P x r / (1 - (1 + r)^-n); A angsuran, P pokok, r bunga per periode, n jumlah periode.", modul: "slik-rasio-hitungan" },
  { depan: "Rumus bunga flat per bulan?", belakang: "Bunga = pokok awal x suku bunga tahunan x tenor (tahun); angsuran = (pokok + total bunga) / jumlah bulan.", modul: "slik-rasio-hitungan" },
  { depan: "Apa beda bunga efektif dengan bunga flat?", belakang: "Bunga efektif dihitung dari sisa pokok sehingga total bunga lebih kecil; bunga flat dihitung dari pokok awal.", modul: "slik-rasio-hitungan" },
  { depan: "Sebutkan lima golongan kolektibilitas.", belakang: "1 Lancar, 2 Dalam Perhatian Khusus, 3 Kurang Lancar, 4 Diragukan, 5 Macet.", modul: "slik-rasio-hitungan" },
  { depan: "Rumus NPL?", belakang: "Kredit bermasalah (kolektibilitas 3-5) dibagi total kredit, dikali 100%.", modul: "slik-rasio-hitungan" },
  { depan: "Rumus CAR?", belakang: "Modal bank dibagi Aset Tertimbang Menurut Risiko (ATMR), dikali 100%.", modul: "slik-rasio-hitungan" },
  { depan: "Rumus LDR?", belakang: "Total kredit dibagi Dana Pihak Ketiga (DPK), dikali 100%.", modul: "slik-rasio-hitungan" },
  { depan: "Rumus BOPO?", belakang: "Beban operasional dibagi pendapatan operasional, dikali 100%; semakin rendah semakin efisien.", modul: "slik-rasio-hitungan" },

  // ---------- risiko-kesehatan-bank (12) ----------
  { depan: "Sebutkan delapan risiko yang wajib dikelola bank menurut POJK.", belakang: "Risiko kredit, pasar, likuiditas, operasional, hukum, reputasi, strategik, dan kepatuhan.", modul: "risiko-kesehatan-bank" },
  { depan: "Apa itu risiko kredit?", belakang: "Risiko kerugian akibat debitur gagal memenuhi kewajibannya sesuai perjanjian kredit.", modul: "risiko-kesehatan-bank" },
  { depan: "Apa itu risiko likuiditas?", belakang: "Risiko bank tidak mampu memenuhi kewajiban jangka pendeknya, misalnya penarikan dana nasabah besar-besaran.", modul: "risiko-kesehatan-bank" },
  { depan: "Apa itu risiko operasional?", belakang: "Risiko kerugian akibat kegagalan proses internal, kesalahan manusia, kegagalan sistem, atau kejadian eksternal.", modul: "risiko-kesehatan-bank" },
  { depan: "Apa itu risiko pasar?", belakang: "Risiko kerugian akibat perubahan suku bunga, nilai tukar, atau harga pasar lainnya.", modul: "risiko-kesehatan-bank" },
  { depan: "Apa itu risiko reputasi?", belakang: "Risiko kerugian akibat menurunnya kepercayaan publik terhadap bank, misalnya karena pemberitaan negatif.", modul: "risiko-kesehatan-bank" },
  { depan: "Apa itu risiko strategik?", belakang: "Risiko kerugian akibat penetapan atau pelaksanaan strategi bank yang tidak tepat.", modul: "risiko-kesehatan-bank" },
  { depan: "Apa itu risiko hukum?", belakang: "Risiko kerugian akibat tuntutan hukum atau kelemahan aspek yuridis, misalnya pengikatan agunan yang cacat.", modul: "risiko-kesehatan-bank" },
  { depan: "Apa itu risiko kepatuhan?", belakang: "Risiko kerugian akibat bank tidak mematuhi peraturan perundang-undangan dan ketentuan yang berlaku.", modul: "risiko-kesehatan-bank" },
  { depan: "Berapa batas NPL yang umum dianggap sehat?", belakang: "Di bawah 5% untuk NPL gross; semakin rendah semakin baik kualitas portofolio kredit.", modul: "risiko-kesehatan-bank" },
  { depan: "Berapa KPMM minimum menurut POJK 11/2016?", belakang: "Minimum 8% untuk bank dengan peringkat komposit 1, dan lebih tinggi sesuai profil risiko bank.", modul: "risiko-kesehatan-bank" },
  { depan: "Sebutkan lima cara mitigasi risiko kredit.", belakang: "Analisis 5C yang ketat, agunan memadai dengan haircut, covenant dalam perjanjian, monitoring berkala, dan pencadangan CKPN.", modul: "risiko-kesehatan-bank" }
];

const RUMUS = [
  {
    nama: "Current Ratio",
    rumus: "Aset Lancar ÷ Kewajiban Lancar",
    keterangan: "Mengukur kemampuan membayar utang jangka pendek. Nilai di atas 1 berarti aset lancar cukup menutup kewajiban lancar.",
    contoh: "Aset lancar Rp500 juta dan kewajiban lancar Rp250 juta, maka Current Ratio = 500 ÷ 250 = 2,0 kali."
  },
  {
    nama: "Quick Ratio",
    rumus: "(Aset Lancar − Persediaan) ÷ Kewajiban Lancar",
    keterangan: "Uji likuiditas yang lebih ketat karena persediaan dianggap sulit dicairkan cepat.",
    contoh: "Aset lancar Rp500 juta, persediaan Rp150 juta, kewajiban lancar Rp250 juta, maka Quick Ratio = (500 − 150) ÷ 250 = 1,4 kali."
  },
  {
    nama: "DER (Debt to Equity Ratio)",
    rumus: "Total Utang ÷ Total Ekuitas",
    keterangan: "Mengukur leverage perusahaan. Semakin tinggi, semakin besar ketergantungan pada utang dan semakin berisiko.",
    contoh: "Total utang Rp700 juta dan ekuitas Rp200 juta, maka DER = 700 ÷ 200 = 3,5 kali (sangat tinggi)."
  },
  {
    nama: "DAR (Debt to Asset Ratio)",
    rumus: "Total Utang ÷ Total Aset",
    keterangan: "Mengukur porsi aset yang dibiayai utang. Nilai 0,6 berarti 60 persen aset dibiayai utang.",
    contoh: "Total utang Rp600 juta dan total aset Rp1.000 juta, maka DAR = 600 ÷ 1.000 = 0,6 atau 60%."
  },
  {
    nama: "ROA (Return on Assets)",
    rumus: "Laba Bersih ÷ Total Aset × 100%",
    keterangan: "Mengukur efisiensi penggunaan aset dalam menghasilkan laba.",
    contoh: "Laba bersih Rp50 juta dan total aset Rp1.000 juta, maka ROA = 50 ÷ 1.000 × 100% = 5%."
  },
  {
    nama: "ROE (Return on Equity)",
    rumus: "Laba Bersih ÷ Total Ekuitas × 100%",
    keterangan: "Mengukur tingkat pengembalian bagi pemilik modal.",
    contoh: "Laba bersih Rp50 juta dan ekuitas Rp250 juta, maka ROE = 50 ÷ 250 × 100% = 20%."
  },
  {
    nama: "NPM (Net Profit Margin)",
    rumus: "Laba Bersih ÷ Penjualan × 100%",
    keterangan: "Mengukur kemampuan menghasilkan laba dari setiap rupiah penjualan.",
    contoh: "Laba bersih Rp80 juta dan penjualan Rp1.000 juta, maka NPM = 80 ÷ 1.000 × 100% = 8%."
  },
  {
    nama: "GPM (Gross Profit Margin)",
    rumus: "(Penjualan − HPP) ÷ Penjualan × 100%",
    keterangan: "Mengukur margin dasar usaha sebelum beban operasional.",
    contoh: "Penjualan Rp1.000 juta dan HPP Rp700 juta, maka GPM = (1.000 − 700) ÷ 1.000 × 100% = 30%."
  },
  {
    nama: "DSCR (Debt Service Coverage Ratio)",
    rumus: "Arus Kas Operasi ÷ (Angsuran Pokok + Bunga)",
    keterangan: "Rasio kunci analis kredit. Sehat umumnya di atas 1,2 sampai 1,5; di bawah 1 berarti arus kas tidak cukup membayar utang.",
    contoh: "Arus kas operasi Rp120 juta per tahun dan kewajiban utang Rp100 juta, maka DSCR = 120 ÷ 100 = 1,2 kali."
  },
  {
    nama: "Perputaran Piutang (Receivable Turnover)",
    rumus: "Penjualan Kredit ÷ Rata-rata Piutang",
    keterangan: "Mengukur seberapa cepat piutang tertagih. Semakin tinggi semakin baik; turunnya rasio bisa menandakan masalah penagihan.",
    contoh: "Penjualan kredit Rp1.200 juta dan rata-rata piutang Rp200 juta, maka perputaran piutang = 6 kali per tahun (rata-rata tertagih tiap 2 bulan)."
  },
  {
    nama: "Perputaran Persediaan (Inventory Turnover)",
    rumus: "HPP ÷ Rata-rata Persediaan",
    keterangan: "Mengukur seberapa cepat persediaan terjual. Rasio rendah bisa menandakan penumpukan stok.",
    contoh: "HPP Rp900 juta dan rata-rata persediaan Rp150 juta, maka perputaran persediaan = 6 kali per tahun."
  },
  {
    nama: "Angsuran Anuitas",
    rumus: "A = P × r ÷ (1 − (1 + r)^−n)",
    keterangan: "A = angsuran per periode, P = pokok pinjaman, r = bunga per periode, n = jumlah periode. Angsuran tetap, porsi bunga menurun seiring waktu.",
    contoh: "Pinjaman Rp100 juta, bunga 1% per bulan, tenor 12 bulan: A = 100 × 0,01 ÷ (1 − 1,01^−12) ≈ Rp8,88 juta per bulan."
  },
  {
    nama: "Bunga Flat",
    rumus: "Total Bunga = Pokok × Suku Bunga Tahunan × Tenor (tahun); Angsuran = (Pokok + Total Bunga) ÷ Jumlah Bulan",
    keterangan: "Bunga dihitung dari pokok awal, sehingga total bunga lebih besar dibanding metode efektif dengan suku bunga nominal yang sama.",
    contoh: "Pinjaman Rp120 juta, bunga flat 12% per tahun, tenor 1 tahun: total bunga Rp14,4 juta, angsuran = (120 + 14,4) ÷ 12 = Rp11,2 juta per bulan."
  },
  {
    nama: "Bunga Efektif",
    rumus: "Bunga Periode = Sisa Pokok × Suku Bunga per Periode",
    keterangan: "Bunga dihitung dari sisa pokok yang menurun, sehingga total bunga lebih kecil dan lebih adil dibanding bunga flat.",
    contoh: "Pinjaman Rp120 juta, bunga efektif 1% per bulan: bulan pertama bunga = 120 × 1% = Rp1,2 juta; bulan berikutnya dihitung dari sisa pokok setelah dikurangi angsuran pokok."
  },
  {
    nama: "CAR / KPMM",
    rumus: "Modal Bank ÷ ATMR × 100%",
    keterangan: "ATMR adalah Aset Tertimbang Menurut Risiko. Minimum 8% untuk bank peringkat komposit 1 menurut POJK 11/2016, lebih tinggi sesuai profil risiko.",
    contoh: "Modal Rp200 miliar dan ATMR Rp2.000 miliar, maka CAR = 200 ÷ 2.000 × 100% = 10%."
  },
  {
    nama: "LDR (Loan to Deposit Ratio)",
    rumus: "Total Kredit ÷ Dana Pihak Ketiga × 100%",
    keterangan: "Mengukur fungsi intermediasi. Terlalu tinggi menekan likuiditas, terlalu rendah berarti dana menganggur.",
    contoh: "Total kredit Rp8 triliun dan DPK Rp10 triliun, maka LDR = 8 ÷ 10 × 100% = 80%."
  },
  {
    nama: "BOPO",
    rumus: "Beban Operasional ÷ Pendapatan Operasional × 100%",
    keterangan: "Mengukur efisiensi operasional bank. Semakin rendah semakin efisien; umumnya bank sehat berada di bawah 85%.",
    contoh: "Beban operasional Rp850 miliar dan pendapatan operasional Rp1.000 miliar, maka BOPO = 85%."
  },
  {
    nama: "NIM (Net Interest Margin)",
    rumus: "Pendapatan Bunga Bersih ÷ Rata-rata Aset Produktif × 100%",
    keterangan: "Mengukur kemampuan bank menghasilkan margin dari kegiatan intermediasi.",
    contoh: "Pendapatan bunga bersih Rp400 miliar dan rata-rata aset produktif Rp10 triliun, maka NIM = 4%."
  },
  {
    nama: "NPL (Non-Performing Loan)",
    rumus: "Kredit Bermasalah (Kolektibilitas 3−5) ÷ Total Kredit × 100%",
    keterangan: "Indikator utama kualitas portofolio kredit. Batas sehat umumnya di bawah 5% untuk NPL gross.",
    contoh: "Kredit bermasalah Rp300 miliar dan total kredit Rp10 triliun, maka NPL = 300 ÷ 10.000 × 100% = 3%."
  }
];

const RINGKASAN = [
  {
    modul: "dasar-perbankan",
    judul: "Dasar Perbankan — Bacaan 5 Menit",
    poin: [
      "Bank adalah badan usaha yang menghimpun dana dari masyarakat dan menyalurkannya dalam bentuk kredit (UU No. 10 Tahun 1998).",
      "Tiga fungsi utama bank: menghimpun dana (funding), menyalurkan dana (lending), dan jasa bank lainnya.",
      "Bank Sumsel Babel adalah BUMD milik Pemprov Sumsel dan Kepulauan Babel, berdiri 6 November 1957, kantor pusat di Jl. Gubernur H. Ahmad Bastari No. 7 Palembang.",
      "Visi BSB: menjadi bank terkemuka dan terpercaya dengan kinerja unggul berbasis layanan digital; budaya kerja BSB PACAK (Profesional, Amanah, Customer Focus, Agility, Kolaboratif).",
      "Produk simpanan: Tabungan Pesirah, Simpeda, Depati (Deposito Tanpa Penalti), Giro Demang; produk pembiayaan: KSG (Kredit Serba Guna), KUR, Kredit Investasi.",
      "Bank berizin dan diawasi OJK dan Bank Indonesia, serta menjadi peserta penjaminan LPS; call center 1500711.",
      "LPS menjamin simpanan nasabah maksimal Rp2 miliar per nasabah per bank sepanjang memenuhi syarat penjaminan.",
      "Fungsi Bank Indonesia: kebijakan moneter, sistem pembayaran (termasuk BI FAST), dan stabilitas sistem keuangan.",
      "Analis kredit adalah garda depan kualitas aset: rekomendasinya menentukan sehat tidaknya portofolio kredit bank."
    ]
  },
  {
    modul: "regulasi-kepatuhan",
    judul: "Regulasi & Kepatuhan — Bacaan 5 Menit",
    poin: [
      "OJK mengatur dan mengawasi seluruh jasa keuangan termasuk perbankan; BI berfokus pada moneter, sistem pembayaran, dan makroprudensial.",
      "POJK 11/2016: Kewajiban Penyediaan Modal Minimum (KPMM/CAR), minimum 8% untuk bank peringkat komposit 1 dan lebih tinggi sesuai profil risiko.",
      "POJK 40/2019: penilaian kualitas aset; kredit digolongkan menjadi kolektibilitas 1 Lancar, 2 DPK, 3 Kurang Lancar, 4 Diragukan, 5 Macet.",
      "POJK 8/2023: penerapan program APU-PPT, termasuk kewajiban mengenal nasabah (KYC) dan melaporkan transaksi keuangan mencurigakan.",
      "POJK 22/2023: pelindungan konsumen dan masyarakat di sektor jasa keuangan.",
      "BMPK (legal lending limit) membatasi pemberian kredit ke satu debitur atau grup agar risiko terkonsentrasi.",
      "SLIK OJK adalah sumber resmi riwayat kredit debitur di seluruh lembaga keuangan; wajib dicek sebelum analisis.",
      "GWM dan RIM adalah instrumen Bank Indonesia untuk pengendalian moneter dan fungsi intermediasi.",
      "Pelanggaran kepatuhan berisiko sanksi administratif hingga pidana; analis wajib memahami dan mematuhi seluruh ketentuan."
    ]
  },
  {
    modul: "analisis-kredit",
    judul: "Analisis Kredit — Bacaan 5 Menit",
    poin: [
      "Prinsip 5C: Character, Capacity, Capital, Collateral, Condition; dilengkapi 7P: Personality, Party, Purpose, Prospect, Payment, Profitability, Protection.",
      "Sumber pembayaran utama adalah arus kas usaha debitur; agunan hanyalah sumber pembayaran kedua.",
      "Alur analisis: verifikasi dokumen dan legalitas, cek SLIK, analisis laporan keuangan dan rekening koran, on the spot, penilaian 5C dan rasio, lalu MAK.",
      "Rasio kunci: DSCR (sehat di atas 1,2), DER, current ratio, dan perputaran piutang atau persediaan.",
      "MAK (Memorandum Analisis Kredit) adalah dokumen resmi berisi penilaian dan rekomendasi untuk diputus komite kredit.",
      "Agunan umum: tanah atau bangunan (Hak Tanggungan), kendaraan atau mesin atau persediaan (fidusia), deposito (gadai); dinilai dari nilai pasar, nilai likuidasi, dan haircut.",
      "Account officer fokus pada pemasaran dan hubungan nasabah; analis kredit fokus pada penilaian risiko dan rekomendasi objektif.",
      "Keberanian menolak pengajuan yang tidak layak adalah kualitas terpenting analis kredit.",
      "Produk BSB: KSG untuk konsumtif berpenghasilan tetap, KUR untuk UMKM, Kredit Investasi untuk barang modal; kedalaman analisis disesuaikan karakternya."
    ]
  },
  {
    modul: "slik-rasio-hitungan",
    judul: "SLIK, Rasio & Hitungan — Bacaan 5 Menit",
    poin: [
      "SLIK memuat plafon, baki debet, kolektibilitas 1-5, dan tunggakan debitur di seluruh lembaga keuangan.",
      "Fokus baca SLIK: kolektibilitas terburuk dan trennya, jumlah kreditur (deteksi over-leverage), dan pola pembayaran.",
      "Kolektibilitas 3 ke atas atau tren memburuk adalah sinyal merah; NPL dihitung dari kolektibilitas 3, 4, dan 5.",
      "Rasio likuiditas: Current Ratio = aset lancar dibagi kewajiban lancar; Quick Ratio mengeluarkan persediaan.",
      "Rasio leverage: DER = total utang dibagi ekuitas; DAR = total utang dibagi total aset; keduanya tinggi berarti berisiko.",
      "Rasio profitabilitas: GPM, NPM, ROA, ROE; gunakan untuk menilai kualitas laba usaha debitur.",
      "DSCR = arus kas operasi dibagi kewajiban utang; angka 1,1 berarti bantalan sangat tipis.",
      "Anuitas: angsuran tetap dengan rumus A = P x r / (1 - (1+r)^-n); bunga flat dihitung dari pokok awal, bunga efektif dari sisa pokok.",
      "Rasio kesehatan bank: CAR = modal dibagi ATMR; LDR = kredit dibagi DPK; BOPO = beban dibagi pendapatan operasional; NIM = pendapatan bunga bersih dibagi aset produktif."
    ]
  },
  {
    modul: "risiko-kesehatan-bank",
    judul: "Risiko & Kesehatan Bank — Bacaan 5 Menit",
    poin: [
      "Delapan risiko wajib dikelola bank: kredit, pasar, likuiditas, operasional, hukum, reputasi, strategik, dan kepatuhan.",
      "Risiko kredit adalah risiko utama analis: kerugian akibat debitur gagal memenuhi kewajiban.",
      "Mitigasi risiko kredit: analisis 5C ketat, agunan memadai dengan haircut, covenant, monitoring berkala, diversifikasi portofolio, dan CKPN.",
      "NPL sehat umumnya di bawah 5%; CAR minimum 8% sesuai POJK 11/2016 (dapat lebih tinggi sesuai profil risiko).",
      "Risiko likuiditas terkait kemampuan membayar kewajiban jangka pendek; dipantau antara lain lewat LDR.",
      "Risiko operasional berasal dari proses internal, manusia, sistem, dan kejadian eksternal; SOP yang disiplin adalah penangkalnya.",
      "Risiko hukum muncul dari kelemahan aspek yuridis, misalnya pengikatan agunan yang cacat sehingga tidak bisa dieksekusi.",
      "Risiko reputasi dan kepatuhan saling terkait: satu kasus fraud atau pelanggaran APU-PPT bisa merusak kepercayaan publik.",
      "Kesehatan bank dinilai dari permodalan, kualitas aset, rentabilitas, likuiditas, dan manajemen risiko; analis kredit berkontribusi langsung pada kualitas aset dan rentabilitas."
    ]
  },
  {
    modul: "studi-kasus",
    judul: "Studi Kasus — Bacaan 5 Menit",
    poin: [
      "Kasus 1, agunan besar arus kas lemah: tolak atau tunda; sumber pembayaran utama adalah arus kas, agunan hanya sumber kedua.",
      "Kasus 2, DSCR 1,1 dan DER 3,5: sinyal merah leverage tinggi dengan bantalan tipis; verifikasi ulang, stress test, atau tolak tanpa mitigasi kuat.",
      "Kasus 3, debitur menunggak: deteksi dini, hubungi dan pahami akar masalah, tawarkan rescheduling atau reconditioning, dokumentasikan, eksekusi agunan sebagai jalan terakhir.",
      "Kasus 4, kerabat minta diloloskan: tolak intervensi, perlakukan sesuai SOP, laporkan benturan kepentingan ke atasan.",
      "Kasus 5, SLIK menunjukkan kolektibilitas 2 dengan tren memburuk: gali penyebabnya, minta penjelasan dan bukti perbaikan sebelum melanjutkan analisis.",
      "Kasus 6, usaha komoditas (sawit/karet): lakukan stress test skenario harga turun dan pertimbangkan covenant pemeliharaan rasio.",
      "Kerangka jawab kasus: identifikasi masalah, terapkan prinsip (5C, arus kas utama), usulkan solusi bertahap, sebutkan mitigasi risiko.",
      "Selalu tutup dengan keputusan yang tegas: setuju dengan syarat, tunda dengan prasyarat, atau tolak dengan alasan."
    ]
  }
];

const CHECKLIST = [
  { item: "Dokumen identitas dan lamaran", detail: "Siapkan KTP, CV terbaru, ijazah dan transkrip, pas foto, serta surat lamaran; simpan salinan digital dan cetak dalam map rapi." },
  { item: "Riset profil Bank Sumsel Babel", detail: "Hafalkan fakta kunci: BUMD Sumsel dan Babel, berdiri 6 November 1957, kantor pusat Jl. Gubernur H. Ahmad Bastari No. 7 Palembang, visi, budaya BSB PACAK, produk Pesirah, Simpeda, Depati, Giro Demang, KSG, KUR, Kredit Investasi, call center 1500711." },
  { item: "Kuasai prinsip 5C dan 7P", detail: "Hafalkan kepanjangan tiap C dan P beserta contoh indikatornya; latih menjelaskan tanpa membaca catatan." },
  { item: "Kuasai rasio kunci", detail: "Hafalkan rumus dan interpretasi DSCR, DER, current ratio, quick ratio, NPL, CAR, LDR, dan BOPO; latih hitungan cepat." },
  { item: "Kuasai regulasi utama", detail: "Ingat isi pokok POJK 11/2016 (KPMM), POJK 40/2019 (kualitas aset dan kolektibilitas 1-5), POJK 8/2023 (APU-PPT), dan POJK 22/2023 (pelindungan konsumen)." },
  { item: "Latih jawaban wawancara HRD", detail: "Latih perkenalan diri 1-2 menit, alasan memilih BSB, kelebihan dan kekurangan, rencana 5 tahun, dan kesiapan penempatan dengan suara lantang." },
  { item: "Latih jawaban studi kasus user", detail: "Latih kasus agunan besar arus kas lemah, DSCR 1,1 dengan DER 3,5, debitur menunggak, dan konflik kepentingan menggunakan kerangka masalah-prinsip-solusi-keputusan." },
  { item: "Siapkan pertanyaan balik", detail: "Siapkan 2-3 pertanyaan cerdas, misalnya jenjang analis kredit, program pengembangan, dan tantangan penyaluran kredit sehat di wilayah kerja bank." },
  { item: "Pakaian formal dan rapi", detail: "Kenakan pakaian formal yang sopan dan nyaman; pastikan sudah disiapkan dan disetrika sehari sebelumnya." },
  { item: "Logistik lokasi dan waktu", detail: "Cek lokasi wawancara, rute, dan estimasi perjalanan; rencanakan tiba 30 menit lebih awal dan siapkan rencana cadangan transportasi." },
  { item: "Istirahat cukup malam sebelumnya", detail: "Tidur cukup agar fokus; hindari begadang menghafal materi di malam hari." },
  { item: "Sarapan dan perlengkapan pribadi", detail: "Sarapan secukupnya, bawa air minum, alat tulis, dan pastikan ponsel dalam mode senyap sebelum masuk ruangan." },
  { item: "Etika saat wawancara", detail: "Sapa pewawancara dengan sopan, jaga kontak mata, duduk tegap, jangan memotong pembicaraan, dan ucapkan terima kasih di akhir." },
  { item: "Evaluasi setelah wawancara", detail: "Catat pertanyaan yang sulit dijawab segera setelah selesai sebagai bahan perbaikan untuk tahapan berikutnya." }
];

const SUMBER = [
  { nama: "Website resmi Bank Sumsel Babel", url: "https://banksumselbabel.com/id/", tanggal: "2026-10-11", jenis: "resmi", catatan: "Profil, produk, dan kontak resmi bank." },
  { nama: "Karier Bank Sumsel Babel", url: "https://banksumselbabel.com/id/career", tanggal: "2026-10-11", jenis: "resmi", catatan: "Tahapan rekrutmen resmi: Pendaftaran, Seleksi Berkas, Wawancara HR dan user, Onboarding." },
  { nama: "Laporan Publikasi Bank Sumsel Babel", url: "https://banksumselbabel.com/id/laporan-publikasi", tanggal: "2026-10-11", jenis: "resmi", catatan: "Publikasi resmi bank untuk riset kinerja dan profil." },
  { nama: "Otoritas Jasa Keuangan (OJK)", url: "https://ojk.go.id/", tanggal: "2026-10-11", jenis: "resmi", catatan: "Regulasi perbankan: POJK 11/2016 (KPMM), POJK 40/2019 (kualitas aset), POJK 8/2023 (APU-PPT), POJK 22/2023 (pelindungan konsumen)." },
  { nama: "Bank Indonesia", url: "https://www.bi.go.id/", tanggal: "2026-10-11", jenis: "resmi", catatan: "Fungsi BI, kebijakan moneter, BI-FAST, GWM, dan RIM." },
  { nama: "Lembaga Penjamin Simpanan (LPS)", url: "https://lps.go.id/", tanggal: "2026-10-11", jenis: "resmi", catatan: "Penjaminan simpanan nasabah maksimal Rp2 miliar per nasabah per bank." },
  { nama: "Catatan pengalaman kandidat", url: "https://banksumselbabel.com/id/career", tanggal: "2026-10-11", jenis: "pengalaman", catatan: "Tidak ditemukan cerita pengalaman kandidat tes Bank Sumsel Babel yang terverifikasi di forum atau media sosial per 2026-10-11, jangan percaya klaim bocoran tes." }
];
