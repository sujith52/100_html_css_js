function App(){
    const DataMapp = datay.map((data)=> {
        return (
        <Entry
            key = {data.id}
            imgsrc = {data.img.src}
            alt = {data.img.alt}
            title= {data.title}
            country = {data.country}
            link = {data.googleMapsLink}
            dates = {data.dates}
            desc = {data.text}
        />
        )
       
    })
     return(
        <main>
          {DataMapp}
        </main>
    )
}

window.App = App
