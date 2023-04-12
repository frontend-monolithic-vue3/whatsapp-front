import { defineComponent, onMounted, ref, watch } from "vue";

import CategoriesEmoji from "./categories-emoji/categories-emoji.vue";
import Emoji from "./emoji/emoji.vue";

import useEmojis from "../../../../../composables/business/emojis.composable";

export default defineComponent({
    props: {
        visible: {
            type: Boolean,
            default: false
        }
    },
    components: {
        CategoriesEmoji,
        Emoji
    },
    setup() {
        const {
            isOpen,
            categorySelect,
            setCategorySelect,
            setEmojiSelect,
            getEmojisByCategory,
            getCategoryByIndex
        } = useEmojis();

        const emojis = ref([]);

        const selectEmoji = (emoji: any) => {
            setEmojiSelect(emoji);
        }

        watch(categorySelect, () => {
            emojis.value = getEmojisByCategory(categorySelect.value.name);
        });

        onMounted(() => {
            setCategorySelect(getCategoryByIndex(0));
        });

        return {
            categorySelect,
            isOpen,
            emojis,
            selectEmoji
        }
    }
})