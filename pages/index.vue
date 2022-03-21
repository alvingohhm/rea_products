<template>
  <div class="d-flex flex-column">
    <section>
      <div class="bg-light p-5 rounded">
        <h1>Property Listing</h1>
        <p class="lead">
          Use the dropdown selector to select listing by country.
        </p>
        <div class="input-group">
          <label class="input-group-text" for="country_select">Country</label>
          <select
            v-model="selectedCountry"
            class="form-select"
            id="country_select"
          >
            <option value="default" selected>Choose..</option>
            <option value="Singapore">Singapore</option>
            <option value="Hong Kong">Hong Kong</option>
          </select>
        </div>
      </div>
    </section>
    <EstateLists :listings="getListings" />
  </div>
</template>

<script>
import EstateLists from "@/components/Estate/EstateLists.vue";

export default {
  name: "HomePage",
  components: { EstateLists },
  mounted() {
    this.$store.commit("loadCart");
  },
  data() {
    return {
      selectedCountry: "default",
    };
  },
  computed: {
    getListings() {
      if (this.selectedCountry === null || this.selectedCountry === "default") {
        return this.$store.getters.getListings;
      }
      return this.$store.getters.getListings.filter(
        (estate) => estate.country === this.selectedCountry
      );
    },
  },
};
</script>
