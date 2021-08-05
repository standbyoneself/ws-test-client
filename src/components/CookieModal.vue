<template>
  <base-modal :show="showModal" title="Cookies" @close="closeModal()"
    ><p>
      Make sure your browser does not prevent cross-site tracking in order to
      use cookies. This is actual for Safari.
    </p>
    <animated-anchor
      style="margin-top: 10px"
      text="Read more about tracking protection"
      href="https://developer.mozilla.org/en-US/docs/Web/Privacy/Tracking_Protection"
    />
  </base-modal>
</template>

<script>
import { defineComponent, ref } from '@vue/runtime-core';
import BaseModal from '@/components/BaseModal.vue';
import AnimatedAnchor from './AnimatedAnchor.vue';

export default defineComponent({
  name: 'CookieModal',
  components: { BaseModal, AnimatedAnchor },
  setup() {
    const showModal = ref(false);

    const showModalFromLS = localStorage.getItem('ws_got_about_cookies');

    if (showModalFromLS === null || showModalFromLS !== 'true') {
      showModal.value = true;
    }

    const closeModal = () => {
      showModal.value = false;
      localStorage.setItem('ws_got_about_cookies', 'true');
    };

    return { showModal, closeModal };
  },
});
</script>

<style></style>
