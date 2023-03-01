import { computed, ref } from "vue";

export default function useSorted(posts) {
    const selectOpt = ref('')
    const sortedPosts = computed(() => {
        return [posts].sort((p1, p2) => {
            return p1[selectOpt.value]?.localeCompare(p2[selectOpt.value]);
        });
    });

    return {
        selectOpt, sortedPosts
    }
};