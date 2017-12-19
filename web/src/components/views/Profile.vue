<template>
  <section class="section">
    <div class="columns">
      <div class="column"></div>
      <div class="column is-full-mobile is-four-fifths-tablet">
        <div class="tile is-ancestor">
          <div class="tile is-vertical is-8">
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
          <div class="tile is-parent">
            <article class="tile is-child notification is-light">
              <div class="content">
                <p class="title is-6">Your profile link
                  <router-link :to="{name: 'user', params:{ id: user.id }}">
                    <i class="fa fa-external-link"></i>
                  </router-link>
                </p>
                <div class="content">
                  {{profile_link}}
                </div>
              </div>
            </article>
          </div>
        </div>
        <div class="tile is-ancestor">
          <div class="tile">
            <div class="tile is-parent">
              <div class="tile is-child">
                <skills :user_id="user.id"></skills>
              </div>
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
			status: ""
		}
	},
	computed: {
		profile_link() {
			const a = document.createElement("a")
			a.href = this.$router.resolve({
				name: "user",
				params: {
					id: this.user.id
				}
			}).href
			return a.protocol + "//" + a.host + a.pathname
		},
		user() {
			return this.$store.state.current_user
		}
	}
}
</script>


<style lang="scss" scoped>
.is-centered {
	margin-left: auto;
	margin-right: auto;
}
</style>
