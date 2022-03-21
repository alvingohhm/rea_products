<template>
  <div>
    <div class="py-5 text-center">
      <h2>Checkout</h2>
      <p class="lead">
        Verify your order and submit. Our Agent will contact you and direct you
        to payment. Thanks
      </p>
    </div>

    <div class="row g-5">
      <div class="col-md-5 col-lg-5 order-md-last">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-primary">Your cart</span>
          <span class="badge bg-primary rounded-pill">{{ getCartCount }}</span>
        </h4>
        <CartList :cartListings="getCartGroupByCountry" />
      </div>
      <div class="col-md-7 col-lg-7">
        <h4 class="mb-3">Billing address</h4>
        <form class="needs-validation" novalidate>
          <div class="row g-3">
            <div class="col-sm-6">
              <label for="firstName" class="form-label">First name</label>
              <input
                type="text"
                class="form-control"
                id="firstName"
                placeholder=""
                value=""
                required
              />
              <div class="invalid-feedback">Valid first name is required.</div>
            </div>

            <div class="col-sm-6">
              <label for="lastName" class="form-label">Last name</label>
              <input
                type="text"
                class="form-control"
                id="lastName"
                placeholder=""
                value=""
                required
              />
              <div class="invalid-feedback">Valid last name is required.</div>
            </div>

            <div class="col-12">
              <label for="email" class="form-label"
                >Email <span class="text-muted">(Optional)</span></label
              >
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="you@example.com"
              />
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="col-12">
              <label for="address" class="form-label">Address</label>
              <input
                type="text"
                class="form-control"
                id="address"
                placeholder="1234 Main St"
                required
              />
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>
          </div>

          <hr class="my-4" />

          <button class="w-100 btn btn-primary btn-lg" type="submit">
            Submit Order
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import CartList from "@/components/Cart/CartList.vue";

export default {
  name: "CheckOut",
  components: { CartList },
  computed: {
    getCartCount() {
      return this.$store.getters.getCartCount;
    },
    getCartGroupByCountry() {
      return this.$store.getters.getCartGroupByCountry;
    },
  },
};
</script>

<style></style>
