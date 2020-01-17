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

user2 = User.create(username: "carol", email: "carol@gmail.com", password:"carol123")


folder1 = Folder.create(title: "first title", description:"this is from first title description", author_id: user1.id)
folder2 = Folder.create(title: "second title", description:"this is from second title description", author_id: user1.id)
folder3 = Folder.create(title: "third title", description:"this is from third title description", author_id: user1.id)

category1 = Category.create(name: "Science")
subcategory1 = SubCategory.create(name: "Biology", category_id: category1.id)

deck1 = Deck.create(title: "my first deck", author_id: user1.id, sub_category_id: subcategory1.id)

deck2 = Deck.create(title: "second deck", author_id: user1.id, sub_category_id: subcategory1.id)


deck3 = Deck.create(title: "sanban deck", author_id: user2.id, sub_category_id: subcategory1.id)

deck4 = Deck.create(title: "quatro deck", author_id: user1.id, sub_category_id: subcategory1.id)


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
    front_image: "front_image3",
    back_image: "back image3",
    deck_id: deck1.id,
    author_id: user1.id
    )


    card4 = Card.create(  
        front_text: "front of card1",
        back_text: "back of card1",
        front_image: "https://cdn.discordapp.com/emojis/580596678462013450.gif?v=1",
        back_image: "back image1",
        deck_id: deck2.id,
        author_id: user1.id
        )
    card5 = Card.create(  
        front_text: "front of card2",
        back_text: "back of card2",
        front_image: "front image2",
        back_image: "back image2",
        deck_id: deck2.id,
        author_id: user1.id
        )

        card6 = Card.create(  
            front_text: "front of card2",
            back_text: "back of card2",
            front_image: "https://cdn.discordapp.com/emojis/667654955317854218.gif?v=1",
            back_image: "back image2",
            deck_id: deck3.id,
            author_id: user2.id
            )


            card5 = Card.create(  
                front_text: "front of card2",
                back_text: "back of card2",
                front_image: "front_image",
                back_image: "back image2",
                deck_id: deck4.id,
                author_id: user1.id
                )