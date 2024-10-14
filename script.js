import { loginPage } from "./modules/loginpage.mjs";
import { DragAndDrop, allowDrop, drop } from "./modules/drangAndDrop.mjs";
import { Logout } from "./modules/Logout.mjs";
loginPage();
DragAndDrop();
Logout();
window.allowDrop = allowDrop;
window.drop = drop;
