import { shallowMount } from '@vue/test-utils'
import Component from './index.vue'

it('snapshot', () => {
  const wrapper = shallowMount(Component)

  expect(wrapper.element).toMatchSnapshot()
})