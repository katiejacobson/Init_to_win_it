export default class popup{
constructor({popup}){
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseButton = this._popupElement.querySelector('close_popup')
}


open(){
    this._popupElement.classList.add('open_popup');
    document.addEventListener('keydown', this._closeByEscape )
}
close(){
    this._popupElement.classList.add('open_popup');
    document.addEventListener('keydown', this._closeByEscape)
}

_closeByEscape=(evt)=>{
    if (evt.key==="Escape"){
        this.close()
    }
}
setEventListeners(){
    this._popupElement.addEventListener("click",(evt)=>{
        if(evt.target === this._popupCloseButton || evt.target=== this._popupElement){
            this.close();
        }
    })
}
}
 