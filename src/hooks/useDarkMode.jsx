import { useEffect } from "react"
import useMediaQuery from "../hooks/useMediaQuery"
import { useLocalStorage } from "../hooks/useStorage"

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage("useDarkMode")

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  
  const enabled = darkMode ?? prefersDarkMode

  useEffect(() => {
    document.body.classList.toggle("dark-mode", enabled)
  }, [enabled])

  return [enabled, setDarkMode]
}
