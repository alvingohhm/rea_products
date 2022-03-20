import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
  return new Vuex.Store({
    state: {
      listings: [],
      cartCount: 0,
      cart: [],
    },
    mutations: {
      setListings(state, allListings) {
        state.listings = allListings;
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get(`${process.env.BASEURL}/listings.json`)
          .then((res) => {
            const listingsArray = [];
            for (const key in res.data) {
              listingsArray.push({ ...res.data[key], id: key });
            }
            vuexContext.commit("setListings", listingsArray);
          })
          .catch((e) => context.error(e));
      },
    },
    getters: {
      getListings(state) {
        return state.listings;
      },
      getCartCount(state) {
        return state.cartCount;
      },
    },
  });
};

export default createStore;
