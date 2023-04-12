<template>
  <div class="multimedia-options">
    <div style="position: relative">
      <div class="options" :class="{'is-open': isOpen, 'is-close': !isOpen}">
        <ul class="menu-options">
          <li class="option">
            <label
              ><a class="media-sticker"
              @click="setTypeMediaContent(TypeMediaContentEnum.STICKER)"
                ><em class="fas fa-images"></em></a
              >
              <span class="tooltip">Sticker</span>
              <input
                type="file"
                style="display: none"
                @change="uploadFile"
                accept="image/webp"
                ref="refUploadAudio"
              />
            </label>
          </li>
          <li class="option">
            <label
              ><a class="media-image"
              @click="setTypeMediaContent(TypeMediaContentEnum.IMAGE)"
                ><em class="fas fa-image"></em></a
              >
              <span class="tooltip">Imágen</span>
              <input
                type="file"
                style="display: none"
                @change="uploadFile"
                accept="image/*"
                ref="refUpload"
              />
            </label>
          </li>
          <li class="option">
            <label
              ><a class="media-contact"
              @click="openModalSendContact(+TypeModalEnum.SEND_CONTACT)"
                ><em class="fas fa-user"></em></a
              >
              <span class="tooltip">Contacto</span>
            </label>
          </li>
          <li class="option">
            <label
              ><a class="media-document"
              @click="setTypeMediaContent(TypeMediaContentEnum.DOCUMENT)"
                ><em class="fas fa-file"></em></a
              >
              <span class="tooltip">Documento</span>
              <input
                type="file"
                style="display: none"
                @change="uploadFile"
                ref="refUploadAudio"
              />
            </label>
          </li>
          <li class="option">
            <label
              ><a class="media-audio"
                ><em class="fas fa-music"></em></a
              >
              <span class="tooltip">Audio</span>
              <input
                type="file"
                style="display: none"
                @change="uploadFile"
                accept="audio/mp3"
                ref="refUploadAudio"
              />
            </label>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script src="./multimedia-options.ts" lang="ts"/>
<style src="./multimedia-options.scss" lang="scss" scoped/>