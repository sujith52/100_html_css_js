function Forms(formsdata){
    const form = document.getElementsByClassName("form")
    console.log(form);
    
    return(
        <>
            <form className="form">
                <label htmlFor="">User Name :   <input type="text" defaultValue={"Hello password"}  className="inpt"/></label>
                <label htmlFor="">Password : <input type="password" defaultValue={"hello from passwords"} className="inpt" /></label>
                <label htmlFor="">Text description brro: <input type="text" name="descrion" defaultValue={"The Immortal description broo!!"} id="hibox" /></label>

            </form>
        </>
    )
}
window.Forms = Forms