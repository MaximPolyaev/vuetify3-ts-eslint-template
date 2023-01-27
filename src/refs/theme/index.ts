import { ref } from 'vue'

export const theme = ref('dark')

export function toggleTheme() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}
