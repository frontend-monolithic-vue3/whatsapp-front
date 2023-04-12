<template>
  <div class="sticker-container">
    <div class="sticker-message" @click="openOverlayPreview">
      <img class="image" :src="`${multimediaMessage.thumbail}`" />
    </div>
  </div>
</template>

<script src="./sticker-message.ts" lang="ts"/>
<style src="./sticker-message.scss" lang="scss" scoped/>