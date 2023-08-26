// Write your code here
const DestinationItem = props => {
  const {destinationItem} = props
  const {imgUrl, name} = destinationItem

  return (
    <li>
      <img src={imgUrl} alt={name} />
    </li>
  )
}
export default DestinationItem
