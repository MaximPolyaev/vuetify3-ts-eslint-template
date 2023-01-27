import { ref } from 'vue'

export const drawer = ref(false)

export function toggleDrawer() {
  drawer.value = !drawer.value
}
