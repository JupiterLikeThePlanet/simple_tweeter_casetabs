Rails.application.routes.draw do


  Rails.application.routes.draw do
    root to: 'site#index'
    namespace :api do
      namespace :v1 do
        resources :tweets, only: [:index, :show]
      end
    end
  end

end
