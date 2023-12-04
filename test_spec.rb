require_relative 'main'

describe 'Pack Price Calculation' do
  it 'should calculate the correct price for Mega Hogar Pack' do
    tv_plan = Plan.new('TV Hogar', 30)
    internet_plan = Plan.new('Internet Hogar', 50)

    hogar_pack = Pack.new
    hogar_pack.add_plan(tv_plan)
    hogar_pack.add_plan(internet_plan)

    telefonia_plan = Plan.new('Telefonía Hogar', 40)

    mega_hogar_pack = Pack.new
    mega_hogar_pack.add_plan(hogar_pack)
    mega_hogar_pack.add_plan(telefonia_plan)

    total_price = mega_hogar_pack.calculate_price

    # Ajusta el valor esperado según el cálculo manual del precio
    expect(total_price).to eq(120) # TV Hogar ($30) + Internet Hogar ($50) + Telefonía Hogar ($40) = $120
  end
end
