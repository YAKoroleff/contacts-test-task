<template lang="pug">
    .Note 
        .Note-view {{label}} :: {{value}}
        .Note-edit 
            input(v-model="label" @input="save")
            span :: 
            input(v-model="value" @input="save")
        .Note-delete(@click="remove") Удалить

</template>

<script>
export default {
    name: 'Note',
    props: ['noteData'],
    data () {
        return {
            label: this.$props.noteData.note.label,
            value: this.$props.noteData.note.value
        }
    },
    methods: {
        save ()
        {
            this.$store.commit('editNote', 
                {
                    contactIndex: this.$props.noteData.contactIndex, 
                    noteIndex: this.$props.noteData.noteIndex, 
                    note: {label: this.label, value: this.value}
                })
        },
        remove () {
            this.$store.commit('removeNote', {
                contactIndex: this.$props.noteData.contactIndex, 
                noteIndex: this.$props.noteData.noteIndex, 
            })
        }
    }
}
</script>

<style lang="sass">

</style>