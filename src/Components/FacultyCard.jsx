// src/Components/FacultyCard.jsx
import React from "react"
export default function FacultyCard({ f }){
  return (
    <div className="card" style={{textAlign:"center"}}>
      <img className="faculty-photo" src={f.photo} alt={f.name} />
      <h4 style={{color:"var(--primary)", margin:"8px 0"}}>{f.name}</h4>
      <div style={{color:"var(--muted)"}}>{f.department}</div>
    </div>
  )
}
