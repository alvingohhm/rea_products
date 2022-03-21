<template>
  <span>
    <li
      class="list-group-item d-flex flex-column"
      v-for="item in items"
      :key="item.id"
    >
      <div class="d-flex justify-content-between">
        <div class="d-flex flex-column">
          <h5 class="mb-0">Agent {{ item.service }}</h5>
          <div class="my-1">
            {{ item.property_name }} ({{ item.currency }} {{ item.price }})
          </div>
          <div>
            <button
              @click="removeFromCart(item.id, item.service)"
              type="button"
              class="btn btn-outline-dark btn-sm"
              :id="item.id"
            >
              Delete
            </button>
          </div>
        </div>
        <div class="d-flex flex-column justify-content-center">
          <div class="text-muted fs-6">
            {{ item.currency }} {{ item.charges }}
          </div>
        </div>
      </div>
    </li>
  </span>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    items: {
      type: Array,
      require: true,
    },
  },
  methods: {
    removeFromCart(id, service) {
      this.$store.commit("removeFromCart", { id, service });
    },
  },
};
</script>
