const {createRoot} = ReactDOM
const {Header, App} = window
const main = document.getElementById('root')
const root = createRoot(main)
root.render(
    <>
        <Header />
        <hr />
        <App />
        <h1>Is it working or not man !</h1>

    </>
)