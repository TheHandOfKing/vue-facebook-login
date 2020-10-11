import { mount } from '@vue/test-utils'
import Button from '@/components/Composed'
import Scope from '@/components/Scope'
import { flush } from './test-utils'

jest.mock('@/Sdk', () => {
  const { Sdk } = jest.requireActual('@/Sdk')
  return {
    __esModule: true,
    ...jest.requireActual('@/Sdk'),
    Sdk: {
      isConnected: Sdk.isConnected,
      subscribe: jest.fn().mockResolvedValue({}),
      unsubscribe: jest.fn().mockResolvedValue(),
      getLoginStatus: jest.fn().mockResolvedValue({ status: 'unknown' }),
      login: jest.fn().mockResolvedValue({ status: 'connected' }),
      logout: jest.fn().mockResolvedValue()
    }
  }
})

const { Sdk } = require('@/Sdk')
const commonProps = { appId: '966242223397117' }

jest.useFakeTimers()

beforeEach(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {})
})

describe('Button', () => {
  test('initial render (disabled)', async () => {
    const wrapper = mount(Button)
    await flush()
    expect(wrapper.attributes('disabled')).toBe('disabled')
    expect(wrapper.element).toMatchSnapshot()
  })

  test('initial render (disconnected)', async () => {
    const wrapper = mount(Button, { propsData: commonProps })
    await flush()
    expect(wrapper.element).toMatchSnapshot()
  })

  test('initial render (connected)', async () => {
    Sdk.getLoginStatus.mockResolvedValueOnce({ status: 'connected' })
    const wrapper = mount(Button, {
      propsData: commonProps
    })
    await flush()
    expect(wrapper.element).toMatchSnapshot()
  })

  test('login and click event', async () => {
    const onClick = jest.fn()
    const wrapper = mount(Button, {
      propsData: commonProps,
      listeners: { click: onClick }
    })
    await flush()
    wrapper.trigger('click')
    await flush()
    expect(onClick).toHaveBeenCalled()
    expect(wrapper.emitted().input.slice(-1)[0]).toEqual([
      {
        idle: true,
        error: null,
        hasError: false,
        enabled: true,
        working: false,
        disabled: false,
        connected: true,
        disconnected: false
      }
    ])
  })

  test('props', async () => {
    const propsData = {
      appId: '966242223397117',
      version: 'mock-version',
      value: { connected: false },
      options: { option1: 1, option2: 2, option3: 3 },
      loginOptions: { loginOption1: 1, loginOption2: 2, loginOption3: 3 },
      scope: {},
      logoClass: 'logo-class',
      logoStyle: { logoStyle1: 1, logoStyle2: 2, logoStyle3: 3 },
      textClass: 'text-class',
      textStyle: { textStyle1: 1, textStyle2: 2, textStyle3: 3 },
      loaderClass: 'loader-class',
      loaderStyle: { loaderStyle1: 1, loaderStyle2: 2, loaderStyle3: 3 },
      transition: [
        'background-color 0.15s ease-in-out',
        'padding 0.15s ease-in-out'
      ],
      useAltLogo: true,
      asyncDelay: 500,
      sdkLocale: 'en_US'
    }
    const wrapper = mount(Button, { propsData })
    expect(wrapper.vm.$props).toEqual(propsData)
  })

  test('slots', async () => {
    const wrapper = mount(Button, {
      propsData: { appId: '966242223397117' },
      slots: {
        logo: '<div class="logo"></div>',
        after: '<div class="after"></div>',
        before: '<div class="before"></div>',
        login: '<div class="login"></div>',
        error: '<div class="error"></div>',
        working: '<div class="working"></div>'
      }
    })
    await flush()
    const scopeInstance = wrapper.get(Scope).vm
    scopeInstance.error = new Error()
    scopeInstance.$forceUpdate()
    await scopeInstance.$nextTick()
    expect(wrapper.element).toMatchSnapshot()
  })

  test('scoped-slots', async () => {
    const wrapper = mount(Button, {
      propsData: commonProps,
      scopedSlots: {
        logo: '<div class="logo" slot-scope="scope">{{scope}}</div>',
        after: '<div class="after" slot-scope="scope">{{scope}}</div>',
        before: '<div class="before" slot-scope="scope">{{scope}}</div>',
        login: '<div class="login" slot-scope="scope">{{scope}}</div>',
        error: '<div class="error" slot-scope="scope">{{scope}}</div>',
        working: '<div class="working" slot-scope="scope">{{scope}}</div>'
      }
    })
    await flush()
    const scopeInstance = wrapper.get(Scope).vm
    scopeInstance.error = new Error()
    scopeInstance.$forceUpdate()
    await scopeInstance.$nextTick()
    expect(wrapper.element).toMatchSnapshot()
  })

  test('logout slot', async () => {
    Sdk.getLoginStatus.mockResolvedValueOnce({ status: 'connected' })
    const wrapper = mount(Button, {
      propsData: commonProps,
      slots: { logout: '<div class="logout"></div>' }
    })
    await flush()
    expect(wrapper.element).toMatchSnapshot()
  })

  test('logout scoped-slot', async () => {
    Sdk.getLoginStatus.mockResolvedValueOnce({ status: 'connected' })
    const wrapper = mount(Button, {
      propsData: commonProps,
      scopedSlots: {
        logout: '<div class="logout" slot-scope="scope">{{scope}}</div>'
      }
    })
    await flush()
    expect(wrapper.element).toMatchSnapshot()
  })
})
