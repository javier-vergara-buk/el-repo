export interface Component {
  calculatePrice(): number;
}

export class Plan implements Component {
  constructor(public name: string, public price: number) {}

  calculatePrice(): number {
    return this.price;
  }
}

export class Pack implements Component {
  private components: Component[] = [];

  addComponent(component: Component): void {
    this.components.push(component);
  }

  calculatePrice(): number {
    let totalPrice = 0;

    for (const component of this.components) {
      totalPrice += component.calculatePrice();
    }

    return totalPrice;
  }
}
