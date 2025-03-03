

import SmallNavBar from "../componets/smallnavbar";
import NavBar from "../componets/navbar";




function Test() {


    return (

        <>
            <header>
                <img src="public/hifi_logo.svg" alt="Overlay Image" className="overlay-image" />
                <SmallNavBar />
                <NavBar />
            </header>
            <main>
                <div className="">
                    <img src="public/linje.jpg" alt="" />
                </div>
            </main>

        </>
    )
}

export default Test
