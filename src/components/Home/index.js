import {Component} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import HomePoster from '../HomePoster'
import Header from '../Header'
import './index.css'
import FailureView from '../FailureView'
import TrendingNow from '../TrendingNow'
import Originals from '../Originals'
import Footer from '../Footer'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    initialPoster: {},
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getHomePagePoster()
  }

  getHomePagePoster = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/movies-app/originals`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      console.log(data)
      const fetchedDataLength = data.results.length
      const randomPoster =
        data.results[Math.floor(Math.random() * fetchedDataLength)]
      const updatedData = {
        id: randomPoster.id,
        backdropPath: randomPoster.backdrop_path,
        title: randomPoster.title,
        overview: randomPoster.overview,
        posterPath: randomPoster.poster_path,
      }
      console.log(updatedData)
      this.setState({
        initialPoster: {...updatedData},
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderFailureView = () => <FailureView />

  renderLoadingView = () => (
    <div className="loader-container">
      <Loader type="TailSpin" height={35} width={380} color=" #D81F26" />
    </div>
  )

  renderSuccessView = () => {
    const {initialPoster} = this.state
    return (
      <>
        {/* <p className="json">{JSON.stringify(homeVideos)}</p> */}
        <HomePoster poster={initialPoster} />
      </>
    )
  }

  renderHomePoster = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()

      default:
        return null
    }
  }

  render() {
    return (
      <div className="root-container">
        <Header />
        <div className="banner-home-container">
          <div className="banner-container">
            <ul className="banner-left-part">
              <Link to="/">
                <li>
                  <button className="banner-btn" type="button">
                    Home
                  </button>
                </li>
              </Link>
              <Link to="/popular">
                <li>
                  <button className="banner-btn" type="button">
                    Popular
                  </button>
                </li>
              </Link>

              <li>
                <button className="banner-btn" type="button">
                  Account
                </button>
              </li>
            </ul>
            <div className="banner-right-part">
              <button type="button" className="banner-close-btn">
                <AiOutlineClose size={25} />
              </button>
            </div>
          </div>
        </div>
        <div className="home-sizes-container">{this.renderHomePoster()}</div>
        <div>
          <div>
            <h1 className="trending-now-heading">Trending Now</h1>
            <TrendingNow />
          </div>
          <div>
            <h1 className="originals-heading">Originals</h1>
            <Originals />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default Home
