<template>
  <form @submit.prevent="handleSubmit">
     <input type="text" required placeholder="Display name" v-model="displayName">
     <input type="email" required placeholder="email" v-model="email">
     <input type="password" required placeholder="Password" v-model="password">
     <div class="error">{{ error }}</div>
     <button>Sign up</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useSignup from '../composable/useSignup'
export default {
   setup(props, context){
      const { error, signup} = useSignup()
      //refs 
      const displayName = ref('')
      const email = ref('')
      const password = ref('')

      const handleSubmit = async() => {
         await signup(email.value, password.value, displayName.value)
         if (!error.value) {
            console.log('user signed up');
            context.emit('signup')
         }
      }

      return { displayName, email, password, handleSubmit, error }
   }
}
</script>

<style>

</style>