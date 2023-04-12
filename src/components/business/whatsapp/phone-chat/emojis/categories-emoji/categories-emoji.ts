import { defineComponent, ref } from "vue";

import useEmojis from "../../../../../../composables/business/emojis.composable";

export default defineComponent({
    setup() {
        const categories: any = ref([]);

        const {
            categorySelect,
            getCategoriesEmoji,
            setCategorySelect
        } = useEmojis();

        categories.value = getCategoriesEmoji();

        const selectCategory = (category: Object) => {
            setCategorySelect(category);
        }

        return {
            categorySelect,
            selectCategory,
            categories
        }
    }
});