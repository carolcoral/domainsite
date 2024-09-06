<script lang="ts">
import config from '@/../config.json'

export default {
  name: 'HeaderInfo',
  data() {
    return {
      head: config.head,
      body: config.body
    }
  },
  methods: {
    createHead() {
      const favicon = '<link rel="shortcut icon" title="Favicon" class="favicon" href="' + this.head.favicon + '">'
      const icon = '<link rel="icon" class="icon" href="' + this.head.icon + '">'
      const title = '<title>' + this.head.siteName + '</title>'
      let headTag = document.getElementsByTagName('head')[0]
      headTag.insertAdjacentHTML('afterbegin', favicon)
      headTag.insertAdjacentHTML('afterbegin', icon)
      headTag.insertAdjacentHTML('afterbegin', title)
    }
  },
  mounted() {
    this.createHead()
  }
}
</script>

<template>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <header class="l-header" id="header">
    <nav class="nav bd-container">
      <a href="#" class="nav__logo">{{ head.title }}</a>

      <div class="nav__menu" id="nav-menu">
        <ul class="nav__list">
          <li class="nav__item"><a href="#home" class="nav__link active-link">首页</a></li>
          <li class="nav__item"><a href="#Contact" class="nav__link" v-if="body.contact.enable">联系</a></li>
          <li class="nav__item"><a href="#Exhibition" class="nav__link" v-if="body.exhibition.enable">展示</a></li>
          <li class="nav__item"><a href="#Sales" class="nav__link" v-if="body.sales.enable">售卖</a></li>
          <li class="nav__item"><a href="/us" class="nav__link">English</a></li>

          <li><i class="bx bx-toggle-left change-theme" id="theme-button"></i></li>
        </ul>
      </div>

      <div class="nav__toggle" id="nav-toggle">
        <i class="bx bx-grid-alt"></i>
      </div>
    </nav>
  </header>
</template>

<style scoped>

</style>
