<template>
  <div class="categories-emoji">
    <template v-for="category of categories" :key="category.id">
      <div class="category-emoji" :class="{'selected': category.id === categorySelect.id}" @click="selectCategory(category)">
        <span><em :class="category.icon"></em></span>
      </div>
    </template>
  </div>
</template>

<script src="./categories-emoji.ts" lang="ts"/>
<style src="./categories-emoji.scss" lang="scss" scoped/>