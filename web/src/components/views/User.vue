<template>
  <section class="section">
    <div class="columns">
      <div class="column"></div>
      <div class="column is-full-mobile is-four-fifths-tablet">
        <div class="tile is-ancestor">
          <div class="tile is-vertical is-12">
            <div class="tile">
              <div class="tile is-parent">
                <article class="media">
                  <figure class="media-left is-hidden-touch">
                    <img :src="user.avatar">
                  </figure>
                  <div class="media-content has-text-centered-touch">
                    <figure class="image is-centered block is-128x128 is-hidden-desktop">
                      <img :src="user.avatar">
                    </figure>
                    <div class="content">
                      <strong class="title is-4">{{user.name}}</strong>
                      <br>
                      <small class="subtitle is-5">{{user.email}}</small>
                      <br>
                      <p>
                        <span class="subtitle is-6">
                          <i class="fa fa-briefcase"></i> {{user.occupation}} |
                          <i class="fa fa-map-marker"></i> {{user.location}}
                        </span>
                      </p>
                      {{user.bio}}
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <div class="tile is-ancestor">
          <div class="tile">
            <div class="tile is-parent">
              <article class="tile is-child notification is-white">
                <skills></skills>
              </article>
            </div>
          </div>
        </div>
      </div>
      <div class="column"></div>
    </div>
  </section>
</template>

<script>
import Skills from "./Skills.vue"

export default {
	components: {
		Skills
	},
	data() {
		return {
			isLoading: false,
			status: "",
			user: {
				skills: []
			}
		}
	},
	created() {
		this.getUser()
	},
	watch: {
		$route(to, from) {
			this.getUser()
		}
	},
	methods: {
		getUser() {
			this.$store
				.dispatch("getUser", {
					id: this.$route.params.id
				})
				.then(response => {
					this.user = response
				})
		}
	}
}
</script>


<style lang="scss" scoped>
.media {
  display: flex;
  flex-grow: 1;
  align-items: stretch
}
.is-centered {
	margin-left: auto;
	margin-right: auto;
}
</style>
