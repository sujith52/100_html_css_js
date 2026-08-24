const {createRoot} = ReactDOM 
const mainroot = document.getElementById('root')
const root = createRoot(mainroot)
root.render(
    <>
        <h1>Is it working man!</h1>
        <App />
    </>
)