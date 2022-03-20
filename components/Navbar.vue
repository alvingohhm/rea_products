<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="container-fluid">
      <nuxt-link exact to="/" class="navbar-brand">REA</nuxt-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <nuxt-link to="/about" class="nav-link active" aria-current="page"
              >About</nuxt-link
            >
          </li>
        </ul>
        <select class="selectpicker mx-3" data-width="fit">
          <option selected value="1">English</option>
          <option value="2">Chinese</option>
        </select>
        <button type="button" class="btn btn-primary">
          <font-awesome-icon icon="fa-solid fa-cart-arrow-down" />
          Cart <span class="badge bg-secondary">{{ total_item }}</span>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      total_item: 1,
    };
  },
};
</script>

<style></style>
