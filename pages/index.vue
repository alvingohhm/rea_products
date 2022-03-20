<template>
  <div class="d-flex flex-column">
    <section>
      <div class="bg-light p-5 rounded">
        <h1>Property Listing</h1>
        <p class="lead">
          Use the dropdown selector to select listing by country.
        </p>
        <div class="input-group">
          <select
            class="form-select"
            id="inputGroupSelect04"
            aria-label="Example select with button addon"
          >
            <option value="0" selected>Country...</option>
            <option value="1">Singapore</option>
            <option value="2">HongKong</option>
          </select>
          <button class="btn btn-outline-secondary" type="button">
            Search
          </button>
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
  computed: {
    getListings() {
      return this.$store.getters.getListings;
    },
  },
};
</script>
