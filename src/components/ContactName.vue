<template lang="pug">
    .ContactName 
        .ContactName-view {{name}}
        .ContactName-edit 
            input(v-model="name" @input="save")

</template>

<script>
export default {
    name: 'ContactName',
    props: ['noteData'],
    data () {
        return {
            name: this.$props.noteData.note.value
        }
    },
    methods: {
        save () {
            this.$store.commit('editNote', 
                {
                    contactIndex: this.$props.noteData.contactIndex, 
                    noteIndex: this.$props.noteData.noteIndex, 
                    note: {label: 'name', value: this.name}
                })
        },
    }
        
}
</script>

<style lang="sass">

</style>