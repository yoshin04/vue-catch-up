<template>
  <div>
    <slot name="title">
      <h1>デフフォルトのタイトル</h1>
    </slot>
    <hr />
    <p>いいねの数</p>
    <slot name="count"></slot>
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
