export const Text = (props) => {
  const Tag = props.tag || "span"

  const getStyle = () => {
    switch (props.size) {
      case "small":
        return "text-sm"
      case "medium":
        return "text-lg lg:text-2xl"
      case "large":
        return "text-2xl lg:text-4xl"
      default:
        return "text-base"
    }
  }

  const style = getStyle()
  return <Tag className={`${style} ${props.className}`}>{props.children}</Tag>
}
