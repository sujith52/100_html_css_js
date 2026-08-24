function Entry({imgsrc, alt, title, country, link, dates, desc}){
    return(
        <section className="entry">
            <div className="img-div">
            <img className="main-img" src= {imgsrc} alt={alt} srcset="" />
            </div>
            <div className="main">
            <div className="mark">
            <img src="compo/marker.png"  alt="marker bro" />
            <p>{country}</p>
            <a href={link}>View on Google Maps</a>
            </div>
            <h2>{title}</h2>
            <p className="date">{dates}</p>
            <p className="desc">{desc}</p>
            </div>
        </section>
    )
}

window.Entry = Entry