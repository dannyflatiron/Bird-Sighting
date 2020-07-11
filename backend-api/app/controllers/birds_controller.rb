class BirdsController < ApplicationController

    def index
        birds = Bird.all
        render json: birds
    end

    def create
        bird = Bird.create(bird_params)
        if bird.save
            render json: bird
        else
            render json: {error: "Please submit name and species for bird"}
        end
    end

    def show
        bird = Bird.find(params[:id])
        render json: bird
    end

    private

    def bird_params
        params.require(:bird).permit(:name, :species)
    end
    
end
