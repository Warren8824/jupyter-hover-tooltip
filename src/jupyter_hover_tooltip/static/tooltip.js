export class TooltipManager {
    constructor() {
        this.tooltip = null;
    }

    createTooltip(content) {
        // Remove existing tooltip if any
        this.removeTooltip();

        // Create tooltip element
        this.tooltip = document.createElement('div');
        this.tooltip.className = 'jupyter-tooltip';
        this.tooltip.innerHTML = content;

        document.body.appendChild(this.tooltip);
        return this.tooltip;
    }

    positionTooltip(event, tooltip) {
        const padding = 10;
        tooltip.style.left = `${event.pageX + padding}px`;
        tooltip.style.top = `${event.pageY + padding}px`;
    }

    removeTooltip() {
        if (this.tooltip && this.tooltip.parentElement) {
            this.tooltip.parentElement.removeChild(this.tooltip);
        }
        this.tooltip = null;
    }
}