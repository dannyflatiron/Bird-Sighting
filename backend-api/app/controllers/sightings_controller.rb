class SightingsController < ApplicationController

    def index
        sighting = Sighting.all
        render json: sighting
    end

    def show
        sighting = Sighting.find(params[:id])
        render json: { id: sighting.id, date: sighting.date, bird: sighting.bird }
    end

    def create
        sighting = Sighting.create(sightings_params)
        if sighting.save
            render json: sighting
        else
            render json: {message: sighting.errors.messages[:invalid]}
        end
<<<<<<< HEAD
=======
        # bird = Bird.find_by(id: params[:bird_id])
        # bird.sightings.build(sightings_params)
        # sighting = bird.sightings.last
>>>>>>> ad64065336cbcaee77b6acddb21552662c48feed
    end

    def destroy
        sighting = Sighting.find(params[:id])
        sighting.destroy
    end

    private

    def sightings_params
        params.require(:sighting).permit(:date, :bird_id)
    end
end
