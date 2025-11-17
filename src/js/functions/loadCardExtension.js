/**
 * Charge les données des projets depuis un fichier JSON interne.
 *
 * @async
 * @returns {Promise<Object[]>} Promesse résolue avec le tableau des projets JSON.
 * @throws {Error} En cas d'échec du chargement des données.
 */

export async function loadCardExtension() {
  try {
    const r = await fetch("./data/data.json", {
      headers: {
        Accept: "application/json",
      },
    });
    if (!r.ok) {
      throw new Error("Erreur de chargement des données");
    }

    return r.json();
  } catch {
    alert("Impossible de charger les données");
    return;
  }
}
