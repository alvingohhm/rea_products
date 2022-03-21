<template>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-3">
    <Estate
      v-for="estate in listings"
      :key="estate.id"
      :id="estate.id"
      :image="estate.image"
      :property_name="estate.property_name"
      :currency="estate.currency"
      :price="estate.price"
      :area="estate.area"
      :bedroom="estate.bedrm"
      :bathroom="estate.bathrm"
      :location="estate.location"
      :country="estate.country"
      @addCart="addToCart"
    />
  </div>
</template>

<script>
import Estate from "@/components/Estate/Estate.vue";
import millify from "millify";

export default {
  name: "EstateLists",
  components: {
    Estate,
  },
  props: {
    listings: {
      type: Array,
      required: true,
    },
  },
  methods: {
    addToCart(request) {
      const targetEstate = this.listings.filter(
        (estate) => estate.id === request.id
      );
      const { id, property_name, price, currency, country } = targetEstate[0];
      const payload = {
        id,
        property_name,
        price,
        currency,
        country,
      };
      payload["price"] = millify(parseInt(payload["price"]), {
        precision: 3,
        lowercase: true,
      });
      payload["service"] = request.service;
      if (request.service === "call") {
        if (country === "Singapore") {
          payload["charges"] = 5;
        } else if (country === "Hong Kong") {
          payload["charges"] = 30;
        }
      } else if (request.service === "visit") {
        if (country === "Singapore") {
          payload["charges"] = 20;
        } else if (country === "Hong Kong") {
          payload["charges"] = 115;
        }
      }

      this.$store.commit("addToCart", payload);
    },
  },
};
</script>
