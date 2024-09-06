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
          <a href="#Sales" class="button" v-if="home.salesButton != ''">{{ home.salesButton }}</a>
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
          <a href="#Contact" class="button" v-if="contact.contactButton != ''">{{ contact.contactButton }}</a>
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
            class="button accessory__button" target="_blank"><i class="bx bx-shopping-bag"></i></a>
        </div>

      </div>
    </section>


  </main>
  <Footer></Footer>
</template>
<style scoped>

</style>

<script lang="ts">
import config from '/config.json'
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
