<script lang="ts">
import config from "/config.json"

export default {
  components: {},
  data() {
    return {
      head: config.head,
      footer: config.footer
    }
  },
  computed: {},
  methods: {},
  mounted() {

  }
}
</script>

<template>
  <!--========== 页脚 ==========-->
  <footer class="footer section">
    <div class="footer__container bd-container bd-grid">
      <div class="footer__content">
        <h3 class="footer__title">
          <a href="#" class="footer__logo">{{head.title}}</a>
        </h3>
        <ul>
          <li class="concat_footer">
            <a href="" class="footer__social">
              <img :src="head.favicon" alt="logo">
              <span>
              <p class="footer__description">{{footer.desc}}</p>
            </span>
            </a>
          </li>
        </ul>
      </div>

      <div class="footer__content" v-if="footer.sold.enable">
        <h3 class="footer__title">{{footer.sold.title}}</h3>
        <ul>
          <li v-for="site in footer.sold.sites">{{ site}}</li>
        </ul>
      </div>

      <div class="footer__content" v-if="footer.more.enable">
        <h3 class="footer__title">{{footer.more.title}}</h3>
        <ul>
          <li class="concat_footer" v-for="site in footer.more.sites">
            <a :href="site.href" class="footer__social" target="_blank">
              <div v-html="site.svg" style="float: left; display: flex;"></div>
              <span>{{site.content}}</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="footer__content" v-if="footer.contact.enable">
        <h3 class="footer__title">{{footer.contact.title}}</h3>
        <ul>
          <li class="concat_footer" v-for="site in footer.contact.sites">
            <a :href="site.href" class="footer__social">
              <div v-html="site.svg" style="float: left; display: flex;"></div>
              <span>{{site.content}}</span>
            </a>
          </li>
        </ul>


      </div>
    </div>

  </footer>
</template>

<style scoped>
.footer__description {
  vertical-align: middle;
  text-align: left;
  margin-top: 0em;
  max-width: 13em;
}
</style>
