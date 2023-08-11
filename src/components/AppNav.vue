<script>
export default {
  data() {
    return {
      searchString: "",
    };
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <router-link :to="{ name: 'home' }" class="navbar-brand"
        >BOOLPRESS</router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#boolpressNavBar"
        aria-controls="boolpressNavBar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="boolpressNavBar">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link :to="{ name: 'posts.index' }" class="nav-link active"
              >Posts</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'about' }" class="nav-link"
              >About</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'contact' }" class="nav-link"
              >Contact</router-link
            >
          </li>
          <!-- DROPDOWN -->
          <!-- <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> -->
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
