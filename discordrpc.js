const processExists = require('process-exists');
const config = require('./configDiscordrpc.js')
const client = require('discord-rich-presence')(config.clientId);
const respawn = require('respawn')
let drpactiv = false
let monitor = respawn(['discordrpc.js'], {
    name: 'discordrpc.js',
    env: { ENV_VAR: 'discordrpc.js' },
    cwd: '.',
    fork: true
})

function foo() {
    (async () => {
        const exists1 = await processExists.all([process.pid, config.scriptprocess]); // Définie par configDiscordrpc.js
        const exists2 = await processExists.all([process.pid, config.gameprocess]); // Définie par configDiscordrpc.js
        if (exists1.get(config.scriptprocess)) { // Ne pas modifier !
            if (!exists2.get(config.gameprocess) && drpactiv === true) { // Si Call of Duty: Black Ops IIII n'est pas lancé et que Discord Rich Presence est activé
                console.log(`${config.gamename} est pas Lancé mais Discord Rich Presence est lancé !`)
                console.log(`Discord Rich Presence: Désactivés (${drpactiv})`)
                client.disconnect() // Discord Rich Presence est déconnecté
                monitor.stop() // discordrpc.js est stoppé
                monitor.start() // discordrpc.js est relancé
            } else if (exists2.get(config.gameprocess) && drpactiv === true) { // Si Call of Duty: Black Ops IIII et Discord Rich Presence est activé
                console.log(`${config.gamename} est lancé et Discord Rich Presence est Activés (${drpactiv})`)
                console.log(`Normalement tout fonctionne !`)
                setTimeout(foo, 5000); // Permet de revenir au début de la fonction foo
            } else if (exists2.get(config.gameprocess) && drpactiv === false) { // Si Call of Duty: Black Ops IIII est lancé et que Discord Rich Presence est désactivé
                drpactiv = true // La variable drpactiv est activés donc Discord Rich Presence est activé
                if (config.drpstartTimestamp = new Date()) { // Permet de réinitialiser le temps écoulé (startTimestamp)
                    config.drpstartTimestamp = new Date();
                }
                console.log(`${config.gamename} est Lancé`);
                console.log(`Discord Rich Presence: Activés (${drpactiv})`)
                client.updatePresence({ // Activation du Discord Rich Presence
                    details: config.drpdetails, // Définie par configDiscordrpc.js
                    largeImageKey: config.drplargeImageKey, // ...
                    largeImageText: config.drplargeImageText, // ...
                    smallImageKey: config.drpsmallImageKey, // ...
                    smallImageText: config.drpsmallImageText, // ...
                    startTimestamp: config.drpstartTimestamp, // ...
                    instance: true,
                })
                setTimeout(foo, 5000); // ...
            } else if (!exists2.get(config.gameprocess) && drpactiv === false) {
                console.log(`${config.gamename} est pas Lancé`);
                console.log(`Discord Rich Presence: Désactivés (${drpactiv})`)
                setTimeout(foo, 5000); // ...
            }
        } else if (!exists1.get(config.scriptprocess)) { // Ne pas modifier !
            console.log(`Une erreur c'est produite !`);
            setTimeout(foo, 5000); // ...
        }
    })();
}

console.log(`Ceci affiche les évènements de discordrpc.js`);
foo(); // Permet d'éxecuter la fonction foo au démarage de discordrpc.js