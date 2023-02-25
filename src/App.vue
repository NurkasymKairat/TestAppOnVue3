<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <my-input placeholder="Search..." v-model="searchQuery"></my-input>
    <div class="app_btns">
      <my-button @click="showDialog">Создать пост</my-button>
      <my-select :options="selectSort" v-model="selectOpt"></my-select>
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
    <div ref="observer" class="observer"></div>
  </div>
</template>

<script>
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";
import axios from "axios";
export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostLoading: false,
      searchQuery: "",
      page: 1,
      limit: 10,
      totalPages: 0,
      title: "",
      body: "",
      selectOpt: "",
      selectSort: [
        { value: "title", name: "По названия" },
        { value: "body", name: "По содержанию" },
      ],
    };
  },
  methods: {
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
    // changeHage(num) {
    //   this.page = num;
    // },
    async fetchPost() {
      try {
        this.isPostLoading = true;

        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = response.data;
        this.isPostLoading = false;
      } catch (e) {
        alert("Error");
      } finally {
      }
    },
    async loadMod() {
      try {
        this.page += 1;
    

        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = [...this.posts, ...response.data];
        this.isPostLoading = false;
      } catch (e) {
        alert("Error");
      } 
    },
  },
  mounted() {
    this.fetchPost();
    let options = {
      rootMargin: "0px",
      threshold: 1.0,
    };

    let callback = (e, o) => {
      if (e[0].isIntersecting && this.page < this.totalPages) {
        this.loadMod();
      }
    } 

    let observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((p1, p2) => {
        return p1[this.selectOpt]?.localeCompare(p2[this.selectOpt]);
      });
    },
    sortedSearchPost() {
      return this.sortedPosts.filter((p) =>
        p.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  watch: {
    // page() {
    //   this.fetchPost();
    // }
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  padding: 20px;
}

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
