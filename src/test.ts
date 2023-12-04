import { Plan, Pack } from "./main"; // Ajusta la ruta según la estructura de tu proyecto

// refactoriza usando composite para que pueda agregar "componentes" no importando si
// son packs o planes

describe("Pack Price Calculation", () => {
  it("should calculate the correct price for Mega Hogar Pack", () => {
    const tvPlan = new Plan("TV Hogar", 30);
    const internetPlan = new Plan("Internet Hogar", 50);

    const hogarPack = new Pack();
    hogarPack.addComponent(tvPlan);
    hogarPack.addComponent(internetPlan);

    const telefoniaPlan = new Plan("Telefonía Hogar", 40);

    const megaHogarPack = new Pack();
    megaHogarPack.addComponent(hogarPack); // no puedo ageragar Packs a addPlan
    megaHogarPack.addComponent(telefoniaPlan); // no puedo ageragar Packs a addPlan

    const totalPrice = megaHogarPack.calculatePrice();

    expect(totalPrice).toBe(120); // TV Hogar ($30) + Internet Hogar ($50) + Telefonía Hogar ($40) = $120
  });
});
