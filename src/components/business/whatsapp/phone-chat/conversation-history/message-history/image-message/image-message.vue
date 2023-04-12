<template>
  <div class="image-message">
    <div class="image" @click="openOverlayPreview">
        <img :src="`${multimediaMessage.preview}`"/>
        <span
          v-if="multimediaMessage?.messageContent"
          class="message-history-text"
          v-html="newConversationMessage"          
        ></span>
        <div class="space-message-history"></div>
    </div>
  </div>
</template>

<script src="./image-message.ts" lang="ts"/>
<style src="./image-message.scss" lang="scss" scoped/>