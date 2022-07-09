import Header from '../Header'

import './index.css'

function NotFound() {
  const notFindImageUrl =
    'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
  return (
    <>
      <Header />

      <div className="not-found-container">
        <div className="not-found-videos-view">
          <img
            className="not-found-videos-img"
            src={notFindImageUrl}
            alt="not found"
          />
          <h1 className="not-found-videos-heading"> Page Not Found</h1>
          <p className="not-found-videos-note">
            We are sorry, the page you requested could not be found.
          </p>
        </div>
      </div>
    </>
  )
}

export default NotFound
