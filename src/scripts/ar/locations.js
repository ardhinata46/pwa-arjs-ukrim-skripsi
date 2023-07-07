let locations = [
  {
    id: 0,
    unit: {
      name: 'Unit I A',
      name_loca: 'Kapel/Auditorium UKRIM',
      loca: {
        latitude: -7.775223679917113,
        longitude: 110.44962914356081,
      },
      desc: 'Kapel/Auditorium UKRIM  berfungsi sebagai tempat untuk mengadakan berbagai acara penting ' +
        'di lingkungan kampus UKRIM. Fungsi utama auditorium UKRIM adalah sebagai tempat untuk mengadakan ' +
        'ibadah, kuliah umum, seminar, konferensi, dan berbagai acara lainnya yang melibatkan mahasiswa, ' +
        'dosen, staf, serta tamu undangan dari dalam dan luar kampus.'
    }
  },
  {
    id: 1,
    unit: {
      name: 'Unit I B',
      name_loca: 'Perpustakaan UKRIM',
      loca: {
        latitude: -7.775065408887494,
        longitude:  110.44973571275045,
      },
      desc: '<p>Perpustakaan kampus UKRIM berfungsi sebagai sumber informasi yang menyediakan akses kepada berbagai jenis bahan pustaka dan sumber daya digital untuk mendukung kegiatan akademik, penelitian, dan pembelajaran di lingkungan kampus. Selain itu, perpustakaan UKRIM juga berperan dalam mengembangkan keterampilan literasi informasi dan menyediakan ruang belajar yang nyaman serta menyimpan dan mengarsipkan karya akademik. Dengan fungsi-fungsi ini, perpustakaan kampus menjadi pusat pengetahuan yang mendukung pengembangan intelektual dan kemajuan akademik bagi mahasiswa, dosen, dan staf kampus.</p>'
    + '<p>Beberapa fasilitas yang ada di perpustakaan UKRIM meliputi:</p>'
      + '<p>1. Ruang Baca: Perpustakaan UKRIM menyediakan ruang baca yang nyaman dan tenang untuk mahasiswa dan pengunjung lainnya. Ruang ini dilengkapi dengan meja, kursi, dan pencahayaan yang memadai sehingga memungkinkan pengguna untuk membaca dan belajar dengan konsentrasi.</p>'
    + '<p>2. Koleksi Buku: Perpustakaan UKRIM memiliki koleksi buku yang beragam dan relevan dengan berbagai bidang studi. Koleksi ini mencakup buku teks, buku referensi, buku penelitian, dan buku-buku lainnya yang mendukung kegiatan akademik di kampus.</p>'
    + '<p>3. Komputer dan Akses Internet: Perpustakaan UKRIM menyediakan komputer dan akses internet bagi pengguna. Pengguna dapat menggunakan fasilitas ini untuk mencari informasi, mengakses sumber daya digital, atau melakukan penelitian online.</p>'
    }
  },
  {
    id: 2,
    unit: {
      name: 'Unit II A',
      name_loca: 'Fakultas Teknik Sipil',
      loca: {
        latitude: -7.775886550730363,
        longitude:  110.44916448063813,
      },
      room: {
        office: {
          name: 'Kantor Teknik Sipil',
          desc: '<p>Kantor Teknik Sipil adalah ruangan atau area administratif yang menjadi pusat operasional dan manajemen Fakultas Teknik UKRIM. Kantor Teknik Sipil berfungsi untuk koordinasi dan pengelolaan berbagai kegiatan akademik, administratif, dan organisasional yang terkait dengan Fakultas Teknik. Di kantor Teknik Sipil, terdapat staf administratif yang bertugas untuk melayani mahasiswa dan dosen.</p>'
          +
            '<p>Di kantor Teknik Sipil juga terdapat ruangan untuk dosen. Ruang dosen berfungsi sebagai tempat pribadi bagi dosen untuk bekerja, mempersiapkan materi kuliah dan memberikan bimbingan akademik kepada mahasiswa.</p>'
            +
            '<p>Di dalam kantor Teknik Sipil juga terdapat perpustakaan fakultas. Perpustakaan fakultas Teknik Sipil disediakan untuk mendukung kebutuhan belajar, penelitian, dan referensi akademik yang terkait dengan program studi Teknik Sipil di UKRIM. Perpustakaan ini menyediakan koleksi buku, jurnal ilmiah dan publikasi akademik yang relevan dengan studi dan penelitian dalam bidang Teknik Sipil.</p>'
        },
        classroom_1: {
          name: 'Ruangan II/A/3',
          desc: `<p>Ruang II/A/3 merupakan ruang kelas Fakultas Teknik yang digunakan untuk mengadakan pembelajaran atau perkuliahan secara tatap muka. Ruang kelas ini dilengkapi dengan kursi kuliah untuk mahasiswa, meja pengajar, papan tulis, proyektor, AC serta jaringan internet untuk mendukung kegiatan perkuliahan.</p>`
            +
            `<p><b>Kapasitas : 60 Orang</b></p>`
        },
        classroom_2: {
          name: 'Ruangan II/A/4',
          desc: `<p>Ruang II/A/4 merupakan ruang kelas Fakultas Teknik yang digunakan untuk mengadakan pembelajaran atau perkuliahan secara tatap muka. Ruang kelas ini dilengkapi dengan kursi kuliah untuk mahasiswa, meja pengajar, papan tulis, proyektor, AC serta jaringan internet untuk mendukung kegiatan perkuliahan.</p>`
            +
            `<p><b>Kapasitas : 60 Orang</b></p>`
        },
        classroom_3: {
          name: 'Lab. Teknik sipil (II/A/5)',
          desc: '<p>Laboratorium Teknik Sipil adalah laboratorium yang membantu mahasiswa program studi Teknik Sipil untuk mempelajari ilmu atau prinsip-prinsip teknik sipil. laboratorium ini digunakan pada praktikum dan penelitian. Laboratorium ini dilengkapi dengan peralatan dan instrumen yang diperlukan untuk mempelajari dan menguji berbagai aspek teknik sipil, seperti struktur bangunan, material konstruksi, mekanika tanah dan lain-lain.</p>'
          +
            '<p><b>Kapasitas : 25 Orang</b></p>'
        },
        classroom_4: {
          name: 'Ruangan II/A/6',
          desc: `<p>Ruang II/A/6 merupakan ruang kelas Fakultas Teknik yang digunakan untuk mengadakan pembelajaran atau perkuliahan secara tatap muka. Ruang kelas ini dilengkapi dengan kursi kuliah untuk mahasiswa, meja pengajar, papan tulis, proyektor, AC serta jaringan internet untuk mendukung kegiatan perkuliahan.</p>`
            +
            `<p><b>Kapasitas : 50 Orang</b></p>`
        }
      }
    }
  },
  {
    id: 3,
    unit: {
      name: 'Unit II B',
      name_loca: 'Asrama Mahasiswa',
      loca: {
        latitude: -7.775737674262963,
        longitude: 110.44860337598075,
      },

      desc: '<p>Asrama mahasiswa adalah fasilitas hunian untuk menampung mahasiswa yang terdiri dari enam unit, yang berada di lingkungan kampus UKRIM. Masing-masing unit berkapasitas 8-17 kamar. Masing-masing kamar berkapasitas 1-2 orang. Fasilitas yang ada di dalam kamar berupa 1 unit meja dan kursi serta 1 unit tempat tidur berukuran single dan sebuah pintu keluar kamar. masing-masing unit dilengkapi dengan ruang dapur, kamar mandi, tempat mencuci dan menjemur pakaian serta ruangan tamu sederhana.</p>'
       +
        '<p>Mengingat jumlahnya yang masih terbatas, asrama hanya diperuntukkan bagi mahasiswa beasiswa yang duduk pada tahun pertama perkuliahan selama 10 bulan. Hal itu menolong para mahasiswa yang baru datang dari daerah dan tidak memiliki keluarga/kenalan yang tinggal di kota Yogyakarta dan sekitarnya. Harga sewa kamarnya termasuk kategori lebih murah dan terjangkau bila dibandingkan dengan harga sewa kos di luar kampus. Pada masing-masing unit ditempatkan seorang kepala unit (mahasiswa senior) untuk mengelola situasi kondisi asrama, supaya para mahasiswa yang datang dari berbagai suku dapat hidup secara dinamis di suatu unit asrama tertentu.</p>'
        +
        `<p><b>Kapasitas : 102 Orang</b></p>`
    }
  },
  {
    id: 4,
    unit: {
      name: 'Unit III',
      name_loca: 'Gedung 3',
      loca: {
        latitude: -7.77466532474916,
        longitude:  110.4498367321775,
      },
      lantai_1: {
        name: 'Lantai I (Unit III A)',
        room: {
          fiskomOffice: {
            name: 'Kantor FISKOM',
            faculty: 'Fiskom',
            desc: 'Kantor Fiskom adalah ruangan atau area administratif yang menjadi pusat operasional dan manajemen Fakultas Sains dan Komputer UKRIM. Kantor Fiskom berfungsi untuk koordinasi dan pengelolaan berbagai kegiatan akademik, administratif, dan organisasional yang terkait dengan Fakultas Sains dan Komputer. Di kantor Fiskom, terdapat staf administratif yang bertugas untuk melayani mahasiswa dan dosen. Di kantor Fiskom juga terdapat ruangan untuk dosen. Ruang dosen berfungsi sebagai tempat pribadi bagi dosen untuk bekerja, mempersiapkan materi kuliah dan memberikan bimbingan akademik kepada mahasiswa.'
          },
          febiOffice: {
            name: 'Kantor FEBI',
            faculty: 'Febi',
            desc: 'Kantor Febi adalah ruangan atau area administratif yang menjadi pusat operasional dan manajemen Fakultas Fakultas Ekonomi dan Bisnis UKRIM. Kantor Febi berfungsi untuk koordinasi dan pengelolaan berbagai kegiatan akademik, administratif, dan organisasional yang terkait dengan Fakultas Ekonomi dan Bisnis. Di kantor Febi, terdapat staf administratif yang bertugas untuk melayani mahasiswa dan dosen. Di kantor Febi juga terdapat ruangan untuk dosen. Ruang dosen berfungsi sebagai tempat pribadi bagi dosen untuk bekerja, mempersiapkan materi kuliah dan  memberikan bimbingan akademik kepada mahasiswa.'
          },
          labCo: {
            name: 'Ruang Co-Creation',
            faculty: 'Fiskom',
            desc: '<p>Ruang Co-creation adalah sebuah laboratorium atau ruang kolaboratif yang digunakan untuk memfasilitasi proses inovasi dan kreasi bersama antar mahasiswa Fakultas Sains dan Komputer. Ruang co-colaboration dilengkapi dengan meja, kursi dan papan tulis serta jaringan internet untuk meningkatkan produktivitas dalam berbagi ide, berdiskusi, dan bekerja sama untuk mendorong kerja tim.</p>'
            +
              '<p>Di dalam ruang Co-creation juga terdapat perpustakaan fakultas sains dan komputer. Perpustakaan fakultas sains dan komputer adalah perpustakaan yang khusus disediakan untuk mendukung kebutuhan belajar, penelitian, dan referensi akademik yang terkait dengan program studi Informatika dan Fisika di UKRIM. Perpustakaan ini menyediakan koleksi buku, jurnal ilmiah dan publikasi akademik yang relevan dengan studi dan penelitian dalam bidang sains dan komputer.</p>'
            +
              '<p><b>Kapasistas : 50 0rang</b></p>'

          },
          bursaEffek: {
            name: 'Galeri Bursa Efek',
            faculty: 'Febi',
            desc: 'Ruangan Galeri Bursa Efek digunakan mahasiswa UKRIM Fakultas Ekonomi dan Bisnis untuk belajar langsung menjadi seorang pebisnis. Galeri Bursa Efek ini berfungsi sebagai sarana mahasiswa untuk belajar literasi dan edukasi mengenai pasar modal. Mahasiswa akan tahu secara langsung tentang perdagangan saham dan kegiatan pasar modal.'
          },
          classroom_1: {
            name: 'Ruangan III/A/6',
            desc: `<p>Ruang III/A/6 merupakan ruang kelas Fakultas Ekonomi dan Bisnis yang digunakan untuk mengadakan pembelajaran atau perkuliahan secara tatap muka. Ruang kelas ini dilengkapi dengan kursi kuliah untuk mahasiswa, meja pengajar, papan tulis, proyektor, AC serta jaringan internet untuk mendukung kegiatan perkuliahan.</p>`
              +
              `<p><b>Kapasitas : 45 Orang</b></p>`
            },
          classroom_2: {
            name: 'Ruangan III/A/7',
            desc: `<p>Ruang III/A/7 merupakan ruang kelas Fakultas Ekonomi dan Bisnis yang digunakan untuk mengadakan pembelajaran atau perkuliahan secara tatap muka. Ruang kelas ini dilengkapi dengan kursi kuliah untuk mahasiswa, meja pengajar, papan tulis, proyektor, AC serta jaringan internet untuk mendukung kegiatan perkuliahan.</p>`
              +
              `<p><b>Kapasitas : 45 Orang</b></p>`
          },
          classroom_3: {
            name: 'Lab Akuntansi',
            desc: '<p>Lab akuntansi digunakan mahasiswa Fakultas Ekonomi dan Bisnis untuk berlatih dan menerapkan konsep akuntansi dalam lingkungan simulasi bisnis, melakukan analisis keuangan, merencanakan pajak, serta mengembangkan keterampilan teknologi terkait akuntansi. Ruangan ini dilengkapi dengan meja dan kursi untuk mahasiswa, komputer, meja pengajar, papan tulis, proyektor, AC  serta serta jaringan internet untuk mendukung kegiatan perkuliahan.</p>'
            +
              '<p><b>Kapasitas : 15 Orang<b/></p>',
          }
        }
      },
      lantai_2: {
        name: 'Lantai II (Unit III B)',
        room: {
          rectorate: {
            name: 'Kantor Rektorat',
            desc: 'Kantor Rektorat adalah pusat administrasi dan kepemimpinan di UKRIM, yang terdiri dari beberapa ruangan penting seperti Ruang Rektor, Ruang Rapat, Ruang Wakil Rektor, dan Sekretariat Rektor. Ruang Rektor digunakan oleh Rektor sebagai tempat kerja dan pertemuan, sementara Ruang Rapat digunakan untuk rapat internal dan pengambilan keputusan. Ruang Wakil Rektor adalah tempat kerja Wakil Rektor dan stafnya. Sekretariat Rektor menyediakan dukungan administratif, termasuk ruang administrasi, arsip, penerima tamu, dan area kerja staf administratif. Secara keseluruhan, kantor Rektorat merupakan pusat pengambilan keputusan, koordinasi, dan administrasi di UKRIM.'
          },
          adak: {
            name: 'Kantor ADAK/ADUM',
            desc: '<p><b>Administrasi Akademik (ADAK)</b></p>'
            +
              '<p>Biro Administrasi Akademik (ADAK), adalah unsur pelaksana yang menyelenggarakan pelayanan teknis dan administratif dalam bidang akademik di UKRIM.\n' +
              'Beberapa kegiatan akademik yang ditangani ADAK adalah sebagai berikut:</p>'
            +
              '<ol>' +
              '        <li>Penerimaan Mahasiswa Baru</li>' +
              '        <li>Daftar Ulang Mahasiswa</li>' +
              '        <li>Pencetakan Kartu Mahasiswa</li>' +
              '        <li>Koordinasi Ruang Kuliah</li>' +
              '        <li>Ujian Tengah Semester</li>' +
              '        <li>Ujian Akhir Semester</li>' +
              '        <li>Cuti Studi / Berhenti Sementara</li>' +
              '        <li>Mengundurkan Diri</li>' +
              '        <li>Pendaftaran Ujian Sarjana / Ujian Pendadaran</li>' +
              '        <li>Penerbitan Ijazah dan Transkrip Nilai, SKPI</li>' +
              '        <li>Laporan Kelulusan</li>' +
              '        <li>Legalisasi</li>' +
              '        <li>PDDIKTI</li>' +
              '    </ol>'
            +
              '<p><b>Administrasi Keuangan dan Umum (ADUM)</b></p>'
            +
              'Biro Administrasi Keuangan dan Umum (ADUM) terdiri dari dua bagian utama yakni, administrasi & pembayaran mahasiswa, serta kerumahtanggaan lembaga. Sistem komputerisasi yang dimiliki Biro ADUM tersambung secara langsung dengan sistem komputerisasi Biro lainnya, sehingga memudahkan perencanaan, transaksi, pelaporan, maupun evaluasi yang akan dilakukan oleh Program Studi dan Universitas. Sepanjang semester Biro ADUM melayani mahasiswa maupun para struktural pada Program-program Studi yang ada di UKRIM. Biro ini berada di bawah tanggung jawab Rektor, melalui Wakil Rektor bidang keuangan dan personalia UKRIM. '
          },
          transit: {
            name: 'Ruang Transit Dosen',
            desc: 'Ruang transit dosen adalah sebuah ruangan yang disediakan kampus UKRIM untuk digunakan oleh dosen tidak tetap yang tidak memiliki ruang kerja di kampus. Ruangan ini berfungsi sebagai tempat bagi dosen yang sedang tidak mengajar atau tidak memiliki jadwal kuliah untuk bekerja atau mempersiapkan materi pengajaran. Tujuan dari ruang transit adalah memberikan tempat yang nyaman dan produktif bagi dosen tidak tetap untuk menjalankan tugas-tugas mereka meskipun mereka tidak memiliki ruang kerja permanen di kampus.'
          },
          labPuskomAb: {
            name: 'Lab Komputer AB',
            desc: '<p>Laboratorium komputer AB merupakan fasilitas kampus UKRIM untuk melayani mahasiswa dalam melaksanakan praktikum dan membantu dosen ketika ingin mengajar praktikum mata kuliahnya. Fasilitas yang dimiliki laboratorium komputer AB terdiri dari 39 unit PC untuk mahasiswa, dan 1 unit PC untuk dosen mengajar, tersedia pula papan tulis, layar dan LCD proyektor serta jaringan internet untuk menunjang kegiatan praktikum mahasiswa.</p>'
            +
              '<p>Di dalam lab komputer AB terrdapat ruangan untuk admin Puskom. Ruang admin Puskom digunakan sebagai pusat administrasi layanan Puskom di UKRIM. Fungsi utamanya meliputi pengelolaan sistem komputer, administrasi jaringan, perawatan perangkat keras, pengelolaan perangkat lunak, bantuan teknis, dan keamanan informasi. Tim admin Puskom bertanggung jawab untuk menjaga keberlangsungan operasional sistem, memelihara infrastruktur IT, memberikan dukungan teknis dan mengatur kebijakan keamanan informasi di kampus UKRIM.</p>'

            +
            '<p><b>Kapasitas : 40 Orang<b/></p>'
          },
          labPuskomCd: {
            name: 'Lab Komputer CD',
            desc: '<p>Laboratorium komputer CD merupakan salah satu fasilitas kampus UKRIM untuk melayani mahasiswa dalam melaksanakan praktikum dan membantu dosen ketika ingin mengajar praktikum mata kuliahnya. Fasilitas yang dimiliki laboratorium komputer AB terdiri dari 34 unit PC untuk mahasiswa, dan 1 unit PC untuk dosen mengajar, tersedia pula papan tulis, layar dan LCD proyektor serta jaringan internet untuk menunjang kegiatan praktikum mahasiswa.<p/>'
            +
              '<p><b>Kapasitas : 35 Orang<b/></p>'
          },
          bimbingan: {
            name: 'Ruang Bimbingan',
            desc: 'Ruang bimbingan mahasiswa adalah ruangan yang disediakan oleh kampus ' +
              'sebagai tempat bagi mahasiswa untuk mendapatkan bimbingan, ' +
              'konseling, dan dukungan akademik serta non-akademik.'
          },
          classroom_1: {
            name: 'Ruangan III/B/7',
            desc: `<p>Ruang III/B/7 merupakan ruang kelas Fakultas Ekonomi dan Bisnis yang digunakan untuk mengadakan pembelajaran atau perkuliahan secara tatap muka. Ruang kelas ini dilengkapi dengan kursi kuliah untuk mahasiswa, meja pengajar, papan tulis, proyektor, AC serta jaringan internet untuk mendukung kegiatan perkuliahan.</p>`
              +
              `<p><b>Kapasitas : 60 Orang</b></p>`
          }
        },
      }
    }
  },
  {
    id: 5,
    unit: {
      name: 'Unit III C',
      name_loca: 'Ruang Kelas PAK',
      loca: {
        latitude: -7.774633604369738,
        longitude: 110.45014782601255,
      },
      room: {
        classroom_1: {
          name: 'Ruang III/C/1 - FAK',
          desc: `<p>Ruang III/C/1 merupakan ruang kelas Fakultas Agama Kristen yang digunakan untuk mengadakan pembelajaran atau perkuliahan secara tatap muka. Ruang kelas ini dilengkapi dengan kursi kuliah untuk mahasiswa, meja pengajar, papan tulis, proyektor, AC serta jaringan internet untuk mendukung kegiatan perkuliahan.</p>`
            +
            `<p><b>Kapasitas : 35 Orang</b></p>`
        },
        classroom_2: {
          name: 'Ruang III/C/2 - FAK',
          desc:
            `<p>Ruang III/C/2 merupakan ruang kelas Fakultas Agama Kristen yang digunakan untuk mengadakan pembelajaran atau perkuliahan secara tatap muka. Ruang kelas ini dilengkapi dengan kursi kuliah untuk mahasiswa, meja pengajar, papan tulis, proyektor, AC serta jaringan internet untuk mendukung kegiatan perkuliahan.</p>`
            +
            `<p><b>Kapasitas : 35 Orang</b></p>`
        },
        classroom_3: {
          name: 'Ruang III/C/3 - FAK',
          desc:
            `<p>Ruang III/C/3 merupakan ruang kelas Fakultas Agama Kristen yang digunakan untuk mengadakan pembelajaran atau perkuliahan secara tatap muka. Ruang kelas ini dilengkapi dengan kursi kuliah untuk mahasiswa, meja pengajar, papan tulis, proyektor, AC serta jaringan internet untuk mendukung kegiatan perkuliahan.</p>`
            +
            `<p><b>Kapasitas : 35 Orang</b></p>`
        }
      }
    }
  },
  {
    id: 6,
    unit: {
      name: 'Unit IV',
      name_loca: 'Fakultas Sains & Komputer',
      loca: {
        latitude: -7.774610491246642,
        longitude: 110.44911428513629,
      },
      lantai_1: {
        name: 'Lantai 1 (Unit IV A)',
        room: {
          classroom_1: {
            name: 'Lab. Co-Creation',
            prodi: 'Informatika',
            desc: '<p>Ruang Co-creation adalah sebuah laboratorium atau ruang kolaboratif yang digunakan untuk memfasilitasi proses inovasi dan kreasi bersama antar mahasiswa Fakultas Sains dan Komputer. Ruang co-colaboration dilengkapi dengan meja, kursi dan papan tulis serta jaringan internet untuk meningkatkan produktivitas dalam berbagi ide, berdiskusi, dan bekerja sama untuk mendorong kerja tim.</p>'
              +
              '<p><b>Kapasistas : 50 0rang</b></p>'
          },
          classroom_2: {
            name: 'Ruang IV/A/2',
            prodi: 'Informatika',
            desc: `<p>Ruang IV/A/2 merupakan ruang kelas Fakultas Sains dan Komputer yang digunakan untuk mengadakan pembelajaran atau perkuliahan secara tatap muka. Ruang kelas ini dilengkapi dengan kursi kuliah untuk mahasiswa, meja pengajar, papan tulis, proyektor, AC serta jaringan internet untuk mendukung kegiatan perkuliahan.</p>`
              +
              `<p><b>Kapasitas : 80 Orang</b></p>`
          },
          classroom_3: {
            name: 'Ruang IV/A/3',
            prodi: 'Informatika',
            desc: `<p>Ruang IV/A/3 merupakan ruang kelas Fakultas Sains dan Komputer yang digunakan untuk mengadakan pembelajaran atau perkuliahan secara tatap muka. Ruang kelas ini dilengkapi dengan kursi kuliah untuk mahasiswa, meja pengajar, papan tulis, proyektor, AC serta jaringan internet untuk mendukung kegiatan perkuliahan.</p>`
              +
              `<p><b>Kapasitas : 45 Orang</b></p>`
          },
          classroom_4: {
            name: 'Ruang IV/A/4',
            prodi: 'Fisika',
            desc: `<p>Ruang IV/A/4 merupakan ruang kelas Fakultas Sains dan Komputer yang digunakan untuk mengadakan pembelajaran atau perkuliahan secara tatap muka. Ruang kelas ini dilengkapi dengan kursi kuliah untuk mahasiswa, meja pengajar, papan tulis, proyektor, AC serta jaringan internet untuk mendukung kegiatan perkuliahan.</p>`
              +
              `<p><b>Kapasitas : 18 Orang</b></p>`
          }
        }
      },
      lantai_2: {
        name: 'Lantai 2 (Unit IV B)',
        room: {
          classroom_1: {
            name: 'Ruang IV/B/1',
            prodi: 'Informatika',
            desc: `<p>Ruang IV/B/1 merupakan ruang kelas Fakultas Sains dan Komputer yang digunakan untuk mengadakan pembelajaran atau perkuliahan secara tatap muka. Ruang kelas ini dilengkapi dengan kursi kuliah untuk mahasiswa, meja pengajar, papan tulis, proyektor, AC serta jaringan internet untuk mendukung kegiatan perkuliahan.</p>`
              +
              `<p><b>Kapasitas : 65 Orang</b></p>`
          },
          classroom_2: {
            name: 'Ruang IV/B/2',
            prodi: 'Fisika',
            desc: `<p>Ruang IV/B/2 merupakan ruang kelas Fakultas Sains dan Komputer yang digunakan untuk mengadakan pembelajaran atau perkuliahan secara tatap muka. Ruang kelas ini dilengkapi dengan kursi kuliah untuk mahasiswa, meja pengajar, papan tulis, proyektor, AC serta jaringan internet untuk mendukung kegiatan perkuliahan.</p>`
              +
              `<p><b>Kapasitas : 40 Orang</b></p>`
          },
          labElecInst: {
            name: 'Lab. Elektronika & Instrumentasi',
            alias: 'Lab. Elekto. & Intrumen.',
            prodi: 'Fisika',
            desc: '<p>Laboratorium Elektronika dan Instrumentasi merupakan salah satu laboratorium yang ada di jurusan Fisika Fakultas Sains dan Komputer, laboratorium ini menyediakan fasilitas lengkap untuk kegiatan praktikum dan juga penelitian bagi Mahasiswa dan Dosen di bidang elektronika dan instrumentasi. Laboratorium ini dilengkapi dengan kursi dan meja pratikum untuk mahasiswa, meja pengajar, papan tulis, proyektor, wastafel, AC serta jaringan internet untuk mendukung kegiatan perkuliahan.</p>'
            +
              '<p><b>Kapasitas : 20 Orang</b></p>'
          },
          classroom_3: {
            name: 'Ruang IV/B/3',
            prodi: 'Fisika',
            desc: 'Ruangan IV/B/3 digunakan untuk kegiatan belajar dan mengajar antara dosen' +
              ' dan mahasiswa. Ruang kelas juga digunakan untuk ' +
              'pelaksanaan ujian, praktik, dan evaluasi akademik.',
            facility: {
              name_facil_1: '1. Meja dan Kursi',
              name_facil_2: '2. Proyektor atau layar (LCD)',
              name_facil_3: '3. Papan tulis',
              name_facil_4: '4. AC',
              name_facil_5: '5. Wifi'
            }
          },
          labFisDas: {
            name: 'Lab. Fisika Dasar',
            prodi: 'Fisika',
            desc: '<p>Laboratorium Fisika Dasar merupakan fasilitas yang di jurusan Fisika Fakultas Sains dan Komputer. laboratorium ini menyediakan fasilitas lengkap untuk kegiatan praktikum dan eksperimen fisika dasar. Laboratorium ini dilengkapi dengan kursi dan meja untuk praktikum mahasiswa, meja pengajar, papan tulis, AC serta jaringan internet untuk mendukung kegiatan perkuliahan. Fungsi utama lab ini adalah untuk memberikan pengalaman praktis kepada mahasiswa dalam memahami konsep-konsep dasar fisika yang diajarkan dalam kuliah teori.</p>'
              +
              '<p><b>Kapasitas : 20 Orang</b></p>'
          }
        }
      },
    }
  },
  {
    id: 7,
    unit: {
      name: 'Unit V A',
      name_loca: 'Auditorium Musik Gereja(AMG)',
      loca: {
        latitude: -7.775814782092391,
        longitude: 110.45024935289838,
      },
      desc: '<p>Auditorium Musik Gereja(AMG) bisa disebut sebagai ruang serbaguna, pasalnya area ini dapat digunakan untuk berbagai aktivitas seperti seminar, workshop pendidikan dan kegiatan sejenis, bahkan digunakan sebagai tempat untuk kuliah umum. Fungsi utama auditorium adalah sebagai tempat untuk menyelenggarakan pertemuan atau acara yang melibatkan audiens yang besar. Auditorium mempunyai fasilitas yang lengkap mulai dari kursi, pendingin ruangan, apeaker, podium, panggung hingga proyektor LCD. </p>'
      +
      '<p><b>Kapasitas : 200 Orang</b></p>'
    }
  },
  {
    id: 8,
    unit: {
      name: 'Unit V B',
      name_loca: 'Ruang Praktik Musik',
      prodi: 'Musik Gereja',
      loca: {
        latitude: -7.77591108324611,
        longitude: 110.45044574607797,
      },
      desc: 'Ruang praktik musik gereja adalah ruangan yang khusus untuk kegiatan latihan musik. ' +
        'Di dalam ruang praktik musik gereja, terdapat peralatan musik seperti piano, gitar, drum, ' +
        'pendingin ruangan dan peralatan musik lainnya untuk praktik musik. Ruangan ini juga dilengkapi dengan sistem ' +
        'peredam suara yang memadai untuk memastikan kualitas suara yang baik selama latihan.'
    }
  },
  {
    id: 9,
    unit: {
      name: 'Unit V C',
      name_loca: 'Immanuel Music Center (IMC)',
      loca: {
        latitude: -7.775720439193531,
        longitude: 110.45010652526929,
      },
      desc: '<p>Immanuel Music Center (IMC) yang sedang dalam tahap pembangunan di Universitas Kristen Immanuel memiliki fungsi yang beragam. Gedung ini dirancang untuk menjadi pusat kegiatan musik dan seni di sekitar kampus. Fungsi utamanya adalah sebagai tempat untuk latihan dan pertunjukan musik dengan dilengkapi ruang latihan dan auditorium yang akan mendukung pertunjukan musik yang berkualitas. Gedung Music Center ini diharapkan menjadi pusat kegiatan musik yang inspiratif dan berkontribusi pada pengembangan musik, seni, dan budaya di Universitas Kristen Immanuel.</p>'
    }
  },
  {
    id: 10,
    unit: {
      name: 'Unit VI',
      name_loca: 'Lab. Komputer 3 & LPPM',
      loca: {
        latitude: -7.775558993196828,
        longitude: 110.45013468846366,
      },
      room: {
        lab_komputer: {
          name: 'Lab. Komputer 3',
          prodi: 'Informatika',
          desc: '<p>Laboratorium Jaringan adalah salah satu laboratorium yang di miliki oleh prodi Informatika Fakultas Sains dan Komputer UKRIM. Lab komputer jaringan adalah ruang laboratorium yang khusus dirancang untuk mempelajari dan menguji konsep-konsep serta teknologi yang terkait dengan jaringan komputer. Fungsi utama lab ini adalah sebagai tempat bagi mahasiswa untuk mengembangkan pemahaman praktis tentang desain, konfigurasi, dan pengelolaan jaringan komputer.  Ruangan ini dilengkapi dengan kursi, meja, papan tulis, komputer, AC serta jaringan internet untuk mendukung kegiatan perkuliahan.</p>'
          +
            '<p><b>Kapasitas : 12 Orang</b></p>'
        },
        lpmi: {
          name: 'Kantor LPMI',
          desc: '<p>Ruangan penjaminan mutu digunakan oleh tim atau staff untuk mengkoordinasikan, mengelola, dan memantau kegiatan penjaminan mutu di lingkungan UKRIM. Lembaga Penjaminan Mutu Internal(LPMI) adalah salah satu lembaga yang ada di Universitas Kristen Immanuel yang bertugas membantu pejabat dalam melaksanakan monitoring dan evaluasi terhadap perencanaan, pelaksanaan, dan hasil kegiatan (kinerja) akademik dan non akademik dalam rangka mengusahakan penjaminan atas mutu tridarma (pendidikan, penelitian dan pengabdian kepada masyarakat).</p>'
        },
        lppm: {
          name: 'Kantor LPPM',
          desc: '<p>Ruangan LPPM digunakan oleh tim atau staff untuk mengkoordinasikan, mengelola, dan memantau kegiatan penelitian dan pengabdian kepada masyarakat di lingkungan UKRIM. Lembaga Penelitian dan Pengabdian kepada Masyarakat (LPPM) adalah unsur akademik dibawah Rektor yang mempunyai tugas merencanakan, melaksanakan, mengkoordinasikan, memantau, dan menilai pelaksanaan kegiatan penelitian dan pengabdian kepada masyarakat serta ikut mengusahakan, mengendalikan administrasi sumber daya yang diperlukan.</p>'
        }
      }
    }
  },
  {
    id: 11,
    unit: {
      name: 'Unit VII B',
      name_loca: 'Lab. Energi Terbarukan',
      loca: {
        latitude: -7.774981051671726,
        longitude: 110.45047685905791,
      },
      prodi: 'Fisika',
      desc:
        'Lab energi terbarukan adalah salah satu laboratorium yang di miliki oleh prodi Fisika Fakultas Sains dan Komputer UKRIM. Laboratorium ini digunakan untuk penelitian, pengembangan, dan eksperimen dalam bidang energi terbarukan. Fungsi utama dari lab ini adalah untuk mempelajari dan menguji teknologi serta konsep-konsep yang terkait dengan sumber energi yang bersih, berkelanjutan, dan ramah lingkungan. Laboratorium ini dilengkapi dengan peralatan khusus untuk mendukung proses pembelajaran.'
    }
  },
  {
    id: 12,
    unit: {
      name: 'Unit VII A',
      name_loca: 'Ruang Kelas Musik Gereja',
      loca: {
        latitude: -7.775011888416164,
        longitude: 110.45061829019751,
      },
      room: {
        classroom_1: {
          name: 'Ruang VII/A/1',
          prodi: 'Musik Gereja',
          desc:
            `<p>Ruang VII/A/1 merupakan ruang kelas program studi Musik Gereja (MG) Fakultas Agama Kristen yang digunakan untuk mengadakan pembelajaran atau perkuliahan secara tatap muka. Ruang kelas ini dilengkapi dengan kursi kuliah untuk mahasiswa, meja pengajar, papan tulis, 1 buah piano, AC serta jaringan internet untuk mendukung kegiatan perkuliahan.</p>`
            +
            `<p><b>Kapasitas : 20 Orang</b></p>`
        },
        classroom_2: {
          name: 'Ruang VII/A/2',
          prodi: 'Musik Gereja',
          desc:  `<p>Ruang VII/A/2 merupakan ruang kelas program studi Musik Gereja (MG) Fakultas Agama Kristen yang digunakan untuk mengadakan pembelajaran atau perkuliahan secara tatap muka. Ruang kelas ini dilengkapi dengan kursi kuliah untuk mahasiswa, meja pengajar, papan tulis, 1 buah piano, AC serta jaringan internet untuk mendukung kegiatan perkuliahan.</p>`
            +
            `<p><b>Kapasitas : 40 Orang</b></p>`
        },
        classroom_3: {
          name: 'Ruang VII/A/3',
          prodi: 'Musik Gereja',
          desc: `<p>Ruang VII/A/3 merupakan ruang kelas program studi Musik Gereja (MG) Fakultas Agama Kristen yang digunakan untuk mengadakan pembelajaran atau perkuliahan secara tatap muka. Ruang kelas ini dilengkapi dengan kursi kuliah untuk mahasiswa, meja pengajar, papan tulis, 1 buah piano, AC serta jaringan internet untuk mendukung kegiatan perkuliahan.</p>`
            +
            `<p><b>Kapasitas : 25 Orang</b></p>`
        }
      }
    }
  },
  {
    id: 13,
    unit: {
      name: 'Unit VIII',
      name_loca: 'Saria Marantika',
      loca: {
        latitude: -7.775271544350003,
        longitude: 110.4509277583549,
      },
      lantai_1: {
        name: 'Lantai I (Unit VIII A)',
        room: {
          ruangDosen: {
            name: 'Ruang Dosen PAK',
            desc: 'Ruang Dosen PAK berfungsi sebagai tempat pribadi bagi para dosen Fakultas Agama Kristen untuk bekerja, mempersiapkan materi kuliah dan memberikan bimbingan akademik kepada mahasiswa.'
          },
          adminFak: {
            name: 'Administrasi FAK',
            desc: '<p>Kantor FAK adalah ruangan atau area administratif yang menjadi pusat operasional dan manajemen Fakultas Agama Kristen UKRIM. Kantor FAK berfungsi untuk koordinasi dan pengelolaan berbagai kegiatan akademik, administratif, dan organisasional yang terkait dengan Fakultas Agama Kristen. Di kantor FAK terdapat staf administratif yang bertugas untuk melayani mahasiswa dan dosen.</p>'
              +
              '<p>Di dalam Kantor FAK terdapat perpustakaan Fakultas Agama Kristen. Perpustakaan ini  khusus disediakan untuk mendukung kebutuhan belajar, penelitian, dan referensi akademik yang terkait dengan program studi Pendidikan Agama Kristen(PAK), Musik Gereja(MG) dan Konseling Kristen(KK) di UKRIM. Perpustakaan ini menyediakan koleksi buku, jurnal ilmiah dan publikasi akademik yang relevan dengan studi dan penelitian di Fakultas Agama Kristen.</p>'
          },
          adminMpak: {
            name: 'Administrasi MPAK',
            desc: '<p>Kantor MPAK adalah ruangan atau area administratif yang menjadi pusat operasional dan manajemen program studi Magister Pendidikan Agama Kristen(M.Pd.). Kantor MPAK berfungsi untuk koordinasi dan pengelolaan berbagai kegiatan akademik dan administratif yang terkait dengan program S2 Pascasarjana. Di kantor MPAK terdapat staf administratif yang bertugas untuk melayani mahasiswa dan dosen.</p>'

          },
          classroom_1: {
            name: 'Ruang VIII/A/4',
            faculty: 'FAK',
            desc: `<p>Ruang VIII/A/4 merupakan ruang kelas Fakultas Agama Kristen yang digunakan untuk mengadakan pembelajaran atau perkuliahan secara tatap muka. Ruang kelas ini dilengkapi dengan kursi kuliah untuk mahasiswa, meja pengajar, papan tulis, proyektor, AC serta jaringan internet untuk mendukung kegiatan perkuliahan.</p>`
              +
              `<p><b>Kapasitas : 25 Orang</b></p>`
          },
        }
      },
      lantai_2: {
        name: 'Lantai II (Unit VIII B)',
        room: {
          adminFar: {
            name: 'Administrasi Farmasi',
            desc: 'Kantor Farmasi adalah ruangan atau area administratif yang menjadi pusat operasional dan manajemen Fakultas Farmasi UKRIM. Kantor Farmasi berfungsi untuk koordinasi dan pengelolaan berbagai kegiatan akademik, administratif, dan organisasional yang terkait dengan Fakultas Farmasi. Di kantor Farmasi, terdapat staf administratif yang bertugas untuk melayani mahasiswa dan dosen. Di dalam kantor Farmasi juga terdapat ruangan untuk para dosen, ruangan dekan dan ruang rapat dosen Farmasi.'
          },
          classroom_1: {
            name: 'Ruang Kelas Farmasi',
            prodi: 'Farmasi',
            desc: `<p>Ruang Kelas Farmasi merupakan salah satu ruangan kelas Fakultas Farmasi yang digunakan untuk mengadakan pembelajaran atau perkuliahan secara tatap muka. Ruang kelas ini dilengkapi dengan kursi kuliah untuk mahasiswa, meja pengajar, papan tulis, proyektor, AC, jaringan internet serta disediakan tempat minum untuk mendukung kegiatan perkuliahan.</p>`
              +
              `<p><b>Kapasitas : 30 Orang</b></p>`
          },
          classroom_2: {
            name: 'Ruang VIII/B/3 (FAK)',
            prodi: 'FAK',
            desc: `<p>Ruang VIII/B/3 merupakan ruang kelas Fakultas Agama Kristen yang digunakan untuk mengadakan pembelajaran atau perkuliahan secara tatap muka. Ruang kelas ini dilengkapi dengan kursi kuliah untuk mahasiswa, meja pengajar, papan tulis, proyektor, AC serta jaringan internet untuk mendukung kegiatan perkuliahan.</p>`
              +
              `<p><b>Kapasitas : 40 Orang</b></p>`
          },
          classroom_3: {
            name: 'Ruang VIII/B/4 (FAK)',
            prodi: 'FAK',
            desc: `<p>Ruang VIII/B/4 merupakan ruang kelas Fakultas Agama Kristen yang digunakan untuk mengadakan pembelajaran atau perkuliahan secara tatap muka. Ruang kelas ini dilengkapi dengan kursi kuliah untuk mahasiswa, meja pengajar, papan tulis, proyektor, AC serta jaringan internet untuk mendukung kegiatan perkuliahan.</p>`
              +
              `<p><b>Kapasitas : 40 Orang</b></p>`
          },
        }
      },
      lantai_3: {
        name: 'Lantai III (Unit VIII C)',
        room: {
          farmasetika: {
            name: 'Lab. Farmasetika',
            prodi: 'Farmasi',
            desc: '<p>Laboratorium Farmasetika merupakan salah satu laboratorium yang dimiliki oleh Prodi Farmasi UKRIM. Laboratorium Farmasetika adalah laboratorium yang digunakan mahasiswa Farmasi untuk mempelajari praktek yang berhubungan dengan formulasi, peracikan sediaan-sediaan farmasi. Laboratorium ini juga dilengkapi dengan peralatan dan instrumen khusus yang digunakan untuk merancang, menguji, dan memproduksi berbagai bentuk sediaan obat.</p>'
            +
              '<p><b>Kapasitas : 30 Orang</b></p>'
          },
          biologi: {
            name: 'Lab. Biologi',
            prodi: 'Farmasi',
            desc: '<p>Laboratorium Biologi Farmasi adalah fasilitas yang dimiliki oleh Prodi Farmasi UKRIM dan digunakan untuk kegiatan praktikum yang berfokus pada aspek biologi dalam bidang farmasi. Laboratorium ini dilengkapi dengan peralatan dan instrumen khusus untuk melaksanakan penelitian biologi farmasi.</p>'
          +
          '<p><b>Kapasitas : 30 Orang'
          },
          aula: {
            name: 'Aula Medium (III/C/2)',
            prodi: 'Farmasi',
            desc: '<p>Aula Farmasi adalah sebuah ruangan multifungsi yang dapat digunakan dalam berbagai kegiatan di lingkungan Fakultas Farmasi. Fungsi utamanya adalah sebagai ruang kelas yang dapat menampung sejumlah mahasiswa untuk kegiatan perkuliahan. Ruangan ini dilengkapi dengan fasilitas pendukung seperti kursi kuliah, papan tulis, proyektor, AC dan jaringan internet untuk mendukung proses pembelajaran. Selain sebagai ruang kelas, aula ini juga dapat berfungsi untuk kegiatan Fakultas Farmasi lainnya yang melibatkan banyak orang.</p>'
          +
              '<p><b>Kapasitas : 70 Orang</b></p>'
          }
        }
      }
    }
  },
  {
    id: 14,
    unit: {
      name: 'Unit VIII D',
      name_loca: 'Laboratorium Farmasi',
      loca: {
        latitude: -7.775039592858906,
        longitude: 110.45086963649335,
      },
      room: {
        labEnergi: {
          name: 'Lab. Energi',
          prodi: 'Farmasi',
          desc: '<p>Lab Energi farmasi digunakan untuk penelitian dan pengembangan dalam bidang energi terbarukan yang relevan dengan industri farmasi. Fungsi utama dari lab ini adalah untuk mengidentifikasi, menguji, dan mengembangkan teknologi energi yang berkelanjutan dan ramah lingkungan. Ruangan ini dilengkapi dengan fasilitas pendukung seperti kursi meja, AC, jaringan internet dan dilengkapi dengan peralatan khusus untuk mendukung proses pembelajaran.</p>'
          +
            '<p><b>Kapasitas : 10 Orang</b></p>'
        },
        labDisCom: {
          name: 'Lab. Dispensing Compunding',
          prodi: 'Farmasi',
          desc: '<p>Laboratorium Dispensing Compounding merupakan salah satu  Laboratorium yang di miliki oleh prodi Farmasi UKRIM. Lab Dispensing Compounding adalah laboratorium yang khusus digunakan untuk melakukan kegiatan penyaluran dan pengkompounding obat. Fungsi utama lab ini adalah untuk mempersiapkandan menghasilkan obat yang disesuaikan dengan resep dokter, permintaan khusus, atau kebutuhan individu pasien.Ruangan ini dilengkapi dengan fasilitas pendukung seperti kursi meja, AC, jaringan internet dan dilengkapi dengan peralatan khusus untuk mendukung proses pembelajaran.</p>'
          +
            '<p><b>Kapasitas : 30 Orang</b></p>'
        },
        farmakologi: {
          name: 'Lab. Farmakologi',
          prodi: 'Farmasi',
          desc: '<p>Laboratorium Farmakologi merupakan salah satu  Laboratorium yang di miliki oleh prodi Farmasi UKRIM. Lab Farmakologi adalah laboratorium yang digunakan untuk melakukan penelitian dan pengujian terkait dengan efek dan interaksi obat-obatan. Fungsi utama lab ini adalah untuk memahami sifat farmakologis obat-obatan, melakukan uji coba terhadap obat-obatan baru, dan menguji efek obat pada sistem biologi. Ruangan ini dilengkapi dengan fasilitas pendukung seperti kursi meja, AC, jaringan internet dan dilengkapi dengan peralatan khusus untuk mendukung proses pembelajaran.</p>'
          +
            '<p><b>Kapasitas : 15 Orang</b></p>'
        },
        kewirausahaan: {
          name: 'Ruang Kewirausahaan',
          prodi: 'Farmasi',
          desc: 'Ruang kewirausahaan digunakan sebagai koperasi mahasiswa atau untuk menjual produk dari ' +
            'mahasiswa farmasi baik obat sampai makanan.'
        },
        laboran: {
          name: 'Ruang Laboran',
          prodi: 'Farmasi',
          desc: 'Ruang laboran merupakan ruangan yang didedikasikan untuk tenaga laboratorium farmasi dalam melakukan' +
            ' pekerjaan dan tugas-tugas terkait dengan penelitian, pengujian, atau eksperimen.'
        },
        kimia: {
          name: 'Lab. Kimia',
          prodi: 'Farmasi',
          desc: '<p>Laboratorium Kimia merupakan salah satu  Laboratorium yang di miliki oleh prodi Farmasi UKRIM. Fungsi utama lab ini adalah untuk mempelajari sifat kimia dari bahan-bahan obat, mengidentifikasi dan memeriksa keberadaan kontaminan dalam produk farmasi, serta menguji kestabilan dan keamanan obat-obatan. Ruangan ini dilengkapi dengan fasilitas pendukung seperti kursi, meja, AC, jaringan internet, almari untuk menyimpan bahan kimia dan dilengkapi dengan peralatan khusus untuk mendukung proses pembelajaran.</p>'
          +
            '<p><b>Kapasitas : 20 Orang</b></p>'
        },
        hewanUji: {
          name: 'Lab. Hewan Uji',
          prodi: 'Farmasi',
          desc: 'Laboratorium Hewan Uji Farmasi berfungsi sebagai fasilitas untuk melakukan penelitian melibatkan hewan uji sebagai model eksperimental. Laboratorium ini digunakan untuk menguji keamanan obat-obatan sebelum pengujian pada manusia. Dengan dilengkapi fasilitas dan peralatan yang sesuai, laboratorium ini memungkinkan para peneliti untuk mempelajari interaksi obat dengan organisme hidup dan mengidentifikasi potensi efek samping.'
            },
        kesehatan: {
          name: 'Ruang Kesehatan',
          prodi: 'Farmasi',
          desc: 'Ruang Kesehatan Farmasi berfungsi sebagai tempat khusus untuk memberikan layanan kesehatan yang terkait dengan penggunaan obat dan sediaan farmasi. Ruang ini dapat digunakan untuk memberikan konsultasi farmasi kepada pasien, termasuk penjelasan dosis obat, interaksi obat, efek samping, dan petunjuk penggunaan yang tepat. Fungsi ruang kesehatan farmasi ini adalah untuk memastikan penggunaan obat yang aman, efektif, dan optimal bagi pasien, serta memberikan dukungan dalam pengelolaan kesehatan mereka.Ruangan ini dilengkapi dengan fasilitas pendukung seperti kursi, meja, tempat berbaring pasien dan dilengkapi dengan peralatan pendukung lainya.'
        }
      }
    }
  },
];

export default locations;
