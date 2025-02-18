import { useParams } from "react-router-dom";

export default function Details() {
  const { city } = useParams();

  return (
    <div>
      <h1>Details for {city}</h1>
      <p>Details</p>
    </div>
  );
}