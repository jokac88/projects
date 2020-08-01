<template>
  <div class="container pt-5">
    <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
    <app-new-quote @addQuote="newQuote"></app-new-quote>
    <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quote-grid>
    <app-info></app-info>
  </div>
</template>

<script>
import Header from "./components/Header";
import NewQuote from "./components/NewQuote";
import QuoteGrid from "./components/QuoteGrid";
import Info from "./components/Info";

export default {
  data() {
    return {
      quotes: [],
      maxQuotes: 10
    };
  },
  methods: {
    newQuote(quote) {
      if (this.quotes.length >= this.maxQuotes) {
        return alert("Please delete Quote first!");
      }
      this.quotes.push(quote);
    },
    deleteQuote(index) {
      this.quotes.splice(index, 1);
    }
  },
  components: {
    appHeader: Header,
    appNewQuote: NewQuote,
    appQuoteGrid: QuoteGrid,
    appInfo: Info
  }
};
</script>

<style lang="scss">
</style>
