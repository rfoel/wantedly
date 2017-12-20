<template>
  <div>
    <div class="columns">
      <div class="column">
        <span class="title is-3">
          What I'm good at
        </span>
      </div>
      <span v-if="canEdit" class="column">
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
      <span v-else class="column">
        <b-dropdown position="is-bottom-left" class="is-pulled-right">
          <a class="button is-primary is-outlined" slot="trigger">
            <span>Recommend skill</span>
          </a>
          <b-dropdown-item custom paddingless>
            <form @submit.prevent="recommend">
              <div class="modal-card" style="width:300px; overflow: visible;">
                <section class="modal-card-body" style="overflow: visible;">
                  <b-field>
                    <b-autocomplete v-model="recommend_skill" :data="filteredDataObj" field="name" placeholder="Add a skill">
                    </b-autocomplete>
                  </b-field>
                  <button class="button is-primary" :class="{ 'is-loading': isLoading, 'is-success': status, 'is-danger': status === false }">
                    <span v-if="!isLoading && status === ''">Recommend</span>
                    <span v-else-if="status">
                      <i class="fa fa-check"></i>
                    </span>
                    <span v-else-if="status === false">
                      <i class="fa fa-close"></i>
                    </span>
                  </button>
                </section>
              </div>
            </form>
          </b-dropdown-item>
        </b-dropdown>
      </span>
    </div>
		<br>
    <div class="columns">
      <div class="content column">
        <div v-if="editMode">
          <b-field>
            <b-taginput v-model="updated_skills" @add="add" :data="filteredSkills" icon="plus" field="name" placeholder="Add a skill"
              autocomplete @typing="getFilteredSkills">
            </b-taginput>
          </b-field>
        </div>
        <div v-else>
          <div class="field" v-for="user_skill in user_skills" :key="user_skill.id">
            <b-tag rounded :keep-first="true" size="skill is-medium" :class="{'can-endorse': !canEdit}" @click.native="endorse(user_skill)">
              <span>{{user_skill.endorsements.length}}</span>
            </b-tag> {{user_skill.name}}
            <div class="endorsment is-pulled-right" v-for="endorsement in user_skill.endorsements" :key="endorsement.id">
              <router-link :to="{name: 'user', params: {id: endorsement.endorser_id}}">
                <img :src="endorsement.endorser.avatar" class="image is-32x32">
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
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
			updated_skills: [],
			recommend_skill: ""
		}
	},
	computed: {
		current_user() {
			return this.$store.state.current_user
		},
		filteredDataObj() {
			return this.skills.filter(option => {
				return (
					option.name
						.toString()
						.toLowerCase()
						.indexOf(this.recommend_skill.toLowerCase()) >= 0
				)
			})
		}
	},
	created() {
		this.getUserSkills()
	},
	watch: {
		$route(to, from) {
			this.getUserSkills()
		}
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
				this.filteredSkills = [
					{
						name: text
					}
				]
			}
		},
		getUserSkills() {
			this.$store.dispatch("getSkills").then(response => {
				this.skills = response
			})
			if (this.$route.params.id) {
				this.canEdit = this.$route.params.id == this.current_user.id ? true : false
				this.$store
					.dispatch("getUserSkills", {
						id: this.$route.params.id
					})
					.then(response => {
						this.user_skills = response.sort(
							(a, b) => (a.name.toLowerCase() < b.name.toLowerCase() && a.endorsements.length >= b.endorsements.length ? -1 : 1)
						)
					})
			} else {
				this.canEdit = true
				this.$store.dispatch("getCurrentUserSkills").then(response => {
					this.user_skills = response.sort(
						(a, b) => (a.name.toLowerCase() < b.name.toLowerCase() && a.endorsements.length >= b.endorsements.length ? -1 : 1)
					)
				})
			}
		},
		recommend() {
			this.$store
				.dispatch("recommend", {
					user_id: this.$route.params.id,
					recommend: this.recommend_skill
				})
				.then(response => {
					if (!response.error) {
						this.$toast.open({
							duration: 3000,
							message: "Skill recommended successfully",
							position: "is-top",
							type: "is-success"
						})
						this.getUserSkills()
						this.recommend_skill = ""
					} else {
						this.$toast.open({
							duration: 3000,
							message: "Something went terribly wrong",
							position: "is-top",
							type: "is-danger"
						})
					}
				})
				.catch(error => {
					this.$toast.open({
						duration: 3000,
						message: "You have to be logged to reccomend skills",
						position: "is-top"
					})
				})
		},
		endorse(skill) {
			if (this.canEdit) return

			this.$store
				.dispatch("endorse", {
					user_id: this.$route.params.id,
					skill_id: skill.id
				})
				.then(response => {
					if (!response.error) {
						this.$toast.open({
							duration: 3000,
							message: "User skill endorsed successfully",
							position: "is-top",
							type: "is-success"
						})
						this.getUserSkills()
					} else {
						this.$toast.open({
							duration: 3000,
							message: "Something went terribly wrong",
							position: "is-top",
							type: "is-danger"
						})
					}
				})
				.catch(error => {})
		},
		update() {
			this.isLoading = true
			this.$store
				.dispatch("updateSkills", {
					skills: this.updated_skills
				})
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
						this.status = ""
						this.toggleEdit()
						this.getUserSkills()
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

.skill {
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

.endorsment {
	img {
		border-radius: 50%;
	}
	width: 30px;
	height: 30px;
	margin-right: 10px;
	margin-bottom: 10px;
	cursor: pointer;
}
</style>
