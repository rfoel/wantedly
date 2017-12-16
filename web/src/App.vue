<template>
  <div id="app">
    <page-navigation></page-navigation>
    <page-content class="flex-grow"></page-content>
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageNavigation from "@/components/layout/PageNavigation.vue"
import PageContent from "@/components/layout/PageContent.vue"
import PageFooter from "@/components/layout/PageFooter.vue"

export default {
	name: "app",
	components: {
		PageNavigation,
		PageContent,
		PageFooter
	}
}
</script>

<style lang="scss">
@import "~bulma/sass/utilities/_all";
$primary: #00a4bb;
$primary-invert: findColorInvert($primary);

$colors: (
	"white": ($white, $black),
	"black": ($black, $white),
	"light": ($light, $light-invert),
	"dark": ($dark, $dark-invert),
	"primary": ($primary, $primary-invert),
	"info": ($info, $info-invert),
	"success": ($success, $success-invert),
	"warning": ($warning, $warning-invert),
	"danger": ($danger, $danger-invert)
);

$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

@import "~bulma";
@import "~buefy/src/scss/buefy";

#app {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

.flex-grow {
	flex-grow: 1;
}
</style>
