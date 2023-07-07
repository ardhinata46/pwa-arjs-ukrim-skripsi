import { aEntity, aEntity2, aEntity3, aEntity4, aEntity5, aEntity6, aEntity7, aEntity8, aEntity9, aEntity10, aEntity11, aEntity12, aEntity13, aEntity14, aEntity15} from './entity-modal';

import locations from './locations';

window.addEventListener('load', () => {
  aEntity.addEventListener('gps-entity-place-update-positon', (event) => {
    const message = document.getElementById('message');
    if (event.detail.distance > 60) {
      aEntity.setAttribute('visible', false);
    } else if(event.detail.distance < 20){
      aEntity.querySelector('#more-info').setAttribute('visible', true);
      message.style.display = 'block';
      message.innerHTML=`<p>Anda berada di lokasi gedung ${locations[0].unit.name_loca}</p>
        <p>Longitude: ${locations[0].unit.loca.longitude}</p>
        <p>Latitude: ${locations[0].unit.loca.latitude}</p>
        <p>Tekan tombol "MORE INFO" untuk melihat informasi gedung.</p>`;
    } else{
      // message.style.display = 'none';
      aEntity.querySelector('#more-info').setAttribute('visible', false);
      aEntity.setAttribute('visible', true);
    }
  });
  aEntity2.addEventListener('gps-entity-place-update-positon', (event) => {

    const message2 = document.getElementById('message');
    if (event.detail.distance > 60) {
      aEntity2.setAttribute('visible', false);
    } else if(event.detail.distance < 20){
      aEntity2.querySelector('#more-info2').setAttribute('visible', true);
      message2.style.display = 'block';
      message2.innerHTML=`<p>Anda berada di lokasi gedung ${locations[1].unit.name_loca}</p>
        <p>Longitude: ${locations[1].unit.loca.longitude}</p>
        <p>Latitude: ${locations[1].unit.loca.latitude}</p>
        <p>Tekan tombol "MORE INFO" untuk melihat informasi gedung.</p>`;
    } else{
      // message2.style.display = 'none';
      aEntity2.querySelector('#more-info2').setAttribute('visible', false);
      aEntity2.setAttribute('visible', true);
    }
  });
  aEntity3.addEventListener('gps-entity-place-update-positon', (event) => {
    const message3 = document.getElementById('message');
    if (event.detail.distance > 60) {
      aEntity3.setAttribute('visible', false);
    } else if(event.detail.distance < 20){
      aEntity3.querySelector('#more-info3').setAttribute('visible', true);
      message3.style.display = 'block';
      message3.innerHTML=`<p>Anda berada di lokasi gedung ${locations[2].unit.name_loca}</p>
        <p>Longitude: ${locations[2].unit.loca.longitude}</p>
        <p>Latitude: ${locations[2].unit.loca.latitude}</p>
        <p>Tekan tombol "MORE INFO" untuk melihat informasi gedung.</p>`;
    } else{
      // message3.style.display = 'none';
      aEntity3.querySelector('#more-info3').setAttribute('visible', false);
      aEntity3.setAttribute('visible', true);
    }
  });
  aEntity4.addEventListener('gps-entity-place-update-positon', (event) => {

    const message4 = document.getElementById('message');
    if (event.detail.distance > 60) {
      aEntity4.setAttribute('visible', false);
    } else if(event.detail.distance < 20){
      aEntity4.querySelector('#more-info4').setAttribute('visible', true);
      message4.style.display = 'block';
      message4.innerHTML=`<p>Anda berada di lokasi gedung ${locations[3].unit.name_loca}</p>
        <p>Longitude: ${locations[3].unit.loca.longitude}</p>
        <p>Latitude: ${locations[3].unit.loca.latitude}</p>
        <p>Tekan tombol "MORE INFO" untuk melihat informasi gedung.</p>`;
    } else{
      // message4.style.display = 'none';
      aEntity4.querySelector('#more-info4').setAttribute('visible', false);
      aEntity4.setAttribute('visible', true);
    }
  });
  aEntity5.addEventListener('gps-entity-place-update-positon', (event) => {
    const message5 = document.getElementById('message');
    if (event.detail.distance > 60) {
      aEntity5.setAttribute('visible', false);
    } else if(event.detail.distance < 20){
      aEntity5.querySelector('#more-info5').setAttribute('visible', true);
      message5.style.display = 'block';
      message5.innerHTML=`<p>Anda berada di lokasi gedung ${locations[4].unit.name_loca}</p>
        <p>Longitude: ${locations[4].unit.loca.longitude}</p>
        <p>Latitude: ${locations[4].unit.loca.latitude}</p>
        <p>Tekan tombol "MORE INFO" untuk melihat informasi gedung.</p>`;
    } else{
      // message5.style.display = 'none';
      aEntity5.querySelector('#more-info5').setAttribute('visible', false);
      aEntity5.setAttribute('visible', true);
    }
  });
  aEntity6.addEventListener('gps-entity-place-update-positon', (event) => {

    const message6 = document.getElementById('message');
    if (event.detail.distance > 60) {
      aEntity6.setAttribute('visible', false);
    } else if(event.detail.distance < 20){
      aEntity6.querySelector('#more-info6').setAttribute('visible', true);
      message6.style.display = 'block';
      message6.innerHTML=`<p>Anda berada di lokasi gedung ${locations[5].unit.name_loca}</p>
        <p>Longitude: ${locations[5].unit.loca.longitude}</p>
        <p>Latitude: ${locations[5].unit.loca.latitude}</p>
        <p>Tekan tombol "MORE INFO" untuk melihat informasi gedung.</p>`;
    } else{
      // message6.style.display = 'none';
      aEntity6.querySelector('#more-info6').setAttribute('visible', false);
      aEntity6.setAttribute('visible', true);
    }
  });
  aEntity7.addEventListener('gps-entity-place-update-positon', (event) => {
    const message7 = document.getElementById('message');
    if (event.detail.distance > 60) {
      aEntity7.setAttribute('visible', false);
    } else if(event.detail.distance < 20){
      aEntity7.querySelector('#more-info7').setAttribute('visible', true);
      message7.style.display = 'block';
      message7.innerHTML=`<p>Anda berada di lokasi gedung ${locations[6].unit.name_loca}</p>
        <p>Longitude: ${locations[6].unit.loca.longitude}</p>
        <p>Latitude: ${locations[6].unit.loca.latitude}</p>
        <p>Tekan tombol "MORE INFO" untuk melihat informasi gedung.</p>`;
    } else{
      // message7.style.display = 'none';
      aEntity7.querySelector('#more-info7').setAttribute('visible', false);
      aEntity7.setAttribute('visible', true);
    }
  });
  aEntity8.addEventListener('gps-entity-place-update-positon', (event) => {

    const message8 = document.getElementById('message');
    if (event.detail.distance > 60) {
      aEntity8.setAttribute('visible', false);
    } else if(event.detail.distance < 20){
      aEntity8.querySelector('#more-info8').setAttribute('visible', true);
      message8.style.display = 'block';
      message8.innerHTML=`<p>Anda berada di lokasi gedung ${locations[7].unit.name_loca}</p>
        <p>Longitude: ${locations[7].unit.loca.longitude}</p>
        <p>Latitude: ${locations[7].unit.loca.latitude}</p>
        <p>Tekan tombol "MORE INFO" untuk melihat informasi gedung.</p>`;
    } else{
      // message8.style.display = 'none';
      aEntity8.querySelector('#more-info8').setAttribute('visible', false);
      aEntity8.setAttribute('visible', true);
    }
  });
  aEntity9.addEventListener('gps-entity-place-update-positon', (event) => {
    const message9 = document.getElementById('message');
    if (event.detail.distance > 60) {
      aEntity9.setAttribute('visible', false);
    } else if(event.detail.distance < 20){
      aEntity9.querySelector('#more-info9').setAttribute('visible', true);
      message9.style.display = 'block';
      message9.innerHTML=`<p>Anda berada di lokasi gedung ${locations[8].unit.name_loca}</p>
        <p>Longitude: ${locations[8].unit.loca.longitude}</p>
        <p>Latitude: ${locations[8].unit.loca.latitude}</p>
        <p>Tekan tombol "MORE INFO" untuk melihat informasi gedung.</p>`;
    } else{
      // message9.style.display = 'none';
      aEntity9.querySelector('#more-info9').setAttribute('visible', false);
      aEntity9.setAttribute('visible', true);
    }
  });
  aEntity10.addEventListener('gps-entity-place-update-positon', (event) => {
    const message10 = document.getElementById('message');
    if (event.detail.distance > 60) {
      aEntity10.setAttribute('visible', false);
    } else if(event.detail.distance < 20){
      aEntity10.querySelector('#more-info10').setAttribute('visible', true);
      message10.style.display = 'block';
      message10.innerHTML=`<p>Anda berada di lokasi gedung ${locations[9].unit.name_loca}</p>
        <p>Longitude: ${locations[9].unit.loca.longitude}</p>
        <p>Latitude: ${locations[9].unit.loca.latitude}</p>
        <p>Tekan tombol "MORE INFO" untuk melihat informasi gedung.</p>`;
    } else{
      // message10.style.display = 'none';
      aEntity10.querySelector('#more-info10').setAttribute('visible', false);
      aEntity10.setAttribute('visible', true);
    }
  });
  aEntity11.addEventListener('gps-entity-place-update-positon', (event) => {
    const message11 = document.getElementById('message');
    if (event.detail.distance > 60) {
      aEntity11.setAttribute('visible', false);
    } else if(event.detail.distance < 20){
      aEntity11.querySelector('#more-info11').setAttribute('visible', true);
      message11.style.display = 'block';
      message11.innerHTML=`<p>Anda berada di lokasi gedung ${locations[10].unit.name_loca}</p>
        <p>Longitude: ${locations[10].unit.loca.longitude}</p>
        <p>Latitude: ${locations[10].unit.loca.latitude}</p>
        <p>Tekan tombol "MORE INFO" untuk melihat informasi gedung.</p>`;
    } else{
      // message11.style.display = 'none';
      aEntity11.querySelector('#more-info11').setAttribute('visible', false);
      aEntity11.setAttribute('visible', true);
    }
  });
  aEntity12.addEventListener('gps-entity-place-update-positon', (event) => {
    const message12 = document.getElementById('message');
    if (event.detail.distance > 60) {
      aEntity12.setAttribute('visible', false);
    } else if(event.detail.distance < 20){
      aEntity12.querySelector('#more-info12').setAttribute('visible', true);
      message12.style.display = 'block';
      message12.innerHTML=`<p>Anda berada di lokasi gedung ${locations[11].unit.name_loca}</p>
        <p>Longitude: ${locations[11].unit.loca.longitude}</p>
        <p>Latitude: ${locations[11].unit.loca.latitude}</p>
        <p>Tekan tombol "MORE INFO" untuk melihat informasi gedung.</p>`;
    } else{
      // message12.style.display = 'none';
      aEntity12.querySelector('#more-info12').setAttribute('visible', false);
      aEntity12.setAttribute('visible', true);
    }
  });
  aEntity13.addEventListener('gps-entity-place-update-positon', (event) => {
    const message13 = document.getElementById('message');
    if (event.detail.distance > 60) {
      aEntity13.setAttribute('visible', false);
    } else if(event.detail.distance < 20){
      aEntity13.querySelector('#more-info13').setAttribute('visible', true);
      message13.style.display = 'block';
      message13.innerHTML=`<p>Anda berada di lokasi gedung ${locations[12].unit.name_loca}</p>
        <p>Longitude: ${locations[12].unit.loca.longitude}</p>
        <p>Latitude: ${locations[12].unit.loca.latitude}</p>
        <p>Tekan tombol "MORE INFO" untuk melihat informasi gedung.</p>`;
    } else{
      // message13.style.display = 'none';
      aEntity13.querySelector('#more-info13').setAttribute('visible', false);
      aEntity13.setAttribute('visible', true);
    }
  });
  aEntity14.addEventListener('gps-entity-place-update-positon', (event) => {
    const message14 = document.getElementById('message');
    if (event.detail.distance > 60) {
      aEntity14.setAttribute('visible', false);
    } else if(event.detail.distance < 20){
      aEntity14.querySelector('#more-info14').setAttribute('visible', true);
      message14.style.display = 'block';
      message14.innerHTML=`<p>Anda berada di lokasi gedung ${locations[13].unit.name_loca}</p>
        <p>Longitude: ${locations[13].unit.loca.longitude}</p>
        <p>Latitude: ${locations[13].unit.loca.latitude}</p>
        <p>Tekan tombol "MORE INFO" untuk melihat informasi gedung.</p>`;
    } else{
      // message14.style.display = 'none';
      aEntity14.querySelector('#more-info14').setAttribute('visible', false);
      aEntity14.setAttribute('visible', true);
    }
  });
  aEntity15.addEventListener('gps-entity-place-update-positon', (event) => {
    const message15 = document.getElementById('message');
    if (event.detail.distance > 60) {
      aEntity15.setAttribute('visible', false);
    } else if(event.detail.distance < 20){
      aEntity15.querySelector('#more-info15').setAttribute('visible', true);
      message15.style.display = 'block';
      message15.innerHTML=`<p>Anda berada di lokasi gedung ${locations[14].unit.name_loca}</p>
        <p>Longitude: ${locations[14].unit.loca.longitude}</p>
        <p>Latitude: ${locations[14].unit.loca.latitude}</p>
        <p>Tekan tombol "MORE INFO" untuk melihat informasi gedung.</p>`;
    } else {
      // message15.style.display = 'none';
      aEntity15.querySelector('#more-info15')
        .setAttribute('visible', false);
      aEntity15.setAttribute('visible', true);
    }
  });
});

