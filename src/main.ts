export class Plan {
  constructor(public name: string, public price: number) {}

  calculatePrice(): number {
    return this.price;
  }
}

export class Pack {
  private plans: Plan[] = [];

  addPlan(plan: Plan): void {
    this.plans.push(plan);
  }

  calculatePrice(): number {
    let totalPrice = 0;

    for (const plan of this.plans) {
      totalPrice += plan.calculatePrice();
    }

    return totalPrice;
  }
}

