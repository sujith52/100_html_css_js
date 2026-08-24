const {createRoot} = ReactDOM 
const {App,Header, Main} = window
const docroot = document.getElementById('root')
const root = createRoot(docroot)
root.render(
    <>
        
        <App />
    </>
)