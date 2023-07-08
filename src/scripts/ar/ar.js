import locations from './locations';

window.onload = () => {
  const infos = ['more-info', 'more-info2', 'more-info3', 'more-info4', 'more-info5', 'more-info6', 'more-info7', 'more-info8', 'more-info9', 'more-info10', 'more-info11', 'more-info12', 'more-info13', 'more-info14', 'more-info15'];
  const locs = ['text-location', 'text-location2', 'text-location3', 'text-location4', 'text-location5', 'text-location6', 'text-location7', 'text-location8', 'text-location9', 'text-location10', 'text-location11', 'text-location12', 'text-location13', 'text-location14', 'text-location15'];
  const diss = ['text-distance', 'text-distance2', 'text-distance3', 'text-distance4', 'text-distance5', 'text-distance6', 'text-distance7', 'text-distance8', 'text-distance9', 'text-distance10', 'text-distance11', 'text-distance12', 'text-distance13', 'text-distance14', 'text-distance15'];
  const imgs = ['image-pin', 'image-pin2', 'image-pin3', 'image-pin4', 'image-pin5', 'image-pin6', 'image-pin7', 'image-pin8', 'image-pin9', 'image-pin10', 'image-pin11', 'image-pin12', 'image-pin13', 'image-pin14', 'image-pin15'];
  const aEntity = ['entity-handler','entity-handler2','entity-handler3','entity-handler4','entity-handler5','entity-handler6','entity-handler7','entity-handler8','entity-handler9', 'entity-handler10', 'entity-handler11', 'entity-handler12', 'entity-handler13', 'entity-handler14', 'entity-handler15']
  let i,
    len;

    for (i = 0, len = locs.length; i < len; i++) {

      let latitude = locations[i].unit.loca.latitude;
      let longitude = locations[i].unit.loca.longitude;
      let name = locations[i].unit.name_loca;

      // console.log('longitude = ' + longitude, 'latitude =' + latitude);
      const entity = document.getElementById(aEntity[i]);
      entity.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);

      // add place name
      const placeText = document.getElementById(locs[i]);
      placeText.setAttribute('text', `value: ${name.toUpperCase()}`);
      placeText.setAttribute('text','width: 5')
      placeText.setAttribute('text', 'align: center');
      placeText.setAttribute('position', '0 0.05 1');

      // add distance
      const placeDistance = document.getElementById(diss[i]);
      placeDistance.setAttribute('text','width: 5')
      placeDistance.setAttribute('text', 'align: center');
      placeDistance.setAttribute('position', '0 -0.25 1');

      // add image
      const model = document.getElementById(imgs[i]);
      model.setAttribute('type', 'image/svg+xml');
      model.setAttribute('src', './pin3.png');
      model.setAttribute('width', '2');
      model.setAttribute('height', '2');
      model.setAttribute('position', '0 0 0');
      model.setAttribute('look-at', '[gps-camera]');

      // add image info
      const info = document.getElementById(infos[i]);
      info.setAttribute('src', './more-info.png');
      info.setAttribute('type', 'image/svg+xml');
      info.setAttribute('width', '3');
      info.setAttribute('height', '1');
      info.setAttribute('visible', false);
      info.setAttribute('position', '0 -1.7 0');
      info.setAttribute('look-at', '[gps-camera]');
      info.setAttribute( 'animation','property: scale; to: 1.2 1.2 1.2; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate');

    }
};


