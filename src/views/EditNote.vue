<template>
<div class="notebook">
  <div class="notebook__form">
    <div class="notebook__form_title">
      <label for="title" class="notebook__form_label">title</label>
      <input v-model="title" type="text" id="title" maxlength="30" />
    </div>
    <div class="notebook__form_description">
      <label for="description" class="notebook__form_label">description</label>
      <textarea v-model="description" type="text" id="description" maxlength="70" />
    </div>
    <button @click="editNote" class="notebook__form_button">Edit Note</button>
    <button @click="deleteNote" class="notebook__form_button">Delete Note</button>
  </div>
</div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { convert } from "../plugins/convert";
export default {
  name: "Edit",
  data() {
    return {
      title: "",
      description: "",
    };
  },
  computed: {
    ...mapGetters(["NOTE_BY_ID"]),
  },
  created() {
    const currentNote = this.NOTE_BY_ID(this.$route.params.id);
    this.title = currentNote.title;
    this.description = currentNote.description;
    
  },
  methods: {
    ...mapMutations(["CREATE_NOTE", "DELETE_NOTE"]),    
    deleteNote() {
      this.DELETE_NOTE({
        id: this.$route.params.id,
      });
      this.$router.push("/index");
    },
    editNote() {
      this.CREATE_NOTE({
        title: this.title,
        description: this.description,
        id: Date.now(),
        date: convert(Date.now())
      });
      this.deleteNote();
      
    },
  },
};
</script>

<style scoped>
.notebook {
    width: 60vw;
    margin: 0 auto;
    background-color: #e7ddc4;
    padding: 2vw;
    min-height: 80vh;
    border-radius: 0.5rem;
}

.notebook__form {
    width: 40vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #7fab94;
    border-radius: 0.5rem;
}

.notebook__form_title,
.notebook__form_description {
  width: 80%;
}

.notebook__form_label {
  left: 1rem;
  font-size: 0.75rem;
  color: black;
}

.notebook__form_button {
  width: 60%;
  margin: 1rem;
}

input[type=text], 
textarea[type=text]{
    width: 100%;
    border-bottom: 2px solid #c6ecf8;
    color: #9998a4;
    border-radius: 0.5rem;
}

.notebook__notes {
  margin-top: 2%;
  margin-left: 20%;
  margin-left: 15%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.notebook__notes_link {
  text-decoration: none;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  font-size: 1.2rem;
  color: #d36437;
}

.notebook__notes_title {
    position:relative;  
}

.notebook__notes_description {
    position:absolute;
    background:white;
    border: 1px solid #333;
    border-radius: 0.5rem;
    padding: 0.5rem;
    display:none;
}
.notebook__notes_title:hover .notebook__notes_description{
    display: block;
    z-index: 1
} 
</style>
