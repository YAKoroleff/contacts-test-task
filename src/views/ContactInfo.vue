<template lang="pug">
  .ContactInfo 
    router-link.ContactInfo-goBack(to="/") К списку контактов
    .ContactInfo-notes(v-for="(note, noteIndex) in notes" :is="note.label | type" :noteData="{contactIndex, noteIndex, note}")

    input.List-newName(v-model="newLabel")
    input.List-newName(v-model="newValue")
    .List-add(@click="create") Добавить

</template>

<script>
import ContactName from '../components/ContactName.vue'
import Note from '../components/Note.vue'

export default {
  components: {
    ContactName, Note
  },
  data () {
    return {
      newLabel: '',
      newValue: '',
    }
  },
  computed: {
    contactIndex () {
      return this.$route.params.index
    },
    notes () {
      return this.$store.state.contacts[this.contactIndex]   
    },
  },
  filters: {
    type (label) {
      return label === 'name' ? ContactName : Note
    }
  },
  methods: {
    create () {
      this.$store.commit('appendNote', {
        contactIndex: this.contactIndex, 
        note: {label: this.newLabel, value: this.newValue}
      })
    },
  }
}
</script>