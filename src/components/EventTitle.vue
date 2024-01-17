<template>
  <div>
    <label for="タイトル">タイトル</label>
      <input type="text" id="title" :value="value" @input="$emit('input', $event.target.value)" />
      <p>タイトル: {{value}}</p>

  </div>
</template>

<script>
  export default {
    props: ["value"]
  }
</script>
