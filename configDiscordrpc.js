module.exports = {
    clientId: `705395693111738499`, // L'ID de l'application Discord | Exemple: clientId: `123456789012345678`,
    drpdetails: `Actuellement en jeu`, // Ce que le joueur fait actuellement (details) | Exemple: drpdetails: `Actuellement en jeu`,
    drpState: undefined, // le statut de partie actuel de l'utilisateur (state) | Exemple: drpState: `Sur Genesis: Part 1`,
    drplargeImageKey: `bo4`, // Nom de l'image téléchargée pour la grande illustration de profil (largeImageKey) | Exemple: drplargeImageKey: `ark`,
    drplargeImageText: `Call of Duty: Black Ops IIII`, // L'info-bulle pour la grande illustration de profil (largeImageText) | Exemple: drplargeImageText: `ARK: Survival Evolved`,
    drpsmallImageKey: `discord`, // Nom de l'image téléchargée pour la petite illustration de profil (smallImageKey) | Exemple: drpsmallImageKey: `discord`,
    drpsmallImageText: `Discord Rich Presence`, // L'info-bulle pour la petite illustration de profil (smallImageText) | Exemple: drpsmallImageText: `Discord Rich Presence`,
    drpstartTimestamp: new Date(), // Affiche le temps écoulé (new Date() = activés | undefined = désactivés) | Exemple: drpstartTimestamp: new Date(),
    gameprocess: `BlackOps4.exe`, // l'exécutable du jeu | Exemple: gameprocess: `ShooterGame.exe`,
    gamename: `Call of Duty: Black Ops IIII`, // Le nom du jeu | Exemple: gamename: `ARK: Survival Evolved`,
    scriptprocess: `cmd.exe`, // NE PAS MODIFIER ! | l'exécutable de l'actionneur du Script discordrpc.js | Exemple: scriptprocess: `cmd.exe`,
};

/* Besoin d'aide pour modifier les paramètres ?
Visistez ce lien: https://discordapp.com/developers/docs/rich-presence/how-to#updating-presence-update-presence-payload-fields
*/