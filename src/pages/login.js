export default function Login(){
  return (
    <main style={{maxWidth:480,margin:"0 auto",padding:32,fontFamily:"Arial, sans-serif"}}>
      <h1 style={{fontSize:28,fontWeight:800}}>Log In</h1>
      <p style={{marginTop:8,color:"#444"}}>Member/partner portal (coming soon).</p>
      <form style={{display:"grid",gap:12,marginTop:16}}>
        <input placeholder="Email" type="email" style={{border:"1px solid #ddd",borderRadius:10,padding:12}}/>
        <input placeholder="Password" type="password" style={{border:"1px solid #ddd",borderRadius:10,padding:12}}/>
        <button style={{height:44,borderRadius:10,background:"#111",color:"#fff",fontWeight:700}}>Sign In</button>
      </form>
    </main>
  );
}
