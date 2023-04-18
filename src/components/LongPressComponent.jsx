import { useRef, useState } from "react"
import useLongPress from "../hooks/useLongPress"

export default function LongPressComponent() {
  const elementRef = useRef()
  const [pressed, setPressed] = useState(false)


  // useLongPress(elementRef, () => alert("Long Press"), { delay: 1000 })

  useLongPress(elementRef, () => setPressed(prevState=> !prevState))

  return (
    <div
      ref={elementRef}
      style={{
        backgroundColor: `${pressed ? "dodgerblue" : "firebrick"}`,
        width: "100px",
        height: "100px",
        position: "absolute",
        top: "calc(50% - 50px)",
        left: "calc(50% - 50px)",
      }}
    />
  )
}
