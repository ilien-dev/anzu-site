// Every visible text of the site, in English and Spanish. Facts come from the app's
// PRODUCT.md and README; nothing here is a claim the app does not back.

export type Lang = "en" | "es";

export interface Step {
  title: string;
  body: string;
}

export interface Strings {
  lang: Lang;
  htmlLang: string;
  title: string;
  description: string;
  skip: string;
  nav: { how: string; responsible: string; faq: string; github: string; label: string };
  langSwitch: { label: string; other: string; otherHref: string; current: string };
  download: string;
  downloadLong: string;
  hero: { titleA: string; titleB: string; lead: string; secondary: string; facts: string[] };
  demo: {
    label: string;
    windowTitle: string;
    kindle: string;
    downloading: string;
    contentFolder: string;
    output: string;
    play: string;
    loading: string;
    failed: string;
    note: string;
    fullSize: string;
    closeFull: string;
  };
  what: {
    title: string;
    body: string;
    rows: { task: string; who: string; link?: string }[];
    whoLabel: string;
    taskLabel: string;
  };
  how: { title: string; lead: string; track: [string, string, string]; steps: Step[] };
  where: {
    title: string;
    lead: string;
    path: string[];
    file: string;
    facts: Step[];
  };
  name: { title: string; body: string; mark: string };
  responsible: {
    title: string;
    lead: string;
    points: Step[];
    closing: string;
    whyTitle: string;
    whyBefore: string;
    whyLink: string;
    whyAfter: string;
  };
  faq: { title: string; items: { q: string; a: string }[] };
  cta: { title: string; body: string; release: string };
  footer: { legal: string; satsuoni: string; trademark: string; license: string; source: string };
}

const RELEASES = "https://github.com/ilien-dev/anzu/releases/latest";
export const LINKS = {
  releases: RELEASES,
  repo: "https://github.com/ilien-dev/anzu",
  satsuoni: "https://github.com/Satsuoni/DeDRM_tools",
  ogmios: "https://github.com/ilien-dev/ogmios",
};

export const en: Strings = {
  lang: "en",
  htmlLang: "en",
  title: "Anzu: convert Kindle books to EPUB on Windows",
  description:
    "Free Windows app that converts the books you downloaded with the Kindle app for PC to EPUB. Its own KFX to EPUB converter, no Calibre needed. For personal use with books you bought.",
  skip: "Skip to content",
  nav: { how: "How it works", responsible: "Use responsibly", faq: "Questions", github: "GitHub", label: "Main" },
  langSwitch: { label: "Language", other: "Español", otherHref: "/es/", current: "English" },
  download: "Download",
  downloadLong: "Download for Windows",
  hero: {
    titleA: "Your Kindle books,",
    titleB: "as EPUB.",
    lead:
      "Anzu is a free Windows app that converts Kindle books to EPUB. It finds the books you downloaded with the Kindle app for PC, checks the unlock tool before every run, asks before it closes anything, and writes EPUB files to the folder you choose.",
    secondary: "See how it works",
    facts: ["Windows 10 and 11", "Free and open source, GPL-3.0", "No Calibre needed", "Novels and other text-based books, not comics"],
  },
  demo: {
    label:
      "The real Anzu window, running a recorded session: two books are downloaded in the Kindle app, Anzu checks the tool, the books are chosen, Anzu asks to close Kindle, unlocks and converts them, and saves them in Documents\\EPUB.",
    windowTitle: "Anzu: Kindle to EPUB",
    kindle: "Kindle app",
    downloading: "Downloading 2 books",
    contentFolder: "My Kindle Content",
    output: "Documents\\EPUB",
    play: "Play the demo",
    loading: "Opening Anzu",
    failed: "The demo needs WebGL, which this browser does not offer.",
    note: "This is the app itself, compiled for the web, with sample books. Nothing leaves your browser.",
    fullSize: "View the window at full size",
    closeFull: "Close",
  },
  what: {
    title: "One app instead of a toolbox.",
    body:
      "Reading a Kindle book on another reader usually means finding the right tool, matching its version to your Kindle app and digging through hidden folders. Anzu does that part. When something does not add up, it stops and tells you why.",
    taskLabel: "Task",
    whoLabel: "Done by",
    rows: [
      { task: "Finding the Kindle app and your books", who: "Anzu" },
      { task: "Checking the latest release and compatibility", who: "Anzu" },
      { task: "Downloading the tool and verifying its SHA-256", who: "Anzu" },
      { task: "Removing the DRM", who: "Satsuoni's tool", link: LINKS.satsuoni },
      { task: "Reading KFX and writing the EPUB", who: "Anzu, with its own code" },
    ],
  },
  how: {
    title: "From the Kindle app to your reader.",
    lead: "Two of the steps are yours. Every book moves along the same track the app shows.",
    track: ["With DRM", "Unlocked", "EPUB"],
    steps: [
      { title: "You download the book", body: "In the Kindle app from the Microsoft Store, signed in, as you already do." },
      {
        title: "Anzu checks the tool",
        body: "It must be the latest published release, its hash must match and it must support your Kindle version. If not, nothing runs.",
      },
      { title: "You choose your books", body: "Tick them on the shelf. The button says what is about to happen: “Unlock and convert 2 books”." },
      {
        title: "Anzu unlocks, with your permission",
        body: "The Kindle app has to be closed, so Anzu asks first. Once unlocked, each book shows its real title.",
      },
      { title: "Anzu converts and saves", body: "Its own converter turns KFX into EPUB. A book that fails does not stop the others." },
    ],
  },
  where: {
    title: "Where your EPUB ends up.",
    lead: "In a folder you choose. Each file is named after its book.",
    path: ["C:\\", "Users\\", "you\\", "Documents\\", "EPUB\\"],
    file: "Moby-Dick.epub",
    facts: [
      { title: "Documents\\EPUB by default", body: "Change it at the bottom of the window whenever you like." },
      { title: "The Kindle folder stays untouched", body: "Anzu reads it and never writes inside it." },
      { title: "Converted books stay marked", body: "Their track shows EPUB, and you can convert them again." },
      { title: "Ready for any reader", body: "Copy the file to an e-reader, a tablet or your phone." },
    ],
  },
  name: {
    title: "Why “Anzu”.",
    body:
      "In Mesopotamian myth, Anzu is the bird that stole the Tablet of Destinies from the gods. The logo is an A made of two open wings over a tablet.",
    mark: "The Anzu logo: two wings forming an A over a tablet",
  },
  responsible: {
    title: "Use it responsibly.",
    lead: "Anzu is for personal use only, and only with books you got legally.",
    points: [
      {
        title: "Removing DRM can be against the law",
        body: "Many countries, including the United States (under the DMCA) and the member states of the European Union, forbid getting around copy protection, and breaking that rule can lead to fines or other penalties. Check the law where you live.",
      },
      {
        title: "It goes against Amazon's terms",
        body: "When you use Kindle you accept the Kindle Store Terms of Use, and those terms do not allow removing the DRM of your books.",
      },
      {
        title: "Only books you paid for",
        body: "Use Anzu only with books you bought, or that you read through a subscription you pay for.",
      },
      {
        title: "Never share the EPUB files",
        body: "Do not send them to anyone, upload them or post them anywhere. Sharing a book whose DRM you removed is piracy, it is illegal, and it hurts the authors who wrote it.",
      },
    ],
    closing: "You are responsible for how you use Anzu.",
    whyTitle: "Why it exists",
    whyBefore: "I made Anzu for myself, to practise English. I wrote another app, ",
    whyLink: "Ogmios",
    whyAfter:
      ", where I practise English, and I wanted to use the books I read as material for it. With a book as an EPUB I can split it into chapters and pull out English vocabulary to study. That is the whole idea: using a book I paid for, in a different app of my own. Anzu was never meant to remove the DRM from a book so it can be passed on to other people. That would be illegal, and it should never be done.",
  },
  faq: {
    title: "Questions.",
    items: [
      { q: "Is Anzu free?", a: "Yes. It is free and open source, under the GPL-3.0 license." },
      { q: "Does it work on Mac or Linux?", a: "No. Anzu only runs on Windows 10 and 11, with the Kindle app from the Microsoft Store." },
      { q: "Do I need Calibre?", a: "No. Anzu has its own KFX to EPUB converter, so you do not need Calibre or any plugin." },
      {
        q: "Can I read the EPUB on a Kobo, a phone or a tablet?",
        a: "Yes, EPUB works in most reading apps and e-readers. The files are for you alone: copy them only to your own devices.",
      },
      { q: "Can it convert to MOBI, AZW3 or PDF?", a: "No. Anzu only creates EPUB files." },
      {
        q: "Why does Anzu sometimes refuse to unlock?",
        a: "Because it could not make sure the unlock tool is safe and compatible: for example, the Kindle app updated and the tool does not support that version yet, or there is no connection to check. Anzu shows the reason. Books that are already unlocked can still be converted.",
      },
    ],
  },
  cta: {
    title: "Open it, tick your books, get EPUB.",
    body: "Needs Windows 10 or 11 and the Kindle app from the Microsoft Store, signed in. Checking the tool needs a connection.",
    release: "All releases and notes",
  },
  footer: {
    legal: "Anzu contains no decryption code. The DRM is removed by",
    satsuoni: "Satsuoni's tool",
    trademark: "For personal use with books you bought. Anzu is not made or endorsed by Amazon; Kindle is a trademark of Amazon.com, Inc. or its affiliates.",
    license: "GPL-3.0",
    source: "Source on GitHub",
  },
};

export const es: Strings = {
  lang: "es",
  htmlLang: "es",
  title: "Anzu: convierte libros de Kindle a EPUB en Windows",
  description:
    "App gratuita para Windows que convierte a EPUB los libros que descargaste con la app de Kindle para PC. Conversor propio de KFX a EPUB, sin Calibre. Para uso personal con libros que compraste.",
  skip: "Saltar al contenido",
  nav: { how: "Cómo funciona", responsible: "Uso responsable", faq: "Preguntas", github: "GitHub", label: "Principal" },
  langSwitch: { label: "Idioma", other: "English", otherHref: "/", current: "Español" },
  download: "Descargar",
  downloadLong: "Descargar para Windows",
  hero: {
    titleA: "Tus libros de Kindle,",
    titleB: "en EPUB.",
    lead:
      "Anzu es una app gratuita para Windows que convierte libros de Kindle a EPUB. Encuentra los libros que descargaste con la app de Kindle para PC, comprueba la herramienta de desbloqueo antes de cada uso, pregunta antes de cerrar nada y guarda los EPUB en la carpeta que elijas.",
    secondary: "Ver cómo funciona",
    facts: ["Windows 10 y 11", "Libre y de código abierto, GPL-3.0", "Sin Calibre", "Novelas y otros libros de texto corrido, no cómics"],
  },
  demo: {
    label:
      "La ventana real de Anzu reproduciendo una sesión: se descargan dos libros en la app de Kindle, Anzu comprueba la herramienta, se eligen los libros, Anzu pide cerrar Kindle, los desbloquea y convierte, y los guarda en Documents\\EPUB.",
    windowTitle: "Anzu: de Kindle a EPUB",
    kindle: "App de Kindle",
    downloading: "Descargando 2 libros",
    contentFolder: "My Kindle Content",
    output: "Documents\\EPUB",
    play: "Reproducir el demo",
    loading: "Abriendo Anzu",
    failed: "El demo necesita WebGL, y este navegador no lo ofrece.",
    note: "Es la propia app, compilada para la web, con libros de ejemplo. Nada sale de tu navegador.",
    fullSize: "Ver la ventana a tamaño real",
    closeFull: "Cerrar",
  },
  what: {
    title: "Una app en lugar de una caja de herramientas.",
    body:
      "Leer un libro de Kindle en otro lector suele obligar a buscar la herramienta correcta, cuadrar su versión con la de tu app de Kindle y rebuscar en carpetas ocultas. Anzu se encarga de eso. Si algo no cuadra, se detiene y te explica por qué.",
    taskLabel: "Tarea",
    whoLabel: "Quién la hace",
    rows: [
      { task: "Encontrar la app de Kindle y tus libros", who: "Anzu" },
      { task: "Comprobar la última versión y la compatibilidad", who: "Anzu" },
      { task: "Descargar la herramienta y verificar su SHA-256", who: "Anzu" },
      { task: "Quitar el DRM", who: "La herramienta de Satsuoni", link: LINKS.satsuoni },
      { task: "Leer el KFX y escribir el EPUB", who: "Anzu, con código propio" },
    ],
  },
  how: {
    title: "De la app de Kindle a tu lector.",
    lead: "Dos de los pasos son tuyos. Cada libro avanza por la misma pista que muestra la app.",
    track: ["Con DRM", "Desbloqueado", "EPUB"],
    steps: [
      { title: "Descargas el libro", body: "En la app de Kindle de Microsoft Store, con tu sesión iniciada, como ya lo haces." },
      {
        title: "Anzu comprueba la herramienta",
        body: "Debe ser la última versión publicada, su hash debe coincidir y debe admitir tu versión de Kindle. Si no, no se ejecuta nada.",
      },
      { title: "Eliges tus libros", body: "Márcalos en la estantería. El botón dice qué va a pasar: «Desbloquear y convertir 2 libros»." },
      {
        title: "Anzu desbloquea, con tu permiso",
        body: "La app de Kindle tiene que estar cerrada, así que Anzu pregunta antes. Al desbloquearse, cada libro muestra su título real.",
      },
      { title: "Anzu convierte y guarda", body: "Su propio conversor pasa el KFX a EPUB. Un libro que falla no detiene a los demás." },
    ],
  },
  where: {
    title: "Dónde termina tu EPUB.",
    lead: "En la carpeta que elijas. Cada archivo lleva el nombre de su libro.",
    path: ["C:\\", "Users\\", "you\\", "Documents\\", "EPUB\\"],
    file: "Moby-Dick.epub",
    facts: [
      { title: "Documents\\EPUB por defecto", body: "Cámbiala abajo en la ventana cuando quieras." },
      { title: "La carpeta de Kindle no se toca", body: "Anzu la lee y nunca escribe dentro." },
      { title: "Los libros convertidos quedan marcados", body: "Su pista muestra EPUB, y puedes volver a convertirlos." },
      { title: "Listo para cualquier lector", body: "Copia el archivo a un lector de libros, una tableta o tu teléfono." },
    ],
  },
  name: {
    title: "Por qué «Anzu».",
    body:
      "En la mitología mesopotámica, Anzu es el ave que robó a los dioses la Tablilla de los Destinos. El logo es una A formada por dos alas abiertas sobre una tablilla.",
    mark: "El logo de Anzu: dos alas que forman una A sobre una tablilla",
  },
  responsible: {
    title: "Úsala con responsabilidad.",
    lead: "Anzu es solo para uso personal, y solo con libros que obtuviste de forma legal.",
    points: [
      {
        title: "Quitar el DRM puede ser ilegal",
        body: "Muchos países, entre ellos Estados Unidos (por la ley DMCA) y los estados de la Unión Europea, prohíben saltarse las protecciones anticopia, y hacerlo puede acarrear multas u otras sanciones. Revisa la ley de tu país.",
      },
      {
        title: "Va en contra de las condiciones de Amazon",
        body: "Al usar Kindle aceptas las Condiciones de uso de la Tienda Kindle, y esas condiciones no permiten quitar el DRM de tus libros.",
      },
      {
        title: "Solo libros que pagaste",
        body: "Usa Anzu solo con libros que compraste o que lees con una suscripción que pagas.",
      },
      {
        title: "Nunca compartas los EPUB",
        body: "No se los envíes a nadie, no los subas ni los publiques en ningún sitio. Compartir un libro al que le quitaste el DRM es piratería, es ilegal y perjudica a quienes lo escribieron.",
      },
    ],
    closing: "Tú eres responsable del uso que hagas de Anzu.",
    whyTitle: "Por qué existe",
    whyBefore: "Hice Anzu para mí, para practicar inglés. Tengo otra app, ",
    whyLink: "Ogmios",
    whyAfter:
      ", con la que practico inglés, y quería usar los libros que leo como material. Con un libro en EPUB puedo separarlo en capítulos y sacar de ahí vocabulario en inglés para estudiar. Esa es toda la idea: usar un libro que pagué en otra app mía. Anzu nunca tuvo como fin quitarle el DRM a un libro para pasárselo a otras personas. Eso es ilegal y no debe hacerse nunca.",
  },
  faq: {
    title: "Preguntas.",
    items: [
      { q: "¿Anzu es gratis?", a: "Sí. Es libre y de código abierto, con licencia GPL-3.0." },
      { q: "¿Funciona en Mac o Linux?", a: "No. Anzu solo funciona en Windows 10 y 11, con la app de Kindle de Microsoft Store." },
      { q: "¿Necesito Calibre?", a: "No. Anzu tiene su propio conversor de KFX a EPUB, así que no necesitas Calibre ni ningún complemento." },
      {
        q: "¿Puedo leer el EPUB en un Kobo, un teléfono o una tableta?",
        a: "Sí, el EPUB funciona en la mayoría de las apps de lectura y lectores electrónicos. Los archivos son solo para ti: cópialos únicamente a tus propios dispositivos.",
      },
      { q: "¿Puede convertir a MOBI, AZW3 o PDF?", a: "No. Anzu solo crea archivos EPUB." },
      {
        q: "¿Por qué Anzu a veces se niega a desbloquear?",
        a: "Porque no pudo asegurarse de que la herramienta de desbloqueo es segura y compatible: por ejemplo, la app de Kindle se actualizó y la herramienta todavía no admite esa versión, o no hay conexión para comprobarlo. Anzu muestra el motivo. Los libros ya desbloqueados se pueden seguir convirtiendo.",
      },
    ],
  },
  cta: {
    title: "Ábrela, marca tus libros, obtén EPUB.",
    body: "Necesita Windows 10 u 11 y la app de Kindle de Microsoft Store con tu sesión iniciada. Comprobar la herramienta requiere conexión.",
    release: "Todas las versiones y notas",
  },
  footer: {
    legal: "Anzu no contiene código de descifrado. El DRM lo quita",
    satsuoni: "la herramienta de Satsuoni",
    trademark: "Para uso personal con libros que compraste. Anzu no lo hace ni lo respalda Amazon; Kindle es una marca de Amazon.com, Inc. o sus filiales.",
    license: "GPL-3.0",
    source: "Código en GitHub",
  },
};

export const strings: Record<Lang, Strings> = { en, es };
