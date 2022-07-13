class User < ApplicationRecord
    # scope :search ->(search_term){where("first_name ILIKE ? or last_name ILIKE ? or email ILIKE ?", '#{search_term}','#{search_term}','#{search_term}')}

    has_secure_password
    has_many :products, dependent: :nullify   
    has_many :reviews, dependent: :nullify
end

