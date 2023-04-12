import { defineComponent } from "vue";

import Modal from "../../../../common/modal/modal.vue";
import SearchContact from "./search-contact/search-contact.vue";
import ListContact from "./list-contact/list-contact.vue";

import { APP_PREFIX } from "../../../../../constants/app.constant";

export default defineComponent({
    components: {
        Modal,
        SearchContact,
        ListContact
    },
    setup() {
        const title = "Enviar contacto";
        return {
            APP_PREFIX,
            title
        }
    }
})