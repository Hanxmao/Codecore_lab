class User < ApplicationRecord
    scope :search ->(search_term){where("first_name ILIKE ? or last_name ILIKE ? or email ILIKE ?", '#{search_term}','#{search_term}','#{search_term}')}
end
