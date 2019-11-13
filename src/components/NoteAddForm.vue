<template>
  <div class="note-add-form">
    <p class="note-add-form__title">Add note</p>
    <form class="notes-list__content" @submit="addNote">
      <div class="note-add-form__item">
        <input v-model="title" type="text" placeholder="title">
      </div>
      <div class="note-add-form__item">
         <textarea v-model="text" placeholder="text"></textarea>
      </div>
      <div class="note-add-form__item">
        <button type="submit">Submit</button>
      </div>
      <div class="note-add-form__errors">
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{error}}</li>
        </ul>
      </div>
    </form>
  </div>
</template>

<script>
import { db, Timestamp } from '../db';

export default {
  name: 'NoteAddForm',
  data: () => ({ 
    title: '',
    text: '',
    createdAt: '',
    errors: []
  }),
  firestore: {
    notes: db.collection('todos'),
  },
  methods: {
    addNote: function (e) {
      e.preventDefault();

       this.errors= [];

      if ( this.title.length == 0) {
        this.errors.push(`field 'title' can't been empty`);
      }

      if ( this.text.length == 0) {
        this.errors.push(`field 'text' can't been empty`);
      }

      if (this.errors.length == 0) {
        db.collection('todos').add({
          title: this.title,
          text: this.text,
          createdAt: Timestamp.fromDate(new Date()),
        })
        this.title = '';
        this.text = '';
      }

      return false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .note-add-form{
    
    &__title{
      color: #fff;
      margin: 0;
      font-size: 18px;
      margin: 0 0 1em;
    }
    &__content{
      list-style: none;
      margin: 0;
      padding: 0;
    }
    &__item{
      margin: 0 0 1em;

      &:last-child{
        margin: 0;
      }
     
      input{
        display: block;
        width: 100%;
        height: 30px;
        border: 1px solid #37383a;
        border-radius: 5px;
        padding: 0 10px;
        background: none;
        color: #fff;
        font: inherit;
        transition: all 0.2s ease-in;
        // background: rgba(138, 180, 248, 0.08);
        background: #31353c;
        outline: none !important

        // &:focus,
        // &:hover{
        //   background: rgba(138, 180, 248, 0.08);
        //   outline: none;
        // }
      }

      textarea{
        display: block;
        width: 100%;
        height: 90px;
        border: 1px solid #37383a;
        border-radius: 5px;
        padding: 10px 10px;
        background: none;
        color: #fff;
        font: inherit;
        // background: rgba(138, 180, 248, 0.08);
        background: #31353c;
        transition: all 0.2s ease-in;
        outline: none !important;

        // &:focus,
        // &:hover{
        //   background: rgba(138, 180, 248, 0.08);
        //   outline: none;
        // }
      }

      button{
        border: 1px solid #37383a;
        border-radius: 5px;
        padding: 5px 20px;
        height: 30px;
        background: rgba(138, 180, 248, 0.68);
        color: #fff;
        cursor: pointer;
        outline: none !important;

        // &:focus,
        // &:hover{
        //   background: rgba(138, 180, 248, 0.38);
        //   outline: none;
        // }
      }
    }
  }
</style>
