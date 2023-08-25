class SeguroSalud
  def initialize(tipo, edad)
    @tipo = tipo
    @edad = edad
  end

  def calcular_cobertura
    case @tipo
    when "Oncologico"

      if @edad >= 30 && @edad <= 60
        return 0.8
      elsif @edad > 60
        return 0.5 
      else
        puts "Edad no válida"
      end
    when "Accidentes"

      if @edad >= 35 && @edad <= 65
        return 0.7
      elsif @edad > 65
        return 0.6 
      else
        puts "Edad no válida"
      end
    when "Hospitalizaciones"

      if @edad >= 40 && @edad <= 80 
        return 0.5
      elsif @edad > 80 
        return 0.4 
      else
        puts "Edad no válida"
      end
    else
      puts "Tipo de seguro no válido"
    end
  end

end

def main
  if ARGV.length != 2
    puts "Uso: ruby programa.rb <tipo_de_seguro> <edad>"
    return
  end

  tipo_seguro = ARGV[0]
  edad = ARGV[1].to_i

  seguro = SeguroSalud.new(tipo_seguro, edad)
  cobertura = seguro.calcular_cobertura

  if cobertura
    puts "El porcentaje de cobertura para el seguro #{tipo_seguro} y la edad #{edad} es #{cobertura * 100}%"
  end
end

main if $PROGRAM_NAME == __FILE__
