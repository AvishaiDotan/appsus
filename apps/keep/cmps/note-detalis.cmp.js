import noteTxtDetails from "./note-txt-details.cmp.js"
import noteImgDetails from "./note-img-details.cmp.js"

import { eventBus } from "../../../services/event-bus.service.js"

export default {
    props: ['note'],
    template: `
    <section class="note-details">
        <button @click="close">X</button>
        <button @click="save">Save</button>
        <component :is="note.type + '-details'" :note="note">
        </component>
    </section>
    `,
    methods: {
        
    },
    components: {
        noteTxtDetails,
        noteImgDetails
    },
    methods: {
        close() {
            this.note.isPicked = false
        },
        save() {
            this.$emit('save')

            this.note.isPicked = false
        }
    },
}