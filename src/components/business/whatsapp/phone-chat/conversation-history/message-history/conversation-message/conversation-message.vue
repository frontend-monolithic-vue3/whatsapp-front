<template>
  <div :class="`${APP_PREFIX}-conversation-message`">
    <span
      v-if="
        !thumbailMessage && !newConversationMessage
      "
      class="message-history-text"
      >{{ multimediaMessage.messageContent }}</span
    >
    <span
      v-if="!thumbailMessage && newConversationMessage"
      v-html="newConversationMessage"
      class="message-history-text"
    ></span>
    <div v-if="thumbailMessage" class="message-history-emoji">
      <img
        class="message-history-emoji-image"
        :src="`data:image/png;base64,${thumbailMessage}`"
      />
    </div>
    <div class="space-message-history"></div>
  </div>
</template>

<script src="./conversation-message.ts" lang="ts"/>
<style src="./conversation-message.scss" lang="scss" scoped/>