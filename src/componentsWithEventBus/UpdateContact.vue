<template lang="html">
  <contactForm mode="update" :contact="contact" />
</template>

<script>
import ContactForm from './ContactForm.vue';

export default {
  name : "updateContact",
  components : { ContactForm },
  props : [ 'contact' ]
}
</script>

<style lang="css" scoped>
</style>
