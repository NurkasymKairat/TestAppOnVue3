<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
    export default {
        name: 'my-button'
    }
</script>

<style>
.btn {
  padding: 10px 15px;
  background: none;
  color: rgb(72, 86, 86);
  border: 1px solid teal;
  transition: 0.3s;
}

.btn:hover {
  background-color: rgb(46, 57, 57);
  color: aliceblue;
}
</style>
