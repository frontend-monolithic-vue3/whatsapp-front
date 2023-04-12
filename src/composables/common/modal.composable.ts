import { computed, shallowRef, watch } from "vue";
import { useStore } from "vuex";

import ModalChangeTheme from "../../components/business/whatsapp/modals/modal-change-theme/modal-change-theme.vue";
import ModalSendContact from "../../components/business/whatsapp/modals/modal-send-contact/modal-send-contact.vue";

import { executeAction } from "../../utils/vuex.util";

import { TypeModalEnum } from "../../enums/type-modal.enum";

import { 
    MODAL_STORE_GET_IS_OPEN,
    MODAL_STORE_GET_TYPE,
    MODAL_STORE_SET_IS_OPEN,
    MODAL_STORE_SET_TYPE
} from "../../store/components/modal.store";

import { 
    OVERLAY_STORE_SET_IS_OPEN 
} from "../../store/components/overlay.store";

export default function useModal() {
    
    const modalComponent: any = shallowRef();
    const store = useStore();

    const isOpen = computed(
        () => store.getters[MODAL_STORE_GET_IS_OPEN]
    );

    const getType = computed(
        () => store.getters[MODAL_STORE_GET_TYPE]
    );

    const openCloseModal = (flag: boolean) => {
        executeAction(MODAL_STORE_SET_IS_OPEN, flag);
        executeAction(OVERLAY_STORE_SET_IS_OPEN, flag);

        if(!flag) {
            setTimeout(() => {
                setType(0);
            }, 500)
        }
    }

    const setType = (type: number) => {
        executeAction(MODAL_STORE_SET_TYPE, type);
    }

    const chooseModalComponent = () => {
        const type = getType.value;
        if (+type === +TypeModalEnum.CHANGE_THEME) {
            return ModalChangeTheme;
        } else if(+type === +TypeModalEnum.SEND_CONTACT) {
            return ModalSendContact;
        } else {
            return null;
        }
    }

    watch(getType, () => {
        modalComponent.value = chooseModalComponent();
    })

    return {
        getType,
        isOpen,
        modalComponent,
        openCloseModal,
        setType
    }
}