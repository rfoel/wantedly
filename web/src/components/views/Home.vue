<template>
  <section class="hero is-large">
    <div class="hero-body">
      <div class="container has-text-centered" v-if="!user_profile">
        <h1 class="title">
          Make Work More Exciting
        </h1>
        <h2 class="subtitle">
          Grow your professional network on Wantedly
        </h2>
        <p>
          <router-link :to="{name: 'sign_up'}" class="button is-primary is-outlined">Sign up with you email</router-link>
        </p>
      </div>
      <div class="container has-text-centered" v-else>
        <h1 class="title">
          Find and connect with people
        </h1>
        <h2 class="subtitle">
          Grow your professional network on Wantedly
        </h2>
        <div class="columns">
          <div class="column"></div>
          <div class="column is-full-tablet is-three-fifths-desktop">
            <div class="control has-icons-left">
              <input class="input is-medium" type="text" placeholder="Find people, people, and people">
              <span class="icon is-left">
                <i class="fa fa-search"></i>
              </span>
            </div>
          </div>
          <div class="column"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
	data() {
		return {
			search: ""
		}
	},
	computed: {
		user_profile() {
			return this.$store.state.user
		}
	}
}
</script>


<style lang="scss" scoped>
.hero {
	.hero-body {
		min-height: 600px;
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
