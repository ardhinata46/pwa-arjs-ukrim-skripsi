window.addEventListener('load', () => {

  //jarak user dengan object
  const text = document.getElementById('entity-handler');
  text.addEventListener('gps-entity-place-update-positon', (event) => {
    const t = document.getElementById('text-distance');
    t.setAttribute('text', `value: ${text.getAttribute('distanceMsg')}`);
  });

  const text2 = document.getElementById('entity-handler2');
  text2.addEventListener('gps-entity-place-update-positon', (event) => {
    const t2 = document.getElementById('text-distance2');
    t2.setAttribute('text', `value: ${text2.getAttribute('distanceMsg')}`);
  });

  const text3 = document.getElementById('entity-handler3');
  text3.addEventListener('gps-entity-place-update-positon', (event) => {
    const t3 = document.getElementById('text-distance3');
    t3.setAttribute('text', `value: ${text3.getAttribute('distanceMsg')}`);
  });

  const text4 = document.getElementById('entity-handler4');
  text4.addEventListener('gps-entity-place-update-positon', (event) => {
    const t4 = document.getElementById('text-distance4');
    t4.setAttribute('text', `value: ${text4.getAttribute('distanceMsg')}`);
  });

  const text5 = document.getElementById('entity-handler5');
  text5.addEventListener('gps-entity-place-update-positon', (event) => {
    const t5 = document.getElementById('text-distance5');
    t5.setAttribute('text', `value: ${text5.getAttribute('distanceMsg')}`);
  });

  const text6 = document.getElementById('entity-handler6');
  text6.addEventListener('gps-entity-place-update-positon', (event) => {
    const t6 = document.getElementById('text-distance6');
    t6.setAttribute('text', `value: ${text6.getAttribute('distanceMsg')}`);
  });

  const text7 = document.getElementById('entity-handler7');
  text7.addEventListener('gps-entity-place-update-positon', (event) => {
    const t7 = document.getElementById('text-distance7');
    t7.setAttribute('text', `value: ${text7.getAttribute('distanceMsg')}`);
  });

  const text8 = document.getElementById('entity-handler8');
  text8.addEventListener('gps-entity-place-update-positon', (event) => {
    const t8 = document.getElementById('text-distance8');
    t8.setAttribute('text', `value: ${text8.getAttribute('distanceMsg')}`);
  });

  const text9 = document.getElementById('entity-handler9');
  text9.addEventListener('gps-entity-place-update-positon', (event) => {
    const t9 = document.getElementById('text-distance9');
    t9.setAttribute('text', `value: ${text9.getAttribute('distanceMsg')}`);
  });

  const text10 = document.getElementById('entity-handler10');
  text10.addEventListener('gps-entity-place-update-positon', (event) => {
    const t10 = document.getElementById('text-distance10');
    t10.setAttribute('text', `value: ${text10.getAttribute('distanceMsg')}`);
  });

  const text11 = document.getElementById('entity-handler11');
  text11.addEventListener('gps-entity-place-update-positon', (event) => {
    const t11 = document.getElementById('text-distance11');
    t11.setAttribute('text', `value: ${text11.getAttribute('distanceMsg')}`);
  });

  const text12 = document.getElementById('entity-handler12');
  text12.addEventListener('gps-entity-place-update-positon', (event) => {
    const t12 = document.getElementById('text-distance12');
    t12.setAttribute('text', `value: ${text12.getAttribute('distanceMsg')}`);
  });

  const text13 = document.getElementById('entity-handler13');
  text13.addEventListener('gps-entity-place-update-positon', (event) => {
    const t13 = document.getElementById('text-distance13');
    t13.setAttribute('text', `value: ${text13.getAttribute('distanceMsg')}`);
  });

  const text14 = document.getElementById('entity-handler14');
  text14.addEventListener('gps-entity-place-update-positon', (event) => {
    const t14 = document.getElementById('text-distance14');
    t14.setAttribute('text', `value: ${text14.getAttribute('distanceMsg')}`);
  });

  const text15 = document.getElementById('entity-handler15');
  text14.addEventListener('gps-entity-place-update-positon', (event) => {
    const t15 = document.getElementById('text-distance15');
    t15.setAttribute('text', `value: ${text15.getAttribute('distanceMsg')}`);
  });
});
