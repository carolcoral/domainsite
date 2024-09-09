<template>
  <Header></Header>

  <main class="l-main">
    <!--========== 首页 ==========-->
    <section class="home" id="home">
      <div class="home__container bd-container bd-grid">
        <div class="home__img">
          <img :src="home.img" alt="home__img">
        </div>

        <div class="home__data">
          <h3 class="home__title">{{ home.title }}</h3>
          <p class="home__description">{{ home.description }}</p>
          <a href="#Sales" class="button tooltip-container text" v-if="home.salesButton != ''">{{ home.salesButton }}</a>
        </div>
      </div>
    </section>

    <!--========== 联系 ==========-->
    <section class="share section bd-container" id="Contact" v-if="contact.enable">
      <div class="share__container bd-grid">
        <div class="share__data">
          <h2 class="section-title-center">{{ contact.title }}</h2>
          <ul>
            <li class="contact_me" v-for="contactStep in contact.contactStep">
              <a href="#Contact" class="footer__social">
                <div v-html="contactStep.svg" style="float: left"></div>
                <span>{{ contactStep.content }}</span>
              </a>
            </li>
          </ul>
          <a href="#Contact" class="button tooltip-container text" v-if="contact.contactButton != ''">{{ contact.contactButton }}</a>
        </div>
        <div class="share__img">
          <img :src="contact.img" alt="share_img">
        </div>
      </div>
    </section>

    <!--========== 展示 ==========-->
    <section class="decoration section bd-container" id="Exhibition" v-if="exhibition.enable">
      <h2 class="section-title">{{ exhibition.title }}<br>{{ exhibition.description }}</h2>
      <div class="decoration__container bd-grid">
        <div class="decoration__data" v-for="exhibitionSite in exhibition.exhibitionSites">
          <img :src="exhibitionSite.img" alt="" class="decoration__img">
          <h3 class="decoration__title">{{ exhibitionSite.title }}</h3>
          <a :href="exhibitionSite.href" class="button button-link" target="_blank">访问</a>
        </div>
      </div>
    </section>

    <!--========== 售卖 ==========-->
    <section class="accessory section bd-container" id="Sales" v-if="sales.enable">
      <h2 class="section-title">{{ sales.title}}<br>{{sales.description}}</h2>

      <div class="accessory__container bd-grid">
        <div class="accessory__content" v-for="salesSite in sales.salesSites">
          <img :src="salesSite.siteImg" alt="" class="accessory__img">
          <h3 class="accessory__title">{{ salesSite.siteName }}</h3>
          <span class="accessory__category">{{ salesSite.siteDesc }}</span>
          <a
            :href="salesSite.siteBuy"
            class="button accessory__button" target="_blank">
            <!-- <i class="bx bx-shopping-bag"></i> -->
            <svg t="1725851496791" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="9743" width="20" height="20">
              <path d="M246.4 912a2.1 2.1 0 1 0 134.4 0 2.1 2.1 0 1 0-134.4 0Z" p-id="9744" fill="#ffffff"></path>
              <path d="M716.8 912a2.1 2.1 0 1 0 134.4 0 2.1 2.1 0 1 0-134.4 0Z" p-id="9745" fill="#ffffff"></path>
              <path
                d="M905.6 764.8l-537.6 0c-28.8 0-57.6-25.6-64-54.4l-96-566.4c-9.6-54.4-60.8-96-115.2-96l-22.4 0c-12.8 0-25.6 12.8-25.6 25.6 0 12.8 12.8 25.6 25.6 25.6l22.4 0c28.8 0 57.6 25.6 64 54.4l96 566.4c9.6 54.4 60.8 96 115.2 96l537.6 0c12.8 0 25.6-12.8 25.6-25.6C931.2 777.6 921.6 764.8 905.6 764.8z"
                p-id="9746" fill="#ffffff"></path>
              <path
                d="M880 179.2l-572.8 0c-12.8 0-25.6 12.8-25.6 25.6 0 12.8 12.8 25.6 25.6 25.6l572.8 0c25.6 0 38.4 16 32 41.6l-70.4 281.6c-6.4 32-41.6 57.6-73.6 60.8l-396.8 28.8c-12.8 0-25.6 12.8-22.4 28.8 0 12.8 12.8 25.6 28.8 22.4l396.8-28.8c54.4-3.2 105.6-48 118.4-99.2l70.4-281.6C976 230.4 937.6 179.2 880 179.2z"
                p-id="9747" fill="#ffffff"></path>
            </svg>
          </a>
        </div>

      </div>
    </section>


  </main>
  <Footer></Footer>
</template>

<style scoped>

</style>

<script lang="ts">
import config from '@/../config.json'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'


export default {
  // eslint-disable-next-line no-undef,vue/no-reserved-component-names
  components: { Header, Footer },
  data() {
    return {
      home: config.body.home,
      contact: config.body.contact,
      exhibition: config.body.exhibition,
      sales: config.body.sales
    }
  },
  computed: {},
  methods: {},
  mounted() {
  }
}
</script>
