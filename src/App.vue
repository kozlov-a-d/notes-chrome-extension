<template>

  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <p>test</p>
    <div class="notes">
      <ul>
        <li v-for="note in notes" v-bind:key="note.title">
          <strong>{{ note.title }}</strong> 
          <span>{{ note.text }}</span> 
          <span>{{ note.createdAt }}</span>
        </li>
      </ul>

      <form class="form" @submit="addNote">
        <div class="form__item">
          <input v-model="newNote.title" type="text" placeholder="title">
        </div>
        <div class="form__item">
          <textarea v-model="newNote.text" placeholder="text"></textarea>
        </div>
        <button type="submit">add</button>
        <div class="form__errors">
          <ul>
            <li v-for="error in newNote.errors" v-bind:key="error">{{error}}</li>
          </ul>
        </div>
      </form>
      
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { db, Timestamp } from './db';

export default {
  name: 'app',
  data: () => ({ 
    notes: [],
    newNote: {
      title: '',
      text: '',
      createdAt: '',
      errors: []
    }
  }),
  firestore: {
    notes: db.collection('todos'),
  },
  components: {
    // HelloWorld
  },
  created: function () {
    
  },
  methods: {
    addNote: function (e) {
      e.preventDefault();

       this.newNote.errors= [];

      if ( this.newNote.title.length == 0) {
        this.newNote.errors.push(`field 'title' can't been empty`);
      }

      if ( this.newNote.title.length == 0) {
        this.newNote.errors.push(`field 'text' can't been empty`);
      }

      if (this.newNote.errors.length == 0) {
        // this.notes.push()
        db.collection('todos').add({
          title: this.newNote.title,
          text: this.newNote.text,
          createdAt: Timestamp.fromDate(new Date()),
        })
      }

      return false;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
