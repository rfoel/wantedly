<template>
  <section>
    <p class="title is-3">
      What I'm good at
      <span v-if="canEdit">
        <span v-if="editMode" class="is-pulled-right">
          <a class="button" @click="toggleEdit">
            <span>Cancel</span>
          </a>
          <a class="button is-success" @click="submit">
            <span>Update</span>
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
          <b-taginput v-model="user_skills" @add="add" :data="filteredSkills" icon="plus" field="name" placeholder="Add a skill" autocomplete
            @typing="getFilteredSkills">
          </b-taginput>
        </b-field>
      </div>
      <div v-else>
        <div class="field" v-for="(user_skill, index) in user_skills" :key="index">
          <b-tag rounded :keep-first="true" size="is-medium">{{user_skill.endorsements.length}}</b-tag> {{user_skill.name}}
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
			filteredSkills: this.skills
		}
	},
	mounted() {
		this.$store.dispatch("getSkills").then(response => {
			this.skills = response
		})
		if (this.$route.params.id) {
			this.canEdit = false
			this.$store
				.dispatch("getUserSkills", {
					id: this.$route.params.id
				})
				.then(response => {
					this.user_skills = response.sort((a, b) => (a.name < b.name && a.endorsements.length >= b.endorsements.length ? -1 : 1))
				})
		} else {
			this.canEdit = true
			this.$store.dispatch("getCurrentUserSkills").then(response => {
				this.user_skills = response.sort((a, b) => (a.name < b.name && a.endorsements.length >= b.endorsements.length ? -1 : 1))
			})
		}
	},
	methods: {
		toggleEdit() {
			this.editMode = !this.editMode
		},
		add() {
			this.user_skills = this.user_skills.filter((skill, index, self) => index === self.findIndex(t => t.id === skill.id))
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
		},
		submit() {
			this.$v.user.$touch()
			if (!this.$v.user.$invalid) {
				this.isLoading = true
				this.$store
					.dispatch("signUp", this.user)
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
}
</style>
