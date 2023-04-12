<template>
  <div :class="`${APP_PREFIX}-list-contact`">
    <div class="title">
      <span>Contactos</span>
    </div>
    <template v-for="contact in contacts" :key="contact.id">
      <contact :contact="contact" />
    </template>
  </div>
</template>

<script src="./list-contact.ts" lang="ts"/>
<style src="./list-contact.scss" lang="scss" scoped/>