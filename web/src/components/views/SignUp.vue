<template>
  <section class="container section">
    <div class="columns">
      <div class="column"></div>
      <div class="column is-full-tablet is-one-quarter-desktop">
        <h1 class="title is-3 has-text-centered">Sign up</h1>
        <form>
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="Your name" v-model.trim="user.name" @input="$v.user.name.$touch()" :class="{ 'is-danger': $v.user.name.$error }">
            </div>
            <p class="help is-danger" v-if="$v.user.name.$error">
              <span v-if="!$v.user.name.required">Name is required</span>
            </p>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control has-icons-right">
              <input class="input" type="email" placeholder="Your email" v-model.trim="user.email" @blur="$v.user.email.$touch()" :class="{ 'is-danger': $v.user.email.$error }">
            </div>
            <p class="help is-danger" v-if="$v.user.email.$error">
              <span v-if="!$v.user.email.required">Email is required</span>
              <span v-else-if="!$v.user.email.email">Email is invalid</span>
              <span v-else-if="!$v.user.email.isUnique">This email already exists</span>
            </p>
          </div>

          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input class="input" type="password" placeholder="•••• ••••••••" v-model="user.password" @input="$v.user.password.$touch()"
                :class="{ 'is-danger': $v.user.password.$error }">
            </div>
            <p class="help is-danger" v-if="$v.user.password.$error">
              <span v-if="!$v.user.password.required">Password is required</span>
              <span v-else-if="!$v.user.password.minLength">Password must have at least {{ $v.user.password.$params.minLength.min }} characters</span>
            </p>
          </div>

          <b-field label="What are your skills?">
            <b-taginput v-model="tags" :data="filteredTags" field="user.skills" placeholder="Add a skill" @typing="getFilteredTags">
            </b-taginput>
          </b-field>
          <p class="help">Don't worry, you can add more later</p>

          <div class="has-text-centered">
            <button class="button is-primary is-outlined has-margin-top-30">Register</button>
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
			user: {
				name: "",
				email: "",
				password: ""
			}
		}
	},
	validations: {
		user: {
			name: {
				required
			},
			email: {
				required,
				email,
				isUnique(value) {
					if (value === "") return true
					return new Promise((resolve, reject) => {
						setTimeout(() => {
							resolve(typeof value === "string" && value.length % 2 !== 0)
						}, 350 + Math.random() * 300)
					})
				}
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
