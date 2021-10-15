<template>
  <div id="app">
    <div class="row">
      <vi-button>Default</vi-button>
      <vi-button type="primary">Primary</vi-button>
      <vi-button type="success">Success</vi-button>
      <vi-button type="info">Info</vi-button>
      <vi-button type="warning">Warning</vi-button>
      <vi-button type="danger">Danger</vi-button>
    </div>

    <div class="row">
      <vi-button plain>Plain Default</vi-button>
      <vi-button type="primary" plain>Plain Primary</vi-button>
      <vi-button type="success" plain>Plain Success</vi-button>
      <vi-button type="info" plain>Plain Info</vi-button>
      <vi-button type="warning" plain>Plain Warning</vi-button>
      <vi-button type="danger" plain>Plain Danger</vi-button>
    </div>
  </div>
</template>

<script>

import ViButton from '@/components/button/index'

export default {
  name: 'App',
  components: {
    ViButton
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

