<template>
  <section class="hero is-large">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          Make Work More Exciting
        </h1>
        <h2 class="subtitle">
          Grow your professional network on Wantedly
        </h2>
        <p v-if="!token">
          <router-link :to="{name: 'sign_up'}" class="button is-primary is-outlined">Sign up with you email</router-link>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    token() {
      return this.$store.state.token ? true : false
    }
  }
}
</script>


<style lang="scss" scoped>
.hero {
	.hero-body {
		min-height: 400px;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.title {
		font-size: 2.5rem;
		margin-bottom: 1em;
	}
	.subtitle {
		opacity: 0.8;
	}
}
</style>
