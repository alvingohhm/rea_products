import Vuex from "vuex";
// import axios from "axios";

// const createStore = () => {
//   return new Vuex.Store({
//     state: {
//       listings: [],
//       cartCount: 0,
//       cart: [],
//     },
//     mutations: {
//       setListings(state, payload) {
//         state.listings = payload;
//       },
//       loadCart(state) {
//         //if browser reset, find cart in localstorage and restore state.cart
//         let cartItem = localStorage.getItem("reaCart");
//         if (cartItem) {
//           state.cart = JSON.parse(cartItem);
//         }
//       },
//       clearCart(state) {
//         state.cart = [];
//         localStorage.removeItem("reaCart");
//       },
//       addToCart(state, payload) {
//         //find if item already exist. If exist return the index.
//         //item here refer to listing id. Using listing to capture whether
//         //call or visit service
//         let itemIndex = state.cart.findIndex((item) => item.id === payload.id);
//         console.log(state.cart);
//         console.log(itemIndex);
//         console.log(payload["visit"]);

//         if (itemIndex !== -1) {
//           //if item exist find and payload added is a call service
//           if (payload["call"]) {
//             console.log("callservice");
//             //if call service not already added, then add to the item in cart
//             if (!state.cart[itemIndex]["call"]) {
//               console.log(state.cart[itemIndex]);
//               state.cart[itemIndex]["call"] = true;
//               state.cartCount++;
//             }
//           }
//           //if item exist find and payload added is a visit service
//           if (payload["visit"]) {
//             console.log("visitservice");
//             //if visit service not already added, then add to the item in cart
//             if (!state.cart[itemIndex]["visit"]) {
//               state.cart[itemIndex]["visit"] = true;
//               state.cartCount++;
//             }
//           }
//         } else {
//           //if listing id yet to add in the cart, then add the whole payload
//           state.cart.push(payload);
//           state.cartCount++;
//         }

//         localStorage.setItem("reaCart", JSON.stringify(state.cart));
//       },
//     },
//     actions: {
//       nuxtServerInit(vuexContext, context) {
//         return axios
//           .get(`${process.env.BASEURL}/listings.json`)
//           .then((res) => {
//             const listingsArray = [];
//             for (const key in res.data) {
//               listingsArray.push({ ...res.data[key], id: key });
//             }
//             vuexContext.commit("setListings", listingsArray);
//           })
//           .catch((e) => context.error(e));
//       },
//     },
//     getters: {
//       getListings(state) {
//         return state.listings;
//       },
//       getCartCount(state) {
//         return state.cartCount;
//       },
//     },
//   });
// };

// export default createStore;
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
    //find if item already exist. If exist return the index.
    //item here refer to listing id. Using listing to capture whether
    //call or visit service
    let itemIndex = state.cart.findIndex((item) => item.id === payload.id);

    if (itemIndex !== -1) {
      //if item exist find and payload added is a call service
      if (payload["call"]) {
        //if call service not already added, then add to the item in cart
        if (!state.cart[itemIndex]["call"]) {
          state.cart[itemIndex]["call"] = true;
          state.cartCount++;
        }
      }
      //if item exist find and payload added is a visit service
      if (payload["visit"]) {
        //if visit service not already added, then add to the item in cart
        if (!state.cart[itemIndex]["visit"]) {
          state.cart[itemIndex]["visit"] = true;
          state.cartCount++;
        }
      }
    } else {
      //if listing id yet to add in the cart, then add the whole payload
      state.cart.push(payload);
      state.cartCount++;
    }

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
};
