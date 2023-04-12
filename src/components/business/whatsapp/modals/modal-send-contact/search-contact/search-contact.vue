<template>
  <div :class="`${APP_PREFIX}-search-contact`">
    <div class="search-text">
        <div class="icon" v-if="!isFocus">
            <em class="fas fa-search"></em>
        </div>
        <div class="icon" v-if="isFocus">
            <em class="fas fa-arrow-left"></em>
        </div>
        <input class="input" :placeholder="'Buscar ...'" @focus="focusInput" @blur="blurInput"/>
    </div>
  </div>
</template>

<script src="./search-contact.ts" lang="ts"/>
<style src="./search-contact.scss" lang="scss" scoped/>