class Accordion {
  private rootElement: HTMLElement;
  private buttonElement: HTMLButtonElement;
  private contentElement: HTMLElement | null;
  private isOpen: boolean;

  constructor(domNode: HTMLElement) {
    this.rootElement = domNode;
    this.buttonElement = this.rootElement.querySelector('button[aria-expanded]') as HTMLButtonElement;

    const controlsId = this.buttonElement.getAttribute('aria-controls');
    this.contentElement = controlsId ? document.getElementById(controlsId) as HTMLElement : null;

    this.isOpen = this.buttonElement.getAttribute('aria-expanded') === 'true';

    // add event listeners
    this.buttonElement.addEventListener('click', this.onButtonClick.bind(this));
  }

  private onButtonClick() {
    this.toggle(!this.isOpen);
  }

  private toggle(isOpen: boolean) {
    // don't do anything if the open state doesn't change
    if (isOpen === this.isOpen) {
      return;
    }

    // update the internal state
    this.isOpen = isOpen;

    // handle DOM updates
    this.buttonElement.setAttribute('aria-expanded', `${isOpen}`);
    if (this.contentElement) {
      if (isOpen) {
        this.contentElement.removeAttribute('hidden');
      } else {
        this.contentElement.setAttribute('hidden', '');
      }
    }
  }

  // Add public open and close methods for convenience
  public open() {
    this.toggle(true);
  }

  public close() {
    this.toggle(false);
  }
}

export default Accordion;
