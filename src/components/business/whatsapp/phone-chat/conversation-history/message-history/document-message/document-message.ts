import { defineComponent, ref } from "vue";

import { APP_PREFIX } from "../../../../../../../constants/app.constant";

export default defineComponent({
    props: {
        multimediaMessage: {
            type: Object,
            default: {}
        }
    },
    setup() {
        return {
            APP_PREFIX            
        }
    }
});