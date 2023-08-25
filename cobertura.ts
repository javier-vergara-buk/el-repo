class SeguroSalud {
  tipo: string;
  edad: number;

  constructor(tipo: string, edad: number) {
    this.tipo = tipo;
    this.edad = edad;
  }

  calcularCobertura(): number | undefined {
    switch (this.tipo) {
      case "Oncologico":
        if (this.edad >= 30 && this.edad <= 60) {
          return 0.8;
        } else if (this.edad > 60) {
          return 0.5;
        } else {
          console.log("Edad no válida");
        }
        break;
      case "Accidentes":
        if (this.edad >= 35 && this.edad <= 65) {
          return 0.7;
        } else if (this.edad > 65) {
          return 0.6;
        } else {
          console.log("Edad no válida");
        }
        break;
      case "Hospitalizaciones":
        if (this.edad >= 40 && this.edad <= 80) {
          return 0.5;
        } else if (this.edad > 80) {
          return 0.4;
        } else {
          console.log("Edad no válida");
        }
        break;
      default:
        console.log("Tipo de seguro no válido");
    }
  }
}

function main(): void {
  const args = process.argv.slice(2);

  if (args.length !== 2) {
    console.log("Uso: ts-node programa.ts <tipo_de_seguro> <edad>");
    return;
  }

  const tipoSeguro = args[0];
  const edad = parseInt(args[1]);

  const seguro = new SeguroSalud(tipoSeguro, edad);
  const cobertura = seguro.calcularCobertura();

  if (cobertura !== undefined) {
    console.log(`El porcentaje de cobertura para el seguro ${tipoSeguro} y la edad ${edad} es ${cobertura * 100}%`);
  }
}

if (require.main === module) {
  main();
}
