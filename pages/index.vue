<template>
  <div class="d-flex flex-column">
    <section>
      <div class="bg-light p-5 rounded">
        <h1>Property Listing</h1>
        <p class="lead">
          This example is a quick exercise to illustrate how fixed to top navbar
          works. As you scroll, it will remain fixed to the top of your
          browser’s viewport.
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
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-3">
      <div class="col">
        <div class="card shadow-sm">
          <img
            src="https://images.unsplash.com/photo-1611095210561-67f0832b1ca3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            class="card-img-top"
            alt="house1"
          />

          <div class="card-body">
            <h5 class="card-title">The Rivertrees</h5>
            <div class="d-flex justify-content-between">
              <h6 class="mb-0">SGD 1,280,000</h6>
              <p class="mb-0">947 sqft, 3 Beds, 2 Baths</p>
            </div>
            <div class="my-2">
              <div>21 Fernvale Cl</div>
              <div>Singapore</div>
            </div>
          </div>
          <div class="card-footer">
            <h6 class="mb-2">Add Service to Cart</h6>
            <div class="d-flex justify-content-start">
              <button type="button" class="btn btn-primary me-2">
                Agent Visit
              </button>
              <button type="button" class="btn btn-primary">Agent Call</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
          <svg
            class="bd-placeholder-img card-img-top"
            width="100%"
            height="225"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: Thumbnail"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c" />
            <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
          </svg>

          <div class="card-body">
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  View
                </button>
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  Edit
                </button>
              </div>
              <small class="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
          <svg
            class="bd-placeholder-img card-img-top"
            width="100%"
            height="225"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: Thumbnail"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#55595c" />
            <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
          </svg>

          <div class="card-body">
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  View
                </button>
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  Edit
                </button>
              </div>
              <small class="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
