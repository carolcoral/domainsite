// import { createI18n } from "vue-i18n";
// //这是我自己创建的语言包
// import mZhLocale from "./lang/zh";
// import mEnLocale from "./lang/en";
// //这里使用了vuex来进行全局的数据共享
// import store from "@/store";
// //创建messages对象，里面注册相应的语言包，这里面我注册了自己定义的语言包
// const messages = {
//   en: {
//     ...mEnLocale,
//   },
//   zh: {
//     ...mZhLocale,
//   },
// };
// // 进行持久化处理，防止在页面刷新之后数据丢失
// const getLanguage = () => {
//   return store && store.getters && store.getters.language;
// };
// const i18n = createI18n({
//   legacy: false, // 使用composition API
//   locale: getLanguage(),//初始的时候调用这个函数获取vuex中的数据，当然vuex初始数据调用localstorage中存储的数据，或者默认赋值为”zh“
//   globalInjection: true, // 表明使用全局t函数
//   messages,
// });
// export default i18n;//将i18函数导出
