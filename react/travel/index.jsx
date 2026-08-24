const {createRoot} = ReactDOM
const {App} = window
const rootelement = document.getElementById('root')
const root = createRoot(rootelement)
root.render(
    <>
        <Header />
        <App />
    </>
)
