import { writable } from 'svelte/store';

const notification = writable({message: '', type:''});

const notify = (message, type='failed') =>{
  notification.set({message, type});

  setTimeout(() => {
    notification.set({message: '', type:''});
  }, 5000)
}


export { notification, notify };
