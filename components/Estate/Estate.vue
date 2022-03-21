<template>
  <div class="col mb-4" :id="id">
    <div class="card shadow-sm">
      <img :src="image" class="card-img-top" alt="house1" />

      <div class="card-body">
        <h5 class="card-title">{{ property_name }}</h5>
        <div class="d-flex justify-content-between">
          <h6>{{ currency }} {{ formatedPrice }}</h6>
          <p>
            {{ formatedArea }}, {{ formatedBedroom }}, {{ formatedBathroom }}
          </p>
        </div>
        <div class="my-2">
          <div>{{ location }}</div>
          <div>{{ country }}</div>
        </div>
      </div>
      <div class="card-footer">
        <h6 class="mb-2">Add Service to Cart</h6>
        <div class="d-flex justify-content-start">
          <button
            type="button"
            class="btn btn-primary me-2"
            @click="$emit('addCart', { id, service: 'visit' })"
          >
            Agent Visit
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="$emit('addCart', { id, service: 'call' })"
          >
            Agent Call
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import millify from "millify";
export default {
  name: "Estate",
  props: {
    id: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    property_name: {
      type: String,
      require: true,
    },
    currency: {
      type: String,
      require: true,
    },
    price: {
      type: String,
      require: true,
    },
    area: {
      type: String,
      require: true,
    },
    bedroom: {
      type: String,
      require: true,
    },
    bathroom: {
      type: String,
      require: true,
    },
    location: {
      type: String,
      require: true,
    },
    country: {
      type: String,
      require: true,
    },
  },
  computed: {
    formatedPrice: function () {
      return millify(parseInt(this.price), {
        precision: 3,
        lowercase: true,
      });
    },
    formatedArea: function () {
      return this.area + " sqft";
    },
    formatedBedroom: function () {
      return this.bedroom + (this.bedroom > 1 ? " Beds" : " Bed");
    },
    formatedBathroom: function () {
      return this.bathroom + (this.bathroom > 1 ? " Baths" : " Bath");
    },
  },
};
</script>

<style scoped>
p,
h6 {
  margin-bottom: 0px;
}
</style>
