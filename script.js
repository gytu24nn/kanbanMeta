import { loginPage } from "./modules/loginpage.mjs"; 
import { DragAndDrop, allowDrop, drop  } from "./modules/drangAndDrop.mjs";
loginPage();

DragAndDrop(); 
window.allowDrop = allowDrop;
window.drop = drop;