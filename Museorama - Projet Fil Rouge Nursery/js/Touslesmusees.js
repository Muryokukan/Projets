class Musee{
    constructor(image, nom){
        this.image = image;
        this.nom = nom;
    }
}

const musees = [
    new Musee("imgPba.jpg", "Le palais des Beaux-Arts"),
    new Musee("imgMuseePoupeeJouetAncien.jpg", "Le musée de la Poupée et du Jouet ancien"),
    new Musee("imgCentreDartSacre.jpg", "Le Centre d'Art sacré de Lille"),
    new Musee("imgMuseeMoulins.jpg", "Le musée des Moulins"),
    new Musee("imgPiscineRoubaix.jpg", "La piscine de Roubaix"),
    new Musee("imgLam.jpg", "Le LaM"),
    new Musee("imgChateauFlers.jpeg", "Le musée du Château de Flers"),
    new Musee("imgInstitutPasteur.jpg", "Le musée de l'institut Pasteur"),
    new Musee("imgMuseeCannoniers.jpg", "Le musée des Cannoniers"),
    new Musee("imgMuseeEcoles.jpg", "Le musée des Écoles"),
    new Musee("imgMuseeArtsForains.jpg", "Le musée des Arts Forains"),
    new Musee("imgMuseeTerroir.jpg", "Le musée du Terroir"),
    new Musee("imgMaisonNataleCdg.jpg", "La maison natale de Charles de Gaulle"),
    new Musee("imgMuseeHistoireNat.jpg", "Le musée d'Histoire naturelle de Lille"),
    new Musee("imgCathedraleNddlt.jpg", "La cathédrale Notre-Dame-de-la-Treille"),
    new Musee("imgHospiceComtesse.jpg", "Le musée de l'hospice comtesse"),
    new Musee("imgMaisonPhoto.jpg", "La maison de la Photographie"),
    new Musee("imgVillaCavrois.jpg", "La villa Cavrois"),
    new Musee("imgMuseeResistance.jpg", "Le musée de la Résistance"),
    new Musee("imgMuba.jpg", "Le MUba Eugène Leroy"),
]

const containerMusee = document.getElementById("musees");

for (const musee of musees) {

const item = document.createElement("div");
item.classList.add("item");
const imageItem = document.createElement("img");
imageItem.src = `../Images/${musee.image}`;
const h3Item = document.createElement("h3");
h3Item.textContent = musee.nom;
item.appendChild(imageItem);
item.appendChild(h3Item);

containerMusee.appendChild(item);
}

// function btn() {
//     var x = document.getElementById("img");
//     if (x.style.display === "none") {
//       x.style.display = "block";
//     } else {
//       x.style.display = "none";
//     }
//   }