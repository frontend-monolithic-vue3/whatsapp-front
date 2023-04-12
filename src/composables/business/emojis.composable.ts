import { computed } from "vue";
import { useStore } from "vuex";

import {
    EMOJIS_STORE_GET_CATEGORY_SELECT,
    EMOJIS_STORE_GET_EMOJI_SELECT,
    EMOJIS_STORE_GET_IS_OPEN,
    EMOJIS_STORE_SET_CATEGORY_SELECT,
    EMOJIS_STORE_SET_EMOJI_SELECT,
    EMOJIS_STORE_SET_IS_OPEN    
} from "../../store/components/emojis.store";

import { executeAction } from "../../utils/vuex.util";

import { getCategories, listEmojisByCategory, listCategoryByIndex } from "../../utils/media.util";

export default function useEmojis() {
    
    const store = useStore();

    const isOpen = computed(
        () => store.getters[EMOJIS_STORE_GET_IS_OPEN]
    );

    const categorySelect = computed(
        () => store.getters[EMOJIS_STORE_GET_CATEGORY_SELECT]
    );

    const emojiSelect = computed(
        () => store.getters[EMOJIS_STORE_GET_EMOJI_SELECT]
    );

    const openCloseEmojis = (flag: boolean) => {
        executeAction(EMOJIS_STORE_SET_IS_OPEN, flag);
    }

    const setCategorySelect = (category: Object) => {
        executeAction(EMOJIS_STORE_SET_CATEGORY_SELECT, category);
    }

    const setEmojiSelect = (emoji: any) => {
        executeAction(EMOJIS_STORE_SET_EMOJI_SELECT, emoji);
    }

    const getEmojisByCategory = (category: string) => {
        return listEmojisByCategory(category);
    }

    const getCategoriesEmoji = () => {
        return getCategories();
    }

    const getCategoryByIndex = (index: number) => {
        return listCategoryByIndex(index);
    }

    return {
        categorySelect,
        isOpen,
        emojiSelect,
        getCategoriesEmoji,
        getCategoryByIndex,
        getEmojisByCategory,
        openCloseEmojis,
        setCategorySelect,
        setEmojiSelect
    }
}