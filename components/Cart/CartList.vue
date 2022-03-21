<template>
  <div>
    <div v-for="(value, country, index) in cartListings" :key="index">
      <h5>{{ country }}</h5>
      <ul class="list-group mb-3">
        <CartItem :items="value" />
        <li class="list-group-item d-flex justify-content-between">
          <span
            >Total
            {{ country === "Singapore" ? "(SGD) with 7%" : "(HKD) with 3%" }}
            GST</span
          >
          <strong
            >{{ country === "Singapore" ? "SGD" : "HKD" }}
            {{ TotalAmtByCountry[country] }}</strong
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";
export default {
  components: { CartItem },
  name: "CartList",
  props: {
    cartListings: {
      type: Object,
      required: true,
    },
  },
  computed: {
    TotalAmtByCountry() {
      const AmtObj = Object.assign(
        {},
        this.$store.getters.getTotalAmtByCountry
      );
      let gst = 0;
      for (let key in AmtObj) {
        switch (key) {
          case "Singapore":
            gst = 1.07;
            break;
          case "Hong Kong":
            gst = 1.03;
            break;
          default:
            break;
        }
        AmtObj[key] = Math.round(AmtObj[key] * gst * 100) / 100;
      }

      return AmtObj;
    },
  },
};
</script>
