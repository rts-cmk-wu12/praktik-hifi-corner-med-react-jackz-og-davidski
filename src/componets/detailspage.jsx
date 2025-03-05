import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";



export default function Detailspage() {
  const { id } = useParams(); 
  const [Agent, setAgent] = useState(null);
  const [email, setEmail] = useState(null);

  useEffect(() => {
    fetch(`db.json/details/${id}`) 
    .then((response) => response.json())
    .then((data) => {
      console.log("Agent data:", data.email);
      setEmail(data.email) 
      setAgent(data);
    })
      
      
      .catch((error) => console.error("Fejl ved hentning:", error));
      
  }, [id]);

  if (!Agent) {
    return <p>Indlæser ejendomsdetaljer...</p>;
  }

  return (
    <section className="coworker__section">
      <div key={Agent.id}>
        <img src={Agent.image?.url} alt={Agent.name} />
        <h2>{Agent.name}</h2>
        <p>{Agent.title}</p>
        <p>{email && email}</p>
      </div>
    </section>
  );
}

    