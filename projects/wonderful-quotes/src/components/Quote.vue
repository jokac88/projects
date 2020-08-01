<template>
  <div class="col-3 mb-3">
    <div class="card">
      <div class="card-body quote">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Arizonia&display=swap");

.card-body {
  font-family: "Arizonia", cursive;
  font-size: 2.5vw;
  color: #737373;
}

.quote {
  cursor: pointer;

  &:hover {
    background-color: #ffcccc;
  }
}
</style>