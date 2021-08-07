import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[tooltip]'
})
export class TooltipDirective implements OnInit {
    tooltip: HTMLElement;

    @Input("tooltip") tooltipTitle: string;
    delay = 1000;

    constructor(private el: ElementRef, private renderer: Renderer2) {}

    ngOnInit() {
        this.tooltip = this.renderer.createElement("span");
        this.tooltip.setAttribute("id", this.tooltipTitle);
        this.tooltip.setAttribute("name", "tooltip");
        this.tooltip.innerHTML = this.tooltipTitle;
    }

    @HostListener("mouseover") onMouseEnter() {
        this.showTooltip();
        setTimeout(() => {
            this.hidetooltip();
        }, this.delay);
    }

    @HostListener("mouseleave") onMouseLeave() {
        this.hidetooltip();
    }

    showTooltip() {
        const hostPos = this.el.nativeElement.getBoundingClientRect();
        let top, left;

        top = hostPos.bottom;
        left = hostPos.left + hostPos.width / 2;
        this.renderer.setStyle(this.tooltip, "top", `${top-18.5}px`);
        this.renderer.setStyle(this.tooltip, "left", `${left+13}px`);

        this.renderer.appendChild(document.body, this.tooltip);
        this.renderer.addClass(this.tooltip, "tooltip");
        this.renderer.addClass(this.tooltip, "tooltip_show");
    }

    hidetooltip() {
        this.renderer.removeClass(this.tooltip, "tooltip_show");
    }
}