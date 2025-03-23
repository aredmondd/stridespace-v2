import { ref } from 'vue'
import { supabase } from './supabaseClient'

export const userSession = ref(null)

// ✅ Listen for auth changes
supabase.auth.onAuthStateChange((event, session) => {
  userSession.value = session
})

// ✅ Fetch current session on load (to persist after reload)
supabase.auth.getSession().then(({ data: { session } }) => {
  userSession.value = session
})

// ✅ Logout function
export const logout = async () => {
  await supabase.auth.signOut()
  userSession.value = null
}
