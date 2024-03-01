class Musee{
    constructor(image, nom){
        this.image = image;
        this.nom = nom;
    }
}

const musees = [
    new Musee("imgMaisonNataleCdg.jpg", "La maison natale de Charles de Gaulle"),
    new Musee("imgMuseePoupeeJouetAncien.jpg", "Le musée de la Poupée et du Jouet ancien"),
    new Musee("imgVillaCavrois.jpg", "La villa Cavrois"),
    new Musee("imgMuseeMoulins.jpg", "Le musée des Moulins"),
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