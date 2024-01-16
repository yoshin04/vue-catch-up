<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  export default  {
    props: {
      headerText: {
        type: String,
        required: true
      }
    }
  }
</script>
