<template>
  <transition name="fade">
    <div class="base-modal" v-if="show">
      <div class="base-modal__header">
        <p class="base-modal__title" data-testid="base-modal-title">
          {{ title }}
        </p>
        <img
          class="base-modal__close"
          :src="close"
          @click="$emit('close')"
          data-testid="base-modal-close"
        />
      </div>
      <div class="base-modal__body" data-testid="base-modal-body">
        <slot />
      </div>
    </div>
  </transition>
</template>

<script>
import { defineComponent } from '@vue/runtime-core';
import close from '@/assets/icons/close.svg';

export default defineComponent({
  name: 'BaseModal',
  emits: ['close'],
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
  },
  setup() {
    return { close };
  },
});
</script>

<style scoped>
.base-modal {
  position: fixed;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.25);
  padding: 20px;
  min-width: 320px;
  max-width: 600px;
}

.base-modal__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.base-modal__title {
  font-size: 20px;
}

.base-modal__body {
  font-size: 16px;
  line-height: 150%;
}

.base-modal__close {
  width: 16px;
  height: 16px;
  cursor: pointer;
}

@media (max-width: 400px) {
  .base-modal {
    padding: 15px;
  }

  .base-modal__title {
    font-size: 18px;
  }

  .base-modal__body {
    font-size: 14px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
