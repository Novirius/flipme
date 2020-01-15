# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all!
Folder.destroy_all!
Deck.destroy_all!
Card.destroy_all!

user1 = User.create(username: "chris", email: "chris@gmail.com", password:"chris123")

folder1 = Folder.create(title: "first title", description:"this is from first title description", author_id: 1)
folder2 = Folder.create(title: "second title", description:"this is from second title description", author_id: 1)
folder3 = Folder.create(title: "third title", description:"this is from third title description", author_id: 1)

deck1 = Deck.create(title: "myseconddeck", author_id: 1, sub_category_id: 1)

card2 = Card.create(  
    front_text: "front of card2",
    back_text: "back of card2",
    front_image: "front image2",
    back_image: "back image2",
    deck_id: 1,
    author_id: 1
    )