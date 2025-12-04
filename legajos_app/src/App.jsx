import { useState } from "react";

export default function App() {
  const [proyectos] = useState([
    { id: 1, nombre: "Proyecto Demo", contratistas: [] }
  ]);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Plataforma de Legajos Técnicos</h1>
      <ul>
        {proyectos.map(p => (
          <li key={p.id}>{p.nombre}</li>
        ))}
      </ul>
    </div>
  );
}
