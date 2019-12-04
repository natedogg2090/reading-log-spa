# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

maddow = Author.create(:name => "Rachel Maddow")
ep = Author.create(:name => "David Epstein")
tewks = Author.create(:name => "Bob Tewksbury")
bb = Author.create(:name => "Bill Browder")
liu = Author.create(:name => "Cixin Liu")


blowout = Book.new(:title => "Blowout", :summary => "Connecting the geo politics of oil and gas to some of the obscure relationships and behavior of our politicians")
range = Book.new(:title => "Range", :summary => "Explores the question of whether or not early specialization actually needs to more innovation and successful individuals")
ninety = Book.new(:title => "90 percent mental", :summary => "Peak performance and the mental aspects of baseball")
red = Book.new(:title => "Red Notice", :summary => "What it's like to go toe-to-toe with Vladimir Putin in post Soviet Russia")
death = Book.new(:title => "Death's End", :summary => "The fate of the galaxy")

blowout.author_id = maddow.id
blowout.save

range.author_id = ep.id
range.save

ninety.author_id = tewks.id
ninety.save

red.author_id = bb.id
red.save

death.author_id = liu.id
death.save