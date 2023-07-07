//Teknik Sipil
AFRAME.registerState({

  initialState: {
    menu: 'main_ts'
  },

  handlers: {
    menuBack_ts: function (state) {
      state.menu = 'main_ts';
    },
    menuRuangan_ts1: function (state) {
      state.menu = 'ruangan_ts1';
    },
    menuRuangan_ts2: function (state) {
      state.menu = 'ruangan_ts2';
    },
    menuRuangan_ts3: function (state) {
      state.menu = 'ruangan_ts3';
    },
    menuRuangan_ts4: function (state) {
      state.menu = 'ruangan_ts4';
    },
    menuRuangan_ts5: function (state) {
      state.menu = 'ruangan_ts5';
    },
  }
});

