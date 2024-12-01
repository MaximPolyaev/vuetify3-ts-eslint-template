import { ref } from 'vue'

export const drawer = ref(true)

export function toggleDrawer() {
  drawer.value = !drawer.value
}
