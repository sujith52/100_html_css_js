function Placeholder(props) {
    const htmlContent = window.marked.parse(props.recipe);

    return (
        <section 
            className="suggested-recipe-container"
            dangerouslySetInnerHTML={{ __html: htmlContent }} 
        />
    );
}

window.Placeholder = Placeholder;