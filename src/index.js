import VButton from "./components/VButton.vue"

export default {
 install(Vue) {
  // Let's register our component globally
  // https://vuejs.org/v2/guide/components-registration.html
  Vue.component("v-button", VButton);
 }
}