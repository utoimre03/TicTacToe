export default class Elem {

    #ertek=" "
    #szuloElem;
    #divElem;
    #id = 0;

    constructor(id, ertek, szuloElem) {
        this.#id = id;
        this.#ertek = ertek;
        this.#szuloElem = szuloElem
        this.#megjelenit();
        /* RÁKATTINTUNK AZ ELEMRE */
        this.#divElem = this.#szuloElem.children("div:last-child");
        //console.log(this.#divElem)
        //console.log(this)
        this.#divElem.on("click", () => {
            if (this.#ertek == " ") {
                this.#esemenyTrigger("lepes");
            }
        })
    }
    
    /* Egy osztályban a "this" egy konkrét objektumpéldányt jelent, de egy eseménykezelőben function(nevtelen) függvénnyel használva azt a html elemet jelenti, amelyik az eseményt kiváltotta (event target), nyílt függvénnyel használva pedig az objektumpéldányra mutat */
    
    #megjelenit() {
        let txt=`<div><p>${this.#ertek}</p></div>`
        this.#szuloElem.append(txt)
    }

    /* információ átadás esemény esetén másik osztálynak */
    #esemenyTrigger(esemenyNev) {
        /* létrehoz egy saját eseményt esemenyNev néven, s átad adatokat saját magáról {detail: } */
        const e=new CustomEvent(esemenyNev, {detail:this.#id})
        window.dispatchEvent(e);
    }
}