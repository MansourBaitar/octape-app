<template>
  <div>
    <div class="card">
      <div class="columns">
        <div class="column project-card-header">
          <nuxt-link :to="`/projects/${project.id}`">
            <h3 class="label">{{ project.name }}</h3>
          </nuxt-link>
          <div :id="dropdownID" class="dropdown is-right">
            <div class="dropdown-trigger">
              <button
                class="button"
                aria-haspopup="true"
                aria-controls="dropdown-menu3"
                @click="toggleActive(dropdownID)"
              >
                <span
                  ><b-icon icon="dots-vertical" class="verticaldots"></b-icon
                ></span>
                <span class="icon is-small">
                  <i class="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div id="dropdown-menu3" class="dropdown-menu" role="menu">
              <div class="dropdown-content">
                <a class="dropdown-item">
                  <b-icon
                    class="icon-color-blue icon-spacing"
                    icon="pencil"
                    size="is-small"
                  ></b-icon
                  >Edit
                </a>
                <a
                  class="dropdown-item"
                  @click="handleDeleteDialog(project.id)"
                >
                  <b-icon
                    class="icon-color-red icon-spacing"
                    icon="delete"
                    size="is-small"
                  >
                  </b-icon
                  >Delete
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="column is-one-fifth"></div> -->
      </div>
      <div class="centered">
        <img
          src="https://www.nordic.be/wp-content/uploads/2020/04/De-cameras-staan-klaar-om-dit-noorderlicht-te-vereeuwigen.jpg"
          class="thumbnail"
        />
      </div>
      <p v-if="project.description" class="description">
        {{ project.description }}
      </p>
      <p v-else class="description">There was no description set</p>
      <div class="newNotification">
        <span class="newSpan">{{ project.status }}</span>
        <!-- <div class="contributors" v-for="c in project.contributors" :key="c">{{ c }}</div> -->
        <div class="contributors">
          <img
            v-for="ci in contributorList.slice(0, 5)"
            :key="ci"
            :src="ci"
            class="contributorImage"
          />
          <span class="extraContributors" v-if="contributorList.length > 5">
            +{{ contributorList.length - 5 }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
    },
  },
  data() {
    return {
      dropdownID: 'actionsMenu' + this.project.id,
      contributorList: [
        'https://dieteticallyspeaking.com/wp-content/uploads/2017/01/profile-square.jpg',
        'https://dieteticallyspeaking.com/wp-content/uploads/2017/01/profile-square.jpg',
        'https://dieteticallyspeaking.com/wp-content/uploads/2017/01/profile-square.jpg',
        'https://dieteticallyspeaking.com/wp-content/uploads/2017/01/profile-square.jpg',
        'https://dieteticallyspeaking.com/wp-content/uploads/2017/01/profile-square.jpg',
        'https://dieteticallyspeaking.com/wp-content/uploads/2017/01/profile-square.jpg',
        'https://dieteticallyspeaking.com/wp-content/uploads/2017/01/profile-square.jpg',
        'https://dieteticallyspeaking.com/wp-content/uploads/2017/01/profile-square.jpg',
      ],
    }
  },
  methods: {
    async handleDelete(id: string) {
      await this.$axios.$delete('/hemera/projects/' + id)
      this.$router.push('/projects')
    },
    handleDeleteDialog(id: string) {
      this.$buefy.dialog.confirm({
        title: 'Delete',
        message:
          'Are you sure you want to <b>delete</b> this project? This action cannot be undone.',
        confirmText: 'Delete project',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: () => this.handleDelete(id),
      })
    },
    toggleActive(dropdownID: string) {
      const dropdown = document.getElementById(dropdownID)
      if (dropdown?.classList.contains('is-hoverable')) {
        dropdown.classList.remove('is-hoverable')
      } else {
        dropdown?.classList.add('is-hoverable')
      }
    },
  },
})
</script>

<style scoped lang="scss">
.project-card-header {
  margin-right: 12px;
  display: flex;
  justify-content: space-between;
}
.column {
  padding: 0;
}
.card {
  width: 273px;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.13));
  border-radius: 8px;
  transition: 0.2s;
  padding-bottom: 16px;
  margin: 20px 10px;
}
.label {
  padding: 16px;
  padding-bottom: 0;
  padding-left: 28px;
  margin: 0;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
}
.verticaldots {
  padding-top: 28px;
}
.button {
  border: none;
  background: none;
  width: 35px;
  padding-top: 0px;
}
.icon-spacing {
  padding-right: 12px;
}
.button:hover, .button:focus {
  outline: none;
  border: none;
  box-shadow: none;
}
.dropdown-content {
  max-width: 100px;
}
.dropdown-menu {
  max-width: 75px;
  min-width: 75px;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.13));
}
.dropdown-item {
  padding-right: 10px;
}
.thumbnail {
  max-height: 143px;
  max-width: 241px;
  border-radius: 8px;
  margin: 0 16px;
}
.centered {
  text-align: center;
}
.icon-color-blue {
  color: blue;
}
.icon-color-red {
  color: red;
}
.description {
  padding: 13px 16px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 0 !important;
  padding-bottom: 4px;
}
.newNotification {
  margin-top: 8px !important;
  display: flex;
  justify-content: space-between;
}
.newSpan {
  background: #d5fad1;
  padding: 4px 12px;
  border-radius: 4px;
  color: #23b715;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  margin-left: 16px;
    align-self: center;

}
.contributors {
  text-align: right;
  margin-right: 10px;
    align-self: center;
  display: flex;
}
.contributorImage {
  max-width: 32px;
  max-height: 32px;
  border-radius: 50%;
  border: 2px white solid;
  margin-left: -16px;
  align-self: center;

}
.extraContributors {
  align-self: center;
  margin-left: -16px;
  background-color: #F1C40F;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  text-align: center;
  padding-top: 2px;
  border: 2px solid #FFFFFF;
  font-weight: bold;
  color: black;

}

//hover animations
.card:hover {
  transform: scale(1.01);
}
</style>
