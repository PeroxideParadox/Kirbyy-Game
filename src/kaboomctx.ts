import kaboom from "kaboom";
import { scale } from "./constants";

export const k=kaboom({
    width:256*scale,
    height:144*scale,
    scale, // Done just to Fix the bug with Kaboom js
    letterbox:true, // so that the canvas scale irespective of the screen size 
    global:false // so that all the kaboom functions are only accessed using this const k 
})