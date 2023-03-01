<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a @click="$router.push('/')" class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" @click="$router.push('/post')" aria-current="page" href="#">Posts</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  @click="$router.push('/about')" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  @click="$router.push('/store')" href="#">store</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  @click="$router.push('/composition')" href="#">composition API</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  @click="$router.push('/api')" href="#">Api2</a>
        </li>
      </ul>

    </div>
  </div>
</nav>
</template>
<script>

export default {
    name: "Navbar",

}
</script>
<style lang="">
    
</style>