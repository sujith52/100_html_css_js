const { createRoot } = ReactDOM;
const { useEffect, useRef, useState } = React;

// ─── 1. gsap.to() ──────────────────────────────────────────────────────────────
function Demo1() {
  const box = useRef(null);
  const run = () => {
    gsap.to(box.current, { x: 200, rotation: 360, duration: 1, ease: "power2.out" });
  };
  const reset = () => gsap.set(box.current, { x: 0, rotation: 0 });
  return (
    <DemoCard
      title="1. gsap.to()"
      desc="Animates FROM current state TO the values you give."
      code={`gsap.to(el, { x: 200, rotation: 360, duration: 1 })`}
      onRun={run} onReset={reset}
    >
      <div ref={box} className="box bg-blue-500" />
    </DemoCard>
  );
}

// ─── 2. gsap.from() ────────────────────────────────────────────────────────────
function Demo2() {
  const box = useRef(null);
  const run = () => {
    gsap.from(box.current, { x: -200, opacity: 0, duration: 1, ease: "bounce.out" });
  };
  const reset = () => gsap.set(box.current, { x: 0, opacity: 1 });
  return (
    <DemoCard
      title="2. gsap.from()"
      desc="Animates FROM the values you give TO the current state."
      code={`gsap.from(el, { x: -200, opacity: 0, duration: 1, ease: "bounce.out" })`}
      onRun={run} onReset={reset}
    >
      <div ref={box} className="box bg-green-500" />
    </DemoCard>
  );
}

// ─── 3. gsap.fromTo() ──────────────────────────────────────────────────────────
function Demo3() {
  const box = useRef(null);
  const run = () => {
    gsap.fromTo(box.current,
      { x: -150, scale: 0.3, opacity: 0 },
      { x: 150, scale: 1.2, opacity: 1, duration: 1.2, ease: "elastic.out(1, 0.5)" }
    );
  };
  const reset = () => gsap.set(box.current, { x: 0, scale: 1, opacity: 1 });
  return (
    <DemoCard
      title="3. gsap.fromTo()"
      desc="You control BOTH start and end values."
      code={`gsap.fromTo(el, { x: -150, scale: 0.3 }, { x: 150, scale: 1.2, duration: 1.2 })`}
      onRun={run} onReset={reset}
    >
      <div ref={box} className="box bg-purple-500" />
    </DemoCard>
  );
}

// ─── 4. Timeline ───────────────────────────────────────────────────────────────
function Demo4() {
  const a = useRef(null), b = useRef(null), c = useRef(null);
  const run = () => {
    const tl = gsap.timeline();
    tl.to(a.current, { x: 160, duration: 0.5 })
      .to(b.current, { y: -40, backgroundColor: "#f97316", duration: 0.4 })
      .to(c.current, { rotation: 180, scale: 1.4, duration: 0.5 })
      .to([a.current, b.current, c.current], { opacity: 0.3, duration: 0.4 });
  };
  const reset = () => {
    gsap.set([a.current, b.current, c.current], { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1, backgroundColor: "#ec4899" });
  };
  return (
    <DemoCard
      title="4. gsap.timeline()"
      desc="Chain animations in sequence. Each plays after the previous."
      code={`const tl = gsap.timeline();\ntl.to(a, { x: 160 }).to(b, { y: -40 }).to(c, { rotation: 180 })`}
      onRun={run} onReset={reset}
    >
      <div className="flex gap-4">
        <div ref={a} className="box bg-pink-500" />
        <div ref={b} className="box bg-pink-500" />
        <div ref={c} className="box bg-pink-500" />
      </div>
    </DemoCard>
  );
}

// ─── 5. Stagger ────────────────────────────────────────────────────────────────
function Demo5() {
  const container = useRef(null);
  const run = () => {
    const items = container.current.querySelectorAll(".stagger-box");
    gsap.from(items, {
      y: 60, opacity: 0, scale: 0.5, duration: 0.6,
      stagger: 0.12, ease: "back.out(1.7)"
    });
  };
  const reset = () => {
    const items = container.current.querySelectorAll(".stagger-box");
    gsap.set(items, { y: 0, opacity: 1, scale: 1 });
  };
  const colors = ["bg-red-400","bg-orange-400","bg-yellow-400","bg-green-400","bg-blue-400","bg-violet-400"];
  return (
    <DemoCard
      title="5. stagger"
      desc="Animate multiple elements with a time offset between each."
      code={`gsap.from(items, { y: 60, opacity: 0, stagger: 0.12 })`}
      onRun={run} onReset={reset}
    >
      <div ref={container} className="flex gap-3">
        {colors.map((c, i) => <div key={i} className={`stagger-box box ${c}`} />)}
      </div>
    </DemoCard>
  );
}

// ─── 6. Eases ──────────────────────────────────────────────────────────────────
function Demo6() {
  const eases = ["linear","power2.out","bounce.out","elastic.out(1,0.4)","back.out(2)","circ.out"];
  const refs = eases.map(() => useRef(null));
  const run = () => {
    refs.forEach((ref, i) => {
      gsap.fromTo(ref.current, { x: 0 }, { x: 180, duration: 1.5, ease: eases[i], delay: i * 0.08 });
    });
  };
  const reset = () => refs.forEach(r => gsap.set(r.current, { x: 0 }));
  const dotColors = ["bg-red-400","bg-orange-400","bg-yellow-400","bg-green-400","bg-blue-400","bg-violet-400"];
  return (
    <DemoCard
      title="6. Eases"
      desc="Control the feel of motion. Same duration, totally different personality."
      code={`gsap.to(el, { x: 180, ease: "bounce.out" })`}
      onRun={run} onReset={reset}
    >
      <div className="w-full space-y-2">
        {eases.map((e, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="ease-label">{e}</span>
            <div className="ease-track">
              <div ref={refs[i]} className={`ease-dot ${dotColors[i]}`} />
            </div>
          </div>
        ))}
      </div>
    </DemoCard>
  );
}

// ─── 7. Repeat & Yoyo ──────────────────────────────────────────────────────────
function Demo7() {
  const box = useRef(null);
  const tween = useRef(null);
  const run = () => {
    tween.current = gsap.to(box.current, {
      x: 180, rotation: 360, duration: 0.8,
      repeat: -1, yoyo: true, ease: "power1.inOut"
    });
  };
  const reset = () => {
    tween.current?.kill();
    gsap.set(box.current, { x: 0, rotation: 0 });
  };
  return (
    <DemoCard
      title="7. repeat & yoyo"
      desc="`repeat: -1` loops forever. `yoyo: true` reverses on each repeat."
      code={`gsap.to(el, { x: 180, repeat: -1, yoyo: true, duration: 0.8 })`}
      onRun={run} onReset={reset}
    >
      <div ref={box} className="box bg-teal-500" />
    </DemoCard>
  );
}

// ─── 8. Callbacks ──────────────────────────────────────────────────────────────
function Demo8() {
  const box = useRef(null);
  const [log, setLog] = useState([]);
  const addLog = (msg) => setLog(prev => [...prev.slice(-3), msg]);
  const run = () => {
    setLog([]);
    gsap.to(box.current, {
      x: 180, duration: 1.2, ease: "power2.inOut",
      onStart: () => addLog("▶ onStart fired"),
      onUpdate: () => addLog("⟳ onUpdate (animating…)"),
      onComplete: () => addLog("✓ onComplete fired"),
    });
  };
  const reset = () => { gsap.set(box.current, { x: 0 }); setLog([]); };
  return (
    <DemoCard
      title="8. Callbacks"
      desc="Run code at key moments: onStart, onUpdate, onComplete."
      code={`gsap.to(el, { x: 180, onStart: fn, onUpdate: fn, onComplete: fn })`}
      onRun={run} onReset={reset}
    >
      <div ref={box} className="box bg-amber-500 mb-3" />
      <div className="log-box">
        {log.length === 0 ? <span className="text-gray-400">Logs will appear here…</span> : log.map((l,i) => <div key={i}>{l}</div>)}
      </div>
    </DemoCard>
  );
}

// ─── Shared UI ─────────────────────────────────────────────────────────────────
function DemoCard({ title, desc, code, onRun, onReset, children }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p className="desc">{desc}</p>
      <pre className="code">{code}</pre>
      <div className="stage">{children}</div>
      <div className="btn-row">
        <button className="btn-run" onClick={onRun}>▶ Run</button>
        <button className="btn-reset" onClick={onReset}>↺ Reset</button>
      </div>
    </div>
  );
}

// ─── App ───────────────────────────────────────────────────────────────────────
function App() {
  return (
    <>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0f0f13; font-family: 'Segoe UI', system-ui, sans-serif; color: #e2e8f0; }
        .hero { text-align: center; padding: 48px 20px 24px; }
        .hero h1 { font-size: 2.8rem; font-weight: 800; letter-spacing: -1px;
          background: linear-gradient(135deg, #a78bfa, #38bdf8, #34d399);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .hero p { color: #94a3b8; margin-top: 10px; font-size: 1.05rem; }
        .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
          gap: 24px; padding: 24px 32px 60px; max-width: 1300px; margin: 0 auto; }
        .card { background: #1a1a24; border: 1px solid #2a2a3a; border-radius: 16px; padding: 24px; display: flex; flex-direction: column; gap: 12px; }
        .card h2 { font-size: 1.1rem; font-weight: 700; color: #a78bfa; }
        .desc { font-size: 0.875rem; color: #94a3b8; line-height: 1.5; }
        .code { background: #0d0d14; border: 1px solid #2a2a3a; border-radius: 8px;
          padding: 10px 14px; font-size: 0.78rem; color: #7dd3fc; white-space: pre-wrap; font-family: 'Cascadia Code', 'Fira Code', monospace; }
        .stage { background: #111118; border-radius: 10px; padding: 24px 20px; min-height: 80px;
          display: flex; align-items: center; overflow: hidden; }
        .box { width: 44px; height: 44px; border-radius: 8px; flex-shrink: 0; }
        .btn-row { display: flex; gap: 10px; }
        .btn-run  { background: #7c3aed; color: #fff; border: none; border-radius: 8px; padding: 8px 20px; cursor: pointer; font-weight: 600; font-size: 0.875rem; transition: background .15s; }
        .btn-run:hover { background: #6d28d9; }
        .btn-reset { background: #1e293b; color: #94a3b8; border: 1px solid #334155; border-radius: 8px; padding: 8px 20px; cursor: pointer; font-size: 0.875rem; transition: background .15s; }
        .btn-reset:hover { background: #273548; }
        .ease-label { font-size: 0.72rem; color: #64748b; width: 160px; flex-shrink: 0; font-family: monospace; }
        .ease-track { flex: 1; height: 18px; background: #0d0d14; border-radius: 9px; position: relative; overflow: hidden; }
        .ease-dot { width: 18px; height: 18px; border-radius: 50%; position: absolute; left: 0; top: 0; }
        .log-box { background: #0d0d14; border-radius: 8px; padding: 10px 14px; min-height: 52px;
          font-size: 0.78rem; color: #4ade80; font-family: monospace; line-height: 1.7; }
      `}</style>

      <div className="hero">
        <h1>GSAP Playground 🟢</h1>
        <p>Click <strong>▶ Run</strong> on each card to see the animation — then read the code above it.</p>
      </div>

      <div className="grid">
        <Demo1 />
        <Demo2 />
        <Demo3 />
        <Demo4 />
        <Demo5 />
        <Demo6 />
        <Demo7 />
        <Demo8 />
      </div>
    </>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);