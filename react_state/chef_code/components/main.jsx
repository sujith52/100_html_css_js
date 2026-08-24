
const {Ingredientslist, getRecipeFromGemini, Placeholder} = window
function Main(){
    const [ingredents, setingredents] = React.useState([])
    let [recipe, setrecipe] = React.useState("")

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get("ingrent"); 
        
        if (newIngredient) {
            setingredents(prev => [...prev, newIngredient]);
            event.currentTarget.reset();
        }
    }
    
   async function getrecipe(){
        const mardowntext =  await  getRecipeFromGemini(ingredents)
        setrecipe(mardowntext);
        
    }
    
    
    return(
        <main>
            <form onSubmit={handleSubmit} className="adding">
                <input type="text"
                        placeholder="e.g Chicken, Onion"
                        name="ingrent"
                    />
                <button >+ Add Ingredent</button>
            </form>
            
            {ingredents.length > 0 &&  <Ingredientslist
             ingredents={ingredents} 
             getrecipe={getrecipe}
             /> }
            {recipe && <Placeholder recipe ={recipe} /> }
            
        </main>
        
    )
}




window.Main = Main