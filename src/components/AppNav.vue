<script>
export default {};
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <router-link :to="{ name: 'home' }" class="navbar-brand"
        >BOOLPRESS</router-link
      >

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#BoolpressNav"
        aria-controls="BoolpressNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="BoolpressNav">
        <div class="navbar-nav">
          <router-link :to="{ name: 'posts.index' }" class="nav-link active"
            >Posts</router-link
          >
          <a class="nav-link" href="#">About</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
