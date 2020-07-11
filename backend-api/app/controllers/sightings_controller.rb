class SightingsController < ApplicationController


    def show
        sighting = Sighting.find(params[:id])
        # render json: sighting, include: [:bird]
        render json: { id: sighting.id, date: sighting.date, bird: sighting.bird }
    end

    def create
        sighting = Sighting.create(sightings_params)
        if sighting.valid?
            render json: sighting
        else
            render json: {error: "Sighting not valid"}
        end
    end

    private

    def sightings_params
        params.require(:sighting).permit(:date, :bird_id)
    end
end
