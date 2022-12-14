Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: "users/sessions",
    registrations: "users/registrations",
  }
  root to: "homes#top"
  get "homes/about", as: "about"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
