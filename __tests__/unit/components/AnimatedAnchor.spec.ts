import AnimatedAnchor from '@/components/AnimatedAnchor.vue';
import { shallowMount } from '@vue/test-utils';

describe('AnimatedAnchor.vue', () => {
  it('should have a correct href', () => {
    const href = 'https://ya.ru';
    const text = 'Yandex';

    const wrapper = shallowMount(AnimatedAnchor, {
      props: {
        href,
        text,
      },
    });

    const anchor = wrapper.get('a');

    expect(anchor.attributes('href')).toBe(href);
  });

  it('should have a correct text', () => {
    const href = 'https://ya.ru';
    const text = 'Yandex';

    const wrapper = shallowMount(AnimatedAnchor, {
      props: {
        href,
        text,
      },
    });

    const anchor = wrapper.get('a');

    expect(anchor.text()).toBe(text);
  });
});
