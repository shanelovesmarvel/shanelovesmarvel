import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ selector: '[highlightStar]' })
export class HighlightDirective {
    constructor(private eleRef: ElementRef) { }

    private hightlight(color: string) {
        this.eleRef.nativeElement.style.backgroundColor = color;
    }

    @HostListener('mouseenter')
    onMouseEnter(): void {
        this.hightlight("yellow");
    }

    @HostListener('mouseleave')
    onMouseLeave(): void {
        this.hightlight(null);
    }
}