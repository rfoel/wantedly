<template>
  <nav class="navbar is-fixed-top is-transparent">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="/static/images/wantedly_logo.svg" width="112" height="28">
        </a>
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
          <b-dropdown position="is-bottom-left">
            <a class="navbar-item" slot="trigger">
              <span>Login</span>
              <b-icon class="fa fa-angle-down"></b-icon>
            </a>
            <b-dropdown-item custom paddingless>
              <form action="">
                <div class="modal-card" style="width:300px;">
                  <section class="modal-card-body">
                    <b-field label="Email">
                      <b-input type="email" placeholder="Your email" required>
                      </b-input>
                    </b-field>

                    <b-field label="Password">
                      <b-input type="password" password-reveal placeholder="Your password" required>
                      </b-input>
                    </b-field>
                    <button class="button is-primary">Login</button>
                    <router-link :to="{name: 'sign_up'}" class="button is-primary is-outlined is-pulled-right">Register</router-link>
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
export default {
	data() {
		return {
			isActive: false
		}
	},
	methods: {
		navbarToggle() {
			this.isActive = !this.isActive
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
</style>
