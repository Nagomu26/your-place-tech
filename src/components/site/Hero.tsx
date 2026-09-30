import { Phone } from "lucide-react";
import { CONFIG } from "@/lib/config";
import { Reveal } from "./Reveal";

const STATS = [
  { valor: "4.9★", etiqueta: "Valoración de clientes" },
  { valor: "1 min", etiqueta: "Para pedir cita" },
  { valor: "7 días", etiqueta: "De antelación máxima" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-paper">
      <div className="laser-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true"></div>
      <div className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-accent/15 blur-3xl" aria-hidden="true"></div>
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-aqua/10 blur-3xl" aria-hidden="true"></div>
      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="mb-6 inline-flex items-center gap-3 border border-accent/30 bg-accent/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-accent">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent shadow-accentglow"></span>
                TU NEGOCIO · {CONFIG.zona}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="font-display text-6xl font-bold leading-[1.02] tracking-tight text-ink sm:text-7xl lg:text-8xl">
                Tu negocio,
                <br />
                <span className="text-accent">actualizado.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-stone sm:text-xl">
                Lo que ofreces, optimizado para que te encuentren.
                Pide tu cita en segundos: {CONFIG.nombre}, en {CONFIG.ciudad}.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#reserva"
                  className="btn-sheen inline-flex items-center justify-center rounded-none bg-accent px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-deep transition-colors hover:bg-ink hover:text-accent"
                >
                  Pedir cita online
                </a>
                <a
                  href={`tel:${CONFIG.telefonoEnlace}`}
                  className="inline-flex items-center justify-center rounded-none border border-line bg-transparent px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-ink transition-all hover:border-accent hover:text-accent"
                >
                  <Phone className="mr-2 h-4 w-4 text-accent" aria-hidden="true" />
                  Llamar · {CONFIG.telefono}
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-8">
                {STATS.map((stat) => (
                  <div key={stat.etiqueta}>
                    <p className="font-display text-3xl font-bold leading-none text-accent">{stat.valor}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.15em] text-stone">{stat.etiqueta}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={180} className="lg:col-span-5">
            <div className="relative">
              <div className="laser-grid absolute inset-0 opacity-80" aria-hidden="true"></div>
              <div className="absolute -inset-2 border border-accent/40" aria-hidden="true"></div>
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src="img/haircut-close.jpg"
                  alt="Foto del negocio"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-x-0 top-0 h-px bg-accent/60 shadow-accentglow" aria-hidden="true"></div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}