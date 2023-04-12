import { defineComponent, ref, watch } from "vue";

import useContact from "../../../../../composables/common/contact.composable";
import useConversationHistory from "../../../../../composables/business/conversation-history.composable";
import useEmojis from "../../../../../composables/business/emojis.composable";
import useMultimediaOptions from "../../../../../composables/business/multimedia-options.composable";

export default defineComponent({
    setup() {

        const {
            getContactSelect
        } = useContact();

        const {
            emojiSelect,
            openCloseEmojis,
            setEmojiSelect
        } = useEmojis();

        const {
            multimediaOptionsComponent,
            openCloseMultimediaOptions
        } = useMultimediaOptions();

        const {
            pushMessage
        } = useConversationHistory();

        const textMessage = ref('');
        const showIconSend = ref(false);

        const isOpenEmojis = useEmojis().isOpen;
        const isOpenMultimediaOptions = useMultimediaOptions().isOpen;
        
        const showIconSendMessage = () => {     
            let contenteditable: any = document.querySelector('.message-multimedia');       
            textMessage.value = contenteditable.textContent;
            if(!textMessage.value || textMessage.value == "") {
                showIconSend.value = false;
                return;
            }
            showIconSend.value = true;
        }

        const sendMessage = () => {
            const contenteditable: any = document.querySelector('.message-multimedia');
            pushMessage({
                "type": "conversation",
                "messageContent": contenteditable.textContent,
            });
            openCloseEmojis(false);
            contenteditable.innerHTML = '';
        }

        watch(emojiSelect, () => {
            if (emojiSelect.value) {
                textMessage.value = textMessage.value + emojiSelect.value.emoji;
                /*console.log(textMessage.value);
                const withEmojis = /\p{Extended_Pictographic}/u
                const arr = textMessage.value.split(' ');
                arr.forEach(x => {
                    console.log(withEmojis.test(x));
                });*/
                
                let contenteditable: any = document.querySelector('.message-multimedia');
                contenteditable.innerHTML = `${contenteditable.innerHTML}<span style="display: none">${emojiSelect.value.emoji}</span><img src="data:image/png;base64,${emojiSelect.value.thumbail}" style="vertical-align:middle; font-size: 1.2em; height: 20px; width: 20px; display:inline-flex; margin: 0 0.1em"/>`;
                showIconSendMessage();
                setEmojiSelect(null);
            }
        });

        return {
            isOpenEmojis,
            isOpenMultimediaOptions,
            showIconSend,
            multimediaOptionsComponent,
            openCloseEmojis,
            openCloseMultimediaOptions,
            sendMessage,
            showIconSendMessage
        }
    }
});