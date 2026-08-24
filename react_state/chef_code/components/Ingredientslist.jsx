function Ingredientslist (props){
    
    let ingrer = props.ingredents.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))
    
    return(
        <><section className="ingers">
                <h1>Ingredients on Hand:</h1>
                    <ol className="list">
                        {ingrer}
                    </ol>
                </section>
            <section className="resmain">
                
                <div className="listed">
                    <h2>Ready for Recipie?</h2>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <div className="listbutton">
                    <button onClick={props.getrecipe}>Get a recipe</button>
                </div>
            </section>
        </>
    )
}

window.Ingredientslist = Ingredientslist