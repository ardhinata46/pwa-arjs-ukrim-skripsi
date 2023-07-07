import locations from './locations';

window.addEventListener('load', () => {

  //Kapel(Unit I A)
  const aEntity = document.getElementById('entity-handler');
  const menu = aEntity.querySelector('#menu');
  const imgPin = aEntity.querySelector('#image-pin');
  const infoBackground = aEntity.querySelector('#infoBackground');
  const placeName = locations[0].unit.name_loca;
  const descUnit = locations[0].unit.desc;
  const textPlaceName = aEntity.querySelector('#text-distance');
  const textDescUnit = aEntity.querySelector('#descUnit');
  const infoData = aEntity.querySelector('#infoData');

  aEntity.addEventListener('gps-entity-place-update-positon', (event) => {
    if (event.detail.distance > 60) {
      aEntity.setAttribute('visible', false);
    }
    if (event.detail.distance < 20) {
      menu.setAttribute('visible', true);
      menu.setAttribute('position', '0 0 0');
      imgPin.setAttribute('visible', false);
      infoBackground.setAttribute('position', '0 1.5 0');
      infoBackground.setAttribute('slice9', 'color: #9c1010');
      textPlaceName.setAttribute('text', `value: ${placeName.toUpperCase()}`);
      textDescUnit.setAttribute('text', `value: ${descUnit}`);
    } else {
      menu.setAttribute('visible', false);
      imgPin.setAttribute('visible', true);
      infoData.setAttribute('position', '0 0.1 1');
    }
  });

  //Perpustakaan UKRIM(Unit I B)
  const aEntity2 = document.getElementById('entity-handler2');
  const menu2 = aEntity2.querySelector('#menu2');
  const imgPin2 = aEntity2.querySelector('#image-pin2');
  const infoBackground2 = aEntity2.querySelector('#infoBackground2');
  const placeName2 = locations[1].unit.name_loca;
  const descUnit2 = locations[1].unit.desc;
  const textPlaceName2 = aEntity2.querySelector('#text-distance2');
  const textDescUnit2 = aEntity2.querySelector('#descUnit2');
  const infoData2 = aEntity2.querySelector('#infoData2');

  aEntity2.addEventListener('gps-entity-place-update-positon', (event) => {
    if (event.detail.distance > 60) {
      aEntity2.setAttribute('visible', false);
    }
    if (event.detail.distance < 20) {
      menu2.setAttribute('visible', true);
      menu2.setAttribute('position', '0 0 0');
      imgPin2.setAttribute('visible', false);
      infoBackground2.setAttribute('position', '0 1.5 0');
      infoBackground2.setAttribute('slice9', 'color: #9c1010');
      textPlaceName2.setAttribute('text', `value: ${placeName2.toUpperCase()}`);
      textDescUnit2.setAttribute('text', `value: ${descUnit2}`);
    } else {
      menu2.setAttribute('visible', false);
      imgPin2.setAttribute('visible', true);
      infoData2.setAttribute('position', '0 0.1 1');
    }
  });

  //Teknik Sipil (UNIT II A)
  const aEntity3 = document.getElementById('entity-handler3');
  const menu3 = aEntity3.querySelector('#menu3');
  const imgPin3 = aEntity3.querySelector('#image-pin3');
  const infoBackground3 = aEntity3.querySelector('#infoBackground3');
  const textPlaceName3 = aEntity3.querySelector('#text-distance3');
  const infoData3 = aEntity3.querySelector('#infoData3');

  const btnMenuSipil1 = aEntity3.querySelector('#btnMenuTs1');
  const btnMenuSipil2 = aEntity3.querySelector('#btnMenuTs2');
  const btnMenuSipil3 = aEntity3.querySelector('#btnMenuTs3');
  const btnMenuSipil4 = aEntity3.querySelector('#btnMenuTs4');
  const btnMenuSipil5 = aEntity3.querySelector('#btnMenuTs5');

  const textDescRoomTs1 = aEntity3.querySelector('#descRoomTs1');
  const textDescRoomTs2 = aEntity3.querySelector('#descRoomTs2');
  const textDescRoomTs3 = aEntity3.querySelector('#descRoomTs3');
  const textDescRoomTs4 = aEntity3.querySelector('#descRoomTs4');
  const textDescRoomTs5 = aEntity3.querySelector('#descRoomTs5');

  const textTitleRoomTs1 = aEntity3.querySelector('#titleRoomTs1');
  const textTitleRoomTs2 = aEntity3.querySelector('#titleRoomTs2');
  const textTitleRoomTs3 = aEntity3.querySelector('#titleRoomTs3');
  const textTitleRoomTs4 = aEntity3.querySelector('#titleRoomTs4');
  const textTitleRoomTs5 = aEntity3.querySelector('#titleRoomTs5');

  const descRoomTs1 = locations[2].unit.room.office.desc;
  const descRoomTs2 = locations[2].unit.room.classroom_1.desc;
  const descRoomTs3 = locations[2].unit.room.classroom_2.desc;
  const descRoomTs4 = locations[2].unit.room.classroom_3.desc;
  const descRoomTs5 = locations[2].unit.room.classroom_4.desc;
  const placeName3 = locations[2].unit.name_loca;

  const titleRoomTs1 = locations[2].unit.room.office.name;
  const titleRoomTs2 = locations[2].unit.room.classroom_1.name;
  const titleRoomTs3 = locations[2].unit.room.classroom_2.name;
  const titleRoomTs4 = locations[2].unit.room.classroom_3.name;
  const titleRoomTs5 = locations[2].unit.room.classroom_4.name;

  aEntity3.addEventListener('gps-entity-place-update-positon', (event) => {
    if (event.detail.distance > 60) {
      aEntity3.setAttribute('visible', false);
    }
    if (event.detail.distance < 20) {
      menu3.setAttribute('visible', true);
      menu3.setAttribute('position', '0 0 0');
      imgPin3.setAttribute('visible', false);
      infoBackground3.setAttribute('position', '0 1.5 0');
      infoBackground3.setAttribute('slice9', 'color: #9c1010');
      textPlaceName3.setAttribute('text', `value: ${placeName3.toUpperCase()}`);
      infoData3.setAttribute('position', '0 1.4 1');

      btnMenuSipil1.setAttribute('value', titleRoomTs1.toUpperCase());
      btnMenuSipil2.setAttribute('value', titleRoomTs2.toUpperCase());
      btnMenuSipil3.setAttribute('value', titleRoomTs3.toUpperCase());
      btnMenuSipil4.setAttribute('value', titleRoomTs4.toUpperCase());
      btnMenuSipil5.setAttribute('value', titleRoomTs5.toUpperCase());

      textDescRoomTs1.setAttribute('text', `value: ${descRoomTs1}`);
      textDescRoomTs2.setAttribute('text', `value: ${descRoomTs2}`);
      textDescRoomTs3.setAttribute('text', `value: ${descRoomTs3}`);
      textDescRoomTs4.setAttribute('text', `value: ${descRoomTs4}`);
      textDescRoomTs5.setAttribute('text', `value: ${descRoomTs5}`);

      textTitleRoomTs1.setAttribute('text', `value: ${titleRoomTs1.toUpperCase()}`);
      textTitleRoomTs2.setAttribute('text', `value: ${titleRoomTs2.toUpperCase()}`);
      textTitleRoomTs3.setAttribute('text', `value: ${titleRoomTs3.toUpperCase()}`);
      textTitleRoomTs4.setAttribute('text', `value: ${titleRoomTs4.toUpperCase()}`);
      textTitleRoomTs5.setAttribute('text', `value: ${titleRoomTs5.toUpperCase()}`);

    } else {
      menu3.setAttribute('visible', false);
      imgPin3.setAttribute('visible', true);
      infoData3.setAttribute('position', '0 0.1 1');
    }
  });

  //ASRAMA UKRIM (UNIT II B)
  const aEntity4 = document.getElementById('entity-handler4');
  const menu4 = aEntity4.querySelector('#menu4');
  const imgPin4 = aEntity4.querySelector('#image-pin4');
  const infoBackground4 = aEntity4.querySelector('#infoBackground4');
  const placeName4 = locations[3].unit.name_loca;
  const descUnit4 = locations[3].unit.desc;
  const textPlaceName4 = aEntity4.querySelector('#text-distance4');
  const textDescUnit4 = aEntity4.querySelector('#descUnit4');
  const infoData4 = aEntity4.querySelector('#infoData4');

  aEntity4.addEventListener('gps-entity-place-update-positon', (event) => {
    if (event.detail.distance > 60) {
      aEntity4.setAttribute('visible', false);
    }
    if (event.detail.distance < 20) {
      menu4.setAttribute('visible', true);
      menu4.setAttribute('position', '0 0 0');
      imgPin4.setAttribute('visible', false);
      infoBackground4.setAttribute('position', '0 1.5 0');
      infoBackground4.setAttribute('slice9', 'color: #9c1010');
      textPlaceName4.setAttribute('text', `value: ${placeName4.toUpperCase()}`);
      textDescUnit4.setAttribute('text', `value: ${descUnit4}`);
    } else {
      menu4.setAttribute('visible', false);
      imgPin4.setAttribute('visible', true);
      infoData4.setAttribute('position', '0 0.1 1');
    }
  });

  //UNIT III
  const aEntity5 = document.getElementById('entity-handler5');
  const menu5 = aEntity5.querySelector('#menu5');
  const imgPin5 = aEntity5.querySelector('#image-pin5');
  const infoBackground5 = aEntity5.querySelector('#infoBackground5');
  const textPlaceName5 = aEntity5.querySelector('#text-distance5');
  const infoData5 = aEntity5.querySelector('#infoData5');
  const unit3aName = locations[4].unit.lantai_1.name;
  const unit3bName = locations[4].unit.lantai_2.name;
  const btnMenulantai1_unit3 = aEntity5.querySelector('#btnMenulantai1_unit3');
  const btnMenulantai2_unit3 = aEntity5.querySelector('#btnMenulantai2_unit3');

  //LANTAI I
  const btnRoom1Unit3a = aEntity5.querySelector('#btnRoom1Unit3a');
  const btnRoom2Unit3a = aEntity5.querySelector('#btnRoom2Unit3a');
  const btnRoom3Unit3a = aEntity5.querySelector('#btnRoom3Unit3a');
  const btnRoom4Unit3a = aEntity5.querySelector('#btnRoom4Unit3a');
  const btnRoom5Unit3a = aEntity5.querySelector('#btnRoom5Unit3a');
  const btnRoom6Unit3a = aEntity5.querySelector('#btnRoom6Unit3a');
  const btnRoom7Unit3a = aEntity5.querySelector('#btnRoom7Unit3a');

  const textTitleRoom1_Unit3a = locations[4].unit.lantai_1.room.fiskomOffice.name;
  const textTitleRoom2_Unit3a = locations[4].unit.lantai_1.room.febiOffice.name;
  const textTitleRoom3_Unit3a = locations[4].unit.lantai_1.room.labCo.name;
  const textTitleRoom4_Unit3a = locations[4].unit.lantai_1.room.bursaEffek.name;
  const textTitleRoom5_Unit3a = locations[4].unit.lantai_1.room.classroom_1.name;
  const textTitleRoom6_Unit3a = locations[4].unit.lantai_1.room.classroom_2.name;
  const textTitleRoom7_Unit3a = locations[4].unit.lantai_1.room.classroom_3.name;

  const titleRoom1_unit3a = aEntity5.querySelector('#titleRoom1_unit3a');
  const titleRoom2_unit3a = aEntity5.querySelector('#titleRoom2_unit3a');
  const titleRoom3_unit3a = aEntity5.querySelector('#titleRoom3_unit3a');
  const titleRoom4_unit3a = aEntity5.querySelector('#titleRoom4_unit3a');
  const titleRoom5_unit3a = aEntity5.querySelector('#titleRoom5_unit3a');
  const titleRoom6_unit3a = aEntity5.querySelector('#titleRoom6_unit3a');
  const titleRoom7_unit3a = aEntity5.querySelector('#titleRoom7_unit3a');

  const descRoom1_unit3a = aEntity5.querySelector('#descRoom1_unit3a');
  const descRoom2_unit3a = aEntity5.querySelector('#descRoom2_unit3a');
  const descRoom3_unit3a = aEntity5.querySelector('#descRoom3_unit3a');
  const descRoom4_unit3a = aEntity5.querySelector('#descRoom4_unit3a');
  const descRoom5_unit3a = aEntity5.querySelector('#descRoom5_unit3a');
  const descRoom6_unit3a = aEntity5.querySelector('#descRoom6_unit3a');
  const descRoom7_unit3a = aEntity5.querySelector('#descRoom7_unit3a');

  const textDescRoom1_unit3a = locations[4].unit.lantai_1.room.fiskomOffice.desc;
  const textDescRoom2_unit3a = locations[4].unit.lantai_1.room.febiOffice.desc;
  const textDescRoom3_unit3a = locations[4].unit.lantai_1.room.labCo.desc;
  const textDescRoom4_unit3a = locations[4].unit.lantai_1.room.bursaEffek.desc;
  const textDescRoom5_unit3a = locations[4].unit.lantai_1.room.classroom_1.desc;
  const textDescRoom6_unit3a = locations[4].unit.lantai_1.room.classroom_2.desc;
  const textDescRoom7_unit3a = locations[4].unit.lantai_1.room.classroom_3.desc;

  //LANTAI II
  const btnRoom1Unit3b = aEntity5.querySelector('#btnRoom1Unit3b');
  const btnRoom2Unit3b = aEntity5.querySelector('#btnRoom2Unit3b');
  const btnRoom3Unit3b = aEntity5.querySelector('#btnRoom3Unit3b');
  const btnRoom4Unit3b = aEntity5.querySelector('#btnRoom4Unit3b');
  const btnRoom5Unit3b = aEntity5.querySelector('#btnRoom5Unit3b');
  const btnRoom6Unit3b = aEntity5.querySelector('#btnRoom6Unit3b');
  const btnRoom7Unit3b = aEntity5.querySelector('#btnRoom7Unit3b');

  const textTitleRoom1_Unit3b = locations[4].unit.lantai_2.room.rectorate.name;
  const textTitleRoom2_Unit3b = locations[4].unit.lantai_2.room.adak.name;
  const textTitleRoom3_Unit3b = locations[4].unit.lantai_2.room.transit.name;
  const textTitleRoom4_Unit3b = locations[4].unit.lantai_2.room.labPuskomAb.name;
  const textTitleRoom5_Unit3b = locations[4].unit.lantai_2.room.labPuskomCd.name;
  const textTitleRoom6_Unit3b = locations[4].unit.lantai_2.room.bimbingan.name;
  const textTitleRoom7_Unit3b = locations[4].unit.lantai_2.room.classroom_1.name;

  const titleRoom1_unit3b = aEntity5.querySelector('#titleRoom1_unit3b');
  const titleRoom2_unit3b = aEntity5.querySelector('#titleRoom2_unit3b');
  const titleRoom3_unit3b = aEntity5.querySelector('#titleRoom3_unit3b');
  const titleRoom4_unit3b = aEntity5.querySelector('#titleRoom4_unit3b');
  const titleRoom5_unit3b = aEntity5.querySelector('#titleRoom5_unit3b');
  const titleRoom6_unit3b = aEntity5.querySelector('#titleRoom6_unit3b');
  const titleRoom7_unit3b = aEntity5.querySelector('#titleRoom7_unit3b');

  const descRoom1_unit3b = aEntity5.querySelector('#descRoom1_unit3b');
  const descRoom2_unit3b = aEntity5.querySelector('#descRoom2_unit3b');
  const descRoom3_unit3b = aEntity5.querySelector('#descRoom3_unit3b');
  const descRoom4_unit3b = aEntity5.querySelector('#descRoom4_unit3b');
  const descRoom5_unit3b = aEntity5.querySelector('#descRoom5_unit3b');
  const descRoom6_unit3b = aEntity5.querySelector('#descRoom6_unit3b');
  const descRoom7_unit3b = aEntity5.querySelector('#descRoom7_unit3b');

  const textDescRoom1_unit3b = locations[4].unit.lantai_2.room.rectorate.desc;
  const textDescRoom2_unit3b = locations[4].unit.lantai_2.room.adak.desc;
  const textDescRoom3_unit3b = locations[4].unit.lantai_2.room.transit.desc;
  const textDescRoom4_unit3b = locations[4].unit.lantai_2.room.labPuskomAb.desc;
  const textDescRoom5_unit3b = locations[4].unit.lantai_2.room.labPuskomCd.desc;
  const textDescRoom6_unit3b = locations[4].unit.lantai_2.room.bimbingan.desc;
  const textDescRoom7_unit3b = locations[4].unit.lantai_2.room.classroom_1.desc;

  aEntity5.addEventListener('gps-entity-place-update-positon', (event) => {
    if (event.detail.distance > 60) {
      aEntity5.setAttribute('visible', false);
    }
    if (event.detail.distance < 20) {
      menu5.setAttribute('visible', true);
      menu5.setAttribute('position', '0 0 0');
      imgPin5.setAttribute('visible', false);
      infoBackground5.setAttribute('position', '0 1.5 0');
      infoBackground5.setAttribute('slice9', 'color: #9c1010');
      textPlaceName5.setAttribute('text', `value: ${unit3aName.toUpperCase()}, ${unit3bName.toUpperCase()}`);
      textPlaceName5.setAttribute('text', 'width: 3');
      infoData5.setAttribute('position', '0 1.4 1');
      btnMenulantai1_unit3.setAttribute('text', `value: ${unit3aName.toUpperCase()}`);
      btnMenulantai2_unit3.setAttribute('text', `value: ${unit3bName.toUpperCase()}`);

      // LANTAI I
      btnRoom1Unit3a.setAttribute('value', textTitleRoom1_Unit3a.toUpperCase());
      btnRoom2Unit3a.setAttribute('value', textTitleRoom2_Unit3a.toUpperCase());
      btnRoom3Unit3a.setAttribute('value', textTitleRoom3_Unit3a.toUpperCase());
      btnRoom4Unit3a.setAttribute('value', textTitleRoom4_Unit3a.toUpperCase());
      btnRoom5Unit3a.setAttribute('value', textTitleRoom5_Unit3a.toUpperCase());
      btnRoom6Unit3a.setAttribute('value', textTitleRoom6_Unit3a.toUpperCase());
      btnRoom7Unit3a.setAttribute('value', textTitleRoom7_Unit3a.toUpperCase());

      titleRoom1_unit3a.setAttribute('text', `value: ${textTitleRoom1_Unit3a.toUpperCase()}`);
      titleRoom2_unit3a.setAttribute('text', `value: ${textTitleRoom2_Unit3a.toUpperCase()}`);
      titleRoom3_unit3a.setAttribute('text', `value: ${textTitleRoom3_Unit3a.toUpperCase()}`);
      titleRoom4_unit3a.setAttribute('text', `value: ${textTitleRoom4_Unit3a.toUpperCase()}`);
      titleRoom5_unit3a.setAttribute('text', `value: ${textTitleRoom5_Unit3a.toUpperCase()}`);
      titleRoom6_unit3a.setAttribute('text', `value: ${textTitleRoom6_Unit3a.toUpperCase()}`);
      titleRoom7_unit3a.setAttribute('text', `value: ${textTitleRoom7_Unit3a.toUpperCase()}`);

      descRoom1_unit3a.setAttribute('text', `value: ${textDescRoom1_unit3a}`);
      descRoom2_unit3a.setAttribute('text', `value: ${textDescRoom2_unit3a}`);
      descRoom3_unit3a.setAttribute('text', `value: ${textDescRoom3_unit3a}`);
      descRoom4_unit3a.setAttribute('text', `value: ${textDescRoom4_unit3a}`);
      descRoom5_unit3a.setAttribute('text', `value: ${textDescRoom5_unit3a}`);
      descRoom6_unit3a.setAttribute('text', `value: ${textDescRoom6_unit3a}`);
      descRoom7_unit3a.setAttribute('text', `value: ${textDescRoom7_unit3a}`);

      // LANTAI II
      btnRoom1Unit3b.setAttribute('value', textTitleRoom1_Unit3b.toUpperCase());
      btnRoom2Unit3b.setAttribute('value', textTitleRoom2_Unit3b.toUpperCase());
      btnRoom3Unit3b.setAttribute('value', textTitleRoom3_Unit3b.toUpperCase());
      btnRoom4Unit3b.setAttribute('value', textTitleRoom4_Unit3b.toUpperCase());
      btnRoom5Unit3b.setAttribute('value', textTitleRoom5_Unit3b.toUpperCase());
      btnRoom6Unit3b.setAttribute('value', textTitleRoom6_Unit3b.toUpperCase());
      btnRoom7Unit3b.setAttribute('value', textTitleRoom7_Unit3b.toUpperCase());

      titleRoom1_unit3b.setAttribute('text', `value: ${textTitleRoom1_Unit3b.toUpperCase()}`);
      titleRoom2_unit3b.setAttribute('text', `value: ${textTitleRoom2_Unit3b.toUpperCase()}`);
      titleRoom3_unit3b.setAttribute('text', `value: ${textTitleRoom3_Unit3b.toUpperCase()}`);
      titleRoom4_unit3b.setAttribute('text', `value: ${textTitleRoom4_Unit3b.toUpperCase()}`);
      titleRoom5_unit3b.setAttribute('text', `value: ${textTitleRoom5_Unit3b.toUpperCase()}`);
      titleRoom6_unit3b.setAttribute('text', `value: ${textTitleRoom6_Unit3b.toUpperCase()}`);
      titleRoom7_unit3b.setAttribute('text', `value: ${textTitleRoom7_Unit3b.toUpperCase()}`);

      descRoom1_unit3b.setAttribute('text', `value: ${textDescRoom1_unit3b}`);
      descRoom2_unit3b.setAttribute('text', `value: ${textDescRoom2_unit3b}`);
      descRoom3_unit3b.setAttribute('text', `value: ${textDescRoom3_unit3b}`);
      descRoom4_unit3b.setAttribute('text', `value: ${textDescRoom4_unit3b}`);
      descRoom5_unit3b.setAttribute('text', `value: ${textDescRoom5_unit3b}`);
      descRoom6_unit3b.setAttribute('text', `value: ${textDescRoom6_unit3b}`);
      descRoom7_unit3b.setAttribute('text', `value: ${textDescRoom7_unit3b}`);

    } else {
      menu5.setAttribute('visible', false);
      imgPin5.setAttribute('visible', true);
      infoData5.setAttribute('position', '0 0.1 1');
    }
  });

  //UNIT III C
  const aEntity6 = document.getElementById('entity-handler6');
  const menu6 = aEntity6.querySelector('#menu6');
  const imgPin6 = aEntity6.querySelector('#image-pin6');
  const infoBackground6 = aEntity6.querySelector('#infoBackground6');
  const textPlaceName6 = aEntity6.querySelector('#text-distance6');
  const infoData6 = aEntity6.querySelector('#infoData6');
  const placeName6 = locations[5].unit.name;

  const btnMenuUnit3c1 = aEntity6.querySelector('#btnMenuUnit3c1');
  const btnMenuUnit3c2 = aEntity6.querySelector('#btnMenuUnit3c2');
  const btnMenuUnit3c3 = aEntity6.querySelector('#btnMenuUnit3c3');

  const textDescRoomUnit3c1 = aEntity6.querySelector('#descRoomUnit3c1');
  const textDescRoomUnit3c2 = aEntity6.querySelector('#descRoomUnit3c2');
  const textDescRoomUnit3c3 = aEntity6.querySelector('#descRoomUnit3c3');

  const textTitleRoomUnit3c1 = aEntity6.querySelector('#titleRoomUnit3c1');
  const textTitleRoomUnit3c2 = aEntity6.querySelector('#titleRoomUnit3c2');
  const textTitleRoomUnit3c3 = aEntity6.querySelector('#titleRoomUnit3c3');

  const descRoomUnit3c1 = locations[5].unit.room.classroom_1.desc;
  const descRoomUnit3c2 = locations[5].unit.room.classroom_2.desc;
  const descRoomUnit3c3 = locations[5].unit.room.classroom_3.desc;

  const titleRoomUnit3c1 = locations[5].unit.room.classroom_1.name;
  const titleRoomUnit3c2 = locations[5].unit.room.classroom_2.name;
  const titleRoomUnit3c3 = locations[5].unit.room.classroom_3.name;

  aEntity6.addEventListener('gps-entity-place-update-positon', (event) => {
    if (event.detail.distance > 60) {
      aEntity6.setAttribute('visible', false);
    }
    if (event.detail.distance < 20) {
      menu6.setAttribute('visible', true);
      menu6.setAttribute('position','0 0 0');
      imgPin6.setAttribute('visible', false);
      infoBackground6.setAttribute('position','0 1.5 0')
      infoBackground6.setAttribute('slice9', 'color: #9c1010');
      // textPlaceName6.setAttribute('text',`value: ${placeName6.toUpperCase()}`);
      infoData6.setAttribute('position','0 1.4 1');

      btnMenuUnit3c1.setAttribute('value', titleRoomUnit3c1.toUpperCase());
      btnMenuUnit3c2.setAttribute('value', titleRoomUnit3c2.toUpperCase());
      btnMenuUnit3c3.setAttribute('value', titleRoomUnit3c3.toUpperCase());

      textDescRoomUnit3c1.setAttribute('text',`value: ${descRoomUnit3c1}`);
      textDescRoomUnit3c2.setAttribute('text',`value: ${descRoomUnit3c2}`);
      textDescRoomUnit3c3.setAttribute('text',`value: ${descRoomUnit3c3}`);

      textTitleRoomUnit3c1.setAttribute('text',`value: ${titleRoomUnit3c1.toUpperCase()}`);
      textTitleRoomUnit3c2.setAttribute('text',`value: ${titleRoomUnit3c2.toUpperCase()}`);
      textTitleRoomUnit3c3.setAttribute('text',`value: ${titleRoomUnit3c3.toUpperCase()}`);

    } else {
      menu6.setAttribute('visible', false);
      imgPin6.setAttribute('visible', true);
      infoData6.setAttribute('position','0 0.1 1');
    }
  });


  //UNIT IV (FISKOM)
  const aEntity7 = document.getElementById('entity-handler7');
  const menu7 = aEntity7.querySelector('#menu7');
  const imgPin7 = aEntity7.querySelector('#image-pin7');
  const infoBackground7 = aEntity7.querySelector('#infoBackground7');
  const textPlaceName7 = aEntity7.querySelector('#text-distance7');
  const infoData7 = aEntity7.querySelector('#infoData7');
  const placeName7 = locations[6].unit.faculty;

  const btnMenulantai1_unit4 = aEntity7.querySelector('#btnMenulantai1_unit4');
  const btnMenulantai2_unit4 = aEntity7.querySelector('#btnMenulantai2_unit4');

  const unit4aName = locations[6].unit.lantai_1.name;
  const unit4bName = locations[6].unit.lantai_2.name;

  //LANTAI 1
  const btnRoom1Unit4a = aEntity7.querySelector('#btnRoom1Unit4a');
  const btnRoom2Unit4a = aEntity7.querySelector('#btnRoom2Unit4a');
  const btnRoom3Unit4a = aEntity7.querySelector('#btnRoom3Unit4a');
  const btnRoom4Unit4a = aEntity7.querySelector('#btnRoom4Unit4a');

  const textTitleRoom1_Unit4a = locations[6].unit.lantai_1.room.classroom_1.name;
  const textTitleRoom2_Unit4a = locations[6].unit.lantai_1.room.classroom_2.name;
  const textTitleRoom3_Unit4a = locations[6].unit.lantai_1.room.classroom_3.name;
  const textTitleRoom4_Unit4a = locations[6].unit.lantai_1.room.classroom_4.name;

  const titleRoom1_unit4a = aEntity7.querySelector('#titleRoom1_unit4a');
  const titleRoom2_unit4a = aEntity7.querySelector('#titleRoom2_unit4a');
  const titleRoom3_unit4a = aEntity7.querySelector('#titleRoom3_unit4a');
  const titleRoom4_unit4a = aEntity7.querySelector('#titleRoom4_unit4a');

  const descRoom1_unit4a = aEntity7.querySelector('#descRoom1_unit4a');
  const descRoom2_unit4a = aEntity7.querySelector('#descRoom2_unit4a');
  const descRoom3_unit4a = aEntity7.querySelector('#descRoom3_unit4a');
  const descRoom4_unit4a = aEntity7.querySelector('#descRoom4_unit4a');

  const textDescRoom1_unit4a = locations[6].unit.lantai_1.room.classroom_1.desc;
  const textDescRoom2_unit4a = locations[6].unit.lantai_1.room.classroom_2.desc;
  const textDescRoom3_unit4a = locations[6].unit.lantai_1.room.classroom_3.desc;
  const textDescRoom4_unit4a = locations[6].unit.lantai_1.room.classroom_4.desc;

  //LANTAI II
  const btnRoom1Unit4b = aEntity7.querySelector('#btnRoom1Unit4b');
  const btnRoom2Unit4b = aEntity7.querySelector('#btnRoom2Unit4b');
  const btnRoom3Unit4b = aEntity7.querySelector('#btnRoom3Unit4b');
  const btnRoom4Unit4b = aEntity7.querySelector('#btnRoom4Unit4b');
  const btnRoom5Unit4b = aEntity7.querySelector('#btnRoom5Unit4b');

  const textTitleRoom1_Unit4b = locations[6].unit.lantai_2.room.classroom_1.name;
  const textTitleRoom2_Unit4b = locations[6].unit.lantai_2.room.classroom_2.name;
  const textTitleRoom3_Unit4b = locations[6].unit.lantai_2.room.classroom_3.name;
  const textTitleRoom4_Unit4b = locations[6].unit.lantai_2.room.labElecInst.name;
  const textTitleRoom5_Unit4b = locations[6].unit.lantai_2.room.labFisDas.name;

  const titleRoom1_unit4b = aEntity7.querySelector('#titleRoom1_unit4b');
  const titleRoom2_unit4b = aEntity7.querySelector('#titleRoom2_unit4b');
  const titleRoom3_unit4b = aEntity7.querySelector('#titleRoom3_unit4b');
  const titleRoom4_unit4b = aEntity7.querySelector('#titleRoom4_unit4b');
  const titleRoom5_unit4b = aEntity7.querySelector('#titleRoom5_unit4b');

  const descRoom1_unit4b = aEntity7.querySelector('#descRoom1_unit4b');
  const descRoom2_unit4b = aEntity7.querySelector('#descRoom2_unit4b');
  const descRoom3_unit4b = aEntity7.querySelector('#descRoom3_unit4b');
  const descRoom4_unit4b = aEntity7.querySelector('#descRoom4_unit4b');
  const descRoom5_unit4b = aEntity7.querySelector('#descRoom5_unit4b');

  const textDescRoom1_unit4b = locations[6].unit.lantai_2.room.classroom_1.desc;
  const textDescRoom2_unit4b = locations[6].unit.lantai_2.room.classroom_2.desc;
  const textDescRoom3_unit4b = locations[6].unit.lantai_2.room.classroom_3.desc;
  const textDescRoom4_unit4b = locations[6].unit.lantai_2.room.labElecInst.desc;
  const textDescRoom5_unit4b = locations[6].unit.lantai_2.room.labFisDas.desc;

  aEntity7.addEventListener('gps-entity-place-update-positon', (event) => {
    if (event.detail.distance > 60) {
      aEntity7.setAttribute('visible', false);
    }
    if (event.detail.distance < 20) {
      menu7.setAttribute('visible', true);
      menu7.setAttribute('position','0 0 0');
      imgPin7.setAttribute('visible', false);
      infoBackground7.setAttribute('position','0 1.5 0')
      infoBackground7.setAttribute('slice9', 'color: #9c1010');
      textPlaceName7.setAttribute('text',`value: ${placeName7.toUpperCase()}`);
      infoData7.setAttribute('position','0 1.4 1');

      btnMenulantai1_unit4.setAttribute('text', `value: ${unit4aName.toUpperCase()}`);
      btnMenulantai2_unit4.setAttribute('text', `value: ${unit4bName.toUpperCase()}`);

      // LANTAI I
      btnRoom1Unit4a.setAttribute('value', textTitleRoom1_Unit4a.toUpperCase());
      btnRoom2Unit4a.setAttribute('value', textTitleRoom2_Unit4a.toUpperCase());
      btnRoom3Unit4a.setAttribute('value', textTitleRoom3_Unit4a.toUpperCase());
      btnRoom4Unit4a.setAttribute('value', textTitleRoom4_Unit4a.toUpperCase());

      titleRoom1_unit4a.setAttribute('text', `value: ${textTitleRoom1_Unit4a.toUpperCase()}`);
      titleRoom2_unit4a.setAttribute('text', `value: ${textTitleRoom2_Unit4a.toUpperCase()}`);
      titleRoom3_unit4a.setAttribute('text', `value: ${textTitleRoom3_Unit4a.toUpperCase()}`);
      titleRoom4_unit4a.setAttribute('text', `value: ${textTitleRoom4_Unit4a.toUpperCase()}`);

      descRoom1_unit4a.setAttribute('text', `value: ${textDescRoom1_unit4a}`);
      descRoom2_unit4a.setAttribute('text', `value: ${textDescRoom2_unit4a}`);
      descRoom3_unit4a.setAttribute('text', `value: ${textDescRoom3_unit4a}`);
      descRoom4_unit4a.setAttribute('text', `value: ${textDescRoom4_unit4a}`);

      // LANTAI II
      btnRoom1Unit4b.setAttribute('value', textTitleRoom1_Unit4b.toUpperCase());
      btnRoom2Unit4b.setAttribute('value', textTitleRoom2_Unit4b.toUpperCase());
      btnRoom3Unit4b.setAttribute('value', textTitleRoom3_Unit4b.toUpperCase());
      btnRoom4Unit4b.setAttribute('value', textTitleRoom4_Unit4b.toUpperCase());
      btnRoom5Unit4b.setAttribute('value', textTitleRoom5_Unit4b.toUpperCase());

      titleRoom1_unit4b.setAttribute('text', `value: ${textTitleRoom1_Unit4b.toUpperCase()}`);
      titleRoom2_unit4b.setAttribute('text', `value: ${textTitleRoom2_Unit4b.toUpperCase()}`);
      titleRoom3_unit4b.setAttribute('text', `value: ${textTitleRoom3_Unit4b.toUpperCase()}`);
      titleRoom4_unit4b.setAttribute('text', `value: ${textTitleRoom4_Unit4b.toUpperCase()}`);
      titleRoom5_unit4b.setAttribute('text', `value: ${textTitleRoom5_Unit4b.toUpperCase()}`);

      descRoom1_unit4b.setAttribute('text', `value: ${textDescRoom1_unit4b}`);
      descRoom2_unit4b.setAttribute('text', `value: ${textDescRoom2_unit4b}`);
      descRoom3_unit4b.setAttribute('text', `value: ${textDescRoom3_unit4b}`);
      descRoom4_unit4b.setAttribute('text', `value: ${textDescRoom4_unit4b}`);
      descRoom5_unit4b.setAttribute('text', `value: ${textDescRoom5_unit4b}`);

    } else {
      menu7.setAttribute('visible', false);
      imgPin7.setAttribute('visible', true);
      infoData7.setAttribute('position','0 0.1 1');
    }
  });

//  AMG (UNIT V)
  const aEntity8 = document.getElementById('entity-handler8');
  const menu8 = aEntity8.querySelector('#menu8');
  const imgPin8 = aEntity8.querySelector('#image-pin8');
  const infoBackground8 = aEntity8.querySelector('#infoBackground8');
  const placeName8 = locations[7].unit.name_loca;
  const descUnit8 = locations[7].unit.desc;
  const textPlaceName8 = aEntity8.querySelector('#text-distance8');
  const textDescUnit8 = aEntity8.querySelector('#descUnit8');
  const infoData8 = aEntity8.querySelector('#infoData8');

  aEntity8.addEventListener('gps-entity-place-update-positon', (event) => {
    if (event.detail.distance > 60) {
      aEntity8.setAttribute('visible', false);
    }
    if (event.detail.distance < 20) {
      menu8.setAttribute('visible', true);
      menu8.setAttribute('position', '0 0 0');
      imgPin8.setAttribute('visible', false);
      infoBackground8.setAttribute('position', '0 1.5 0');
      infoBackground8.setAttribute('slice9', 'color: #9c1010');
      textPlaceName8.setAttribute('text', `value: ${placeName8.toUpperCase()}`);
      textPlaceName8.setAttribute('text', 'width: 4');
      textDescUnit8.setAttribute('text', `value: ${descUnit8}`);
    } else {
      menu8.setAttribute('visible', false);
      imgPin8.setAttribute('visible', true);
      infoData8.setAttribute('position', '0 0.1 1');
    }
  });

  //  Ruang Praktik Musik (UNIT V)
  const aEntity9 = document.getElementById('entity-handler9');
  const menu9 = aEntity9.querySelector('#menu9');
  const imgPin9= aEntity9.querySelector('#image-pin9');
  const infoBackground9 = aEntity9.querySelector('#infoBackground9');
  const placeName9 = locations[8].unit.name_loca;
  const descUnit9 = locations[8].unit.desc;
  const textPlaceName9 = aEntity9.querySelector('#text-distance9');
  const textDescUnit9 = aEntity9.querySelector('#descUnit9');
  const infoData9 = aEntity9.querySelector('#infoData9');

  aEntity9.addEventListener('gps-entity-place-update-positon', (event) => {
    if (event.detail.distance > 60) {
      aEntity9.setAttribute('visible', false);
    }
    if (event.detail.distance < 20) {
      menu9.setAttribute('visible', true);
      menu9.setAttribute('position', '0 0 0');
      imgPin9.setAttribute('visible', false);
      infoBackground9.setAttribute('position', '0 1.5 0');
      infoBackground9.setAttribute('slice9', 'color: #9c1010');
      textPlaceName9.setAttribute('text', `value: ${placeName9.toUpperCase()}`);
      textPlaceName9.setAttribute('text', 'width: 4');
      textDescUnit9.setAttribute('text', `value: ${descUnit9}`);
    } else {
      menu9.setAttribute('visible', false);
      imgPin9.setAttribute('visible', true);
      infoData9.setAttribute('position', '0 0.1 1');
    }
  });

  //  Ruang Praktik Musik (UNIT V)
  const aEntity10 = document.getElementById('entity-handler10');
  const menu10 = aEntity10.querySelector('#menu10');
  const imgPin10= aEntity10.querySelector('#image-pin10');
  const infoBackground10 = aEntity10.querySelector('#infoBackground10');
  const placeName10 = locations[9].unit.name_loca;
  const descUnit10 = locations[9].unit.desc;
  const textPlaceName10 = aEntity10.querySelector('#text-distance10');
  const textDescUnit10 = aEntity10.querySelector('#descUnit10');
  const infoData10 = aEntity10.querySelector('#infoData10');

  aEntity10.addEventListener('gps-entity-place-update-positon', (event) => {
    if (event.detail.distance > 60) {
      aEntity10.setAttribute('visible', false);
    }
    if (event.detail.distance < 20) {
      menu10.setAttribute('visible', true);
      menu10.setAttribute('position', '0 0 0');
      imgPin10.setAttribute('visible', false);
      infoBackground10.setAttribute('position', '0 1.5 0');
      infoBackground10.setAttribute('slice9', 'color: #9c1010');
      textPlaceName10.setAttribute('text', `value: ${placeName10.toUpperCase()}`);
      textPlaceName10.setAttribute('text', 'width: 4');
      textDescUnit10.setAttribute('text', `value: ${descUnit10}`);
    } else {
      menu10.setAttribute('visible', false);
      imgPin10.setAttribute('visible', true);
      infoData10.setAttribute('position', '0 0.1 1');
    }
  });


  //UNIT VI
  const aEntity11 = document.getElementById('entity-handler11');
  const menu11 = aEntity11.querySelector('#menu11');
  const imgPin11 = aEntity11.querySelector('#image-pin11');
  const infoBackground11 = aEntity11.querySelector('#infoBackground11');
  const textPlaceName11 = aEntity11.querySelector('#text-distance11');
  const infoData11 = aEntity11.querySelector('#infoData11');
  const placeName11 = locations[10].unit.name_loca;

  const btnMenu1_unit6 = aEntity11.querySelector('#btnMenu1_unit6');
  const btnMenu2_unit6 = aEntity11.querySelector('#btnMenu2_unit6');

  const descRoom1_unit6 = aEntity11.querySelector('#descRoom1_unit6');
  const descRoom2_unit6 = aEntity11.querySelector('#descRoom2_unit6');

  const titleRoom1_unit6 = aEntity11.querySelector('#titleRoom1_unit6');
  const titleRoom2_unit6 = aEntity11.querySelector('#titleRoom2_unit6');

  const textDescRoom1_unit6 = locations[10].unit.room.lab_komputer.desc;
  const textDescRoom2_unit6 = locations[10].unit.room.lpm.desc;

  const textTitleRoom1_unit6 = locations[10].unit.room.lab_komputer.name;
  const textTitleRoom2_unit6 = locations[10].unit.room.lpm.name;


  aEntity11.addEventListener('gps-entity-place-update-positon', (event) => {
    if (event.detail.distance > 60) {
      aEntity11.setAttribute('visible', false);
    }
    if (event.detail.distance < 20) {
      menu11.setAttribute('visible', true);
      menu11.setAttribute('position', '0 0 0');
      imgPin11.setAttribute('visible', false);
      infoBackground11.setAttribute('position', '0 1.5 0');
      infoBackground11.setAttribute('slice9', 'color: #9c1010');
      textPlaceName11.setAttribute('text', `value: ${placeName11.toUpperCase()}`);
      textPlaceName11.setAttribute('text', 'width: 3.5');
      infoData11.setAttribute('position', '0 1.4 1');

      btnMenu1_unit6.setAttribute('value', textTitleRoom1_unit6.toUpperCase());
      btnMenu2_unit6.setAttribute('value', textTitleRoom2_unit6.toUpperCase());

      descRoom1_unit6.setAttribute('text', `value: ${textDescRoom1_unit6}`);
      descRoom2_unit6.setAttribute('text', `value: ${textDescRoom2_unit6}`);

      titleRoom1_unit6.setAttribute('text', `value: ${textTitleRoom1_unit6.toUpperCase()}`);
      titleRoom2_unit6.setAttribute('text', `value: ${textTitleRoom2_unit6.toUpperCase()}`);

    } else {
      menu3.setAttribute('visible', false);
      imgPin3.setAttribute('visible', true);
      infoData3.setAttribute('position', '0 0.1 1');
    }
  });

  //  Lab. Energi Terbarukan (UNIT VII)
  const aEntity12 = document.getElementById('entity-handler12');
  const menu12 = aEntity12.querySelector('#menu12');
  const imgPin12= aEntity12.querySelector('#image-pin12');
  const infoBackground12 = aEntity12.querySelector('#infoBackground12');
  const placeName12 = locations[11].unit.name_loca;
  const descUnit12 = locations[11].unit.desc;
  const textPlaceName12 = aEntity12.querySelector('#text-distance12');
  const textDescUnit12 = aEntity12.querySelector('#descUnit12');
  const infoData12 = aEntity12.querySelector('#infoData12');

  aEntity12.addEventListener('gps-entity-place-update-positon', (event) => {
    if (event.detail.distance > 60) {
      aEntity12.setAttribute('visible', false);
    }
    if (event.detail.distance < 20) {
      menu12.setAttribute('visible', true);
      menu12.setAttribute('position', '0 0 0');
      imgPin12.setAttribute('visible', false);
      infoBackground12.setAttribute('position', '0 1.5 0');
      infoBackground12.setAttribute('slice9', 'color: #9c1010');
      textPlaceName12.setAttribute('text', `value: ${placeName12.toUpperCase()}`);
      textPlaceName12.setAttribute('text', 'width: 4');
      textDescUnit12.setAttribute('text', `value: ${descUnit12}`);
    } else {
      menu12.setAttribute('visible', false);
      imgPin12.setAttribute('visible', true);
      infoData12.setAttribute('position', '0 0.1 1');
    }
  });

  //UNIT VII A
  const aEntity13 = document.getElementById('entity-handler13');
  const menu13 = aEntity13.querySelector('#menu13');
  const imgPin13 = aEntity13.querySelector('#image-pin13');
  const infoBackground13 = aEntity13.querySelector('#infoBackground13');
  const textPlaceName13 = aEntity13.querySelector('#text-distance13');
  const infoData13 = aEntity13.querySelector('#infoData13');
  const placeName13 = locations[12].unit.name_loca;

  const btnMenu1_unit7 = aEntity13.querySelector('#btnMenu1_unit7');
  const btnMenu2_unit7 = aEntity13.querySelector('#btnMenu2_unit7');
  const btnMenu3_unit7 = aEntity13.querySelector('#btnMenu3_unit7');

  const descRoom1_unit7 = aEntity13.querySelector('#descRoom1_unit7');
  const descRoom2_unit7 = aEntity13.querySelector('#descRoom2_unit7');
  const descRoom3_unit7 = aEntity13.querySelector('#descRoom3_unit7');

  const titleRoom1_unit7 = aEntity13.querySelector('#titleRoom1_unit7');
  const titleRoom2_unit7 = aEntity13.querySelector('#titleRoom2_unit7');
  const titleRoom3_unit7 = aEntity13.querySelector('#titleRoom3_unit7');

  const textDescRoom1_unit7 = locations[12].unit.room.classroom_1.desc;
  const textDescRoom2_unit7 = locations[12].unit.room.classroom_2.desc;
  const textDescRoom3_unit7 = locations[12].unit.room.classroom_3.desc;

  const textTitleRoom1_unit7 = locations[12].unit.room.classroom_1.name;
  const textTitleRoom2_unit7 = locations[12].unit.room.classroom_2.name;
  const textTitleRoom3_unit7 = locations[12].unit.room.classroom_3.name;


  aEntity13.addEventListener('gps-entity-place-update-positon', (event) => {
    if (event.detail.distance > 60) {
      aEntity13.setAttribute('visible', false);
    }
    if (event.detail.distance < 20) {
      menu13.setAttribute('visible', true);
      menu13.setAttribute('position', '0 0 0');
      imgPin13.setAttribute('visible', false);
      infoBackground13.setAttribute('position', '0 1.5 0');
      infoBackground13.setAttribute('slice9', 'color: #9c1010');
      textPlaceName13.setAttribute('text', `value: ${placeName13.toUpperCase()}`);
      textPlaceName13.setAttribute('text', 'width: 3.5');
      infoData13.setAttribute('position', '0 1.4 1');

      btnMenu1_unit7.setAttribute('value', textTitleRoom1_unit7.toUpperCase());
      btnMenu2_unit7.setAttribute('value', textTitleRoom2_unit7.toUpperCase());
      btnMenu3_unit7.setAttribute('value', textTitleRoom3_unit7.toUpperCase());

      descRoom1_unit7.setAttribute('text', `value: ${textDescRoom1_unit7}`);
      descRoom2_unit7.setAttribute('text', `value: ${textDescRoom2_unit7}`);
      descRoom3_unit7.setAttribute('text', `value: ${textDescRoom3_unit7}`);

      titleRoom1_unit7.setAttribute('text', `value: ${textTitleRoom1_unit7.toUpperCase()}`);
      titleRoom2_unit7.setAttribute('text', `value: ${textTitleRoom2_unit7.toUpperCase()}`);
      titleRoom3_unit7.setAttribute('text', `value: ${textTitleRoom3_unit7.toUpperCase()}`);

    } else {
      menu3.setAttribute('visible', false);
      imgPin3.setAttribute('visible', true);
      infoData3.setAttribute('position', '0 0.1 1');
    }
  });

  //UNIT VIII
  const aEntity14 = document.getElementById('entity-handler14');
  const menu14 = aEntity14.querySelector('#menu14');
  const imgPin14 = aEntity14.querySelector('#image-pin14');
  const infoBackground14 = aEntity14.querySelector('#infoBackground14');
  const textPlaceName14 = aEntity14.querySelector('#text-distance14');
  const infoData14 = aEntity14.querySelector('#infoData14');
  const placeName14 = locations[13].unit.name_loca;

  const unit8aName = locations[13].unit.lantai_1.name;
  const unit8bName = locations[13].unit.lantai_2.name;
  const unit8cName = locations[13].unit.lantai_3.name;

  const btnMenulantai1_unit8 = aEntity14.querySelector('#btnMenulantai1_unit8');
  const btnMenulantai2_unit8 = aEntity14.querySelector('#btnMenulantai2_unit8');
  const btnMenulantai3_unit8 = aEntity14.querySelector('#btnMenulantai3_unit8');


  // //LANTAI I
  const btnRoom1Unit8a = aEntity14.querySelector('#btnRoom1Unit8a');
  const btnRoom2Unit8a = aEntity14.querySelector('#btnRoom2Unit8a');
  const btnRoom3Unit8a = aEntity14.querySelector('#btnRoom3Unit8a');
  const btnRoom4Unit8a = aEntity14.querySelector('#btnRoom4Unit8a');

  const textTitleRoom1_Unit8a = locations[13].unit.lantai_1.room.ruangDosen.name;
  const textTitleRoom2_Unit8a = locations[13].unit.lantai_1.room.adminFak.name;
  const textTitleRoom3_Unit8a = locations[13].unit.lantai_1.room.adminMpak.name;
  const textTitleRoom4_Unit8a = locations[13].unit.lantai_1.room.classroom_1.name;

  // //LANTAI II
  const btnRoom1Unit8b = aEntity14.querySelector('#btnRoom1Unit8b');
  const btnRoom2Unit8b = aEntity14.querySelector('#btnRoom2Unit8b');
  const btnRoom3Unit8b = aEntity14.querySelector('#btnRoom3Unit8b');
  const btnRoom4Unit8b = aEntity14.querySelector('#btnRoom4Unit8b');

  const textTitleRoom1_Unit8b = locations[13].unit.lantai_2.room.adminFar.name;
  const textTitleRoom2_Unit8b = locations[13].unit.lantai_2.room.classroom_1.name;
  const textTitleRoom3_Unit8b = locations[13].unit.lantai_2.room.classroom_2.name;
  const textTitleRoom4_Unit8b = locations[13].unit.lantai_2.room.classroom_3.name;

  // //LANTAI III
  const btnRoom1Unit8c = aEntity14.querySelector('#btnRoom1Unit8c');
  const btnRoom2Unit8c = aEntity14.querySelector('#btnRoom2Unit8c');
  const btnRoom3Unit8c = aEntity14.querySelector('#btnRoom3Unit8c');

  const textTitleRoom1_Unit8c = locations[13].unit.lantai_3.room.farmasetika.name;
  const textTitleRoom2_Unit8c = locations[13].unit.lantai_3.room.biologi.name;
  const textTitleRoom3_Unit8c = locations[13].unit.lantai_3.room.aula.name;
  // const s = document.querySelector('#d').addEventListener('click', function (evt){});

  aEntity14.addEventListener('gps-entity-place-update-positon', (event) => {
    if (event.detail.distance > 60) {
      aEntity14.setAttribute('visible', false);
    }
    if (event.detail.distance < 30) {
      // document.querySelector('#d').addEventListener('click', function (evt) {
      //   console.log('This d!');
      //   document.querySelector('#menu14').style.display = 'none';
      //   document.querySelector('#menu14').setAttribute('visible', false);
      //   document.querySelector('#menu15').setAttribute('visible', true);
      //   // document.querySelector('#menu14').setAttribute('visible', false);
      //
      // });
      // document.querySelector('#d').setAttribute('proxy-event', '');
      // document.querySelector('#e').setAttribute('proxy-event', '');
      // document.querySelector('#f').setAttribute('proxy-event', '');
      menu14.setAttribute('visible', true);
      menu14.setAttribute('position', '0 0 0');
      imgPin14.setAttribute('visible', false);
      infoBackground14.setAttribute('position', '0 1.5 0');
      infoBackground14.setAttribute('slice9', 'color: #9c1010');
      textPlaceName14.setAttribute('text', `value: ${placeName14.toUpperCase()}`);
      textPlaceName14.setAttribute('text', 'width: 3');
      infoData14.setAttribute('position', '0 1.4 1');

      btnMenulantai1_unit8.setAttribute('text', `value: ${unit8aName.toUpperCase()}`);
      btnMenulantai2_unit8.setAttribute('text', `value: ${unit8bName.toUpperCase()}`);
      btnMenulantai3_unit8.setAttribute('text', `value: ${unit8cName.toUpperCase()}`);

      // LANTAI I
      btnRoom1Unit8a.setAttribute('value', textTitleRoom1_Unit8a.toUpperCase());
      btnRoom2Unit8a.setAttribute('value', textTitleRoom2_Unit8a.toUpperCase());
      btnRoom3Unit8a.setAttribute('value', textTitleRoom3_Unit8a.toUpperCase());
      btnRoom4Unit8a.setAttribute('value', textTitleRoom4_Unit8a.toUpperCase());

      // LANTAI II
      btnRoom1Unit8b.setAttribute('value', textTitleRoom1_Unit8b.toUpperCase());
      btnRoom2Unit8b.setAttribute('value', textTitleRoom2_Unit8b.toUpperCase());
      btnRoom3Unit8b.setAttribute('value', textTitleRoom3_Unit8b.toUpperCase());
      btnRoom4Unit8b.setAttribute('value', textTitleRoom4_Unit8b.toUpperCase());

      // LANTAI III
      btnRoom1Unit8c.setAttribute('value', textTitleRoom1_Unit8c.toUpperCase());
      btnRoom2Unit8c.setAttribute('value', textTitleRoom2_Unit8c.toUpperCase());
      btnRoom3Unit8c.setAttribute('value', textTitleRoom3_Unit8c.toUpperCase());

    } else {
      menu14.setAttribute('visible', false);
      imgPin14.setAttribute('visible', true);
      infoData14.setAttribute('position', '0 0.1 1');
    }
  });


  //UNIT VIII D
  const aEntity15 = document.getElementById('entity-handler15');
  const menu15 = aEntity15.querySelector('#menu15');
  const imgPin15 = aEntity15.querySelector('#image-pin15');
  const infoBackground15 = aEntity15.querySelector('#infoBackground15');
  const textPlaceName15 = aEntity15.querySelector('#text-distance15');
  const infoData15 = aEntity15.querySelector('#infoData15');
  const placeName15 = locations[14].unit.name_loca;

  const btnMenu1_unit9 = aEntity15.querySelector('#btnMenu1_unit9');
  const btnMenu2_unit9 = aEntity15.querySelector('#btnMenu2_unit9');
  const btnMenu3_unit9 = aEntity15.querySelector('#btnMenu3_unit9');
  const btnMenu4_unit9 = aEntity15.querySelector('#btnMenu4_unit9');
  const btnMenu5_unit9 = aEntity15.querySelector('#btnMenu5_unit9');
  const btnMenu6_unit9 = aEntity15.querySelector('#btnMenu6_unit9');
  const btnMenu7_unit9 = aEntity15.querySelector('#btnMenu7_unit9');

  const descRoom1_unit9 = aEntity15.querySelector('#descRoom1_unit9');
  const descRoom2_unit9 = aEntity15.querySelector('#descRoom2_unit9');
  const descRoom3_unit9 = aEntity15.querySelector('#descRoom3_unit9');
  const descRoom4_unit9 = aEntity15.querySelector('#descRoom4_unit9');
  const descRoom5_unit9 = aEntity15.querySelector('#descRoom5_unit9');
  const descRoom6_unit9 = aEntity15.querySelector('#descRoom6_unit9');
  const descRoom7_unit9 = aEntity15.querySelector('#descRoom7_unit9');

  const titleRoom1_unit9 = aEntity15.querySelector('#titleRoom1_unit9');
  const titleRoom2_unit9 = aEntity15.querySelector('#titleRoom2_unit9');
  const titleRoom3_unit9 = aEntity15.querySelector('#titleRoom3_unit9');
  const titleRoom4_unit9 = aEntity15.querySelector('#titleRoom4_unit9');
  const titleRoom5_unit9 = aEntity15.querySelector('#titleRoom5_unit9');
  const titleRoom6_unit9 = aEntity15.querySelector('#titleRoom6_unit9');
  const titleRoom7_unit9 = aEntity15.querySelector('#titleRoom7_unit9');

  const textDescRoom1_unit9 = locations[14].unit.room.labEnergi.desc;
  const textDescRoom2_unit9 = locations[14].unit.room.labDisCom.desc;
  const textDescRoom3_unit9 = locations[14].unit.room.farmakologi.desc;
  const textDescRoom4_unit9 = locations[14].unit.room.kewirausahaan.desc;
  const textDescRoom5_unit9 = locations[14].unit.room.laboran.desc;
  const textDescRoom6_unit9 = locations[14].unit.room.kimia.desc;
  const textDescRoom7_unit9 = locations[14].unit.room.hewanUji.desc;

  const textTitleRoom1_unit9 = locations[14].unit.room.labEnergi.name;
  const textTitleRoom2_unit9 = locations[14].unit.room.labDisCom.name;
  const textTitleRoom3_unit9 = locations[14].unit.room.farmakologi.name;
  const textTitleRoom4_unit9 = locations[14].unit.room.kewirausahaan.name;
  const textTitleRoom5_unit9 = locations[14].unit.room.laboran.name;
  const textTitleRoom6_unit9 = locations[14].unit.room.kimia.name;
  const textTitleRoom7_unit9 = locations[14].unit.room.hewanUji.name;


  aEntity15.addEventListener('gps-entity-place-update-positon', (event) => {
    if (event.detail.distance > 60) {
      aEntity15.setAttribute('visible', false);
    }
    if (event.detail.distance < 25) {
      menu15.setAttribute('visible', true);
      menu15.setAttribute('position', '0 0 0');
      imgPin15.setAttribute('visible', false);
      infoBackground15.setAttribute('position', '0 1.5 0');
      infoBackground15.setAttribute('slice9', 'color: #9c1010');
      textPlaceName15.setAttribute('text', `value: ${placeName15.toUpperCase()}`);
      textPlaceName15.setAttribute('text', 'width: 3.5');
      infoData15.setAttribute('position', '0 1.4 1');

      btnMenu1_unit9.setAttribute('value', textTitleRoom1_unit9.toUpperCase());
      btnMenu2_unit9.setAttribute('value', textTitleRoom2_unit9.toUpperCase());
      btnMenu3_unit9.setAttribute('value', textTitleRoom3_unit9.toUpperCase());
      btnMenu4_unit9.setAttribute('value', textTitleRoom4_unit9.toUpperCase());
      btnMenu5_unit9.setAttribute('value', textTitleRoom5_unit9.toUpperCase());
      btnMenu6_unit9.setAttribute('value', textTitleRoom6_unit9.toUpperCase());
      btnMenu7_unit9.setAttribute('value', textTitleRoom7_unit9.toUpperCase());

      descRoom1_unit9.setAttribute('text', `value: ${textDescRoom1_unit9}`);
      descRoom2_unit9.setAttribute('text', `value: ${textDescRoom2_unit9}`);
      descRoom3_unit9.setAttribute('text', `value: ${textDescRoom3_unit9}`);
      descRoom4_unit9.setAttribute('text', `value: ${textDescRoom4_unit9}`);
      descRoom5_unit9.setAttribute('text', `value: ${textDescRoom5_unit9}`);
      descRoom6_unit9.setAttribute('text', `value: ${textDescRoom6_unit9}`);
      descRoom7_unit9.setAttribute('text', `value: ${textDescRoom7_unit9}`);

      titleRoom1_unit9.setAttribute('text', `value: ${textTitleRoom1_unit9.toUpperCase()}`);
      titleRoom2_unit9.setAttribute('text', `value: ${textTitleRoom2_unit9.toUpperCase()}`);
      titleRoom3_unit9.setAttribute('text', `value: ${textTitleRoom3_unit9.toUpperCase()}`);
      titleRoom4_unit9.setAttribute('text', `value: ${textTitleRoom4_unit9.toUpperCase()}`);
      titleRoom5_unit9.setAttribute('text', `value: ${textTitleRoom5_unit9.toUpperCase()}`);
      titleRoom6_unit9.setAttribute('text', `value: ${textTitleRoom6_unit9.toUpperCase()}`);
      titleRoom7_unit9.setAttribute('text', `value: ${textTitleRoom7_unit9.toUpperCase()}`);

    } else {
      menu3.setAttribute('visible', false);
      imgPin3.setAttribute('visible', true);
      infoData3.setAttribute('position', '0 0.1 1');
    }
  });
});
//

let scene = document.querySelector('a-scene');

const s = document.querySelector('#menu14');

document.querySelector('#d').addEventListener('click', function (evt) {
  document.querySelector('#d').setAttribute('proxy-event', 'as: menuLantai1_unit8a');
  document.querySelector('#menu14').setAttribute('visible', false);
  const gg = document.querySelector('#menu15');
  console.log(gg)
  // s.parentNode.removeChild(s);
  // document.querySelector('#menu14').setAttribute('visible', false);
  // console.log('This d!');
  gg.setAttribute('visible', true);

});
//
// let scene = document.querySelector('#entity-handler14');
// document.querySelector('#menuBack14').addEventListener('click', function (evt) {
//   document.querySelector('#menu15').setAttribute('visible', false);
//   // document.querySelector('#d').setAttribute('proxy-event', 'as:menuLantai1_unit8a');
//   document.querySelector('#menu14').setAttribute('visible', true);
//   // document.querySelector('#menu14').setAttribute('visible', false);
//   scene.appendChild(s);
//   console.log('This d!');
//
// });
// AFRAME.registerComponent('remove-on-tick', {
//   tick: function () {
//     var entity = this.el;
//     if (document.querySelector('#d').addEventListener('click')) {
//       entity.parentNode.removeChild(entity);
//     }
//   }
// });
// AFRAME.registerComponent("foo", {
//   init: function() {
//     let toggle = false
//     const e = document.querySelector('#menu15');
//     const s = document.querySelector('#menu14');
//
//     document.querySelector('#d').addEventListener("click", (ee) => {
//
//       // s.parentNode.replaceChild(e);
//
//       document.querySelector('#menu15').setAttribute('visible', true);
//       // document.querySelector('#d').setAttribute('proxy-event', 'as:menuLantai1_unit8a');
//
//       let cylinders = document.getElementById("menu14")
//       console.log('This dsdfsdf!');
//       cylinders.setAttribute("visible", toggle)
//       toggle = !toggle
//     })
//   }
// })
// AFRAME.registerComponent('foo', {
//   init: function() {
//     var box = document.querySelector('#menu15')
//     document.querySelector('#d').addEventListener('click', (e) => {
//       box.setAttribute('visible', !box.getAttribute('visible'))
//     })
//   }
// })
