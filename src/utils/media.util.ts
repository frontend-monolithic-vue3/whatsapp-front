import categories from "../assets/emojis/categories.json";
import emojis from "../assets/emojis/data-by-group2.json";

const regexEmojis = /(\p{Emoji_Presentation}|\p{Extended_Pictographic})/gu;
const regexEmoji = /\p{Extended_Pictographic}/u;

export const convertTime = (seconds: number) => {

    if (!seconds) return "00:00";

    const format = (val: any) => `0${Math.floor(val)}`.slice(-2);
    var hours = seconds / 3600;
    var minutes = (seconds % 3600) / 60;
    return [minutes, seconds % 60].map(format).join(":");
}

export const isEmoji = (emoji: string) => {    
    return emoji ? regexEmoji.test(emoji) : false;
}

export const findEmoji = (emoji: any) => {
    let obj = null;
    categories.forEach((x: any) => {
        //@ts-ignore
        const items: any = emojis[x.name];
        if (items && items.length > 0) {
            const list = items.filter((i: any) => i.emoji === emoji);
            if (list.length > 0) {
                obj = list[0];
            }
        }
    });

    return obj;
}

export const createHtmlMessageContent = (messageContent: string) => {

    if (messageContent) {
        let words: any = messageContent?.split(regexEmojis);
        words?.forEach((word: string, index: number) => {
            if (word && word !== '' && !isEmoji(word)) {
                words[index] = `${word}`;
            }
        });

        let newMessageContent = words.join('');
        newMessageContent = newMessageContent?.replace(regexEmojis, (x: string) => {
            const emoji: any = findEmoji(x);
            if (emoji && emoji.thumbail) {
                return `<img style='height: 20px; width: 20px; vertical-align: middle; margin: 0 0.1em' src='data:image/png;base64,${emoji['thumbail']}'/>`;
            }
            return x;
        });

        return newMessageContent;
    }

    return null;

}

export const convertBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};

export const listEmojisByCategory = (category: string) => {
    //@ts-ignore
    return emojis[category];
}

export const getCategories = () => {
    return categories;
}

export const listCategoryByIndex = (index: number) => {
    return categories[index];
}