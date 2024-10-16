// Importerar de olika funktionerna
import {loginPage} from "./modules/loginpage.mjs";
import {DragAndDrop, allowDrop, drop} from "./modules/drangAndDrop.mjs";
import {Logout} from "./modules/Logout.mjs";

// Kallar på de importerade funktionerna för att initiera de
loginPage();
DragAndDrop();
Logout();

// Gör funktionerna tillgängliga på global nivå, alltså att de är tillgängliga överallt i programmet
window.allowDrop = allowDrop;
window.drop = drop;
