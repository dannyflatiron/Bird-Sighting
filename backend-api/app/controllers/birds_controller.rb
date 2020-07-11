class BirdsController < ApplicationController

    def index
        birds = Bird.all
        render json: birds
    end

    def create
        bird = Bird.create(bird_params)
        if bird.valid?
            render json: bird
        else
            render json: {error: "Bird doesn't exist"}
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
