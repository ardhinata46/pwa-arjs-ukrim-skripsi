import locations from './locations';
import { menuGedungUnit8, modalInfoRuangan_unit8,modalInfoRuangan_unit8_kantorFar } from '../templates/template-modal-unit8';
import { infoGedung_unit1a } from '../templates/template-modal-unit1a';
import { infoGedung_unit1b } from '../templates/template-modal-unit1b';
import { infoGedung_unit2a, infoRuangan_unit2a } from '../templates/template-modal-unit2a';
import { infoGedung_unit2b } from '../templates/template-modal-unit2b';
import { infoGedung_unit3, infoRuangan_unit3 } from '../templates/template-modal-unit3';
import { infoGedung_unit3c, infoRuangan_unit3c } from '../templates/template-modal-unit3c';
import { infoGedung_unit4, infoRuangan_unit4 } from '../templates/template-modal-unit4';
import { infoGedung_unit5a } from '../templates/template-modal-unit5a';
import { infoGedung_unit5b } from '../templates/template-modal-unit5b';
import { infoGedung_unit5c } from '../templates/template-modal-unit5c';
import { infoGedung_unit6, infoRuangan_unit6 } from '../templates/template-modal-unit6';
import { infoGedung_unit7b } from '../templates/template-modal-unit7b';
import { infoGedung_unit7a, infoRuangan_unit7a } from '../templates/template-modal-unit7a';
import { infoGedung_unit8d, infoRuangan_unit8d } from '../templates/template-modal-unit8d';

const aEntity = document.querySelector('#entity-handler');
const imagePin = document.querySelector('#more-info');
const aEntity2 = document.querySelector('#entity-handler2');
const imagePin2 = document.querySelector('#more-info2');
const aEntity3 = document.querySelector('#entity-handler3');
const imagePin3 = document.querySelector('#more-info3');
const aEntity4 = document.querySelector('#entity-handler4');
const imagePin4 = document.querySelector('#more-info4');
const aEntity5 = document.querySelector('#entity-handler5');
const imagePin5 = document.querySelector('#more-info5');
const aEntity6 = document.querySelector('#entity-handler6');
const imagePin6 = document.querySelector('#more-info6');
const aEntity7 = document.querySelector('#entity-handler7');
const imagePin7 = document.querySelector('#more-info7');
const aEntity8 = document.querySelector('#entity-handler8');
const imagePin8 = document.querySelector('#more-info8');
const aEntity9 = document.querySelector('#entity-handler9');
const imagePin9 = document.querySelector('#more-info9');
const aEntity10 = document.querySelector('#entity-handler10');
const imagePin10 = document.querySelector('#more-info10');
const aEntity11 = document.querySelector('#entity-handler11');
const imagePin11 = document.querySelector('#more-info11');
const aEntity12 = document.querySelector('#entity-handler12');
const imagePin12 = document.querySelector('#more-info12');
const aEntity13 = document.querySelector('#entity-handler13');
const imagePin13 = document.querySelector('#more-info13');
const aEntity14 = document.querySelector('#entity-handler14');
const imagePin14 = document.querySelector('#more-info14');
const aEntity15 = document.querySelector('#entity-handler15');
const imagePin15 = document.querySelector('#more-info15');


// AFRAME.registerComponent('markerhandler', {
//   init: function () {

    //KAPEL
    aEntity.addEventListener('click', function (ev, target) {
      const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
      if (imagePin && intersectedElement === imagePin) {
        $('#exampleModalLong')
          .modal('show');
        document.querySelector('#exampleModalLongTitle').innerHTML = `${locations[0].unit.name_loca.toUpperCase()
          .bold()} - ${locations[0].unit.name.toUpperCase()
          .bold()}`;
        document.querySelector('#modal-body1').innerHTML = infoGedung_unit1a();
        document.querySelector('#descInfoRuangan_unit1a').innerHTML = `${locations[0].unit.desc}`;
      }
    });
    //PERPUS UKRIM
    aEntity2.addEventListener('click', function (ev, target) {
      const intersectedElement2 = ev && ev.detail && ev.detail.intersectedEl;
      if (imagePin2 && intersectedElement2 === imagePin2) {
        $('#exampleModalLong')
          .modal('show');
        document.querySelector('#exampleModalLongTitle').innerHTML = `${locations[1].unit.name_loca.toUpperCase()
          .bold()} - ${locations[1].unit.name.toUpperCase()
          .bold()}`;
        document.querySelector('#modal-body1').innerHTML = infoGedung_unit1b();
        document.querySelector('#descInfoRuangan_unit1b').innerHTML = `${locations[1].unit.desc}`;
      }
    });
    //TEKNIK SIPIL
    aEntity3.addEventListener('click', function (ev, target) {
      const intersectedElement3 = ev && ev.detail && ev.detail.intersectedEl;
      if (imagePin3 && intersectedElement3 === imagePin3) {
        $('#exampleModalLong')
          .modal('show');
        document.querySelector('#exampleModalLongTitle').innerHTML = `${locations[2].unit.name_loca.toUpperCase()
          .bold()} - ${locations[2].unit.name.toUpperCase()
          .bold()}`;
        document.querySelector('#modal-body1').innerHTML = infoGedung_unit2a();

        // btn menu ruangan
        document.querySelector('#button1_unit2a').innerHTML = `${locations[2].unit.room.office.name}`;
        document.querySelector('#button2_unit2a').innerHTML = `${locations[2].unit.room.classroom_1.name}`;
        document.querySelector('#button3_unit2a').innerHTML = `${locations[2].unit.room.classroom_2.name}`;
        document.querySelector('#button4_unit2a').innerHTML = `${locations[2].unit.room.classroom_3.name}`;
        document.querySelector('#button5_unit2a').innerHTML = `${locations[2].unit.room.classroom_4.name}`;

        document.querySelector('#button1_unit2a')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = infoRuangan_unit2a();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[2].unit.room.office.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit2a').innerHTML = `${locations[2].unit.room.office.desc}`;
            document.querySelector('#img-ruang1-unit2a').setAttribute('src','./img_gedung/teknik_sipil/kantor_teknik/kantor_teknik_2.jpg');
            document.querySelector('#img-ruang2-unit2a').setAttribute('src','./img_gedung/teknik_sipil/kantor_teknik/kantor_teknik_4.png');
            document.querySelector('#img-ruang3-unit2a').setAttribute('src','./img_gedung/teknik_sipil/kantor_teknik/kantor_teknik_3.png');


          });
        document.querySelector('#button2_unit2a')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = infoRuangan_unit2a();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[2].unit.room.classroom_1.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit2a').innerHTML = `${locations[2].unit.room.classroom_1.desc}`;
            document.querySelector('#img-ruang1-unit2a').setAttribute('src','./img_gedung/teknik_sipil/kelas2a3/kelas_2a3_1.jpg');
            document.querySelector('#img-ruang2-unit2a').setAttribute('src','./img_gedung/teknik_sipil/kelas2a3/kelas_2a3_3.png');
            document.querySelector('#img-ruang3-unit2a').setAttribute('src','./img_gedung/teknik_sipil/kelas2a3/kelas_2a3_4.png');

          });
        document.querySelector('#button3_unit2a')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = infoRuangan_unit2a();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[2].unit.room.classroom_2.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit2a').innerHTML = `${locations[2].unit.room.classroom_2.desc}`;
            document.querySelector('#img-ruang1-unit2a').setAttribute('src','./img_gedung/teknik_sipil/kelas2a4/kelas_2a4_1.jpg');
            document.querySelector('#img-ruang2-unit2a').setAttribute('src','./img_gedung/teknik_sipil/kelas2a4/kelas_2a4_3.png');
            document.querySelector('#img-ruang3-unit2a').setAttribute('src','./img_gedung/teknik_sipil/kelas2a4/kelas_2a4_4.png');


          });
        document.querySelector('#button4_unit2a')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = infoRuangan_unit2a();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[2].unit.room.classroom_3.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit2a').innerHTML = `${locations[2].unit.room.classroom_3.desc}`;
            document.querySelector('#img-ruang1-unit2a').setAttribute('src','./img_gedung/teknik_sipil/lab_teknik/lab_teknik3.png');
            document.querySelector('#img-ruang2-unit2a').setAttribute('src','./img_gedung/teknik_sipil/lab_teknik/lab_teknik4.png');
            document.querySelector('#img-ruang3-unit2a').setAttribute('src','./img_gedung/teknik_sipil/lab_teknik/lab_teknik5.png');

          });
        document.querySelector('#button5_unit2a')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = infoRuangan_unit2a();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[2].unit.room.classroom_4.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit2a').innerHTML = `${locations[2].unit.room.classroom_4.desc}`;
            document.querySelector('#img-ruang1-unit2a').setAttribute('src','./img_gedung/teknik_sipil/kelas2a6/kelas_2a6_1.jpg');
            document.querySelector('#img-ruang2-unit2a').setAttribute('src','./img_gedung/teknik_sipil/kelas2a6/kelas_2a6_2.jpg');
            document.querySelector('#img-ruang3-unit2a').setAttribute('src','./img_gedung/teknik_sipil/kelas2a6/kelas_2a6_1.jpg');

          });
      }
    });
    //ASRAMA MAHASISWA
    aEntity4.addEventListener('click', function (ev, target) {
      const intersectedElement4 = ev && ev.detail && ev.detail.intersectedEl;
      if (imagePin4 && intersectedElement4 === imagePin4) {
        $('#exampleModalLong')
          .modal('show');
        document.querySelector('#exampleModalLongTitle').innerHTML = `${locations[3].unit.name_loca.toUpperCase()
          .bold()} - ${locations[3].unit.name.toUpperCase()
          .bold()}`;
        document.querySelector('#modal-body1').innerHTML = infoGedung_unit2b();
        document.querySelector('#descInfoRuangan_unit2b').innerHTML = `${locations[3].unit.desc}`;
      }
    });

    //UNIT III
    aEntity5.addEventListener('click', function (ev, target) {
      const intersectedElement5 = ev && ev.detail && ev.detail.intersectedEl;
      if (imagePin5 && intersectedElement5 === imagePin5) {
        $('#exampleModalLong')
          .modal('show');
        document.querySelector('#exampleModalLongTitle').innerHTML = `${locations[4].unit.name_loca.toUpperCase()
          .bold()} - ${locations[4].unit.name.toUpperCase()
          .bold()}`;
        document.querySelector('#modal-body1').innerHTML = infoGedung_unit3();
        document.querySelector('#btn-gedung-unit3a').innerHTML = `${locations[4].unit.lantai_1.name}`;
        document.querySelector('#btn-gedung-unit3b').innerHTML = `${locations[4].unit.lantai_2.name}`;

        // btn menu ruangan lantai 1
        document.querySelector('#button1_unit3a').innerHTML = `${locations[4].unit.lantai_1.room.fiskomOffice.name}`;
        document.querySelector('#button2_unit3a').innerHTML = `${locations[4].unit.lantai_1.room.febiOffice.name}`;
        document.querySelector('#button3_unit3a').innerHTML = `${locations[4].unit.lantai_1.room.labCo.name}`;
        document.querySelector('#button4_unit3a').innerHTML = `${locations[4].unit.lantai_1.room.bursaEffek.name}`;
        document.querySelector('#button5_unit3a').innerHTML = `${locations[4].unit.lantai_1.room.classroom_1.name}`;
        document.querySelector('#button6_unit3a').innerHTML = `${locations[4].unit.lantai_1.room.classroom_2.name}`;
        document.querySelector('#button7_unit3a').innerHTML = `${locations[4].unit.lantai_1.room.classroom_3.name}`;

        // btn menu ruangan lantai 2
        document.querySelector('#button1_unit3b').innerHTML = `${locations[4].unit.lantai_2.room.rectorate.name}`;
        document.querySelector('#button2_unit3b').innerHTML = `${locations[4].unit.lantai_2.room.adak.name}`;
        document.querySelector('#button3_unit3b').innerHTML = `${locations[4].unit.lantai_2.room.transit.name}`;
        document.querySelector('#button4_unit3b').innerHTML = `${locations[4].unit.lantai_2.room.labPuskomAb.name}`;
        document.querySelector('#button5_unit3b').innerHTML = `${locations[4].unit.lantai_2.room.labPuskomCd.name}`;
        document.querySelector('#button6_unit3b').innerHTML = `${locations[4].unit.lantai_2.room.bimbingan.name}`;
        document.querySelector('#button7_unit3b').innerHTML = `${locations[4].unit.lantai_2.room.classroom_1.name}`;

        //  LANTAI 1
        document.querySelector('#button1_unit3a')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = infoRuangan_unit3();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[4].unit.lantai_1.room.fiskomOffice.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit3').innerHTML = `${locations[4].unit.lantai_1.room.fiskomOffice.desc}`;
            document.querySelector('#img-ruang1-unit3').setAttribute('src','./img_gedung/unit3/lantai1/kantor_fiskom/kantor_fiskom2.jpg');
            document.querySelector('#img-ruang2-unit3').setAttribute('src','./img_gedung/unit3/lantai1/kantor_fiskom/kantor_fiskom7.jpg');
            document.querySelector('#img-ruang3-unit3').setAttribute('src','./img_gedung/unit3/lantai1/kantor_fiskom/kantor_fiskom4.jpg');

          });
        document.querySelector('#button2_unit3a')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = infoRuangan_unit3();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[4].unit.lantai_1.room.febiOffice.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit3').innerHTML = `${locations[4].unit.lantai_1.room.febiOffice.desc}`;
            document.querySelector('#img-ruang1-unit3').setAttribute('src','./img_gedung/unit3/lantai1/kantor_febi/kantor_febi1.jpg');
            document.querySelector('#img-ruang2-unit3').setAttribute('src','./img_gedung/unit3/lantai1/kantor_febi/kantor_febi3.png');
            document.querySelector('#img-ruang3-unit3').setAttribute('src','./img_gedung/unit3/lantai1/kantor_febi/kantor_febi4.png');

          });
        document.querySelector('#button3_unit3a')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = infoRuangan_unit3();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[4].unit.lantai_1.room.labCo.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit3').innerHTML = `${locations[4].unit.lantai_1.room.labCo.desc}`;
            document.querySelector('#img-ruang1-unit3').setAttribute('src','./img_gedung/unit3/lantai1/co_creation/lab_co_creation2.jpg');
            document.querySelector('#img-ruang2-unit3').setAttribute('src','./img_gedung/unit3/lantai1/co_creation/lab_co_creation3.jpg');
            document.querySelector('#img-ruang3-unit3').setAttribute('src','./img_gedung/unit3/lantai1/co_creation/perpus_fiskom1.jpg');

          });
        document.querySelector('#button4_unit3a')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = infoRuangan_unit3();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[4].unit.lantai_1.room.bursaEffek.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit3').innerHTML = `${locations[4].unit.lantai_1.room.bursaEffek.desc}`;
            document.querySelector('#img-ruang1-unit3').setAttribute('src','./img_gedung/unit3/lantai1/bursa_efek/bursa_efek.jpg');
            document.querySelector('#img-ruang2-unit3').setAttribute('src','./img_gedung/unit3/lantai1/bursa_efek/bursa_efek.jpg');
            document.querySelector('#img-ruang3-unit3').setAttribute('src','./img_gedung/unit3/lantai1/bursa_efek/bursa_efek.jpg');

          });
        document.querySelector('#button5_unit3a')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = infoRuangan_unit3();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[4].unit.lantai_1.room.classroom_1.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit3').innerHTML = `${locations[4].unit.lantai_1.room.classroom_1.desc}`;
            document.querySelector('#img-ruang1-unit3').setAttribute('src','./img_gedung/unit3/lantai1/kelas3a6/kelas_3a6_1.jpg');
            document.querySelector('#img-ruang2-unit3').setAttribute('src','./img_gedung/unit3/lantai1/kelas3a6/kelas_3a6_2.jpg');
            document.querySelector('#img-ruang3-unit3').setAttribute('src','./img_gedung/unit3/lantai1/kelas3a6/kelas_3a6_3.jpg');

          });
        document.querySelector('#button6_unit3a')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = infoRuangan_unit3();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[4].unit.lantai_1.room.classroom_2.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit3').innerHTML = `${locations[4].unit.lantai_1.room.classroom_2.desc}`;
            document.querySelector('#img-ruang1-unit3').setAttribute('src','./img_gedung/unit3/lantai1/kelas3a7/kelas_3a7_1.jpg');
            document.querySelector('#img-ruang2-unit3').setAttribute('src','./img_gedung/unit3/lantai1/kelas3a7/kelas_3a7_2.jpg');
            document.querySelector('#img-ruang3-unit3').setAttribute('src','./img_gedung/unit3/lantai1/kelas3a7/kelas_3a7_3.jpg');

          });
        document.querySelector('#button7_unit3a')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = infoRuangan_unit3();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[4].unit.lantai_1.room.classroom_3.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit3').innerHTML = `${locations[4].unit.lantai_1.room.classroom_3.desc}`;
            document.querySelector('#img-ruang1-unit3').setAttribute('src','./img_gedung/unit3/lantai1/lab_akuntansi/lab_akuntansi.jpg');
            document.querySelector('#img-ruang2-unit3').setAttribute('src','./img_gedung/unit3/lantai1/lab_akuntansi/lab_akuntansi2.png');
            document.querySelector('#img-ruang3-unit3').setAttribute('src','./img_gedung/unit3/lantai1/lab_akuntansi/lab_akuntansi.jpg');

          });

        //  LANTAI 2
        document.querySelector('#button1_unit3b')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = infoRuangan_unit3();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[4].unit.lantai_2.room.rectorate.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit3').innerHTML = `${locations[4].unit.lantai_2.room.rectorate.desc}`;
            document.querySelector('#img-ruang1-unit3').setAttribute('src','./img_gedung/unit3/lantai2/rektorat/rektorat1.jpg');
            document.querySelector('#img-ruang2-unit3').setAttribute('src','./img_gedung/unit3/lantai2/rektorat/rektorat2.jpg');
            document.querySelector('#img-ruang3-unit3').setAttribute('src','./img_gedung/unit3/lantai2/rektorat/rektorat3.jpg');

          })
        document.querySelector('#button2_unit3b')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = infoRuangan_unit3();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[4].unit.lantai_2.room.adak.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit3').innerHTML = `${locations[4].unit.lantai_2.room.adak.desc}`;
            document.querySelector('#img-ruang1-unit3').setAttribute('src','./img_gedung/unit3/lantai2/adak/adak1.jpg');
            document.querySelector('#img-ruang2-unit3').setAttribute('src','./img_gedung/unit3/lantai2/adak/adak2.jpg');
            document.querySelector('#img-ruang3-unit3').setAttribute('src','./img_gedung/unit3/lantai2/adak/adak3.jpg');

          });
        document.querySelector('#button3_unit3b')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = infoRuangan_unit3();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[4].unit.lantai_2.room.transit.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit3').innerHTML = `${locations[4].unit.lantai_2.room.transit.desc}`;
            document.querySelector('#img-ruang1-unit3').setAttribute('src','./img_gedung/unit3/lantai2/transit_dosen/transit_dosen.jpg');
            document.querySelector('#img-ruang2-unit3').setAttribute('src','./img_gedung/unit3/lantai2/transit_dosen/transit_dosen.jpg');
            document.querySelector('#img-ruang3-unit3').setAttribute('src','./img_gedung/unit3/lantai2/transit_dosen/transit_dosen.jpg');

          });
        document.querySelector('#button4_unit3b')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = infoRuangan_unit3();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[4].unit.lantai_2.room.labPuskomAb.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit3').innerHTML = `${locations[4].unit.lantai_2.room.labPuskomAb.desc}`;
            document.querySelector('#img-ruang1-unit3').setAttribute('src','./img_gedung/unit3/lantai2/lab_komputer_ab/lab_komputer_ab_1.jpg');
            document.querySelector('#img-ruang2-unit3').setAttribute('src','./img_gedung/unit3/lantai2/lab_komputer_ab/lab_komputer_ab_2.jpg');
            document.querySelector('#img-ruang3-unit3').setAttribute('src','./img_gedung/unit3/lantai2/lab_komputer_ab/lab_komputer_ab_3.jpg');

          });
        document.querySelector('#button5_unit3b')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = infoRuangan_unit3();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[4].unit.lantai_2.room.labPuskomCd.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit3').innerHTML = `${locations[4].unit.lantai_2.room.labPuskomCd.desc}`;
            document.querySelector('#img-ruang1-unit3').setAttribute('src','./img_gedung/unit3/lantai2/lab_komputer_cd/lab_komputer_cd_1.jpg');
            document.querySelector('#img-ruang2-unit3').setAttribute('src','./img_gedung/unit3/lantai2/lab_komputer_cd/lab_komputer_cd_2.jpg');
            document.querySelector('#img-ruang3-unit3').setAttribute('src','./img_gedung/unit3/lantai2/lab_komputer_cd/lab_komputer_cd_3.jpg');

          });
        document.querySelector('#button6_unit3b')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = infoRuangan_unit3();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[4].unit.lantai_2.room.bimbingan.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit3').innerHTML = `${locations[4].unit.lantai_2.room.bimbingan.desc}`;
            document.querySelector('#img-ruang1-unit3').setAttribute('src','./img_gedung/unit3/lantai2/bimbingan/bimbingan1.png');
            document.querySelector('#img-ruang2-unit3').setAttribute('src','./img_gedung/unit3/lantai2/bimbingan/bimbingan2.png');
            document.querySelector('#img-ruang3-unit3').setAttribute('src','./img_gedung/unit3/lantai2/bimbingan/bimbingan3.png');

          });
        document.querySelector('#button7_unit3b')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = infoRuangan_unit3();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[4].unit.lantai_2.room.classroom_1.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit3').innerHTML = `${locations[4].unit.lantai_2.room.classroom_1.desc}`;
            document.querySelector('#img-ruang1-unit3').setAttribute('src','./img_gedung/unit3/lantai2/kelas3b7/kelas_3b7_1.jpg');
            document.querySelector('#img-ruang2-unit3').setAttribute('src','./img_gedung/unit3/lantai2/kelas3b7/kelas_3b7_2.jpg');
            document.querySelector('#img-ruang3-unit3').setAttribute('src','./img_gedung/unit3/lantai2/kelas3b7/kelas_3b7_3.jpg');

          });
      }
    });

    //UNIT III C
    aEntity6.addEventListener('click', function (ev, target) {
      const intersectedElement6 = ev && ev.detail && ev.detail.intersectedEl;
      if (imagePin6 && intersectedElement6 === imagePin6) {
        $('#exampleModalLong')
          .modal('show');
        document.querySelector('#exampleModalLongTitle').innerHTML = `${locations[5].unit.name_loca.toUpperCase().bold()} - ${locations[5].unit.name.toUpperCase().bold()}`;
        document.querySelector('#modal-body1').innerHTML = infoGedung_unit3c();

        //btn menu ruangan
        document.querySelector('#button1_unit3c').innerHTML = `${locations[5].unit.room.classroom_1.name}`;
        document.querySelector('#button2_unit3c').innerHTML = `${locations[5].unit.room.classroom_2.name}`;
        document.querySelector('#button3_unit3c').innerHTML = `${locations[5].unit.room.classroom_3.name}`;

        document.querySelector('#button1_unit3c')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = infoRuangan_unit3c();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[5].unit.room.classroom_1.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit3c').innerHTML = `${locations[5].unit.room.classroom_1.desc}`;
            document.querySelector('#img-ruang1-unit3c').setAttribute('src','./img_gedung/unit3c/kelas3c1/kelas_3c1_1.jpg');
            document.querySelector('#img-ruang2-unit3c').setAttribute('src','./img_gedung/unit3c/kelas3c1/kelas_3c1_2.jpg');
            document.querySelector('#img-ruang3-unit3c').setAttribute('src','./img_gedung/unit3c/kelas3c1/kelas_3c1_3.jpg');

          });
        document.querySelector('#button2_unit3c')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = infoRuangan_unit3c();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[5].unit.room.classroom_2.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit3c').innerHTML = `${locations[5].unit.room.classroom_2.desc}`;
            document.querySelector('#img-ruang1-unit3c').setAttribute('src','./img_gedung/unit3c/kelas3c2/kelas_3c2_1.jpg');
            document.querySelector('#img-ruang2-unit3c').setAttribute('src','./img_gedung/unit3c/kelas3c2/kelas_3c2_2.jpg');
            document.querySelector('#img-ruang3-unit3c').setAttribute('src','./img_gedung/unit3c/kelas3c2/kelas_3c2_3.jpg');

          });
        document.querySelector('#button3_unit3c')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = infoRuangan_unit3c();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[5].unit.room.classroom_3.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit3c').innerHTML = `${locations[5].unit.room.classroom_3.desc}`;
            document.querySelector('#img-ruang1-unit3c').setAttribute('src','./img_gedung/unit3c/kelas3c3/kelas_3c3_1.jpg');
            document.querySelector('#img-ruang2-unit3c').setAttribute('src','./img_gedung/unit3c/kelas3c3/kelas_3c3_2.jpg');
            document.querySelector('#img-ruang3-unit3c').setAttribute('src','./img_gedung/unit3c/kelas3c3/kelas_3c3_3.jpg');

          });
      }
    });
    //FISKOM
    aEntity7.addEventListener('click', function (ev, target) {
      const intersectedElement7 = ev && ev.detail && ev.detail.intersectedEl;
      if (imagePin7 && intersectedElement7 === imagePin7) {
        $('#exampleModalLong').modal('show');
        document.querySelector('#exampleModalLongTitle').innerHTML = `${locations[6].unit.name_loca.toUpperCase().bold()} - ${locations[6].unit.name.toUpperCase().bold()}`;
        document.querySelector('#modal-body1').innerHTML = infoGedung_unit4();
        document.querySelector('#btn-gedung-unit4a').innerHTML = `${locations[6].unit.lantai_1.name}`;
        document.querySelector('#btn-gedung-unit4b').innerHTML = `${locations[6].unit.lantai_2.name}`;

        // btn menu ruangan lantai 1
        document.querySelector('#button1_unit4a').innerHTML = `${locations[6].unit.lantai_1.room.classroom_1.name}`;
        document.querySelector('#button2_unit4a').innerHTML = `${locations[6].unit.lantai_1.room.classroom_2.name}`;
        document.querySelector('#button3_unit4a').innerHTML = `${locations[6].unit.lantai_1.room.classroom_3.name}`;
        document.querySelector('#button4_unit4a').innerHTML = `${locations[6].unit.lantai_1.room.classroom_4.name}`;

        // btn menu ruangan lantai 2
        document.querySelector('#button1_unit4b').innerHTML = `${locations[6].unit.lantai_2.room.classroom_1.name}`;
        document.querySelector('#button2_unit4b').innerHTML = `${locations[6].unit.lantai_2.room.classroom_2.name}`;
        document.querySelector('#button3_unit4b').innerHTML = `${locations[6].unit.lantai_2.room.labElecInst.alias}`;
        document.querySelector('#button4_unit4b').innerHTML = `${locations[6].unit.lantai_2.room.labFisDas.name}`;

        //  LANTAI 1
        document.querySelector('#button1_unit4a')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = infoRuangan_unit4();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[6].unit.lantai_1.room.classroom_1.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit4').innerHTML = `${locations[6].unit.lantai_1.room.classroom_1.desc}`;
            document.querySelector('#img-ruang1-unit4').setAttribute('src','./img_gedung/fiskom/lantai1/co_creation/co_creation4.jpeg');
            document.querySelector('#img-ruang2-unit4').setAttribute('src','./img_gedung/fiskom/lantai1/co_creation/co_creation5.jpeg');
            document.querySelector('#img-ruang3-unit4').setAttribute('src','./img_gedung/fiskom/lantai1/co_creation/co_creation6.jpeg');

          });
        document.querySelector('#button2_unit4a')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = infoRuangan_unit4();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[6].unit.lantai_1.room.classroom_2.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit4').innerHTML = `${locations[6].unit.lantai_1.room.classroom_2.desc}`;
            document.querySelector('#img-ruang1-unit4').setAttribute('src','./img_gedung/fiskom/lantai1/kelas4a2/kelas_4a2_1.jpg');
            document.querySelector('#img-ruang2-unit4').setAttribute('src','./img_gedung/fiskom/lantai1/kelas4a2/kelas_4a2_2.jpg');
            document.querySelector('#img-ruang3-unit4').setAttribute('src','./img_gedung/fiskom/lantai1/kelas4a2/kelas_4a2_3.jpg');
          });
        document.querySelector('#button3_unit4a')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = infoRuangan_unit4();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[6].unit.lantai_1.room.classroom_3.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit4').innerHTML = `${locations[6].unit.lantai_1.room.classroom_3.desc}`;
            document.querySelector('#img-ruang1-unit4').setAttribute('src','./img_gedung/fiskom/lantai1/kelas4a3/kelas_4a3_1.jpg');
            document.querySelector('#img-ruang2-unit4').setAttribute('src','./img_gedung/fiskom/lantai1/kelas4a3/kelas_4a3_2.jpg');
            document.querySelector('#img-ruang3-unit4').setAttribute('src','./img_gedung/fiskom/lantai1/kelas4a3/kelas_4a3_3.jpg');

          });
        document.querySelector('#button4_unit4a')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = infoRuangan_unit4();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[6].unit.lantai_1.room.classroom_4.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit4').innerHTML = `${locations[6].unit.lantai_1.room.classroom_4.desc}`;
            document.querySelector('#img-ruang1-unit4').setAttribute('src','./img_gedung/fiskom/lantai1/kelas4a4/kelas_4a4_1.jpg');
            document.querySelector('#img-ruang2-unit4').setAttribute('src','./img_gedung/fiskom/lantai1/kelas4a4/kelas_4a4_2.jpg');
            document.querySelector('#img-ruang3-unit4').setAttribute('src','./img_gedung/fiskom/lantai1/kelas4a4/kelas_4a4_1.jpg');

          });

        //  LANTAI 2
        document.querySelector('#button1_unit4b')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = infoRuangan_unit4();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[6].unit.lantai_2.room.classroom_1.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit4').innerHTML = `${locations[6].unit.lantai_2.room.classroom_1.desc}`;
            document.querySelector('#img-ruang1-unit4').setAttribute('src','./img_gedung/fiskom/lantai2/kelas4b1/kelas_4b1_1.jpg');
            document.querySelector('#img-ruang2-unit4').setAttribute('src','./img_gedung/fiskom/lantai2/kelas4b1/kelas_4b1_2.jpg');
            document.querySelector('#img-ruang3-unit4').setAttribute('src','./img_gedung/fiskom/lantai2/kelas4b1/kelas_4b1_3.jpg');

          });
        document.querySelector('#button2_unit4b')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = infoRuangan_unit4();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[6].unit.lantai_2.room.classroom_2.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit4').innerHTML = `${locations[6].unit.lantai_2.room.classroom_2.desc}`;
            document.querySelector('#img-ruang1-unit4').setAttribute('src','./img_gedung/fiskom/lantai2/kelas4b2/kelas_4b2_1.jpg');
            document.querySelector('#img-ruang2-unit4').setAttribute('src','./img_gedung/fiskom/lantai2/kelas4b2/kelas_4b2_2.jpg');
            document.querySelector('#img-ruang3-unit4').setAttribute('src','./img_gedung/fiskom/lantai2/kelas4b2/kelas_4b2_1.jpg');

          });

        document.querySelector('#button3_unit4b')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = infoRuangan_unit4();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[6].unit.lantai_2.room.labElecInst.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit4').innerHTML = `${locations[6].unit.lantai_2.room.labElecInst.desc}`;
            document.querySelector('#img-ruang1-unit4').setAttribute('src','./img_gedung/fiskom/lantai2/lab_elek_inst/lab_elek_inst_1.jpg');
            document.querySelector('#img-ruang2-unit4').setAttribute('src','./img_gedung/fiskom/lantai2/lab_elek_inst/lab_elek_inst_2.jpg');
            document.querySelector('#img-ruang3-unit4').setAttribute('src','./img_gedung/fiskom/lantai2/lab_elek_inst/lab_elek_inst_3.jpg');

          });
        document.querySelector('#button4_unit4b')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = infoRuangan_unit4();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[6].unit.lantai_2.room.labFisDas.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit4').innerHTML = `${locations[6].unit.lantai_2.room.labFisDas.desc}`;
            document.querySelector('#img-ruang1-unit4').setAttribute('src','./img_gedung/fiskom/lantai2/lab_fisdas/lab_fisdas_1.jpg');
            document.querySelector('#img-ruang2-unit4').setAttribute('src','./img_gedung/fiskom/lantai2/lab_fisdas/lab_fisdas_2.jpg');
            document.querySelector('#img-ruang3-unit4').setAttribute('src','./img_gedung/fiskom/lantai2/lab_fisdas/lab_fisdas_3.jpg');

          });
      }
    });
    //AMG
    aEntity8.addEventListener('click', function (ev, target) {
      const intersectedElement8 = ev && ev.detail && ev.detail.intersectedEl;
      if (imagePin8 && intersectedElement8 === imagePin8) {
        $('#exampleModalLong')
          .modal('show');
        document.querySelector('#exampleModalLongTitle').innerHTML = `${locations[7].unit.name_loca.toUpperCase()
          .bold()} - ${locations[7].unit.name.toUpperCase()
          .bold()}`;
        document.querySelector('#modal-body1').innerHTML = infoGedung_unit5a();
        document.querySelector('#descInfoRuangan_unit5a').innerHTML = `${locations[7].unit.desc}`;

      }
    });
    //RUANG PRAKTIK MUSIK MG
    aEntity9.addEventListener('click', function (ev, target) {
      const intersectedElement9 = ev && ev.detail && ev.detail.intersectedEl;
      if (imagePin9 && intersectedElement9 === imagePin9) {
        $('#exampleModalLong')
          .modal('show');
        document.querySelector('#exampleModalLongTitle').innerHTML = `${locations[8].unit.name_loca.toUpperCase()
          .bold()} - ${locations[8].unit.name.toUpperCase()
          .bold()}`;
        document.querySelector('#modal-body1').innerHTML = infoGedung_unit5b();
        document.querySelector('#descInfoRuangan_unit5b').innerHTML = `${locations[8].unit.desc}`;
      }
    });
    //IMMANUEL MUSIC CENTER
    aEntity10.addEventListener('click', function (ev, target) {
      const intersectedElement10 = ev && ev.detail && ev.detail.intersectedEl;
      if (imagePin10 && intersectedElement10 === imagePin10) {
        $('#exampleModalLong')
          .modal('show');
        document.querySelector('#exampleModalLongTitle').innerHTML = `${locations[9].unit.name_loca.toUpperCase()
          .bold()} - ${locations[9].unit.name.toUpperCase()
          .bold()}`;
        document.querySelector('#modal-body1').innerHTML = infoGedung_unit5c();
        document.querySelector('#descInfoRuangan_unit5c').innerHTML = `${locations[9].unit.desc}`;
      }
    });
    //LAB. KOMPUTER & LPPM
    aEntity11.addEventListener('click', function (ev, target) {
      const intersectedElement11 = ev && ev.detail && ev.detail.intersectedEl;
      if (imagePin11 && intersectedElement11 === imagePin11) {
        $('#exampleModalLong')
          .modal('show');
        document.querySelector('#exampleModalLongTitle').innerHTML = `${locations[10].unit.name_loca.toUpperCase()
          .bold()} - ${locations[10].unit.name.toUpperCase()
          .bold()}`;
        document.querySelector('#modal-body1').innerHTML = infoGedung_unit6();

        //btn menu ruangan
        document.querySelector('#button1_unit6').innerHTML = `${locations[10].unit.room.lab_komputer.name}`;
        document.querySelector('#button2_unit6').innerHTML = `${locations[10].unit.room.lpmi.name}`;
        document.querySelector('#button3_unit6').innerHTML = `${locations[10].unit.room.lppm.name}`;


        document.querySelector('#button1_unit6')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = infoRuangan_unit6();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[10].unit.room.lab_komputer.name.toUpperCase()
              .bold()}`;
            document.querySelector('#descInfoRuangan_unit6').innerHTML = `${locations[10].unit.room.lab_komputer.desc}`;
            document.querySelector('#img-ruang1-unit6').setAttribute('src','./img_gedung/lab_jaringan/lab_jaringan/lab_jaringan1.jpg');
            document.querySelector('#img-ruang2-unit6').setAttribute('src','./img_gedung/lab_jaringan/lab_jaringan/lab_jaringan1.jpg');
            document.querySelector('#img-ruang3-unit6').setAttribute('src','./img_gedung/lab_jaringan/lab_jaringan/lab_jaringan1.jpg');

          });
        document.querySelector('#button2_unit6')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = infoRuangan_unit6();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[10].unit.room.lpmi.name.toUpperCase()
              .bold()}`;
            document.querySelector('#descInfoRuangan_unit6').innerHTML = `${locations[10].unit.room.lpmi.desc}`;
            document.querySelector('#img-ruang1-unit6').setAttribute('src','./img_gedung/lab_jaringan/lpmi/lpmi1.png');
            document.querySelector('#img-ruang2-unit6').setAttribute('src','./img_gedung/lab_jaringan/lpmi/lpmi2.png');
            document.querySelector('#img-ruang3-unit6').setAttribute('src','./img_gedung/lab_jaringan/lpmi/lpmi1.png');

          });
        document.querySelector('#button3_unit6')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = infoRuangan_unit6();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[10].unit.room.lppm.name.toUpperCase()
              .bold()}`;
            document.querySelector('#descInfoRuangan_unit6').innerHTML = `${locations[10].unit.room.lppm.desc}`;
            document.querySelector('#img-ruang1-unit6').setAttribute('src','./img_gedung/lab_jaringan/lppm/lppm1.png');
            document.querySelector('#img-ruang2-unit6').setAttribute('src','./img_gedung/lab_jaringan/lppm/lppm2.png');
            document.querySelector('#img-ruang3-unit6').setAttribute('src','./img_gedung/lab_jaringan/lppm/lppm1.png');
          });
      }
    });
    //LAB. ENERGI TERBARUKAN
    aEntity12.addEventListener('click', function (ev, target) {
      const intersectedElement12 = ev && ev.detail && ev.detail.intersectedEl;
      if (imagePin12 && intersectedElement12 === imagePin12) {
        $('#exampleModalLong')
          .modal('show');
        document.querySelector('#exampleModalLongTitle').innerHTML = `${locations[11].unit.name_loca.toUpperCase()
          .bold()} - ${locations[11].unit.name.toUpperCase()
          .bold()}`;
        document.querySelector('#modal-body1').innerHTML = infoGedung_unit7b();
        document.querySelector('#descInfoRuangan_unit7b').innerHTML = `${locations[11].unit.desc}`;
      }
    });
    //RUANG KELAS MG
    aEntity13.addEventListener('click', function (ev, target) {
      const intersectedElement13 = ev && ev.detail && ev.detail.intersectedEl;
      if (imagePin13 && intersectedElement13 === imagePin13) {
        $('#exampleModalLong').modal('show');
        document.querySelector('#exampleModalLongTitle').innerHTML = `${locations[12].unit.name_loca.toUpperCase().bold()} - ${locations[12].unit.name.toUpperCase().bold()}`;
        document.querySelector('#modal-body1').innerHTML = infoGedung_unit7a();

        //btn menu ruangan
        document.querySelector('#button1_unit7a').innerHTML = `${locations[12].unit.room.classroom_1.name}`;
        document.querySelector('#button2_unit7a').innerHTML = `${locations[12].unit.room.classroom_2.name}`;
        document.querySelector('#button3_unit7a').innerHTML = `${locations[12].unit.room.classroom_3.name}`;

        document.querySelector('#button1_unit7a')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = infoRuangan_unit7a();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[12].unit.room.classroom_1.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit7a').innerHTML = `${locations[12].unit.room.classroom_1.desc}`;
            document.querySelector('#img-ruang1-unit7a').setAttribute('src','./img_gedung/ruang_kelas_mg/kelasMg7a1/kelasMg_7a1_1.jpg');
            document.querySelector('#img-ruang2-unit7a').setAttribute('src','./img_gedung/ruang_kelas_mg/kelasMg7a1/kelasMg_7a1_2.jpg');
            document.querySelector('#img-ruang3-unit7a').setAttribute('src','./img_gedung/ruang_kelas_mg/kelasMg7a1/kelasMg_7a1_3.jpg');

          });
        document.querySelector('#button2_unit7a')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = infoRuangan_unit7a();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[12].unit.room.classroom_2.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit7a').innerHTML = `${locations[12].unit.room.classroom_2.desc}`;
            document.querySelector('#img-ruang1-unit7a').setAttribute('src','./img_gedung/ruang_kelas_mg/kelasMg7a2/kelasMg_7a2_1.jpg');
            document.querySelector('#img-ruang2-unit7a').setAttribute('src','./img_gedung/ruang_kelas_mg/kelasMg7a2/kelasMg_7a2_2.jpg');
            document.querySelector('#img-ruang3-unit7a').setAttribute('src','./img_gedung/ruang_kelas_mg/kelasMg7a2/kelasMg_7a2_3.jpg');

          });
        document.querySelector('#button3_unit7a')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = infoRuangan_unit7a();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[12].unit.room.classroom_3.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit7a').innerHTML = `${locations[12].unit.room.classroom_3.desc}`;
            document.querySelector('#img-ruang1-unit7a').setAttribute('src','./img_gedung/ruang_kelas_mg/kelasMg7a3/kelasMg_7a3_1.jpg');
            document.querySelector('#img-ruang2-unit7a').setAttribute('src','./img_gedung/ruang_kelas_mg/kelasMg7a3/kelasMg_7a3_2.jpg');
            document.querySelector('#img-ruang3-unit7a').setAttribute('src','./img_gedung/ruang_kelas_mg/kelasMg7a3/kelasMg_7a3_1.jpg');

          });
      }
    });
    //SARIA MARANTIKA
    aEntity14.addEventListener('click', function (ev, target) {
      const intersectedElement14 = ev && ev.detail && ev.detail.intersectedEl;
      if (imagePin14 && intersectedElement14 === imagePin14) {

        $('#exampleModalLong')
          .modal('show');
        document.querySelector('#exampleModalLongTitle').innerHTML = `${locations[13].unit.name_loca.toUpperCase()
          .bold()} - ${locations[13].unit.name.toUpperCase()
          .bold()}`;
        document.querySelector('#modal-body1').innerHTML = menuGedungUnit8();

        //LANTAI 1
        document.querySelector('#button1_unit8a')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = modalInfoRuangan_unit8();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[13].unit.lantai_1.room.ruangDosen.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit8').innerHTML = `${locations[13].unit.lantai_1.room.ruangDosen.desc}`;
            document.querySelector('#img-ruang1-unit8').setAttribute('src','./img_gedung/sariamarantika/lantai1/ruangDosenPak/ruangDosenPak.jpg');
            document.querySelector('#img-ruang2-unit8').setAttribute('src','./img_gedung/sariamarantika/lantai1/ruangDosenPak/ruangDosenPak2.jpg');
            document.querySelector('#img-ruang3-unit8').setAttribute('src','./img_gedung/sariamarantika/lantai1/ruangDosenPak/ruangDosenPak.jpg');

          });
        document.querySelector('#button2_unit8a')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = modalInfoRuangan_unit8();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[13].unit.lantai_1.room.adminFak.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit8').innerHTML = `${locations[13].unit.lantai_1.room.adminFak.desc}`;

            document.querySelector('#img-ruang1-unit8').setAttribute('src','./img_gedung/sariamarantika/lantai1/adminFak/adminfak1.jpg');
            document.querySelector('#img-ruang2-unit8').setAttribute('src','./img_gedung/sariamarantika/lantai1/adminFak/adminfak3.jpg');
            document.querySelector('#img-ruang3-unit8').setAttribute('src','./img_gedung/sariamarantika/lantai1/adminFak/adminfak4.png');

          });
        document.querySelector('#button3_unit8a')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = modalInfoRuangan_unit8();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[13].unit.lantai_1.room.adminMpak.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit8').innerHTML = `${locations[13].unit.lantai_1.room.adminMpak.desc}`;
            document.querySelector('#img-ruang1-unit8').setAttribute('src','./img_gedung/sariamarantika/lantai1/adminMpak/adminMpak.jpg');
            document.querySelector('#img-ruang2-unit8').setAttribute('src','./img_gedung/sariamarantika/lantai1/adminMpak/adminMpak.jpg');
            document.querySelector('#img-ruang3-unit8').setAttribute('src','./img_gedung/sariamarantika/lantai1/adminMpak/adminMpak.jpg');

          });
        document.querySelector('#button4_unit8a')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = modalInfoRuangan_unit8();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[13].unit.lantai_1.room.classroom_1.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit8').innerHTML = `${locations[13].unit.lantai_1.room.classroom_1.desc}`;
            document.querySelector('#img-ruang1-unit8').setAttribute('src','./img_gedung/sariamarantika/lantai1/kelasFak8a4/kelasFak_8a4_1.jpg');
            document.querySelector('#img-ruang2-unit8').setAttribute('src','./img_gedung/sariamarantika/lantai1/kelasFak8a4/kelasFak_8a4_2.jpg');
            document.querySelector('#img-ruang3-unit8').setAttribute('src','./img_gedung/sariamarantika/lantai1/kelasFak8a4/kelasFak_8a4_3.jpg');

          });

        //LANTAI 2
        document.querySelector('#button1_unit8b')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = modalInfoRuangan_unit8_kantorFar();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[13].unit.lantai_2.room.adminFar.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit8_adFar').innerHTML = `${locations[13].unit.lantai_2.room.adminFar.desc}`;
            document.querySelector('#img-ruang1-unit8-adFar').setAttribute('src','./img_gedung/sariamarantika/lantai2/adminFar/adminfar1.jpg');
            document.querySelector('#img-ruang2-unit8-adFar').setAttribute('src','./img_gedung/sariamarantika/lantai2/adminFar/adminFar4.png');
            document.querySelector('#img-ruang3-unit8-adFar').setAttribute('src','./img_gedung/sariamarantika/lantai2/adminFar/adminFar5.png');
            document.querySelector('#img-ruang4-unit8-adFar').setAttribute('src','./img_gedung/sariamarantika/lantai2/adminFar/dekan_far.png');
            document.querySelector('#img-ruang5-unit8-adFar').setAttribute('src','./img_gedung/sariamarantika/lantai2/adminFar/ruang_dosen_far1.png');
            document.querySelector('#img-ruang6-unit8-adFar').setAttribute('src','./img_gedung/sariamarantika/lantai2/adminFar/ruang_dosen_far2.png');
            document.querySelector('#img-ruang7-unit8-adFar').setAttribute('src','./img_gedung/sariamarantika/lantai2/adminFar/ruang_dosen_far3.png');
            document.querySelector('#img-ruang8-unit8-adFar').setAttribute('src','./img_gedung/sariamarantika/lantai2/adminFar/ruang_rapat_far1.png');
            document.querySelector('#img-ruang9-unit8-adFar').setAttribute('src','./img_gedung/sariamarantika/lantai2/adminFar/ruang_rapat_far2.png');


          });
        document.querySelector('#button2_unit8b')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = modalInfoRuangan_unit8();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[13].unit.lantai_2.room.classroom_1.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit8').innerHTML = `${locations[13].unit.lantai_2.room.classroom_1.desc}`;
            document.querySelector('#img-ruang1-unit8').setAttribute('src','./img_gedung/sariamarantika/lantai2/kelasFar/kelasfar1.jpg');
            document.querySelector('#img-ruang2-unit8').setAttribute('src','./img_gedung/sariamarantika/lantai2/kelasFar/kelasfar2.jpg');
            document.querySelector('#img-ruang3-unit8').setAttribute('src','./img_gedung/sariamarantika/lantai2/kelasFar/kelasfar3.png');

          });
        document.querySelector('#button3_unit8b')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = modalInfoRuangan_unit8();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[13].unit.lantai_2.room.classroom_2.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit8').innerHTML = `${locations[13].unit.lantai_2.room.classroom_2.desc}`;
            document.querySelector('#img-ruang1-unit8').setAttribute('src','./img_gedung/sariamarantika/lantai2/kelasFak8b3/kelasFak_8b3_1.jpg');
            document.querySelector('#img-ruang2-unit8').setAttribute('src','./img_gedung/sariamarantika/lantai2/kelasFak8b3/kelasFak_8b3_2.jpg');
            document.querySelector('#img-ruang3-unit8').setAttribute('src','./img_gedung/sariamarantika/lantai2/kelasFak8b3/kelasFak_8b3_3.jpg');

          });
        document.querySelector('#button4_unit8b')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = modalInfoRuangan_unit8();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[13].unit.lantai_2.room.classroom_3.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit8').innerHTML = `${locations[13].unit.lantai_2.room.classroom_3.desc}`;
            document.querySelector('#img-ruang1-unit8').setAttribute('src','./img_gedung/sariamarantika/lantai2/kelasFak8b4/kelasFak_8b4_1.jpg');
            document.querySelector('#img-ruang2-unit8').setAttribute('src','./img_gedung/sariamarantika/lantai2/kelasFak8b4/kelasFak_8b4_2.jpg');
            document.querySelector('#img-ruang3-unit8').setAttribute('src','./img_gedung/sariamarantika/lantai2/kelasFak8b4/kelasFak_8b4_3.jpg');

          });

        //LANTAI 3
        document.querySelector('#button1_unit8c')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = modalInfoRuangan_unit8();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[13].unit.lantai_3.room.farmasetika.name.toUpperCase()
              .bold()}`;
            document.querySelector('#descInfoRuangan_unit8').innerHTML = `${locations[13].unit.lantai_3.room.farmasetika.desc}`;
            document.querySelector('#img-ruang1-unit8').setAttribute('src','./img_gedung/sariamarantika/lantai3/farmasetika/farmasetika1.jpg');
            document.querySelector('#img-ruang2-unit8').setAttribute('src','./img_gedung/sariamarantika/lantai3/farmasetika/farmasetika2.jpg');
            document.querySelector('#img-ruang3-unit8').setAttribute('src','./img_gedung/sariamarantika/lantai3/farmasetika/farmasetika5.png');

          });
        document.querySelector('#button2_unit8c')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = modalInfoRuangan_unit8();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[13].unit.lantai_3.room.biologi.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit8').innerHTML = `${locations[13].unit.lantai_3.room.biologi.desc}`;
            document.querySelector('#img-ruang1-unit8').setAttribute('src','./img_gedung/sariamarantika/lantai3/biologi/biologi1.jpg');
            document.querySelector('#img-ruang2-unit8').setAttribute('src','./img_gedung/sariamarantika/lantai3/biologi/biologi2.jpg');
            document.querySelector('#img-ruang3-unit8').setAttribute('src','./img_gedung/sariamarantika/lantai3/biologi/biologi5.png');

          });
        document.querySelector('#button3_unit8c')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = modalInfoRuangan_unit8();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[13].unit.lantai_3.room.aula.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit8').innerHTML = `${locations[13].unit.lantai_3.room.aula.desc}`;
            document.querySelector('#img-ruang1-unit8').setAttribute('src','./img_gedung/sariamarantika/lantai3/aula/aula1.jpg');
            document.querySelector('#img-ruang2-unit8').setAttribute('src','./img_gedung/sariamarantika/lantai3/aula/aula2.jpg');
            document.querySelector('#img-ruang3-unit8').setAttribute('src','./img_gedung/sariamarantika/lantai3/aula/aula3.jpg');

          });
      }
    });
    //LAB FARMASI
    aEntity15.addEventListener('click', function (ev, target) {
      const intersectedElement15 = ev && ev.detail && ev.detail.intersectedEl;
      if (imagePin15 && intersectedElement15 === imagePin15) {
        $('#exampleModalLong')
          .modal('show');
        document.querySelector('#exampleModalLongTitle').innerHTML = `${locations[14].unit.name_loca.toUpperCase()
          .bold()} - ${locations[14].unit.name.toUpperCase()
          .bold()}`;
        document.querySelector('#modal-body1').innerHTML = infoGedung_unit8d();

        //btn menu ruangan
        document.querySelector('#button1_unit8d').innerHTML = `${locations[14].unit.room.labEnergi.name}`;
        document.querySelector('#button2_unit8d').innerHTML = `${locations[14].unit.room.labDisCom.name}`;
        document.querySelector('#button3_unit8d').innerHTML = `${locations[14].unit.room.farmakologi.name}`;
        document.querySelector('#button4_unit8d').innerHTML = `${locations[14].unit.room.kewirausahaan.name}`;
        document.querySelector('#button5_unit8d').innerHTML = `${locations[14].unit.room.laboran.name}`;
        document.querySelector('#button6_unit8d').innerHTML = `${locations[14].unit.room.kimia.name}`;
        document.querySelector('#button7_unit8d').innerHTML = `${locations[14].unit.room.hewanUji.name}`;
        document.querySelector('#button8_unit8d').innerHTML = `${locations[14].unit.room.kesehatan.name}`;

        document.querySelector('#button1_unit8d')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = infoRuangan_unit8d();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[14].unit.room.labEnergi.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit8d').innerHTML = `${locations[14].unit.room.labEnergi.desc}`;
            document.querySelector('#img-ruang1-unit8d').setAttribute('src','./img_gedung/lab_farmasi/energi/labEnergi1.jpg');
            document.querySelector('#img-ruang2-unit8d').setAttribute('src','./img_gedung/lab_farmasi/energi/labEnergi2.jpg');
            document.querySelector('#img-ruang3-unit8d').setAttribute('src','./img_gedung/lab_farmasi/energi/labEnergi3.jpg');

          });
        document.querySelector('#button2_unit8d')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = infoRuangan_unit8d();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[14].unit.room.labDisCom.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit8d').innerHTML = `${locations[14].unit.room.labDisCom.desc}`;
            document.querySelector('#img-ruang1-unit8d').setAttribute('src','./img_gedung/lab_farmasi/discom/labDiscom1.jpg');
            document.querySelector('#img-ruang2-unit8d').setAttribute('src','./img_gedung/lab_farmasi/discom/labDiscom2.jpg');
            document.querySelector('#img-ruang3-unit8d').setAttribute('src','./img_gedung/lab_farmasi/discom/labDiscom4.jpg');

          });
        document.querySelector('#button3_unit8d')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = infoRuangan_unit8d();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[14].unit.room.farmakologi.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit8d').innerHTML = `${locations[14].unit.room.farmakologi.desc}`;
            document.querySelector('#img-ruang1-unit8d').setAttribute('src','./img_gedung/lab_farmasi/farmakologi/labFarmakologi4.png');
            document.querySelector('#img-ruang2-unit8d').setAttribute('src','./img_gedung/lab_farmasi/farmakologi/labFarmakologi5.png');
            document.querySelector('#img-ruang3-unit8d').setAttribute('src','./img_gedung/lab_farmasi/farmakologi/labFarmakologi6.png');

          });
        document.querySelector('#button4_unit8d')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = infoRuangan_unit8d();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[14].unit.room.kewirausahaan.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit8d').innerHTML = `${locations[14].unit.room.kewirausahaan.desc}`;

            document.querySelector('#img-ruang1-unit8d').setAttribute('src','./img_gedung/lab_farmasi/kewirausahaan/kewirausahaan4.png');
            document.querySelector('#img-ruang2-unit8d').setAttribute('src','./img_gedung/lab_farmasi/kewirausahaan/kewirausahaan2.jpg');
            document.querySelector('#img-ruang3-unit8d').setAttribute('src','./img_gedung/lab_farmasi/kewirausahaan/kewirausahaan3.jpg');

          });
        document.querySelector('#button5_unit8d')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = infoRuangan_unit8d();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[14].unit.room.laboran.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit8d').innerHTML = `${locations[14].unit.room.laboran.desc}`;
            document.querySelector('#img-ruang1-unit8d').setAttribute('src','./img_gedung/lab_farmasi/laboran/laboran1.jpg');
            document.querySelector('#img-ruang2-unit8d').setAttribute('src','./img_gedung/lab_farmasi/laboran/laboran2.jpg');
            document.querySelector('#img-ruang3-unit8d').setAttribute('src','./img_gedung/lab_farmasi/laboran/laboran3.jpg');

          });
        document.querySelector('#button6_unit8d')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = infoRuangan_unit8d();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[14].unit.room.kimia.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit8d').innerHTML = `${locations[14].unit.room.kimia.desc}`;
            document.querySelector('#img-ruang1-unit8d').setAttribute('src','./img_gedung/lab_farmasi/kimia/labKimia4.png');
            document.querySelector('#img-ruang2-unit8d').setAttribute('src','./img_gedung/lab_farmasi/kimia/labKimia5.png');
            document.querySelector('#img-ruang3-unit8d').setAttribute('src','./img_gedung/lab_farmasi/kimia/labKimia6.png');

          });
        document.querySelector('#button7_unit8d')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = infoRuangan_unit8d();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[14].unit.room.hewanUji.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit8d').innerHTML = `${locations[14].unit.room.hewanUji.desc}`;
            document.querySelector('#img-ruang1-unit8d').setAttribute('src','./img_gedung/lab_farmasi/hewan_uji/labHewanUji1.jpg');
            document.querySelector('#img-ruang2-unit8d').setAttribute('src','./img_gedung/lab_farmasi/hewan_uji/labHewanUji2.jpg');
            document.querySelector('#img-ruang3-unit8d').setAttribute('src','./img_gedung/lab_farmasi/hewan_uji/labHewanUji3.jpg');

          });

        document.querySelector('#button8_unit8d')
          .addEventListener('click', function (ev, target) {
            document.querySelector('#modal-body2').innerHTML = infoRuangan_unit8d();
            document.querySelector('#exampleModalLabel').innerHTML = `${locations[14].unit.room.kesehatan.name.toUpperCase().bold()}`;
            document.querySelector('#descInfoRuangan_unit8d').innerHTML = `${locations[14].unit.room.kesehatan.desc}`;
            document.querySelector('#img-ruang1-unit8d').setAttribute('src','./img_gedung/lab_farmasi/kesehatan/kesehatan1.png');
            document.querySelector('#img-ruang2-unit8d').setAttribute('src','./img_gedung/lab_farmasi/kesehatan/kesehatan2.png');
            document.querySelector('#img-ruang3-unit8d').setAttribute('src','./img_gedung/lab_farmasi/kesehatan/kesehatan3.png');

          });
      }
    });
//   }
// });

export {
  aEntity,
  aEntity2,
  aEntity3,
  aEntity4,
  aEntity5,
  aEntity6,
  aEntity7,
  aEntity8,
  aEntity9,
  aEntity10,
  aEntity11,
  aEntity12,
  aEntity13,
  aEntity14,
  aEntity15
}
