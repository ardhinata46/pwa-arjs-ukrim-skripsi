AFRAME.registerState({
  initialState: {
    menu_ts: 'main_ts',
    menu_unit3: 'main_unit3a',
    menu_unit3c: 'main_unit3c',
    menu_unit4: 'main_unit4',
    menu_unit6: 'main_unit6',
    menu_unit7: 'main_unit7',
    menu_unit8: 'main_unit8',
    menu_unit9: 'main_unit9',
    menu_unit10: 'main_unit10'
  },
  handlers: {
    //TEKNIK SIPIL
    menuBack_ts: function (state) {
      state.menu_ts = 'main_ts';
    },
    menuRuangan_ts1: function (state) {
      state.menu_ts = 'ruangan_ts1';
    },
    menuRuangan_ts2: function (state) {
      state.menu_ts = 'ruangan_ts2';
    },
    menuRuangan_ts3: function (state) {
      state.menu_ts = 'ruangan_ts3';
    },
    menuRuangan_ts4: function (state) {
      state.menu_ts = 'ruangan_ts4';
    },
    menuRuangan_ts5: function (state) {
      state.menu_ts = 'ruangan_ts5';
    },

    //UNIT III
    menuBack_unit3a: function (state) {
      state.menu_unit3 = 'main_unit3a';
    },
    menuLantai1_unit3a: function (state) {
      state.menu_unit3 = 'menuLantai1_unit3a';
    },
    menuLantai2_unit3b: function (state) {
      state.menu_unit3 = 'menuLantai2_unit3b';
    },

    //Lantai 1(unit 3)
    menuRoom1_unit3a: function (state) {
      state.menu_unit3 = 'menuRoom1_unit3a';
    },
    menuRoom2_unit3a: function (state) {
      state.menu_unit3 = 'menuRoom2_unit3a';
    },
    menuRoom3_unit3a: function (state) {
      state.menu_unit3 = 'menuRoom3_unit3a';
    },
    menuRoom4_unit3a: function (state) {
      state.menu_unit3 = 'menuRoom4_unit3a';
    },
    menuRoom5_unit3a: function (state) {
      state.menu_unit3 = 'menuRoom5_unit3a';
    },
    menuRoom6_unit3a: function (state) {
      state.menu_unit3 = 'menuRoom6_unit3a';
    },
    menuRoom7_unit3a: function (state) {
      state.menu_unit3 = 'menuRoom7_unit3a';
    },

    //Lantai 2(unit 3)
    menuRoom1_unit3b: function (state) {
      state.menu_unit3 = 'menuRoom1_unit3b';
    },
    menuRoom2_unit3b: function (state) {
      state.menu_unit3 = 'menuRoom2_unit3b';
    },
    menuRoom3_unit3b: function (state) {
      state.menu_unit3 = 'menuRoom3_unit3b';
    },
    menuRoom4_unit3b: function (state) {
      state.menu_unit3 = 'menuRoom4_unit3b';
    },
    menuRoom5_unit3b: function (state) {
      state.menu_unit3 = 'menuRoom5_unit3b';
    },
    menuRoom6_unit3b: function (state) {
      state.menu_unit3 = 'menuRoom6_unit3b';
    },
    menuRoom7_unit3b: function (state) {
      state.menu_unit3 = 'menuRoom7_unit3b';
    },

    //UNIT III C
    menuBack_unit3c: function (state) {
      state.menu_unit3c = 'main_unit3c';
    },
    menuRuangan1_unit3c: function (state) {
      state.menu_unit3c = 'ruangan_unit3c1';
    },
    menuRuangan2_unit3c: function (state) {
      state.menu_unit3c = 'ruangan_unit3c2';
    },
    menuRuangan3_unit3c: function (state) {
      state.menu_unit3c = 'ruangan_unit3c3';
    },

    //UNIT IV
    menuBack_unit4a: function (state) {
      state.menu_unit4 = 'main_unit4';
    },
    menuLantai1_unit4a: function (state) {
      state.menu_unit4 = 'menuLantai1_unit4a';
    },
    menuLantai2_unit4b: function (state) {
      state.menu_unit4 = 'menuLantai2_unit4b';
    },

    //Lantai 1(unit 4)
    menuRoom1_unit4a: function (state) {
      state.menu_unit4 = 'menuRoom1_unit4a';
    },
    menuRoom2_unit4a: function (state) {
      state.menu_unit4 = 'menuRoom2_unit4a';
    },
    menuRoom3_unit4a: function (state) {
      state.menu_unit4 = 'menuRoom3_unit4a';
    },
    menuRoom4_unit4a: function (state) {
      state.menu_unit4 = 'menuRoom4_unit4a';
    },

    //Lantai 2(unit 4)
    menuRoom1_unit4b: function (state) {
      state.menu_unit4 = 'menuRoom1_unit4b';
    },
    menuRoom2_unit4b: function (state) {
      state.menu_unit4 = 'menuRoom2_unit4b';
    },
    menuRoom3_unit4b: function (state) {
      state.menu_unit4 = 'menuRoom3_unit4b';
    },
    menuRoom4_unit4b: function (state) {
      state.menu_unit4 = 'menuRoom4_unit4b';
    },
    menuRoom5_unit4b: function (state) {
      state.menu_unit4 = 'menuRoom5_unit4b';
    },

    //UNIT VI
    menuBack_unit6: function (state) {
      state.menu_unit6 = 'main_unit6';
    },
    menuRuangan1_unit6: function (state) {
      state.menu_unit6 = 'menuRuangan1_unit6';
    },
    menuRuangan2_unit6: function (state) {
      state.menu_unit6 = 'menuRuangan2_unit6';
    },

    //UNIT VII
    menuBack_unit7: function (state) {
      state.menu_unit7 = 'main_unit7';
    },
    menuRuangan1_unit7: function (state) {
      state.menu_unit7 = 'menuRuangan1_unit7';
    },
    menuRuangan2_unit7: function (state) {
      state.menu_unit7 = 'menuRuangan2_unit7';
    },
    menuRuangan3_unit7: function (state) {
      state.menu_unit7 = 'menuRuangan3_unit7';
    },

    //UNIT VIII
    menuBack_unit8: function (state) {
      state.menu_unit8 = 'main_unit8';
    },
    menuLantai1_unit8a: function (state) {
      state.menu_unit8 = 'menuLantai1_unit8a';
    },
    menuLantai2_unit8b: function (state) {
      state.menu_unit8 = 'menuLantai2_unit8b';
    },
    menuLantai3_unit8c: function (state) {
      state.menu_unit8 = 'main_unit10';
    },

    //LAB. FARMASI
    menuBack_unit9: function (state) {
      state.menu_unit9 = 'main_unit9';
    },
    menuRuangan1_unit9: function (state) {
      state.menu_unit9 = 'menuRuangan1_unit9';
    },
    menuRuangan2_unit9: function (state) {
      state.menu_unit9 = 'menuRuangan2_unit9';
    },
    menuRuangan3_unit9: function (state) {
      state.menu_unit9 = 'menuRuangan3_unit9';
    },
    menuRuangan4_unit9: function (state) {
      state.menu_unit9 = 'menuRuangan4_unit9';
    },
    menuRuangan5_unit9: function (state) {
      state.menu_unit9 = 'menuRuangan5_unit9';
    },
    menuRuangan6_unit9: function (state) {
      state.menu_unit9 = 'menuRuangan6_unit9';
    },
    menuRuangan7_unit9: function (state) {
      state.menu_unit9 = 'menuRuangan7_unit9';
    },
  }
});
