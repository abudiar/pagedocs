import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: "",
    navItems: [],
    indexMd: ""
  },
  mutations: {
    updateNavItems(state, payload) {
      state.navItems = payload;
    },
    updateIndexMd(state, payload) {
      state.indexMd = payload;
    },
    updateTitle(state, payload) {
      state.title = payload;
    }
  },
  actions: {
    getConfig({ commit, dispatch }) {
      Vue.axios({
        url: 'config.json',
        method: 'GET',
      })
        .then(async response => {
          commit('updateTitle', response.data.title);
          commit('updateNavItems', await dispatch('parseNavItems', response.data.navItems));
          const indexPage = await dispatch('getPage', 'index.md');
          commit('updateIndexMd', indexPage.data);
        })
        .catch(error => {
          console.log(error);
        })
    },
    async parseNavItems({ dispatch }, payload) {
      const navItems = payload;
      for (let i in navItems) {
        if (navItems[i].source != undefined && navItems[i].source != '') {
          try {
            const page = await dispatch('getPage', navItems[i].source);
            navItems[i]['parsedSource'] = page.data;
            // console.log(page, page.data.indexOf('\t'));
          }
          catch (err) {
            console.log(err);
          }
        }
        if (navItems[i].children != undefined) {
          navItems[i].children = await dispatch('parseNavItems', navItems[i].children);
        }
      }
      return navItems;
    },
    getPage(state, payload) {
      let source = payload[0] == '/' ? payload.substring(1) : payload;
      return Vue.axios({
        url: 'pages/' + source,
        method: 'GET',
      })
    },
  },
  modules: {
  }
})
