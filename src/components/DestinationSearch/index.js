import {Component} from 'react'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  searchUserInputValue = event =>
    this.setState({searchInput: event.target.value})

  render() {
    const {destinationsList} = this.props

    const {searchInput} = this.state

    const filteredSearchResults = destinationsList.filter(eachItem =>
      eachItem.name.toLowercase().includes(searchInput.toLowerCase()),
    )

    return (
      <div>
        <div>
          <h1>Destination Search</h1>
          <div>
            <input
              type="search"
              onChange={this.searchUserInputValue}
              value={searchInput}
              placeholder="search"
            />
          </div>

          <ul>
            {filteredSearchResults.map(eachItem => (
              <DestinationItem destinationItem={eachItem} key={eachItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default DestinationSearch
