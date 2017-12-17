<template>
  <nav class="navbar is-fixed-top is-transparent">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item" :to="{name: 'home'}">
          <img src="/static/images/wantedly_logo.svg" width="112" height="48">
        </router-link>
        <div class="navbar-burger burger" :class="{ 'is-active': isActive }" @click="navbarToggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="navbar-menu" :class="{ 'is-active': isActive }">
        <div class="navbar-end">
          <router-link class="navbar-item" :to="{name: 'home'}">
            Home
          </router-link>
          <router-link class="navbar-item" :to="{name: 'search'}">
            Search
          </router-link>
          <hr class="dropdown-divider">
          <router-link class="navbar-item" :to="{name: 'sign_up'}" v-if="!token">
            Sign up
          </router-link>
          <b-dropdown position="is-bottom-left" v-if="token">
            <a class="navbar-item" slot="trigger">
              <figure class="image is-48x48">
                <img :src="user_profile.avatar">
              </figure>
            </a>
            <b-dropdown-item custom paddingless>
              <a class="dropdown-item">
                <h1 class="title is-6">{{user_profile.name}}</h1>
                <h2 class="subtitle is-6"> {{user_profile.email}}</h2>
              </a>
              <hr class="dropdown-divider">
              <router-link class="dropdown-item" :to="{name: 'profile'}">
                Profile
              </router-link>
              <hr class="dropdown-divider">
              <a class="dropdown-item" @click="signOut">
                Log out
              </a>
            </b-dropdown-item>
          </b-dropdown>
          <b-dropdown position="is-bottom-left" v-if="!token">
            <a class="navbar-item" slot="trigger">
              <span>Log in</span>
              <b-icon class="fa fa-angle-down"></b-icon>
            </a>
            <b-dropdown-item custom paddingless>
              <form @submit.prevent="submit">
                <div class="modal-card" style="width:300px;">
                  <section class="modal-card-body">
                    <div class="field">
                      <label class="label">Email</label>
                      <div class="control has-icons-right">
                        <input name="email" class="input" type="text" placeholder="Your email" v-model.trim="user.email" @blur="$v.user.email.$touch()"
                          @input="$v.user.email.$reset()" :class="{ 'is-danger': $v.user.email.$error }">
                      </div>
                      <p class="help is-danger" v-if="$v.user.email.$error">
                        <span v-if="!$v.user.email.required">Email is required</span>
                        <span v-else-if="!$v.user.email.email">Email is invalid</span>
                      </p>
                    </div>

                    <div class="field">
                      <label class="label">Password</label>
                      <div class="control">
                        <input name="password" class="input" type="password" placeholder="•••• ••••••••" v-model="user.password" @blur="$v.user.password.$touch()"
                          @input="$v.user.password.$reset()" :class="{ 'is-danger': $v.user.password.$error }">
                      </div>
                      <p class="help is-danger" v-if="$v.user.password.$error">
                        <span v-if="!$v.user.password.required">Password is required</span>
                        <span v-else-if="!$v.user.password.minLength">Password must have at least {{ $v.user.password.$params.minLength.min }} characters</span>
                      </p>
                    </div>
                    <button class="button is-primary" :class="{ 'is-loading': isLoading, 'is-success': status, 'is-danger': status === false }">
                      <span v-if="!isLoading && status === ''">Log in</span>
                      <span v-else-if="status">
                        <i class="fa fa-check"></i>
                      </span>
                      <span v-else-if="status === false">
                        <i class="fa fa-close"></i>
                      </span>
                    </button>
                    <router-link :to="{name: 'sign_up'}" class="button is-primary is-outlined is-pulled-right">Sign up</router-link>
                  </section>
                </div>
              </form>
            </b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators"

export default {
	data() {
		return {
			isActive: false,
			isLoading: false,
			status: "",
			user: {
				email: "",
				password: ""
			}
		}
	},
	computed: {
		user_profile() {
			return this.$store.state.current_user
		},
		token() {
			return this.$store.state.token ? true : false
		}
	},
	methods: {
		navbarToggle() {
			this.isActive = !this.isActive
		},
		submit() {
			this.$v.user.$touch()
			if (!this.$v.user.$invalid) {
				this.isLoading = true
				this.$store
					.dispatch("signIn", this.user)
					.then(response => {
						this.isLoading = false
						if (!response.error) {
							this.$toast.open({
								duration: 3000,
								message: "Logged in successfully",
								position: "is-top",
								type: "is-success"
							})
							this.$router.push({
								name: "home"
							})
						} else {
							this.$toast.open({
								duration: 3000,
								message: "Invalid email or password (or both)",
								position: "is-top",
								type: "is-danger"
							})
							this.status = false
							setTimeout(() => {
								this.status = ""
							}, 3000)
						}
					})
					.catch(error => {})
			}
		},
		signOut() {
			this.$store
				.dispatch("signOut")
				.then(response => {
					if (!response.error) {
						this.$toast.open({
							duration: 3000,
							message: "Logged out successfully",
							position: "is-top",
							type: "is-success"
						})
						this.$router.push({
							name: "home"
						})
					}
				})
				.catch(error => {})
		}
	},
	validations: {
		user: {
			email: {
				required,
				email
			},
			password: {
				required,
				minLength: minLength(6)
			}
		}
	}
}
</script>


<style lang="scss" scoped>
.navbar-brand {
	opacity: 0.8;
	&:hover,
	:active {
		opacity: 1;
	}
}

.navbar-item {
	figure {
		img {
			border-radius: 50%;
			max-height: 100%;
		}
	}
}

.modal-card {
	margin: 0 auto;
}
</style>
