import axios from "axios";

export const state = () => ({
  listings: [],
  cartCount: 0,
  cart: [],
});

export const mutations = {
  setListings(state, payload) {
    state.listings = payload;
  },
  loadCart(state) {
    //if browser reset, find cart in localstorage and restore state.cart
    let localCartItems = localStorage.getItem("reaCart");
    let localCartCount = localStorage.getItem("reaCartCount");
    if (localCartItems) {
      state.cart = JSON.parse(localCartItems);
    }
    if (localCartCount) {
      state.cartCount = localCartCount;
    }
  },
  clearCart(state) {
    state.cart = [];
    state.cartCount = 0;
    localStorage.removeItem("reaCart");
    localStorage.removeItem("reaCartCount");
  },
  addToCart(state, payload) {
    let itemIndex = state.cart.findIndex((item) => {
      return item.id === payload.id && item.service === payload["service"];
    });

    if (itemIndex === -1) {
      state.cart.push(payload);
      state.cartCount++;
    }

    localStorage.setItem("reaCart", JSON.stringify(state.cart));
    localStorage.setItem("reaCartCount", state.cartCount);
  },
  removeFromCart: (state, payload) => {
    let index = state.cart.findIndex((item) => {
      return item.id === payload.id && item.service === payload.service;
    });
    state.cart.splice(index, 1);
    state.cartCount--;

    localStorage.setItem("reaCart", JSON.stringify(state.cart));
    localStorage.setItem("reaCartCount", state.cartCount);
  },
};

export const actions = {
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
};

export const getters = {
  getListings(state) {
    return state.listings;
  },
  getCartCount(state) {
    return state.cartCount;
  },
  getAllCartItems(state) {
    return state.cart;
  },
  getCartGroupByCountry(state) {
    let groupByCountry = state.cart.reduce((group, item) => {
      const { country } = item;
      group[country] = group[country] ?? [];
      group[country].push(item);
      return group;
    }, {});
    return groupByCountry;
  },
  getTotalAmtByCountry(state) {
    let groupByCountry = state.cart.reduce((group, item) => {
      const { country } = item;
      group[country] = group[country] ?? 0;
      group[country] += parseInt(item.charges);
      return group;
    }, {});
    return groupByCountry;
  },
};
