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
    />
  </div>
</template>

<script>
import Estate from "@/components/Estate/Estate.vue";
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
};
</script>
