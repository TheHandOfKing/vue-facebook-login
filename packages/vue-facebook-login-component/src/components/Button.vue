<template>
  <!-- https://developers.facebook.com/docs/facebook-login/userexperience/#buttondesign -->
  <button
    :style="inlineStyle"
    v-on:click="handleClick"
    :disabled="scope.disabled"
    class="v-facebook-login"
  >
    <slot name="before" v-bind="scope"></slot>
    <slot name="loader" v-bind="scope">
      <v-loader
        :class="['loader', loaderClass]"
        v-if="scope.working"
        :style="loaderStyle"
      ></v-loader>
    </slot>
    <slot name="logo" v-bind="scope" v-if="scope.idle && scope.disconnected">
      <v-facebook-logo-alt
        :style="logoStyle"
        v-if="useAltLogo"
        :class="['logo', logoClass]"
      ></v-facebook-logo-alt>
      <v-facebook-logo
        v-else
        :style="logoStyle"
        :class="['logo', logoClass]"
      ></v-facebook-logo>
    </slot>
    <span :class="textClass" :style="textStyle">
      <slot name="login" v-bind="scope" v-if="scope.idle && scope.disconnected"
        ></slot
      >
      <slot name="logout" v-bind="scope" v-if="scope.idle && scope.connected"
        >Logout</slot
      >
      <slot name="working" v-bind="scope" v-if="scope.working"
        >Please wait...</slot
      >
      <slot name="error" v-bind="scope" v-if="scope.hasError">⛔ Error</slot>
    </span>
    <slot name="after" v-bind="scope"></slot>
  </button>
</template>

<script>
import Logo from './Logo'
import Loader from './Loader'
import LogoAlt from './LogoAlt'

export default {
  inheritAttrs: false,
  name: 'v-facebook-login-button',
  components: {
    VLoader: Loader,
    VFacebookLogo: Logo,
    VFacebookLogoAlt: LogoAlt,
  },
  props: {
    scope: {
      type: Object,
      default: () => ({}),
    },
    logoClass: {
      type: String,
    },
    logoStyle: {
      type: Object,
      default: () => ({}),
    },
    textClass: {
      type: String,
    },
    textStyle: {
      type: Object,
      default: () => ({}),
    },
    loaderClass: {
      type: String,
    },
    loaderStyle: {
      type: Object,
      default: () => ({}),
    },
    transition: {
      type: Array,
      default: () => [],
    },
    useAltLogo: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    inlineStyle() {
      const CSSTransition = 'background-color 0.15s ease-in-out'
      let transition = [CSSTransition].concat(this.transition)
      transition = [...new Set(transition)].join(', ')
      return { transition }
    },
  },
  methods: {
    handleClick() {
      this.$emit('click')
      this.scope.toggleLogin?.()
    },
  },
}
</script>
