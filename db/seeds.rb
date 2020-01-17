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

deck4 = Deck.create(title: "another deck!", author_id: user1.id, sub_category_id: subcategory1.id)


card1 = Card.create(  
    front_text: "Lorem Ipsum",
    back_text: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    front_image: "https://66.media.tumblr.com/87be4e084ef065906c9e667e972bb2b9/tumblr_nvany6VSZM1uzwbyjo3_500.gifv",
    back_image: "back image1",
    deck_id: deck1.id,
    author_id: user1.id
    )
card2 = Card.create(  
    front_text: "Why do we use it?",
    back_text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    front_image: "front image2",
    back_image: "back image2",
    deck_id: deck1.id,
    author_id: user1.id
    )
card3 = Card.create(  
    front_text: "Where does it come from?",
    back_text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ",
    front_image: "front_image3",
    back_image: "back image3",
    deck_id: deck1.id,
    author_id: user1.id
    )


    card4 = Card.create(  
        front_text: "Charles Darwin's personal pet tortoise",
        back_text: "She outlived her adopter by 124 years, ultimately making it to a whopping 176 years old.",
        front_image: "https://cdn.discordapp.com/emojis/580596678462013450.gif?v=1",
        back_image: "back image1",
        deck_id: deck2.id,
        author_id: user1.id
        )
    card5 = Card.create(  
        front_text: "The average person will spend six months of their life",
        back_text: "waiting for red lights to turn green",
        front_image: "front image2",
        back_image: "back image2",
        deck_id: deck2.id,
        author_id: user1.id
        )

        card6 = Card.create(  
            front_text: "A bolt of lightning contains enough energy to toast ",
            back_text: "100,000 slices of bread",
            front_image: "https://cdn.discordapp.com/emojis/667654955317854218.gif?v=1",
            back_image: "back image2",
            deck_id: deck3.id,
            author_id: user2.id
            )


            card7 = Card.create(  
                front_text: "Cherophobia",
                back_text: "the irrational fear of being happy",
                front_image: "https://cdn.discordapp.com/emojis/580600324595777558.gif?v=1", 
                back_image: "back image2",
                deck_id: deck4.id,
                author_id: user1.id
                )
            card8 = Card.create(  
                front_text: "There's a bridge exclusively for squirrels.",
                back_text: "Netherlands officials built a rodent-only bridge. While it may have been a kind-hearted gesture, it might not have been the most economically sensible one: costing £120,000",
                front_image: "https://cdn.discordapp.com/emojis/583685356818268160.png?v=1",
                back_image: "back image2",
                deck_id: deck4.id,
                author_id: user1.id
                )