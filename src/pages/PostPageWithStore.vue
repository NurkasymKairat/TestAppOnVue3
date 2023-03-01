<template>
  <div>
    <my-input
      v-focus
      placeholder="Search..."
      @update:model-value="setSearchQuery"
      :model-value="searchQuery"
    ></my-input>
    <div class="app_btns">
      <my-button @click="showDialog">Создать пост</my-button>
      <my-select
        :options="selectSort"
        @update:model-value="setSelectSort"
        :model-value="selectOpt"
      ></my-select>
    </div>
    <my-button @click="fetchPost">Получть посты</my-button>
    <my-dilalog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dilalog>

    <post-list
      v-if="!isPostLoading"
      :posts="sortedSearchPost"
      @remove="removePost"
    />
    <div v-else>Загрузка...</div>
    <!-- <div class="page_wrapper">
      <div
        @click="changeHage(pageNum)"
        :class="{ page_active: page === pageNum }"
        class="page"
        v-for="pageNum in totalPages"
        :key="pageNum"
      >
        {{ pageNum }}
      </div>
    </div> -->
    <div v-intersection="loadMod" class="observer"></div>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import axios from "axios";
import { mapState, mapActions, mapGetters, mapMutations } from "vuex";
export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    ...mapMutations({
      setPage: "post/Setpage",
      setSearchQuery: "post/setSearchQuery",
      setSelectSort: "post/setSelectSort",
    }),
    ...mapActions({
      loadMod: "post/loadMod",
      fetchPost: "post/fetchPost",
    }),

    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
  },
  mounted() {
    this.fetchPost();
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      isPostLoading: (state) => state.post.isPostLoading,
      searchQuery: (state) => state.post.searchQuery,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPages: (state) => state.post.totalPages,
      selectOpt: (state) => state.post.selectOpt,
      selectSort: (state) => state.post.selectSort,
    }),
    ...mapGetters({
      sortedPosts: "post/",
      sortedSearchPost: "post/sortedSearchPost",
    }),
  },
  watch: {
    // page() {
    //   this.fetchPost();
    // }
  },
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
}

.btn {
  margin-top: 15px;
  align-self: flex-end;
  padding: 10px 15px;
  background: none;
  color: teal;
  border: 1px solid teal;
  transition: 0.3s;
}

.btn:hover {
  background-color: rgb(7, 151, 154);
  color: aliceblue;
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

.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
}

.app_btns {
  display: flex;
  justify-content: space-between;
}

.page_wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  border: 1px solid rgb(19, 201, 201);
  padding: 10px;
  cursor: pointer;
}

.page_active {
  border: 2px solid rgb(0, 0, 0);
}

.observer {
  height: 30px;
  background: green;
}
</style>
