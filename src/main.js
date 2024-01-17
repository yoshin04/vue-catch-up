import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'

Vue.config.productionTip = false
Vue.component('LikeNumber', LikeNumber)
Vue.filter('upperCase', function(value) {
  return value.toUpperCase()
})
// Vue.directive('border', function (el, binding) {
//   el.style.borderWidth = binding.value.width
//   el.style.borderColor = binding.value.color
//   el.style.borderStyle = binding.arg
//   if (binding.modifiers.round) {
//     el.style.borderRadius = '0.5rem'
//   }
// })
// Vue.directive('border', {
//   bind() {
//     // ディレクティブが初めて対象の要素に紐づいた時
//   },
//   inserted() {
//       // 親Nodeに挿入された時
//   },
//   update() {
//     // コンポーネントが更新される度。子コンポーネントが更新される前
//   },
//   componentUpdated() {
//     // コンポーネントが更新される度。子コンポーネントが更新された後
//   },
//   unbind() {
//     // ディレクティブが紐づいている要素から取り除かれた時
//   }
// })

new Vue({
  render: h => h(App),
}).$mount('#app')
