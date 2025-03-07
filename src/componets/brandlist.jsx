import React from 'react';
import "../style/brandlist.scss";
import BrandNav from './brand-nav';


const brands = [
    { src: "brandlist_logo/arcam_logo.svg", alt: "arcam_logo" },
    { src: "brandlist_logo/audiolab.svg", alt: "audiolab_logo" },
    { src: "brandlist_logo/bowswes&wilkins.svg", alt: "bowers" },
    { src: "brandlist_logo/chord.svg", alt: "chord", className: "logo_chord" },
    { src: "brandlist_logo/devialet.svg", alt: "devialet" },
    { src: "brandlist_logo/harbeth.svg", alt: "herbeth" },
    { src: "brandlist_logo/kef.svg", alt: "kaf" },
    { src: "brandlist_logo/linn.svg", alt: "linn" },
    { src: "brandlist_logo/marantz.svg", alt: "marantz" },
    { src: "brandlist_logo/naim.svg", alt: "naim" },
    { src: "brandlist_logo/oppo.svg", alt: "oppo" },
    { src: "brandlist_logo/primaluna.svg", alt: "primaluna" },
    { src: "brandlist_logo/project.svg", alt: "project" },
    { src: "brandlist_logo/quad.svg", alt: "quad" },
    { src: "brandlist_logo/rotel.svg", alt: "rotel" },
    { src: "brandlist_logo/sennheiser.svg", alt: "sennheiser" },
    { src: "brandlist_logo/spendor.svg", alt: "spendor" },
    { src: "brandlist_logo/technics.svg", alt: "technics" },
    { src: "brandlist_logo/yamaha.svg", alt: "yamaha" },
];

const BrandList = () => {
    return (
        <div className="background">
            <div className="backdrop">

                <BrandNav/>
                <main id="main" className="main">
                    <div className="main_wrapper">
                        <div className="main_top">
                            <h1 className="main_top_header">TOP BRANDS</h1>
                            <img src="hifi_logo.svg" alt="hifi_logo" className="main_top_image--hifi_logo" />
                        </div>
                        <div className="main_bottom">
                            <div>
                                <div className="main_bottom_container-white">
                                    <div className="main_bottom_container-gradiant">
                                        <div className="main_bottom_container-width">
                                            <p>Here are just a few of the brands we stock:</p>
                                            {brands.map((brand, index) => (
                                                <img
                                                    key={index}
                                                    src={brand.src}
                                                    alt={brand.alt}
                                                    className={`logo ${brand.className || ''}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="main_bottom_container-photo">
                                        <h2>Brands</h2>
                                        <p>
                                            As an it-dependent retailer of home audio and visual, we are able to select the very best
                                            brands and manufacturers from across the world.<br /><br />
                                            Not only do we have the best-known brands such as B&W, Devialet, KEF, Naim, and Linn; we also
                                            stock and are well acquainted with smaller companies like Michell, Neat
                                            Acoustics, Harbeth, SMF, Trichord Research, and Primaluna to name a few.<br /><br />
                                            With over a hundred brands, we can happily say that if a brand meets our high standards for
                                            sound reproduction, then you can be assured to find it at Hi-Fi Corner.
                                        </p>
                                        <a href="shop-frontpage.html">VISIT OUR SHOP TO FIND MORE BRANDS</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default BrandList;



