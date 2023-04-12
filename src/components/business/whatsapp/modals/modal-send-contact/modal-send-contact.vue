<template>
  <modal :title="title">
    <template #content>
      <search-contact />
      <list-contact />
    </template>
  </modal>
</template>

<script src="./modal-send-contact.ts" lang="ts"/>
<style src="./modal-send-contact.scss" lang="scss" scoped/>