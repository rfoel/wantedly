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
          <router-link class="navbar-item" :to="{name: 'home'}">
            Search
          </router-link>
          <hr class="dropdown-divider">
          <router-link class="navbar-item" :to="{name: 'sign_up'}">
            Sign up
          </router-link>
          <b-dropdown position="is-bottom-left">
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
  import {
    required,
    minLength,
    email
  } from "vuelidate/lib/validators"

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
                this.status = true
                setTimeout(() => {
                  this.status = ""
                  this.$router.push({
                    name: "home"
                  })
                }, 1000)
              } else {
                this.status = false
                setTimeout(() => {
                  this.status = ""
                }, 1000)
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
  .navbar-brand {
    opacity: 0.8;
    &:hover,
    :active {
      opacity: 1;
    }
  }

  .modal-card {
    margin: 0 auto;
  }

</style>
