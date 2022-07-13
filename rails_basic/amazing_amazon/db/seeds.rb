# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Product.destroy_all
Review.destroy_all
User.destroy_all

password = '123'
10.times do 
    first_name = Faker::Name.first_name
    last_name = Faker::Name.last_name
    User.create(first_name: first_name, last_name: last_name, email: "#{first_name+last_name}@gmail.com",password: password)
end

users = User.all

35.times do
    created_at = Faker::Date.backward(days:365 * 5)
 
    p = Product.create(
        title: Faker::Beer.name,
        description: Faker::Food.description,
        price: Faker::Commerce.price,
        created_at: created_at,
        updated_at: created_at,
        user: users.sample
    )
    if p.valid?
        rand(1..5).times do 
            Review.create(body: Faker::Hacker.say_something_smart,rating: rand(1..5), product:p, user: users.sample)
        end
    end
end

products = Product.all
reviews = Review.all
p "created #{products.count} products"
p "created #{reviews.count} reviews"
p "created #{users.count} users"