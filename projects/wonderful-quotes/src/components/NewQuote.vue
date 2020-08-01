<template>
  <div class="row">
    <div class="col-6 offset-3 mb-3">
      <form>
        <h4>Quote</h4>
        <div class="form-group">
          <textarea class="form-control" rows="3" v-model="quote"></textarea>
        </div>
        <div class="text-center">
          <button
            @click.prevent="addQuote"
            class="btn btn-primary"
            :disabled="this.quote.length ? false : true"
          >Add Quote</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quote: ""
    };
  },
  methods: {
    addQuote() {
      this.$emit("addQuote", this.quote);
      this.quote = "";
    }
  }
};
</script>

<style lang="scss"></style>