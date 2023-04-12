import { defineComponent, ref } from "vue";

import { APP_PREFIX } from "../../../../../../constants/app.constant";

export default defineComponent({
    setup() {
        const isFocus = ref(false);

        const focusInput = () => {
            isFocus.value = true;
        }

        const blurInput = () => {
            isFocus.value = false;
        }

        return {
            APP_PREFIX,
            blurInput,
            focusInput,
            isFocus
        }
    }
});