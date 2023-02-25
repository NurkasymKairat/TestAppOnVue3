<template>
  <div class="post">
    <div>
      <div>{{ post.id }}</div>
      <div><strong>Названия:</strong> {{ post.title }}</div>
      <div><strong>Описания:</strong> {{ post.body }}</div>
    </div>
    <div class="post_btn">
      <my-button @click="$emit('remove', post)">Delete</my-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.post {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-top: 50px;
  padding: 15px;
  border: 2px solid teal;
}
</style>
