import Footer from "../componets/footer"
import Gallery from "../componets/gallery"
import NavBar from "../componets/navbar"
import ShopAround from "../componets/shop-around"
import SmallNavBar from "../componets/smallnavbar"
import Medier from "../componets/sociale-medier"







function App() {


  return (
    <>

      <header>
        <img src="hifi_logo.svg" alt="Overlay Image" className="overlay-image" />
        <SmallNavBar />
        <NavBar />
      </header>

      <div className="wave-img">
        <img src="linje.jpg" alt="line" />
        <p className="overlay-text">OUR EDINBURGH SHOWROOM HAS NOW MOVED TO STUNNING NEW PREMISES ON JOPPA ROAD</p>
      </div>

      <Gallery />
      <Medier />
      <ShopAround />
      <Footer />
    </>
  )
}

export default App 