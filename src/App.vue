<template>
  <div id="app">
    <div class="row">
      <v-button>Default</v-button>
      <v-button type="primary">Primary</v-button>
      <v-button type="success">Success</v-button>
      <v-button type="info">Info</v-button>
      <v-button type="warning">Warning</v-button>
      <v-button type="danger">Danger</v-button>
    </div>

    <div class="row">
      <v-button plain>Plain Default</v-button>
      <v-button type="primary" plain>Plain Primary</v-button>
      <v-button type="success" plain>Plain Success</v-button>
      <v-button type="info" plain>Plain Info</v-button>
      <v-button type="warning" plain>Plain Warning</v-button>
      <v-button type="danger" plain>Plain Danger</v-button>
    </div>
  </div>
</template>

<script>

import VButton from '@/components/VButton'

export default {
  name: 'App',
  components: {
    VButton
  }
}
</script>

<style lang="stylus" scoped>

#app
  text-align center
  margin-top 50px

.row
  margin-top: 15px

.vi-button + .vi-button
  margin-left: 10px

</style>>

