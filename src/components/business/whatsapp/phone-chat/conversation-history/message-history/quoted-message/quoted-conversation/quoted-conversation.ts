import { defineComponent, ref, watchEffect } from "vue";

import { APP_PREFIX } from "../../../../../../../../constants/app.constant";
import { createHtmlMessageContent } from "../../../../../../../../utils/media.util";

export default defineComponent({
    props: {
        quotedMessage: {
            type: Object,
            default: {}
        }
    },
    setup(props) {
        const newConversationMessage = ref(null);

        watchEffect(() => {
            props?.quotedMessage?.messageContent;
            newConversationMessage.value = createHtmlMessageContent(props?.quotedMessage?.messageContent);
        });
        
        return {
            APP_PREFIX,
            newConversationMessage
        }
    }
});