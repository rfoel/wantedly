<template>
  <section class="container section">
    <div class="columns">
      <div class="column"></div>
      <div class="column is-full-tablet is-one-quarter-desktop">
        <h1 class="title is-3 has-text-centered">Sign up</h1>
        <form @submit.prevent="submit">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input name="name" class="input" type="text" placeholder="Your name" v-model.trim="user.name" @input="$v.user.name.$touch()"
                :class="{ 'is-danger': $v.user.name.$error }">
            </div>
            <p class="help is-danger" v-if="$v.user.name.$error">
              <span v-if="!$v.user.name.required">Name is required</span>
            </p>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input name="email" class="input" type="text" placeholder="Your email" v-model.trim="user.email" @blur="$v.user.email.$touch()"
                @input="$v.user.email.$reset()" :class="{ 'is-danger': $v.user.email.$error }">
            </div>
            <p class="help is-danger" v-if="$v.user.email.$error">
              <span v-if="!$v.user.email.required">Email is required</span>
              <span v-else-if="!$v.user.email.email">Email is invalid</span>
              <span v-else-if="!$v.user.email.isUnique">Email already in use</span>
            </p>
          </div>

          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input name="password" class="input" type="password" placeholder="•••• ••••••••" v-model="user.password" @input="$v.user.password.$touch()"
                :class="{ 'is-danger': $v.user.password.$error }">
            </div>
            <p class="help is-danger" v-if="$v.user.password.$error">
              <span v-if="!$v.user.password.required">Password is required</span>
              <span v-else-if="!$v.user.password.minLength">Password must have at least {{ $v.user.password.$params.minLength.min }} characters</span>
            </p>
          </div>

          <div class="field">
            <label class="label">Occupation</label>
            <div class="control">
              <input name="occupation" class="input" type="text" placeholder="Your occupation" v-model.trim="user.occupation">
            </div>
          </div>

          <div class="field">
            <label class="label">Location</label>
            <div class="control">
              <input name="location" class="input" type="text" placeholder="Your location" v-model.trim="user.location">
            </div>
          </div>

          <div class="field">
            <label class="label">Bio</label>
            <div class="control">
              <input name="bio" class="input" type="text" placeholder="Say something about yourself" v-model.trim="user.bio">
            </div>
          </div>

          <b-field label="What are your skills?">
            <b-taginput v-model="user_skills" @add="add" :data="filteredSkills" icon="plus" field="name" placeholder="Add a skill" autocomplete
              @typing="getFilteredSkills">
            </b-taginput>
          </b-field>

          <div class="has-text-centered">
            <button class="button is-primary is-outlined has-margin-top-30" :class="{ 'is-loading': isLoading, 'is-success': status, 'is-danger': status === false }">
              <span v-if="!isLoading && status === ''">Register</span>
              <span v-else-if="status">
                <i class="fa fa-check"></i>
              </span>
              <span v-else-if="status === false">
                <i class="fa fa-close"></i>
              </span>
            </button>
          </div>
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
			skills: [],
			filteredSkills: this.skills,
			user: {
				name: "",
				email: "",
				occupation: "",
				location: "",
				bio: "",
				password: ""
			},
			user_skills: []
		}
	},
	created() {
		this.$store.dispatch("getSkills").then(response => {
			this.skills = response
		})
	},
	methods: {
		getFilteredSkills(text) {
			this.filteredSkills = this.skills.filter(option => {
				return (
					option.name
						.toString()
						.toLowerCase()
						.indexOf(text.toLowerCase()) >= 0
				)
			})
			if (!this.filteredSkills.length) {
				this.filteredSkills = [{ name: text }]
			}
		},
		add() {
			this.user_skills = this.user_skills.filter((skill, index, self) => index === self.findIndex(t => t.name === skill.name))
		},
		submit() {
			this.$v.user.$touch()
			if (!this.$v.user.$invalid) {
				this.isLoading = true
				this.$store
					.dispatch("signUp", { user: this.user, skills: this.user_skills })
					.then(response => {
						this.isLoading = false
						if (!response.error) {
							this.$toast.open({
								duration: 3000,
								message: "Signed up successfully",
								position: "is-top",
								type: "is-success"
							})
							this.status = true
							setTimeout(() => {
								this.status = ""
								this.$router.push({
									name: "home"
								})
							}, 1000)
						} else {
							this.$toast.open({
								duration: 3000,
								message: "Something went terribly wrong",
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
			name: {
				required
			},
			occupation: {},
			location: {},
			bio: {},
			email: {
				required,
				email,
				isUnique(value) {
					if (value === "") return true
					return new Promise((resolve, reject) => {
						this.$store
							.dispatch("checkUniqueness", {
								email: this.user.email
							})
							.then(response => {
								if (response.error) resolve(false)
								else resolve(true)
							})
							.catch(error => {
								reject(error)
							})
					})
				}
			},
			password: {
				required,
				minLength: minLength(6)
			}
		},
		user_skills: {}
	}
}
</script>


<style lang="scss" scoped>
.has-margin-top-30 {
	margin-top: 30px;
}
</style>
