<template>
  <form @submit.prevent="handleSubmit">
     <input type="email" required placeholder="email" v-model="email">
     <input type="password" required placeholder="Password" v-model="password">
     <div class="error">{{ error }}</div>
     <button>Login up</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import useLogin from '../composable/useLogin'
export default {
   setup(props, context){
      const { error, login} = useLogin()
      //refs 
      const email = ref('')
      const password = ref('')

      const handleSubmit = async() => {
         await login( email.value, password.value )
         if (!error.value) {
            console.log('User loggeed in')
            context.emit('login')
         }
      }
      return { email, password, handleSubmit, error }
   }
}
</script>

<style>

</style>