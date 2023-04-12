<template>
  <div v-if="newConversationMessage" :class="`${APP_PREFIX}-quoted-conversation`" v-html="newConversationMessage">
  </div>
  <div v-else :class="`${APP_PREFIX}-quoted-conversation`">
    <span v-if="!newConversationMessage">{{quotedMessage.messageContent}}</span>
  </div>
</template>

<script src="./quoted-conversation.ts" lang="ts"/>
<style src="./quoted-conversation.scss" lang="scss" scoped/>