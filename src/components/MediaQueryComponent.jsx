import useMediaQuery from "../hooks/useMediaQuery"

export default function MediaQueryComponent() {
  const isLarge = useMediaQuery("(min-width: 600px)")

  return <div>Large: {isLarge.toString()}</div>
}
