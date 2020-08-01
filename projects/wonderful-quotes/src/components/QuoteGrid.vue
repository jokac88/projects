<template>
  <transition-group name="fade" mode="out-in" class="row align-items-start">
    <app-quote
      v-for="(quote, index) in quotes"
      :key="index"
      @click.native="deleteQuote(index)"
    >{{ quote }}</app-quote>
  </transition-group>
</template>

<script>
import Quote from "./Quote.vue";

export default {
  props: ["quotes"],
  components: {
    appQuote: Quote
  },
  methods: {
    deleteQuote(index) {
      this.$emit("quoteDeleted", index);
    }
  }
};
</script>

<style lang="scss">
.fade {
  &-enter {
    opacity: 0;
    &-active {
      transition: opacity 1s linear;
      // animation: flip-in 1s forwards;
    }
  }
  &-leave {
    &-active {
      opacity: 0;
      transition: opacity 1s linear;
    }
  }
}
@keyframes flip-out {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(90deg);
  }
}
@keyframes flip-in {
  from {
    transform: rotateY(90deg);
  }
  to {
    transform: rotateY(0deg);
  }
}
</style>