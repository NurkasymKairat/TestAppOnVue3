<template>
  <div>
    <h1>Страница с постами</h1>
    <my-input v-focus placeholder="Search..." v-model="searchQuery"></my-input>
      <div class="app_btns">
        <my-button >Создать пост</my-button>
        <my-select :options="selectSort" v-model="selectOpt"></my-select>
      </div>
      <my-button @click="fetchPost">Получть посты</my-button>
      <my-dilalog v-model:show="dialogVisible">
        <post-form  />
      </my-dilalog>
  
      <post-list
        v-if="!isPostLoading"
        :posts="sortedAndSearchedPosts"
       
      />
      <div v-else>Загрузка...</div>

  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import usePosts from "../hooks/usePosts";
import useSorted from "../hooks/useSorted";
import useSortedAndSearch from "../hooks/useSortedAndSearch";
import { ref } from "vue";
export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      dialogVisible: false,
      selectSort: [
        { value: "title", name: "По названия" },
        { value: "body", name: "По содержанию" },
      ],
    };
  },
  setup(props) {
    const { posts, totalPages, isPostLoading } = usePosts(10);
    const { sortedPosts, selectOpt } = useSorted(posts);
    const { searchQuery, sortedAndSearchedPosts } = useSortedAndSearch(sortedPosts);

    return {
      posts,
      totalPages,
      isPostLoading,
      searchQuery,
      sortedPosts,
      selectOpt,
      sortedAndSearchedPosts,

    };
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
