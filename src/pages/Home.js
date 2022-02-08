import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Home() {
  let params = useParams();
  return (
    <main style={{ padding: "1rem 0", color: "green" }}>
      <h2>Home {params.homeNumber}</h2>
      <Outlet />
    </main>
  );
}
