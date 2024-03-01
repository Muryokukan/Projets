class FavorisMusee{
    constructor(image, nom){
        this.image = image;
        this.nom = nom;
    }
}

const Favorismusees = [
    new FavorisMusee("Moulins.jpg", "Le musée des Moulins"),
    new FavorisMusee("imgChateauFlers.jpeg", "Le musée du Château de Flers"),
    new FavorisMusee("imgPiscineRoubaix.jpg", "La piscine de Roubaix"),
]

const containerFavorisMusee = document.getElementById("favorismusees");

for (const FavorisMusee of Favorismusees) {

const item = document.createElement("div");
item.classList.add("item");
const imageItem = document.createElement("img");
imageItem.src = `../Images/${FavorisMusee.image}`;
const h3Item = document.createElement("h3");
h3Item.textContent = FavorisMusee.nom;
item.appendChild(imageItem);
item.appendChild(h3Item);

containerFavorisMusee.appendChild(item);
}