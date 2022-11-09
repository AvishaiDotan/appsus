import notePreview from "./note-preview.cmp.js"
import noteDetalis from "./note-detalis.cmp.js"


export default {
    props: ['notes'],
    template: `
    <section class="note-list-container">
        <ul class="clean-list note-list">
                <li v-for="note in notes" :key="note.id">
                        <note-preview v-if="note.isPinned" :note="note" @click="pickNote(note)" @togglePin="togglePin"/>
                        <note-detalis v-if="note.isPicked" class="note-details" :note="note" @save="save(note)"/>
                        <!-- <router-view></router-view> -->
                </li>
        </ul>
            <ul class="clean-list note-list">
                <li v-for="note in notes" :key="note.id">
                        <note-preview v-if="!note.isPinned" :note="note" @click="pickNote(note)" @togglePin="togglePin"/>
                        <note-detalis v-if="note.isPicked" class="note-details" :note="note" @save="save(note)"/>
                        <!-- <router-view></router-view> -->
                </li>
            </ul>
        </section>
    `,
    data() {
        return {
        }
    },
    created() {
        this.notes.forEach(note => {
            note.isPicked = false
        })
    },
    methods: {
        pickNote(note) {
            note.isPicked = true
            console.log('picked');
            // this.$router.push(`/${note.id}`)
        },
        save(note) {
            this.$emit('save', note)
        },
        togglePin(noteId) {
            // const idx = this.notes.findIndex(note => note.id === noteId)
            // const note = this.notes.splice(idx, 1)[0]
            // note.isPinned ? this.notes.unshift(note) : this.notes.push(note)
        }
    },
    components: {
        notePreview,
        noteDetalis
    }

}