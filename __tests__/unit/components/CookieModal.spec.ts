import CookieModal from '@/components/CookieModal.vue';
import { mount } from '@vue/test-utils';

describe('CookieModal.vue', () => {
  afterEach(() => {
    localStorage.removeItem('ws_got_about_cookies');
  });

  it('should render the modal if no "ws_got_about_cookies" in localStorage', () => {
    const wrapper = mount(CookieModal);

    const modal = wrapper.find('.base-modal');

    expect(modal.exists()).toBe(true);
  });

  it('should render the modal if the "ws_got_about_cookies" in localStorage has a different value from "true"', () => {
    localStorage.setItem('ws_got_about_cookies', 'not true');

    const wrapper = mount(CookieModal);

    const modal = wrapper.find('.base-modal');

    expect(modal.exists()).toBe(true);
  });

  it('should not render the modal if the "ws_got_about_cookies" in localStorage has a value "true"', () => {
    localStorage.setItem('ws_got_about_cookies', 'true');

    const wrapper = mount(CookieModal);

    const modal = wrapper.find('.base-modal');

    expect(modal.exists()).toBe(false);
  });

  it('should call "closeModal()" when BaseModal emits the "close" event', async () => {
    const wrapper = mount(CookieModal);

    const baseModal = wrapper.getComponent({ name: 'BaseModal' });

    baseModal.vm.$emit('close');

    await wrapper.vm.$nextTick();

    const modal = wrapper.find('.base-modal');

    expect(modal.exists()).toBe(false);
  });

  it('should call "closeModal()" when BaseModal emits the "close" event', async () => {
    const wrapper = mount(CookieModal);

    const baseModal = wrapper.getComponent({ name: 'BaseModal' });

    baseModal.vm.$emit('close');

    await wrapper.vm.$nextTick();

    const modal = wrapper.find('.base-modal');

    expect(modal.exists()).toBe(false);
    expect(localStorage.getItem('ws_got_about_cookies')).toBe('true');
  });
});
