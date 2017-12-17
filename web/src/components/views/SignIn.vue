<template>
  <section class="container section">
    <div class="columns">
      <div class="column"></div>
      <div class="column is-full-tablet is-one-quarter-desktop">
        <h1 class="title is-3 has-text-centered">Sign in</h1>
        <form @submit.prevent="submit">
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
        </form>
      </div>
      <div class="column"></div>
    </div>
  </section>
</template>

<script>
import { required, minLength, email } from "vuelidate/lib/validators"

export default {
	data() {
		return {
			isLoading: false,
			status: "",
			user: {
				email: "",
				password: ""
			}
		}
	},

	methods: {
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
.has-margin-top-30 {
	margin-top: 30px;
}
</style>