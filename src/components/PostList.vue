<template>
  <div v-if="posts.length > 0">
    <h3>Список пользователей</h3>
    <transition-group name="list">
      <post-item
        class="post"
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
      />
    </transition-group>
  </div>
  <h2 v-else style="color: brown">Список пользователей пуст</h2>
</template>

<script>
import PostItem from "./PostItem.vue";
export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
      title: Object,
    },
  },
};
</script>

<style scoped>
.post {
  margin-top: 50px;
  padding: 15px;
  border: 2px solid teal;
}

form {
  display: flex;
  flex-direction: column;
}

strong {
  color: rgb(30, 39, 39);
  font-weight: 700;
}

.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
}
.list-move {
  transition: all 0.4s linear;
}
.list-enter-active ,
.list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
</style>
