<template>
  <div class="container">
    <Navbar @signout="handleSignout"/>
    <ChatWindow/>
    <NewChatForm/>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import NewChatForm from '../components/NewChatForm.vue'
import ChatWindow from '../components/ChatWindow.vue'
export default {
  components: { Navbar, NewChatForm, ChatWindow },
  setup(){
    const router = useRouter()
    const handleSignout = () =>{
      router.push({ name: 'Welcome' })
    }

    return { handleSignout }
  }
}
</script>

<style>

</style>