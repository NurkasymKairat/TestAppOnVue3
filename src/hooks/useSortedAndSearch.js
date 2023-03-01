import { computed, ref } from "vue";


export default function useSortedAndSearch(sortedPosts) {
  const searchQuery = ref("");

  const sortedAndSearchPost = computed(() => {
    return sortedPosts.value.filter(p => p.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
  });

  return {
    searchQuery, sortedAndSearchPost
  }
}
