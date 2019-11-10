<template>
  <div class="notes-list">
    <p class="notes-list__title">Notes</p>
    <ul class="notes-list__content">
      <li class="notes-list__item" v-for="note in notes" v-bind:key="note.title">
        <strong class="notes-list__item-title">{{ note.title }}</strong> 
        <span class="notes-list__item-date">{{ note.createdAt.toDate().toLocaleString('en-GB', { timeZone: 'UTC' }) }}</span> 
        <span class="notes-list__item-text">{{ note.text }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { db } from '../db';

export default {
  name: 'NotesList',
  data: () => ({ 
    notes: []
  }),
  firestore: {
    notes: db.collection('todos'),
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .notes-list{
    
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
      border: 1px solid #37383a;
      border-radius: 5px;
      padding: 15px;
      margin: 0 0 1em;
      transition: all 0.2s ease-in;

      &:last-child{
        margin: 0;
      }

      &:hover{
        background: rgba(138, 180, 248, 0.08);
      }

      &-title{
        display: inline-block;
        margin-right: 5px;
        font-size: 15px;
        font-weight: 500;
        color: #fff;
      }
      &-date{
        font-size: 13px;
        font-weight: 600;
      }
      &-text{
        display: block;
        margin-top: 5px;
      }
    }
  }
</style>
