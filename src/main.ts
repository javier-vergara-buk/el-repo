interface PricedComponent {
  calculatePrice(): number;
}

export class Plan implements PricedComponent {
  constructor(public name: string, public price: number) {}

  calculatePrice(): number {
    return this.price;
  }
}

export class Pack implements PricedComponent {
  private pricedComponents: PricedComponent[] = [];

  addComponent(plan: PricedComponent): void {
    this.pricedComponents.push(plan);
  }

  calculatePrice(): number {
    let totalPrice = 0;

    for (const plan of this.pricedComponents) {
      totalPrice += plan.calculatePrice();
    }

    return totalPrice;
  }
}
