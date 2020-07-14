Rails.application.routes.draw do
  resources :sightings
  resources :birds do 
    resources :sightings
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
