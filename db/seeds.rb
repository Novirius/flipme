# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Folder.destroy_all
Deck.destroy_all
Card.destroy_all

user1 = User.create(username: "chris", email: "chris@gmail.com", password:"chris123")

folder1 = Folder.create(title: "first title", description:"this is from first title description", author_id: user1.id)
folder2 = Folder.create(title: "second title", description:"this is from second title description", author_id: user1.id)
folder3 = Folder.create(title: "third title", description:"this is from third title description", author_id: user1.id)

deck1 = Deck.create(title: "myseconddeck", author_id: user1.id, sub_category_id: 1)

card1 = Card.create(  
    front_text: "front of card1",
    back_text: "back of card1",
    front_image: "https://66.media.tumblr.com/87be4e084ef065906c9e667e972bb2b9/tumblr_nvany6VSZM1uzwbyjo3_500.gifv",
    back_image: "back image1",
    deck_id: deck1.id,
    author_id: user1.id
    )
card2 = Card.create(  
    front_text: "front of card2",
    back_text: "back of card2",
    front_image: "front image2",
    back_image: "back image2",
    deck_id: deck1.id,
    author_id: user1.id
    )
card3 = Card.create(  
    front_text: "front of card3",
    back_text: "back of card3",
    front_image: "front image3",
    back_image: "back image3",
    deck_id: deck1.id,
    author_id: user1.id
    )