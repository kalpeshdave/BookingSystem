Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: 'home#index'
  get 'movie/:id/seats_availability', to: 'bookings#index'

  namespace :api do
    namespace :v1 do
      resources :movies, only: [:index, :create, :destroy, :update]
      resources :seats, only: [:index]
    end
  end
end
