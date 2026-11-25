// Every visible text of the site, in English and Spanish. Facts come from the app's
// PRODUCT.md and README; nothing here is a claim the app does not back. The two languages
// are written for their own readers, with the words each one searches for ("convert
// Kindle to EPUB", "Kindle for PC", "KFX", "Kobo", "Calibre", "DeDRM"; "convertir libros
// de Kindle a EPUB", "quitar el DRM", "lector electrónico"), not translated line by line.

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
  /** Before the number of the latest release, as in "Version 0.8.1". */
  version: string;
  hero: { titleA: string; titleB: string; lead: string; secondary: string; facts: { label: string; value: string }[] };
  demo: {
    label: string;
    windowTitle: string;
    contentFolder: string;
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
  title: "Anzu: convert Kindle books to EPUB on Windows, no Calibre",
  description:
    "Free Windows app that turns the books you downloaded with Kindle for PC into EPUB, ready for a Kobo or any other e-reader. It reads KFX on its own, so there's no Calibre or plugin to set up. For personal use with books you bought.",
  skip: "Skip to content",
  nav: { how: "How it works", responsible: "Use responsibly", faq: "Questions", github: "GitHub", label: "Main" },
  langSwitch: { label: "Language", other: "Español", otherHref: "/es/", current: "English" },
  download: "Download",
  downloadLong: "Download for Windows",
  version: "Version",
  hero: {
    titleA: "Your Kindle books,",
    titleB: "as EPUB.",
    lead:
      "Anzu is a free Windows app that converts Kindle books to EPUB. It finds what you've downloaded with the Kindle app for PC and saves the EPUB files in the folder you pick. Before each run it checks the unlock tool, and it asks before closing Kindle.",
    secondary: "See how it works",
    facts: [
      { label: "Runs on", value: "Windows 10 and 11" },
      { label: "GPL-3.0 license", value: "Free and open source" },
      { label: "Converter", value: "Built in, no Calibre needed" },
      { label: "Books", value: "Prose, not comics" },
    ],
  },
  demo: {
    label:
      "The real Anzu window playing a recorded session: two books are downloaded in the Kindle app, Anzu checks the tool, the books are picked, Anzu asks to close Kindle, then unlocks them, converts them and saves them in Documents\\EPUB.",
    windowTitle: "Anzu: Kindle to EPUB",
    contentFolder: "My Kindle Content",
    play: "Play the demo",
    loading: "Opening Anzu",
    failed: "The demo needs WebGL, and this browser doesn't have it.",
    note: "This is the actual app, built for the web and loaded with sample books. Nothing here leaves your browser.",
    fullSize: "View the window at full size",
    closeFull: "Close",
  },
  what: {
    title: "One app instead of a pile of tools.",
    body:
      "To read a Kindle book on a Kobo or another e-reader, you usually need a DRM tool whose version matches your Kindle app, and then you go digging through hidden folders. Anzu does that for you, and when something doesn't line up, it stops and tells you why.",
    taskLabel: "Task",
    whoLabel: "Done by",
    rows: [
      { task: "Finding the Kindle app and your books", who: "Anzu" },
      { task: "Making sure the tool is the latest release and supports your Kindle", who: "Anzu" },
      { task: "Downloading the tool and checking its SHA-256", who: "Anzu" },
      { task: "Removing the DRM", who: "Satsuoni's tool", link: LINKS.satsuoni },
      { task: "Reading KFX and writing the EPUB", who: "Anzu, with its own code" },
    ],
  },
  how: {
    title: "From the Kindle app to your e-reader.",
    lead: "You do two of the steps. Each book moves along the same track you see in the app.",
    track: ["With DRM", "Unlocked", "EPUB"],
    steps: [
      { title: "You download the book", body: "In the Kindle app from the Microsoft Store, signed in to your Amazon account." },
      {
        title: "Anzu checks the tool",
        body: "Anzu only runs the latest published release, and only if its hash matches and it supports your version of Kindle. Otherwise nothing runs.",
      },
      { title: "You pick your books", body: "Tick them on the shelf. The button tells you what's about to happen: “Unlock and convert 2 books”." },
      {
        title: "Anzu unlocks them, once you say so",
        body: "Kindle has to be closed for this, so Anzu asks first. Then it unlocks every book you picked.",
      },
      { title: "Anzu converts and saves", body: "Its own converter turns KFX into EPUB. If one book fails, the rest keep going." },
    ],
  },
  where: {
    title: "Where your EPUB ends up.",
    lead: "In a folder you choose, with each file named after its book.",
    path: ["C:\\", "Users\\", "you\\", "Documents\\", "EPUB\\"],
    file: "Moby-Dick.epub",
    facts: [
      { title: "Documents\\EPUB by default", body: "You can change it at the bottom of the window any time." },
      { title: "The Kindle folder stays as it is", body: "Anzu reads from it and never writes to it." },
      { title: "Converted books stay marked", body: "Their track shows EPUB, and you can convert them again." },
      { title: "Ready for your e-reader", body: "Copy the file to a Kobo or another e-reader, a tablet or your phone." },
    ],
  },
  name: {
    title: "Why “Anzu”.",
    body:
      "In Mesopotamian myth, Anzu is the bird that stole the Tablet of Destinies from the gods. The logo is a solid block that turns into lines of text: a locked book becoming an EPUB.",
    mark: "The Anzu logo: a block that turns into lines of text",
  },
  responsible: {
    title: "Use it responsibly.",
    lead: "Anzu is for personal use only, with books you got legally.",
    points: [
      {
        title: "Removing DRM can be illegal",
        body: "Many countries forbid getting around copy protection, among them the United States (under the DMCA) and the member states of the European Union. Doing it can mean fines or other penalties, so check the law where you live.",
      },
      {
        title: "It breaks Amazon's terms",
        body: "Using Kindle means accepting the Kindle Store Terms of Use, and they don't allow removing the DRM from your books.",
      },
      {
        title: "Only books you paid for",
        body: "Use Anzu only with books you bought, or books you read through a subscription you pay for.",
      },
      {
        title: "Never share the EPUB files",
        body: "Don't send them to anyone, upload them or post them anywhere. Sharing a book you removed the DRM from is piracy. It's illegal, and it hurts the people who wrote it.",
      },
    ],
    closing: "You're responsible for how you use Anzu.",
    whyTitle: "Why it exists",
    whyBefore: "I made Anzu for myself, to practise English. I wrote another app, ",
    whyLink: "Ogmios",
    whyAfter:
      ", where I practise it, and I wanted to use the books I read as material there. Once a book is an EPUB, I can split it into chapters and pull out English vocabulary to study. That's the whole idea: using a book I paid for in another app of mine. Anzu was never meant for stripping the DRM from a book to pass it on to other people. That would be illegal, and nobody should do it.",
  },
  faq: {
    title: "Questions.",
    items: [
      { q: "Is Anzu free?", a: "Yes. It's free and open source, under the GPL-3.0 license." },
      { q: "Does it work on Mac or Linux?", a: "Only Windows 10 and 11, with the Kindle app from the Microsoft Store." },
      {
        q: "Do I need Calibre or the DeDRM plugin?",
        a: "No. Anzu has its own KFX to EPUB converter, so there's no Calibre or plugin to set up. For the DRM, it downloads Satsuoni's unlock tool by itself.",
      },
      {
        q: "Can I read the EPUB on a Kobo, a phone or a tablet?",
        a: "Yes. EPUB opens in most reading apps and e-readers. The files are for you alone, so copy them only to your own devices.",
      },
      { q: "Can it convert to MOBI, AZW3 or PDF?", a: "EPUB only. That's the one format Anzu makes." },
      {
        q: "Why does Anzu sometimes refuse to unlock?",
        a: "Because it couldn't confirm that the unlock tool is safe and compatible. Maybe the Kindle app updated and the tool doesn't support that version yet, or there's no connection to check. Anzu tells you the reason, and books that are already unlocked can still be converted.",
      },
    ],
  },
  cta: {
    title: "Open it, tick your books, get EPUB.",
    body: "You need Windows 10 or 11 and the Kindle app from the Microsoft Store, signed in. Checking the tool takes an internet connection.",
    release: "All releases and notes",
  },
  footer: {
    legal: "Anzu has no decryption code. The DRM is removed by",
    satsuoni: "Satsuoni's tool",
    trademark: "For personal use with books you bought. Anzu isn't made or endorsed by Amazon; Kindle is a trademark of Amazon.com, Inc. or its affiliates.",
    license: "GPL-3.0",
    source: "Source on GitHub",
  },
};

export const es: Strings = {
  lang: "es",
  htmlLang: "es",
  title: "Anzu: convierte libros de Kindle a EPUB en Windows, sin Calibre",
  description:
    "App gratuita para Windows que convierte a EPUB los libros que descargaste con Kindle para PC, listos para un Kobo u otro lector electrónico. Lee el formato KFX por su cuenta, sin Calibre ni complementos. Para uso personal con libros que compraste.",
  skip: "Saltar al contenido",
  nav: { how: "Cómo funciona", responsible: "Uso responsable", faq: "Preguntas", github: "GitHub", label: "Principal" },
  langSwitch: { label: "Idioma", other: "English", otherHref: "/", current: "Español" },
  download: "Descargar",
  downloadLong: "Descargar para Windows",
  version: "Versión",
  hero: {
    titleA: "Tus libros de Kindle,",
    titleB: "en EPUB.",
    lead:
      "Anzu es una app gratuita para Windows que convierte tus libros de Kindle a EPUB. Encuentra lo que descargaste con la app de Kindle para PC y guarda los EPUB en la carpeta que elijas. Antes de cada uso revisa la herramienta de desbloqueo, y te pregunta antes de cerrar Kindle.",
    secondary: "Ver cómo funciona",
    facts: [
      { label: "Funciona en", value: "Windows 10 y 11" },
      { label: "Licencia GPL-3.0", value: "Gratis y de código abierto" },
      { label: "Conversor", value: "Integrado, sin Calibre" },
      { label: "Libros", value: "De texto, no cómics" },
    ],
  },
  demo: {
    label:
      "La ventana real de Anzu reproduciendo una sesión grabada: se descargan dos libros en la app de Kindle, Anzu revisa la herramienta, se eligen los libros, Anzu pide cerrar Kindle, luego los desbloquea, los convierte y los guarda en Documents\\EPUB.",
    windowTitle: "Anzu: de Kindle a EPUB",
    contentFolder: "My Kindle Content",
    play: "Reproducir el demo",
    loading: "Abriendo Anzu",
    failed: "El demo necesita WebGL y este navegador no lo tiene.",
    note: "Es la app de verdad, compilada para la web y con libros de ejemplo. Nada de lo que pasa aquí sale de tu navegador.",
    fullSize: "Ver la ventana a tamaño real",
    closeFull: "Cerrar",
  },
  what: {
    title: "Una sola app en vez de un montón de herramientas.",
    body:
      "Para leer un libro de Kindle en un Kobo u otro lector, normalmente necesitas una herramienta para quitar el DRM cuya versión coincida con tu app de Kindle, y luego te toca buscar en carpetas ocultas. Anzu se encarga de eso, y si algo no cuadra, se detiene y te dice por qué.",
    taskLabel: "Tarea",
    whoLabel: "Quién la hace",
    rows: [
      { task: "Encontrar la app de Kindle y tus libros", who: "Anzu" },
      { task: "Revisar que la herramienta sea la última versión y funcione con tu Kindle", who: "Anzu" },
      { task: "Descargar la herramienta y verificar su SHA-256", who: "Anzu" },
      { task: "Quitar el DRM", who: "La herramienta de Satsuoni", link: LINKS.satsuoni },
      { task: "Leer el KFX y crear el EPUB", who: "Anzu, con código propio" },
    ],
  },
  how: {
    title: "De la app de Kindle a tu lector.",
    lead: "Dos pasos los haces tú. Cada libro avanza por la misma pista que ves en la app.",
    track: ["Con DRM", "Desbloqueado", "EPUB"],
    steps: [
      { title: "Descargas el libro", body: "En la app de Kindle de Microsoft Store, con tu cuenta de Amazon." },
      {
        title: "Anzu revisa la herramienta",
        body: "Anzu solo usa la última versión publicada, y solo si su hash coincide y funciona con tu versión de Kindle. Si no, no se ejecuta nada.",
      },
      { title: "Eliges tus libros", body: "Los marcas en la estantería. El botón te dice qué va a pasar: «Desbloquear y convertir 2 libros»." },
      {
        title: "Anzu los desbloquea cuando le das permiso",
        body: "Para esto Kindle tiene que estar cerrada, así que Anzu te pregunta primero. Luego desbloquea todos los libros que elegiste.",
      },
      { title: "Anzu convierte y guarda", body: "Su propio conversor pasa el KFX a EPUB. Si un libro falla, los demás siguen." },
    ],
  },
  where: {
    title: "Dónde queda tu EPUB.",
    lead: "En la carpeta que elijas, y cada archivo lleva el nombre de su libro.",
    path: ["C:\\", "Users\\", "you\\", "Documents\\", "EPUB\\"],
    file: "Moby-Dick.epub",
    facts: [
      { title: "Documents\\EPUB por defecto", body: "Puedes cambiarla cuando quieras desde la parte de abajo de la ventana." },
      { title: "La carpeta de Kindle queda intacta", body: "Anzu la lee y nunca escribe en ella." },
      { title: "Los libros convertidos quedan marcados", body: "Su pista dice EPUB y puedes volver a convertirlos." },
      { title: "Listo para tu lector", body: "Copia el archivo a un Kobo u otro lector electrónico, a una tableta o a tu teléfono." },
    ],
  },
  name: {
    title: "Por qué «Anzu».",
    body:
      "En la mitología mesopotámica, Anzu es el ave que les robó a los dioses la Tablilla de los Destinos. El logo es un bloque sólido que se convierte en líneas de texto: un libro bloqueado que se vuelve EPUB.",
    mark: "El logo de Anzu: un bloque que se convierte en líneas de texto",
  },
  responsible: {
    title: "Úsala con responsabilidad.",
    lead: "Anzu es solo para uso personal y solo con libros que conseguiste de forma legal.",
    points: [
      {
        title: "Quitar el DRM puede ser ilegal",
        body: "En muchos países está prohibido saltarse las protecciones anticopia, por ejemplo en Estados Unidos (por la DMCA) y en los países de la Unión Europea. Hacerlo puede costarte multas u otras sanciones, así que revisa qué dice la ley donde vives.",
      },
      {
        title: "Rompe las condiciones de Amazon",
        body: "Cuando usas Kindle aceptas las Condiciones de uso de la Tienda Kindle, y ahí no se permite quitarles el DRM a tus libros.",
      },
      {
        title: "Solo libros que pagaste",
        body: "Usa Anzu solo con libros que compraste o que lees con una suscripción de pago.",
      },
      {
        title: "Nunca compartas los EPUB",
        body: "No se los mandes a nadie, no los subas ni los publiques en ningún lado. Compartir un libro al que le quitaste el DRM es piratería: es ilegal y daña a quienes lo escribieron.",
      },
    ],
    closing: "Tú eres responsable de cómo usas Anzu.",
    whyTitle: "Por qué existe",
    whyBefore: "Hice Anzu para mí, para practicar inglés. Escribí otra app, ",
    whyLink: "Ogmios",
    whyAfter:
      ", donde practico inglés, y quería usar ahí los libros que leo. Con un libro en EPUB puedo dividirlo en capítulos y sacar vocabulario en inglés para estudiarlo. Esa es toda la idea: usar un libro que pagué en otra app mía. Anzu nunca se pensó para quitarle el DRM a un libro y pasárselo a otras personas. Eso es ilegal y nadie debería hacerlo.",
  },
  faq: {
    title: "Preguntas.",
    items: [
      { q: "¿Anzu es gratis?", a: "Sí. Es gratis y de código abierto, con licencia GPL-3.0." },
      { q: "¿Funciona en Mac o Linux?", a: "Solo en Windows 10 y 11, con la app de Kindle de Microsoft Store." },
      {
        q: "¿Necesito Calibre o el plugin DeDRM?",
        a: "No. Anzu tiene su propio conversor de KFX a EPUB, así que no hay que instalar Calibre ni complementos. Para el DRM, descarga por su cuenta la herramienta de desbloqueo de Satsuoni.",
      },
      {
        q: "¿Puedo leer el EPUB en un Kobo, un teléfono o una tableta?",
        a: "Sí. El EPUB se abre en casi todas las apps de lectura y lectores electrónicos. Los archivos son solo para ti: cópialos únicamente a tus propios dispositivos.",
      },
      { q: "¿Puede convertir a MOBI, AZW3 o PDF?", a: "Solo a EPUB. Es el único formato que crea Anzu." },
      {
        q: "¿Por qué Anzu a veces no quiere desbloquear?",
        a: "Porque no pudo confirmar que la herramienta de desbloqueo sea segura y compatible. Puede que la app de Kindle se haya actualizado y la herramienta todavía no funcione con esa versión, o que no haya conexión para revisarlo. Anzu te dice el motivo, y los libros que ya están desbloqueados se pueden seguir convirtiendo.",
      },
    ],
  },
  cta: {
    title: "Ábrela, marca tus libros y obtén tus EPUB.",
    body: "Necesitas Windows 10 u 11 y la app de Kindle de Microsoft Store con tu cuenta abierta. Para revisar la herramienta hace falta conexión a internet.",
    release: "Todas las versiones y notas",
  },
  footer: {
    legal: "Anzu no tiene código de descifrado. El DRM lo quita",
    satsuoni: "la herramienta de Satsuoni",
    trademark: "Para uso personal con libros que compraste. Anzu no está hecha ni respaldada por Amazon; Kindle es una marca de Amazon.com, Inc. o sus filiales.",
    license: "GPL-3.0",
    source: "Código en GitHub",
  },
};

export const strings: Record<Lang, Strings> = { en, es };
