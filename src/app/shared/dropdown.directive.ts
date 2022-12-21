import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector:"[appDropdownDirective]"
})

export class appDropdownDirective{
    constructor(private eleRef: ElementRef){

    }
    @HostBinding('class.open') isOpen = false;
    @HostListener('document:click', ['$event']) toggleOpen(event : Event){
        this.isOpen = this.eleRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }
}