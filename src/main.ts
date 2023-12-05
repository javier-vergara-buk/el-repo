interface Price {
  calculatePrice(): number
}
export class Plan implements Price {
  constructor(public name: string, public price: number) {}

  calculatePrice(): number {
    return this.price;
  }
}

export class Pack implements Price {
  private plans: Plan[] = [];

  addPlan(plan: Plan): void {
    this.plans.push(plan);
  }

  calculatePrice(): number {
    return this.plans.reduce((a, b) => a + b.calculatePrice(), 0)
  }
}
