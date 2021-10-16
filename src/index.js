import VButton from "./components/VButton.vue"

const VueButtonSimple = {

 install(Vue) {
  // Let's register our component globally
  // https://vuejs.org/v2/guide/components-registration.html
  Vue.component("v-button", VButton);

 }
}


export default VueButtonSimple