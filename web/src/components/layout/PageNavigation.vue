<template>
  <nav class="navbar is-transparent">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img src="/static/images/wantedly_logo.svg" width="112" height="28">
        </a>
        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item" href="https://bulma.io/">
            Home
          </a>
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
                    <button class="button is-secondary is-right">Register</button>
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
