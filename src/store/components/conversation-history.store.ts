export const CONVERSATION_HISTORY_GET_MESSAGES_HISTORY = "conversationHistoryStore/getMessagesHistory";

export const CONVERSATION_HISTORY_LOAD_MESSAGES_HISTORY = "conversationHistoryStore/loadMessagesHistory";
export const CONVERSATION_HISTORY_PUSH_MESSAGE = "conversationHistoryStore/pushMessage";

import conversationHistory from "../../assets/data-dummy/conversationHistory.json";

export default {
    namespaced: true,
    state: {
        messagesHistory: [],
    },
    mutations: {
        LOAD_MESSAGES_HISTORY(state: any, id: number) {
            const newConversationHistory = conversationHistory[id];
            if (newConversationHistory?.length > 0) {
                state.messagesHistory = newConversationHistory;
            }
        },
        PUSH_MESSAGE(state: any, message: any) {
            const date = new Date;
            const newMessage = {
                ...message,
                "fromMe": true,
                "date": `${date.getHours() > 9 ? date.getHours() : '0' + date.getHours()}:${date.getMinutes() > 10 ? date.getMinutes() : '0' + date.getMinutes()}`,
                "readStatus": "sent"
            };
            state.messagesHistory.push(newMessage);
        }
    },
    actions: {
        loadMessagesHistory({ commit }: any, id: number) {
            commit('LOAD_MESSAGES_HISTORY', id)
        },
        pushMessage({ commit }: any, message: Object) {
            commit('PUSH_MESSAGE', message);
        }

    },
    getters: {
        getMessagesHistory(state: any) {
            return state.messagesHistory;
        }
    }
}