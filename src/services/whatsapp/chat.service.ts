import { createHtmlMessageContent, isEmoji, findEmoji } from "../../utils/media.util";

import contacts from "../../assets/data-dummy/contacts.json";
import conversations from "../../assets/data-dummy/conversations.json";

class ServiceChat {
    private static classInstance?: ServiceChat;

    public static getInstance(){
        if (!this.classInstance) {
            this.classInstance = new ServiceChat();
        }

        return this.classInstance;
    }

    async getConversations() {
        try {
            return conversations;
        } catch(ex) {
            return [];
        }
    }

    async getContacts() {
        try {
            contacts.forEach((x, index) => {
                //@ts-ignore
                contacts[index] = {...x, "newDescription": createHtmlMessageContent(x.description), "newAlias": createHtmlMessageContent(x.alias)}
            });
            return contacts;
        } catch(ex) {
            throw ex;
        }
    }
}

export default ServiceChat.getInstance();