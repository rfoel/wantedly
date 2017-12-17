<template>
  <section>
    <p class="title is-3">
      What I'm good at
      <span v-if="canEdit">
        <span v-if="editMode" class="is-pulled-right">
          <a class="button" @click="toggleEdit">
            <span>Cancel</span>
          </a>
          <a class="button is-primary is-outlined has-margin-top-30" @click="update" :class="{ 'is-loading': isLoading, 'is-success': status, 'is-danger': status === false }">
            <span v-if="!isLoading && status === ''">Update</span>
            <span v-else-if="status">
              <i class="fa fa-check"></i>
            </span>
            <span v-else-if="status === false">
              <i class="fa fa-close"></i>
            </span>
          </a>
        </span>
        <span v-else>
          <a class="button is-pulled-right" @click="toggleEdit">
            <span>Edit</span>
          </a>
        </span>
      </span>
    </p>
    <div class="content">
      <div v-if="editMode">
        <b-field>
          <b-taginput v-model="updated_skills" @add="add" :data="filteredSkills" icon="plus" field="name" placeholder="Add a skill" autocomplete
            @typing="getFilteredSkills">
          </b-taginput>
        </b-field>
      </div>

      <div v-else>
        <div class="field" v-for="(user_skill, index) in user_skills" :key="index">
          <b-tag rounded :keep-first="true" size="is-medium" :class="{'can-endorse': !canEdit}"><span>{{user_skill.endorsements.length}}</span></b-tag> {{user_skill.name}}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
	props: ["user_id"],
	data() {
		return {
			canEdit: false,
			editMode: false,
			isLoading: false,
			status: "",
			skills: [],
			user_skills: [],
			filteredSkills: this.skills,
			updated_skills: []
		}
	},
	computed: {
		current_user() {
			return this.$store.state.current_user
		}
	},
	mounted() {
		this.getUserSkills()
	},
	methods: {
		toggleEdit() {
			this.editMode = !this.editMode
			this.updated_skills = Object.assign([], this.user_skills)
		},
		add() {
			this.updated_skills = this.updated_skills.filter((skill, index, self) => index === self.findIndex(t => t.name === skill.name))
		},
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
		getUserSkills() {
			this.$store.dispatch("getSkills").then(response => {
				this.skills = response
			})
			if (this.$route.params.id) {
				this.canEdit = this.$route.params.id === this.current_user.id ? true : false
				this.$store
					.dispatch("getUserSkills", {
						id: this.$route.params.id
					})
					.then(response => {
						this.user_skills = response.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() && a.endorsements.length >= b.endorsements.length ? -1 : 1))
					})
			} else {
				this.canEdit = true
				this.$store.dispatch("getCurrentUserSkills").then(response => {
					this.user_skills = response.sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() && a.endorsements.length >= b.endorsements.length ? -1 : 1))
				})
			}
		},
		update() {
			this.isLoading = true
			this.$store
				.dispatch("updateSkills", { skills: this.updated_skills })
				.then(response => {
					this.isLoading = false
					if (!response.error) {
						this.$toast.open({
							duration: 3000,
							message: "Skills updated successfully",
							position: "is-top",
							type: "is-success"
						})
						this.status = true
						setTimeout(() => {
							this.status = ""
							this.toggleEdit()
							this.getUserSkills()
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
}
</script>


<style lang="scss" scoped>
$primary: #00a4bb;

.tag {
	border: 2px solid $primary;
	color: $primary;
	background: transparent;
	width: 40px;
	height: 40px;
	margin-right: 10px;
	margin-bottom: 10px;
	cursor: pointer;
	&.can-endorse {
		&:hover {
			color: #fff;
			background: $primary;
			span {
				display: none;
			}
			&::after {
				content: "+1";
			}
		}
		&:active {
			color: #fff;
			background: darken($primary, 5%);
		}
	}
}
</style>
