<template lang="pug">
  .List
    .List-item(v-for="(contact, index) in contacts")
      router-link(:to="`/contact/${index}`") 
        img.List-avatar(:src="contact.github | avatar")
        .List-name {{contact.name}}
      .List-delete(@click="remove(index)") Удалить

    input.List-newName(v-model="newName")
    .List-add(@click="create") Добавить

</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      newName: '',
    }
  },
  computed: {
    //use some fields from contact info to implement bit more rich and editable list-items without extending the funcy
    contacts () {
      return this.$store.state.contacts.map(
        contact => {
          return {
            name: contact.find(note => note.label === 'name').value,
            github: contact.find(note => note.label === 'Gihub'),
          }
        }
      )
    },        
  },
  filters: {
    avatar (githubProfile = false) {
      return githubProfile ? `${githubProfile.value}.png` : 'https://sun9-46.userapi.com/impf/c834101/v834101886/17f4b/1UnnbS0edO8.jpg?size=200x0&quality=88&crop=1,0,718,718&sign=4fc91773a29b130fd50ed67f27ac555a&c_uniq_tag=D5GR8Ri57CTJMH7lYBNVsnYM9wT4T_3bI2KYSgEKxvQ&ava=1'
    }
  },
  methods: {
    create () {
      this.$store.commit('appendContact', this.newName)
    },
    remove (index) {
      this.$store.commit('removeContact', index)
    }
  }
}
</script>

<style lang="sass" scoped>

</style>