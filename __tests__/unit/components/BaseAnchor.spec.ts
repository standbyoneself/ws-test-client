import BaseAnchor from '@/components/BaseAnchor.vue';
import { shallowMount } from '@vue/test-utils';

describe('BaseAnchor.vue', () => {
  it('should have a correct href', () => {
    const href = 'https://ya.ru';
    const text = 'Yandex';

    const wrapper = shallowMount(BaseAnchor, {
      props: {
        href,
        text,
      },
    });

    const anchor = wrapper.get('a');

    expect(anchor.attributes('href')).toBe(href);
  });

  it('should have a correct text', () => {
    const text = 'Yandex';

    const wrapper = shallowMount(BaseAnchor, {
      props: {
        text,
      },
    });

    const anchor = wrapper.get('a');

    expect(anchor.text()).toBe(text);
  });
});
