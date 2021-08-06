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
      <button @click="createNewNote" class="notebook__form_button">Create Note</button>
    </div>
    <div class="notebook__notes">
      <div v-for="note in VALID_NOTES" :key="note.id">
        <div class="notebook__notes_title">
          <router-link :to="{name: 'Edit', params: {id: note.id}}" class="notebook__notes_link">
            {{ note.title }}
          </router-link>
          <div class="notebook__notes_date">
            {{ note.date }}
          </div>
          <div v-if="note.description!==''" class="notebook__notes_description">
            {{ note.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import { convert } from "../plugins/convert";
export default {
  name: "CreateNote",
  data() {
    return {
      title: "",
      description: "",
    };
  },
  computed: {
    ...mapGetters(["VALID_NOTES"]),
    convert, 
  },
  methods: {
    ...mapMutations(["CREATE_NOTE"]),
    createNewNote() {
      this.CREATE_NOTE({
        title: this.title,
        description: this.description,
        id: Date.now(),
        date: convert(Date.now())
      });
      this.title = '',
      this.description = ''
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
  margin: 2% 15% ;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.notebook__notes_link,
.notebook__notes_date {
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
    display: flex;
    flex-direction: row; 
    justify-content: space-between;
}

.notebook__notes_description {
    position:absolute;
    background:white;
    border: 1px solid #333;
    border-radius: 0.5rem;
    top: 1.5rem;
    left: 1.5rem;
    padding: 0.5rem;
    display:none;
}
.notebook__notes_title:hover .notebook__notes_description{
    display: block;
    z-index: 1
} 
</style>
