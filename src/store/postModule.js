import axios from "axios";
export const postModule = {
  state: () => ({
    posts: [],
    isPostLoading: false,
    searchQuery: "",
    page: 1,
    limit: 10,
    totalPages: 0,
    selectOpt: "",
    selectSort: [
      { value: "title", name: "По названия" },
      { value: "body", name: "По содержанию" },
    ],
  }),
  getters: {
    sortedPosts(state) {
      return [...state.posts].sort((p1, p2) => {
        return p1[state.selectOpt]?.localeCompare(p2[state.selectOpt]);
      });
    },
    sortedSearchPost(state, getters) {
      return getters.sortedPosts.filter((p) =>
        p.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setLoading(state, bool) {
      state.isPostLoading = bool;
    },
    setPage(state, page) {
      state.page = page;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },
    setSearchQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
    setSelectSort(state, selectOpt) {
      state.selectOpt = selectOpt
    }
  },
  actions: {
    async fetchPost({state, commit}) {
      try {
       commit('setLoading', true);

        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          }
        );
        commit('setTotalPages', Math.ceil(
          response.headers["x-total-count"] / this.limit
        ));
        commit('setPosts', response.data)
      } catch (e) {
        console.log(e);
      } finally {
        commit('setLoading', false);
      }
    },
    async loadMod({state, commit}) {
      try {
        commit('setPage', state.page + 1);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          }
        );
        commit('setTotalPages', Math.ceil(
          response.headers["x-total-count"] / state.limit
        ));
        commit('setPosts', [...state.posts, ...response.data]);
      } catch (e) {
        console.log(e);
      } 
    },
  },
  namespaced: true
};
