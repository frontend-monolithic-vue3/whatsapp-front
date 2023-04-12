import { defineComponent, onMounted, ref } from "vue";

import Contact from "../../../../../common/contact/contact.vue";

import chatService from "../../../../../../services/whatsapp/chat.service";

import { APP_PREFIX } from "../../../../../../constants/app.constant";

export default defineComponent({
    components: {
        Contact
    },
    setup() {
        const contacts: any = ref([]);

        onMounted( async () => {
            contacts.value = await chatService.getContacts();
        });
        return {
            APP_PREFIX,
            contacts
        }
    }
});