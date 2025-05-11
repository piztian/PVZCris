// Función para esperar a que un elemento exista
function waitForElm(selector) {
    return new Promise((resolve) => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver((mutations) => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });
    });
}

// Esperar a que #commit exista y cargar v.html
waitForElm("#commit").then((elm) => {
    fetch("images/Zombies/CX/v.html")
        .then((response) => response.text())
        .then((text) => (elm.innerText = text));
});

// Lista blanca de niveles permitidos para guardar
const saveWhitelist = Array.from({ length: 50 }, (_, i) => (i + 1).toString());

console.log("Configurando intervalos para monitorear cambios...");

// Intervalo para verificar cambios en el nivel
let checkInterval = setInterval(() => {
    if (typeof oS !== "undefined") {
        console.log("oS definido.");
        let previousValue = oS.Lvl || localStorage.getItem("level") || 1;
        console.log(`Nivel inicial: ${previousValue}`);

        // Guardar nivel en localStorage
        const saveLevel = (level) => {
            if (saveWhitelist.includes(level.toString())) {
                console.log(`Guardando nivel ${level} en localStorage.`);
                localStorage.setItem("level", level);
            } else {
                console.log(`Nivel ${level} no está en la lista blanca, no se guardará.`);
            }
        };

        // Configurar botón de aventura
        const setAdventureButton = () => {
            const level = localStorage.getItem("level") || 1;
            if ($("dAdventure")) {
                $("dAdventure").onclick = () => {
                    console.log(`Iniciando aventura en nivel ${level}`);
                    StartAdventure(level);
                };
            }
        };

        // Configurar intervalo de verificación de cambios
        const checkForChange = () => {
            if (oS.Lvl !== previousValue) {
                console.log(`Cambio detectado: ${previousValue} a ${oS.Lvl}`);
                previousValue = oS.Lvl;
                saveLevel(previousValue);
                setAdventureButton();
            }
        };

        // Comenzar a verificar cambios
        setAdventureButton();
        const changeInterval = setInterval(checkForChange, 100);
        clearInterval(checkInterval);
    }
}, 100);

// Reintentar configuración del botón de aventura si no está listo
function startInterval2() {
    const checkInterval2 = setInterval(() => {
        const savedLevel = localStorage.getItem("level");
        if ($("dAdventure") && saveWhitelist.includes(savedLevel)) {
            console.log(`Botón de aventura configurado para el nivel ${savedLevel}`);
            $("dAdventure").onclick = () => {
                console.log(`Iniciando aventura desde localStorage: ${savedLevel}`);
                StartAdventure(savedLevel);
            };
            clearInterval(checkInterval2);
        }
    }, 100);
}
startInterval2();

// Manejo de sonido
let playingSounds = [];
function PlaySound2(path, name, loop = false) {
    const audioPath = `audio/${path}`;
    console.log(`Reproduciendo sonido: ${audioPath}`);
    const audio = new Audio(audioPath);
    audio.loop = loop;
    audio.play();
    playingSounds.push(audio);

    audio.onended = () => {
        playingSounds = playingSounds.filter(a => a !== audio);
    };
}

function StopSound2(name) {
    console.log(`Deteniendo sonido: ${name}`);
    playingSounds.forEach((audio) => {
        if (audio.src.includes(name)) {
            audio.pause();
        }
    });
}

function EditSound2(name, loop = false) {
    console.log(`Editando sonido: ${name}`);
    playingSounds.forEach((audio) => {
        if (audio.src.includes(name)) {
            audio.loop = loop;
        }
    });
}

console.log("Custom.js cargado correctamente.");
