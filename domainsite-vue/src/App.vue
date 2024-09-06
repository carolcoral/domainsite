<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
@import "@/assets/styles.css";

.contact_me {
  padding: 0 0 1em;
}

.contact_me svg {
  width: 1em;
  height: 1em;
  margin-top: 4px;
}

.contact_me img {
  width: 1em;
  height: 1em;
  margin-top: 4px;
}

.contact_me span {
  font-size: 14px;
  font-weight: 600;
  vertical-align: middle;
  display: inline-flex;
  position: absolute;
  flex-flow: column;
  margin: 6px;
}

.concat_footer {
  padding: 0px;
}

.concat_footer svg {
  width: 1em;
  height: 1em;
  margin-top: 4px;
}

.concat_footer img {
  width: 1em;
  height: 1em;
  margin-top: 4px;
}

.concat_footer span {
  font-size: 14px;
  font-weight: 600;
  text-align: center;
  vertical-align: middle;
  display: inline-flex;
  position: absolute;
  flex-flow: column;
  margin: 6px;
}
</style>
<script lang="ts">

export default {
  methods: {
    forbidden() {
      this.$nextTick(() => {
        // 1.禁用右键菜单
        document.addEventListener('contextmenu', function(e) {
          e.preventDefault()
        })
        // 2.禁用鼠标选中
        document.addEventListener('selectstart', function(e) {
          e.preventDefault()
        })
        // 3.禁止键盘F12键和功能按键
        document.addEventListener('keydown', function(e) {
          if (e.key == 'F12') {
            e.preventDefault() // 如果按下键F12,阻止事件
          }
          if (e.metaKey) {
            e.preventDefault() // 禁止所有command按键操作
          }
          if (e.ctrlKey) {
            e.preventDefault()
          }
        })
      })
    }
  },
  mounted() {
    // this.forbidden()
  }
}
</script>
