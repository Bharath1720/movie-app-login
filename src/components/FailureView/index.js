import './index.css'

const FailureView = props => {
  const {onRetry} = props
  const onClickRetry = () => {
    onRetry()
  }
  return (
    <div className="failed-view">
      <img
        className="failed-image"
        src="https://res.cloudinary.com/dps34f4by/image/upload/v1647500780/alert-triangle_yp7fwc.png"
        alt="failure view"
      />
      <h1 className="failed-heading">Oops! Something Went Wrong</h1>
      <button className="retry-btn" type="button" onClick={onClickRetry}>
        Try Again
      </button>
    </div>
  )
}

export default FailureView
