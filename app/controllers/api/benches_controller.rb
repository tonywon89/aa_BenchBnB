class Api::BenchesController < ApplicationController
  def index
    @benches = Bench.in_bounds(params[:bounds])
  end

  def create
    parsed_params = {}

    bench_params.each do |key, value|
      if key === "description"
        parsed_params[key] = value
      elsif key === "seating"
        parsed_params[key] = value.to_i
      else
        parsed_params[key] = value.to_f
      end
    end

    @bench = Bench.create(parsed_params)
    render :index
  end

  private

  def bench_params
    params.require(:bench).permit(
      :description,
      :seating,
      :lat,
      :lng
    )
  end


end
