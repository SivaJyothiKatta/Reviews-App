// Write your code here
import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {reviewIndex: 0}

  getReview = () => {
    const {reviewsList} = this.props
    const {reviewIndex} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[
      reviewIndex
    ]

    return (
      <div className="review-container">
        <h1 className="heading">Reviews</h1>
        <img src={imgUrl} alt={username} />
        <p className="username">{username}</p>
        <p className="companyName">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onLeftArrow = () => {
    const {reviewIndex} = this.state

    if (reviewIndex > 0) {
      this.setState(prevState => ({
        reviewIndex: prevState.reviewIndex - 1,
      }))
    }
  }

  onRightArrow = () => {
    const {reviewIndex} = this.state
    const {reviewsList} = this.props

    if (reviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        reviewIndex: prevState.reviewIndex + 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props

    return (
      <div className="container">
        <button
          className="button"
          type="button"
          onClick={this.onLeftArrow}
          data-testid="leftArrow"
        >
          <img
            className="arrow"
            src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            alt="left arrow"
          />
        </button>
        {this.getReview(reviewsList)}
        <button
          className="button"
          type="button"
          onClick={this.onRightArrow}
          data-testid="rightArrow"
        >
          <img
            className="arrow"
            src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            alt="right arrow"
          />
        </button>
      </div>
    )
  }
}

export default ReviewsCarousel
