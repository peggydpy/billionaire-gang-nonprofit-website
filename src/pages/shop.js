export default function Shop() {
  const card = {border:"1px solid #eee", borderRadius:12, padding:16};
  const buy  = {display:"inline-block", marginTop:8, padding:"8px 12px",
                background:"#111", color:"#fff", borderRadius:8, textDecoration:"none"};

  return (
    <main style={{maxWidth: 960, margin:"0 auto", padding: 32, fontFamily:"Arial, sans-serif"}}>
      <h1 style={{fontSize:28, fontWeight:700}}>Shop</h1>
      <p style={{marginTop:8, color:"#555"}}>H3O+ hydration & Le Yoga fitness sets.</p>

      <h2 style={{marginTop:24, fontSize:20, fontWeight:700}}>H3O+ Hydration</h2>
      <div style={{display:"grid", gap:12, gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", marginTop:12}}>
        <div style={card}><div style={{fontWeight:600}}>H3O+ — 16oz (Mint)</div><div style={{fontSize:12, color:"#777"}}>$3.00</div><a href="#" style={buy}>Buy</a></div>
        <div style={card}><div style={{fontWeight:600}}>H3O+ — 16oz (Berry)</div><div style={{fontSize:12, color:"#777"}}>$3.00</div><a href="#" style={buy}>Buy</a></div>
      </div>

      <h2 style={{marginTop:24, fontSize:20, fontWeight:700}}>Le Yoga Fitness Sets</h2>
      <div style={{display:"grid", gap:12, gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", marginTop:12}}>
        <div style={card}><div style={{fontWeight:600}}>Le Yoga — Sand (S-XL)</div><div style={{fontSize:12, color:"#777"}}>$59.00</div><a href="#" style={buy}>Buy</a></div>
        <div style={card}><div style={{fontWeight:600}}>Le Yoga — Onyx (S-XL)</div><div style={{fontSize:12, color:"#777"}}>$59.00</div><a href="#" style={buy}>Buy</a></div>
      </div>
    </main>
  );
}
