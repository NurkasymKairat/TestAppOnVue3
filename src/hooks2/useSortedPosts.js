import {ref, computed} from 'vue'

export default function useSortedPosts(posts) {
    const selectOpt= ref('')
    const sortedPosts = computed(() => {
        return [...posts.value].sort((post1, post2) => post1[selectOpt.value]?.localeCompare(post2[selectOpt.value]))
    })

    return {
        selectOpt, sortedPosts
    }
};
