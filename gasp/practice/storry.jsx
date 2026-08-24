const { useRef, useEffect } = React; // Get hooks from React object

function App() {
  const container = useRef();

  useEffect(() => {
    // We use a context to handle the 'scope' manually in standard React
    let ctx = gsap.context(() => {
      
      gsap.to(".box", { 
        x: 100, 
        duration: 2, 
        backgroundColor: "#e5cece", 
        borderRadius: "90%",
        ease: "bounce" 
      });

    }, container); // This 'container' acts as the scope

    return () => ctx.revert(); // Cleanup: very important in React!
  }, []); 

  return (
    <div ref={container} className="p-10">
      <h1 className="box inline-block p-4 bg-blue-500 text-white font-bold">
        this will be the world
      </h1>
    </div>
  );
}

// Rendering Logic
const { createRoot } = ReactDOM;
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
    <>
        <h1 className="p-4 text-xl bg-gray-200">It is working finally</h1>
        <App />
    </>
);