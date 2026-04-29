import EmailLink from "@/components/EmailLink";
import { FaPhone } from "react-icons/fa6";
import Map from "@/components/Map";


export default function ContactPage() {
    const message = "No dude en contactarnos si tiene alguna pregunta.";
    const containerStyle = {
        padding: '20px',
        width: '100%',
        height: '400px'
};

  return (
    <div>
      <h1 className="text-3xl font-semibold leading-20 tracking-tight text-black dark:text-zinc-50">Cómo contactarnos</h1>
      <p className="text-3xl font-semibold leading-20 tracking-tight text-black dark:text-zinc-50">{message}</p>
    
        <div >
            <main style={{ padding: "2rem" }}>
                <h1 className="text-3xl font-semibold leading-20 tracking-tight text-black dark:text-zinc-50">Envíanos un correo electrónico</h1>
                <EmailLink email="zuly@eagchurch.life" />
                <h1 className="text-3xl font-semibold leading-20 tracking-tight text-black dark:text-zinc-50">Llámanos</h1>
                <p><FaPhone /> (919) 730-2729</p>
                <h1 className="text-3xl font-semibold leading-20 tracking-tight text-black dark:text-zinc-50">Visítanos</h1>
                <p>821 Tucker st Burlington, NC 27215
                  <br />
                  desde la calle Tucker, entra por las puertas blancas en el lado derecho del edificio, el estacionamiento está al lado del edificio.
                </p>
                <div style={containerStyle}><Map /></div>
            </main>
        </div>
    </div>
  );
}
