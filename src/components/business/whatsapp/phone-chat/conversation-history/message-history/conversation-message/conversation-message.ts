import { defineComponent, ref, watchEffect } from "vue";

import { APP_PREFIX } from "../../../../../../../constants/app.constant";
import { createHtmlMessageContent, findEmoji, isEmoji } from "../../../../../../../utils/media.util";

export default defineComponent({
    props: {
        multimediaMessage: {
            type: Object,
            default: {}
        }
    },
    setup(props) {
        const newConversationMessage = ref(null);
        const thumbailMessage = ref(null);

        watchEffect(() => {
            props?.multimediaMessage?.messageContent;
            newConversationMessage.value = null;
            thumbailMessage.value = null;            

            if (props?.multimediaMessage?.messageContent?.length === 2) {
                if (isEmoji(props?.multimediaMessage?.messageContent)) {
                    const emoji = findEmoji(props?.multimediaMessage?.messageContent);
                    if (emoji) {
                        thumbailMessage.value = emoji['thumbail'];
                    }
                }
            } else {
                newConversationMessage.value = createHtmlMessageContent(props?.multimediaMessage?.messageContent);
            }
        });
        
        return {
            APP_PREFIX,
            newConversationMessage,
            thumbailMessage
        }
    }
});