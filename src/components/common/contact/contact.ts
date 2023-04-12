import { defineComponent, ref, watchEffect } from "vue";

import ReadConfirmation from "../read-confirmation/read-confirmation.vue";

import useContact from "../../../composables/common/contact.composable";
import useEmojis from "../../../composables/business/emojis.composable";
import useOverlayPhoneChat from "../../../composables/business/overlay-phone-chat.composable";
import { createHtmlMessageContent } from "../../../utils/media.util";

export default defineComponent({
    components: {
        ReadConfirmation
    },
    props: {
        contact: {
            type: Object,
            default: {}
        }
    },
    setup(props) {
        const newAlias = ref(null);
        const newContent = ref(null);

        const {
            setContactSelect,
            getContactSelect
        } = useContact();

        const {
            openCloseEmojis
        } = useEmojis();

        const {
            openCloseOverlayPhoneChat
        } = useOverlayPhoneChat();
       
        const contactSelect = getContactSelect();

        const selectItem = (contact: any) => {
            setContactSelect(contact);
            openCloseOverlayPhoneChat(false);
            openCloseEmojis(false);
        }

        watchEffect(() => {
            newAlias.value = null;
            newContent.value = null;            

            newAlias.value = createHtmlMessageContent(props.contact.alias);
            newContent.value = createHtmlMessageContent(props.contact.lastMessage?.content);
        });

        return {
            contactSelect,
            selectItem,
            newAlias,
            newContent
        }
    }
});