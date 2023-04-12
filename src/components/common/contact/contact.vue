<template>
  <div
    class="contact"
    @click="selectItem(contact)"
    :class="{ selected: +contactSelect?.id === +contact?.id }"
    v-bind="$attrs"
  >
    <div class="avatar">
      <img class="avatar-image" v-if="contact.photo" :src="`data:image/png;base64,${contact.photo}`" />
      <img class="avatar-image" v-else src="https://d11a6trkgmumsb.cloudfront.net/original/3X/d/8/d8b5d0a738295345ebd8934b859fa1fca1c8c6ad.jpeg"/>
    </div>
    <div class="info">
      <div class="data-info">
        <div class="name">
          <span v-if="newAlias" v-html="newAlias"></span>
          <span v-else>{{ contact.alias }}</span>          
          <span
            class="date-last-message"
            :class="{ unread: contact.unReadConversations?.length > 0 }"
            v-if="contact.lastMessage?.date"
            >{{ contact.lastMessage?.date }}</span
          >
        </div>
        <div class="flex-row justify-content-space-between">
          <div
            v-if="!contact.description"
            class="last-message"
          >
            <read-confirmation
              v-if="contact.lastMessage?.status"
              :readStatus="contact.lastMessage?.status"
            />
            <span v-if="newContent" v-html="newContent"></span>
            <span v-else>{{ contact.lastMessage?.content }}</span>
          </div>
          <div
            v-if="contact.description"
            class="last-message"
          >
            <span v-if="contact.newDescription" v-html="contact.newDescription"></span>
            <span v-else>{{ contact.description }}</span>
          </div>
          <div class="flex-row">
            <div class="count" v-if="contact.unReadConversations?.length > 0">
              <span>{{ contact.unReadConversations?.length }}</span>
            </div>
            <div class="icon"><em class="fas fa-chevron-down"></em></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./contact.ts" lang="ts"/>
<style src="./contact.scss" lang="scss" scoped/>