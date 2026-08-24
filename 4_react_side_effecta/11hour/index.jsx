const {createRoot} = ReactDOM 
const {App} = window
const mainroot = document.getElementById('root')
const root = createRoot(mainroot)
root.render(
    <>
       <App />
    </>
)