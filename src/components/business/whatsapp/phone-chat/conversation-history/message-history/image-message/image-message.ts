import { defineComponent, ref, watchEffect } from "vue";

import useOverspread from "../../../../../../../composables/common/overspread.composable";
import usePhoneChat from "../../../../../../../composables/business/phone-chat.composable";

import { TypeOverspreadEnum } from "../../../../../../../enums/type-overspread.enum";
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

        const {
            setType,
            openCloseOverspread
        } = useOverspread();

        const {
            setMultimediaMessage
        } = usePhoneChat();

        const openOverlayPreview = () => {
            setType(TypeOverspreadEnum.PREVIEW);
            setMultimediaMessage(props.multimediaMessage);
            openCloseOverspread(true);
        }

        watchEffect(() => {
            props?.multimediaMessage?.messageContent;
            newConversationMessage.value = createHtmlMessageContent(props?.multimediaMessage?.messageContent);
        });

        return {
            openOverlayPreview,
            newConversationMessage
        }
    }
});