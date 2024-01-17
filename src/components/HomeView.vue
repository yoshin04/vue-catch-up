<template>
  <div>
    <p v-border:solid.round="{
      width: '5px',
      color: 'red'  
    }">Home</p>
    <h2>{{ title | upperCase }}</h2>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Welcome to Your Vue.js App'
      }
    },
    directives: {
      border(el, binding) {
        el.style.borderWidth = binding.value.width
        el.style.borderColor = binding.value.color
        el.style.borderStyle = binding.arg
        if (binding.modifiers.round) {
          el.style.borderRadius = '0.5rem'
        }
      }
    }
  }
</script>

