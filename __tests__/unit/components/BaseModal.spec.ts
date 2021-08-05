import BaseModal from '@/components/BaseModal.vue';
import { shallowMount } from '@vue/test-utils';

describe('BaseModal.vue', () => {
  it('should render the correct title', () => {
    const wrapper = shallowMount(BaseModal, {
      props: {
        show: true,
        title: 'My Modal',
      },
    });

    const title = wrapper.get('[data-testid="base-modal-title"]');

    expect(title.text()).toBe('My Modal');
  });

  it('should render the correct body', () => {
    const wrapper = shallowMount(BaseModal, {
      props: {
        show: true,
        title: 'My Modal',
      },
      slots: {
        default: '<p>My Content</p>',
      },
    });

    const body = wrapper.get('[data-testid="base-modal-body"]');

    expect(body.text()).toBe('My Content');
  });

  it('should emit the "close" event on close icon click', async () => {
    const wrapper = shallowMount(BaseModal, {
      props: {
        show: true,
        title: 'My Modal',
      },
    });

    const closeIcon = wrapper.get('[data-testid="base-modal-close"]');

    await closeIcon.trigger('click');

    expect(wrapper.emitted('close')).toHaveLength(1);
  });
});
