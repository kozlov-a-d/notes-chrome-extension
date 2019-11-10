<template>

  <div id="app">
    <div class="l-block">
      <NotesList></NotesList>
    </div>
    <div class="l-block">
      <NoteAddForm></NoteAddForm>
    </div>
  </div>
</template>

<script>
import NotesList from './components/NotesList.vue'
import NoteAddForm from './components/NoteAddForm.vue'
import { db } from './db';

export default {
  name: 'app',
  data: () => ({ 
  }),
  firestore: {
    notes: db.collection('todos'),
  },
  components: {
    NotesList,
    NoteAddForm
  },
  created: function () {
    
  }
}
</script>

<style lang="scss">
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #202124;
  font-size: 14px;
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(154, 160, 166);
  min-width: 420px;
}

* {
  box-sizing: border-box;
}

#app {
  padding: 15px;
}

.l-block{
  background: #292a2d;
  // border: 1px solid #484848;
  box-shadow: rgba(0, 0, 0, 0.3) 0 1px 2px 0, rgba(0, 0, 0, 0.15) 0 1px 3px 1px;
  border-radius: 5px;
  padding: 20px;
  text-align: left;
  margin-bottom: 15px;

  &:last-child{
    margin-bottom: 0;
  }

}


</style>
