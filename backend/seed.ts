import { drizzle } from "drizzle-orm/node-postgres";
import { frases } from "./src/db/schema.ts";
import { Pool } from "pg";
import dotenv from "dotenv";

// Carga el .env desde la carpeta raíz
dotenv.config({ path: "../.env" });

// Conexión a PostgreSQL usando variables de entorno
const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
});

const db = drizzle(pool);

async function seed() {
  console.log("Iniciando seed...");

  // Verifica que la contraseña se esté leyendo correctamente
  console.log("DB_PASSWORD:", process.env.DB_PASSWORD);

  try {
    // Limpia la tabla antes de insertar
    await db.delete(frases);
    console.log("Tabla frases limpiada.");

    // 90 FRASES → 30 por categoría
    const data = [
      // ---------------- MAGIC MESSAGE ----------------
      { texto: "✨ Hoy el viento sopla a tu favor. Da el primer paso, lo demás se alineará.", categoria: "magic_message" },
      { texto: "🌟 A veces la magia no se ve… pero siempre se siente. Confía en ti.", categoria: "magic_message" },
      { texto: "🔮 Un pequeño movimiento hoy creará un gran cambio mañana.", categoria: "magic_message" },
      { texto: "✨ La chispa que buscas ya está en ti, solo necesita atención.", categoria: "magic_message" },
      { texto: "🌙 Respira hondo: algo bueno está a punto de comenzar.", categoria: "magic_message" },
      { texto: "✨ Tu energía crea caminos donde antes había dudas.", categoria: "magic_message" },
      { texto: "🪄 Hoy tu luz brillará más de lo que imaginas.", categoria: "magic_message" },
      { texto: "🌟 No temas avanzar lento… teme quedarte quieta.", categoria: "magic_message" },
      { texto: "✨ La inspiración llegará cuando te atrevas a moverte.", categoria: "magic_message" },
      { texto: "🌙 Una versión más fuerte de ti está naciendo.", categoria: "magic_message" },
      { texto: "🔮 Tu esfuerzo de hoy será tu magia del mañana.", categoria: "magic_message" },
      { texto: "✨ La oportunidad que buscas también te está buscando.", categoria: "magic_message" },
      { texto: "🌟 Sé paciente contigo misma: estás creciendo.", categoria: "magic_message" },
      { texto: "✨ Hoy atraerás exactamente lo que necesitas.", categoria: "magic_message" },
      { texto: "🪄 Tu constancia será tu mejor hechizo.", categoria: "magic_message" },
      { texto: "🌙 Lo que hoy parece pequeño será grande mañana.", categoria: "magic_message" },
      { texto: "✨ Hoy te acompaña una energía especial: úsala bien.", categoria: "magic_message" },
      { texto: "🌟 Tu valor abre puertas que la duda cierra.", categoria: "magic_message" },
      { texto: "🔮 Hay un brillo en ti que nadie más posee.", categoria: "magic_message" },
      { texto: "✨ Hoy te sentirás más capaz de lo que esperabas.", categoria: "magic_message" },
      { texto: "🌙 Confía en el proceso incluso si aún no ves resultados.", categoria: "magic_message" },
      { texto: "✨ Cada paso consciente suma, aunque no lo notes.", categoria: "magic_message" },
      { texto: "🌟 Algo pequeño que harás hoy te acercará a un gran logro.", categoria: "magic_message" },
      { texto: "🔮 Tu intuición será tu mejor guía hoy.", categoria: "magic_message" },
      { texto: "🪄 Ten fe: lo que es para ti, ya viene en camino.", categoria: "magic_message" },
      { texto: "✨ La magia ocurre cuando actúas, no cuando esperas.", categoria: "magic_message" },
      { texto: "🌙 Hoy tu mente estará más clara que de costumbre.", categoria: "magic_message" },
      { texto: "🌟 Eres más fuerte de lo que esta semana te hizo sentir.", categoria: "magic_message" },
      { texto: "✨ No subestimes los avances invisibles.", categoria: "magic_message" },
      { texto: "🪄 Hoy atraerás claridad, calma y dirección.", categoria: "magic_message" },

      // ---------------- LUCKY CHALLENGE ----------------
      { texto: "🍀 Reto de hoy: haz una sola cosa que has estado evitando 3 días.", categoria: "lucky_challenge" },
      { texto: "🎯 Aléjate 10 minutos del teléfono y respira. Te sorprenderá el efecto.", categoria: "lucky_challenge" },
      { texto: "🍀 Camina 5 minutos mirando el cielo, no la pantalla.", categoria: "lucky_challenge" },
      { texto: "🔥 Reto: escribe una idea que te entusiasme y dale 10 minutos hoy.", categoria: "lucky_challenge" },
      { texto: "💧 Toma un vaso de agua… ahora mismo. Sí, ahora.", categoria: "lucky_challenge" },
      { texto: "🍀 Regala una sonrisa a alguien hoy, aunque sea breve.", categoria: "lucky_challenge" },
      { texto: "🔆 Hoy di algo amable a alguien sin esperar respuesta.", categoria: "lucky_challenge" },
      { texto: "🎯 Ordena solo un pequeño espacio: tu mesa, una carpeta, algo simple.", categoria: "lucky_challenge" },
      { texto: "🍀 Reto: escribe 3 cosas que hiciste bien esta semana.", categoria: "lucky_challenge" },
      { texto: "🔥 Haz una tarea en silencio, sin música ni celular. Enfócate.", categoria: "lucky_challenge" },
      { texto: "🍀 Camina 2 minutos más de lo normal hoy.", categoria: "lucky_challenge" },
      { texto: "🔆 Dedica 5 minutos a algo que amas, sin culpa.", categoria: "lucky_challenge" },
      { texto: "🎯 Hoy intenta no quejarte por 1 hora.", categoria: "lucky_challenge" },
      { texto: "🍀 Un mini reto: apaga notificaciones por 20 minutos.", categoria: "lucky_challenge" },
      { texto: "🔥 Di en voz alta: “Puedo con esto”. Te subirá la energía.", categoria: "lucky_challenge" },
      { texto: "🔆 Elige una comida y disfrútala sin distracciones.", categoria: "lucky_challenge" },
      { texto: "🎯 Reto express: respira profundamente 5 veces seguidas.", categoria: "lucky_challenge" },
      { texto: "🍀 Toma nota de un pensamiento negativo y cámbialo por uno útil.", categoria: "lucky_challenge" },
      { texto: "🔥 Acomoda algo pequeño que te molesta hace días.", categoria: "lucky_challenge" },
      { texto: "🎯 Envía un mensaje amable a alguien que aprecias.", categoria: "lucky_challenge" },
      { texto: "🔆 No revises redes por 30 minutos después de despertar.", categoria: "lucky_challenge" },
      { texto: "🍀 Hoy sal al sol al menos 3 minutos.", categoria: "lucky_challenge" },
      { texto: "🔥 Haz una lista de prioridades con solo 3 cosas.", categoria: "lucky_challenge" },
      { texto: "🎯 Reto: ponte de pie y estírate 20 segundos.", categoria: "lucky_challenge" },
      { texto: "🍀 Escucha tu canción favorita completa sin saltarla.", categoria: "lucky_challenge" },
      { texto: "🔆 Apoya a alguien hoy, aunque sea con un mensaje.", categoria: "lucky_challenge" },
      { texto: "🔥 Reto secreto: haz algo pequeño que te acerque a tu meta personal.", categoria: "lucky_challenge" },
      { texto: "🎯 Hoy solo termina lo que ya comenzaste.", categoria: "lucky_challenge" },
      { texto: "🍀 Regálate un descanso consciente de 3 minutos.", categoria: "lucky_challenge" },
      { texto: "🔥 Pequeño reto: tu tarea más pequeña, hazla ya mismo.", categoria: "lucky_challenge" },

      // ---------------- NAUGHTY ELF ----------------
      { texto: "😏 Recuerda: el café no te va a juzgar… pero yo sí. ¡Muévete!", categoria: "naughty_elf" },
      { texto: "🙄 No te rindas… a menos que sea la dieta.", categoria: "naughty_elf" },
      { texto: "😴 Hoy iba a motivarte… pero me dio pereza. Igual tú puedes.", categoria: "naughty_elf" },
      { texto: "😈 Si sigues posponiendo, voy a empezar a dejarte notitas pasivo-agresivas.", categoria: "naughty_elf" },
      { texto: "💅 Si fueras tan rápida trabajando como procrastinando, ya serías millonaria.", categoria: "naughty_elf" },
      { texto: "😏 Te prometo magia… si tú prometes no dormirte en el intento.", categoria: "naughty_elf" },
      { texto: "🙃 ¿Motivación? No sé, pero desorden sí tienes. Arréglalo.", categoria: "naughty_elf" },
      { texto: "😈 Tu cama te quiere mucho… demasiado. Escápate un rato.", categoria: "naughty_elf" },
      { texto: "😒 No eres floja… eres 'selectivamente eficiente'. Selecciona algo ya.", categoria: "naughty_elf" },
      { texto: "😏 Tu yo del futuro te está mirando… y está juzgando fuerte.", categoria: "naughty_elf" },
      { texto: "💅 Dale, eres capaz. O al menos finge que lo eres, funciona igual.", categoria: "naughty_elf" },
      { texto: "😈 Hoy intenta no quejarte… o al menos quejarte con estilo.", categoria: "naughty_elf" },
      { texto: "🙄 Si esperas a que llegue la motivación… te vas a jubilar esperando.", categoria: "naughty_elf" },
      { texto: "😏 El universo te apoya, pero no va a hacer la tarea por ti.", categoria: "naughty_elf" },
      { texto: "💅 Hoy te toca brillar… o al menos no arruinarlo.", categoria: "naughty_elf" },
      { texto: "😈 Si quieres resultados nuevos… prueba haciendo algo, lo que sea.", categoria: "naughty_elf" },
      { texto: "🙃 Dato curioso: ya es hora de hacer eso que llevas evitando.", categoria: "naughty_elf" },
      { texto: "😴 Sí, estás cansada. Sí, igual hay que hacerlo.", categoria: "naughty_elf" },
      { texto: "😏 Yo creo en ti… pero también creo que te distraes demasiado.", categoria: "naughty_elf" },
      { texto: "😈 No busques excusas. Ya te conozco todas.", categoria: "naughty_elf" },
      { texto: "💅 Hoy será productivo… si tú quieres. Y si no, pues no.", categoria: "naughty_elf" },
      { texto: "🙄 ¿Motivación? Aquí solo hay sarcasmo. Pero igual avanza.", categoria: "naughty_elf" },
      { texto: "😈 Tu potencial es enorme… tus ganas no tanto. Equilíbralo.", categoria: "naughty_elf" },
      { texto: "😒 Si te quejas mientras trabajas, igual cuenta como trabajar.", categoria: "naughty_elf" },
      { texto: "😏 Si empiezas ahora, luego puedes descansar sin culpa. Ja, mentira, igual tendrás culpa.", categoria: "naughty_elf" },
      { texto: "🙃 Hoy no te voy a molestar tanto… depende de ti arruinarlo.", categoria: "naughty_elf" },
      { texto: "😈 Tu tarea no se hará sola… créeme, ya lo comprobé.", categoria: "naughty_elf" },
      { texto: "💅 No eres un desastre… solo eres edición limitada.", categoria: "naughty_elf" },
      { texto: "😏 Haz algo hoy que tu yo del futuro diga: 'Ah, mira, no todo está perdido'.", categoria: "naughty_elf" },
    ];

    // Insertar todas las frases
    await db.insert(frases).values(data);

    console.log("Seed completo: frases insertadas.");
    process.exit(0);
  } catch (err) {
    console.error("Error ejecutando seed:", err);
    process.exit(1);
  }
}

// Ejecutar seed
seed();

