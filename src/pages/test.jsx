

import SmallNavBar from "../componets/smallnavbar";
import NavBar from "../componets/navbar";
import "../style/navbar.scss";




function Test() {


    return (

        <>
            <header>
                <img src="public/hifi_logo.svg" alt="Overlay Image" className="overlay-image" />
                <SmallNavBar />
                <NavBar />
            </header>
            <main>
                <div className="wave-img">
                    <img src="public/linje.jpg" alt="" />
                    <p className="overlay-text">OUR EDINBURGH SHOWROOM HAS NOW MOVED TO STUNNING NEW PREMISES ON JOPPA ROAD</p>
                </div>
            </main>


        </>
    )
}

export default Test
