<template>
  <div class="message-history">
    <span v-if="multimediaMessage.fromMe"></span>
    <div
      class="container-message"
      :class="{
        'from-me': multimediaMessage.fromMe,
        'no-from-me': !multimediaMessage.fromMe,
      }"
    >
      <quoted-message 
        v-if="multimediaMessage.quotedMessage"
        :fromMe="multimediaMessage.fromMe"
        :quotedMessage="multimediaMessage.quotedMessage"
      />
      <audio-message
        :multimediaMessage="multimediaMessage"
        v-if="multimediaMessage.type === TypeMessageHistoryEnum.AUDIO"
      />
      <conversation-message
        :multimediaMessage="multimediaMessage"
        v-if="multimediaMessage.type === TypeMessageHistoryEnum.CONVERSATION"
      />
      <document-message
        :multimediaMessage="multimediaMessage"
        v-if="multimediaMessage.type === TypeMessageHistoryEnum.DOCUMENT"
      />
      <image-message
        :multimediaMessage="multimediaMessage"
        v-if="multimediaMessage.type === TypeMessageHistoryEnum.IMAGE"
      />
      <sticker-message
        :multimediaMessage="multimediaMessage"
        v-if="multimediaMessage.type === TypeMessageHistoryEnum.STICKER"
      />
      <div class="date">
        <span>{{multimediaMessage.date}} <read-confirmation v-if="multimediaMessage.fromMe" :readStatus="multimediaMessage.readStatus"/></span>
      </div>
    </div>
    <span v-if="!multimediaMessage.fromMe"></span>
  </div>
</template>

<script src="./message-history.ts" lang="ts"/>
<style src="./message-history.scss" lang="scss" scoped/>