<template>
  <section class="hero is-large">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          Find and connect with people
        </h1>
        <h2 class="subtitle">
          Grow your professional network on Wantedly
        </h2>
        <div class="columns">
          <div class="column"></div>
          <div class="column is-full-tablet is-three-fifths-desktop">
            <b-field>
              <b-autocomplete v-model="term" :data="data" placeholder="Find people" icon="fa fa-search" field="name" :loading="isFetching" @input="getAsyncData"
                @select="option => goToUser(option)">
              </b-autocomplete>
            </b-field>
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
			data: [],
			term: "",
			selected: undefined,
			isFetching: false
		}
	},
	methods: {
		getAsyncData() {
			setTimeout(() => {
				this.data = []
				this.isFetching = true

				this.$store
					.dispatch("getUsers", {
						term: this.term
					})
					.then(response => {
						if (!response.error) {
							response.forEach(item => this.data.push(item))
							this.isFetching = false
						}
					})
					.catch(error => {})
			}, 500)
		},
		goToUser(user) {
			if (user) {
				this.$router.push({ name: "user", params: { id: user.id } })
			}
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
