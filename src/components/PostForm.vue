<template>
  <div>
    <form @submit.prevent>
      <h4>Создания поста</h4>
      <my-input
        v-focus
        v-model="post.title"
        type="text"
        class="input"
        placeholder="Названия"
      />
      <my-input
        v-model="post.body"
        type="text"
        class="input"
        placeholder="Описания"
      />
      <my-button @click="createPost" class="btn">Create</my-button>
    </form>
    <div class="post" v-for="post in posts">
      <div><strong>Назвааывsdsdыывыфвыния:</strong> {{ post.title }}</div>
      <div><strong>Описания:</strong> {{ post.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Math.random();
      this.$emit("create", this.post);

      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

.post {
  margin-top: 50px;
  padding: 15px;
  border: 2px solid teal;
}

strong {
  color: rgb(30, 39, 39);
  font-weight: 700;
}
</style>
