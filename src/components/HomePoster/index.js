import './index.css'

const HomePoster = props => {
  const {poster} = props
  const {backdropPath, title, overview} = poster
  return (
    <>
      <div
        className="devices-container"
        alt={title}
        style={{
          backgroundImage: `url(${backdropPath})`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          height: '100%',
        }}
      >
        <div className=" home-header-content heading-container">
          <h1 className=" movie-details-name home-poster-title">{title}</h1>
          <h1 className=" movie-details-description home-poster-overview">
            {overview}
          </h1>
          <button
            className=" movies-details-play-button  home-poster-play-btn"
            type="button"
          >
            Play
          </button>
        </div>
      </div>
      {/* <div
        className="lg-devices"
        style={{
          backgroundImage: `url(${backdropPath})`,
          backgroundSize: '100% 100%',
          height: '100%',
        }}
      >
        <div className="heading-container">
          <h1 className="home-poster-title">{title}</h1>
          <p className="home-poster-overview">{overview}</p>
          <button className="home-poster-play-btn" type="button">
            Play
          </button>
        </div>
      </div> */}
    </>
  )
}

export default HomePoster
