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

# Demo Users
user1 = User.create(username: "chris", email: "chris@gmail.com", password:"chris123")
user2 = User.create(username: "carol", email: "carol@gmail.com", password:"carol123")

#Demo Folders
folder1 = Folder.create(title: "Sample Folder", description:"this is how the description would look", author_id: user1.id)

#User 1's cards
deck1 = Deck.create(title: "Science", author_id: user1.id)
deck2 = Deck.create(title: "Anime", author_id: user1.id)
deck3 = Deck.create(title: "Language", author_id: user1.id)
deck4 = Deck.create(title: "Food", author_id: user1.id)
deck5 = Deck.create(title: "Tech", author_id: user1.id)

#User 2's cards
deck6 = Deck.create(title: "sanban deck", author_id: user2.id)


    #Deck 1 cards
    d1c1 = Card.create(  
        front_text: "What is boanthropy?",
        back_text: "A disorder that leads people to believe they're a bovine animal",
        front_image: "https://cdn.discordapp.com/emojis/583685356818268160.png?v=1",
        back_image: "back image1",
        deck_id: deck1.id,
        author_id: user1.id
        )
    d1c2 = Card.create(  
        front_text: "What is the only kind of parrot that can't fly?",
        back_text: "The Kakapo",
        front_image: "front image2",
        back_image: "back image2",
        deck_id: deck1.id,
        author_id: user1.id
        )
    d1c3 = Card.create(  
        front_text: "What is the scientific name for the fear of cooking?",
        back_text: "Mageirocophobia",
        front_image: "front_image3",
        back_image: "back image3",
        deck_id: deck1.id,
        author_id: user1.id
        )
    d1c4 = Card.create(  
        front_text: "What is the driest place on Earth?",
        back_text: "The Atacama Desert",
        front_image: "front_image3",
        back_image: "back image3",
        deck_id: deck1.id,
        author_id: user1.id
        )
    d1c5 = Card.create(  
        front_text: "Which country has the most fresh water?",
        back_text: "Brazil",
        front_image: "front image2",
        back_image: "back image2",
        deck_id: deck1.id,
        author_id: user1.id
        )
    d1c6 = Card.create(  
        front_text: "What animal name literally means pig-fish?",
        back_text: "Porpoise",
        front_image: "front_image3",
        back_image: "back image3",
        deck_id: deck1.id,
        author_id: user1.id
        )
    d1c7 = Card.create(  
        front_text: "Approximately how much does a single cloud weigh?",
        back_text: "1,100,000 lbs",
        front_image: "front_image3",
        back_image: "back image3",
        deck_id: deck1.id,
        author_id: user1.id
        )
    d1c8 = Card.create(  
        front_text: "Which tree's bark is used to produce aspirin?",
        back_text: "The white willow tree",
        front_image: "front image2",
        back_image: "back image2",
        deck_id: deck1.id,
        author_id: user1.id
        )
    d1c9 = Card.create(  
        front_text: "What are amorphous solids?",
        back_text: "Any noncrystalline solid in which the atoms and molecules are not organized in a definite lattice pattern. Such solids include glass, plastic, and gel.",
        front_image: "front_image3",
        back_image: "back image3",
        deck_id: deck1.id,
        author_id: user1.id
        )
    d1c10 = Card.create(  
        front_text: "Why is DNA a flame retardant?",
        back_text: "When heated, DNA's phosphate-containing backbone produces phosphoric acid, which chemically removes water. Thus, it leaves behind carbon-rich residue. Carbon suppresses flames by displacing oxygen.",
        front_image: "front_image3",
        back_image: "back image3",
        deck_id: deck1.id,
        author_id: user1.id
        )

    #Deck 2 cards
    d2c1 = Card.create(  
        front_text: "Which pokemon was originally intended to be Ash's starting pokemon?",
        back_text: "Clefairy",
        front_image: "https://cdn.discordapp.com/emojis/580596678462013450.gif?v=1",
        back_image: "back image1",
        deck_id: deck2.id,
        author_id: user1.id
        )
    d2c2 = Card.create(  
        front_text: "When was JoJo's Bizarre Adventure: Phantom Blood first released?",
        back_text: "1987",
        front_image: "front image2",
        back_image: "back image2",
        deck_id: deck2.id,
        author_id: user1.id
        )
    d2c3 = Card.create(  
        front_text: "Who created Spirited Away(2001)?",
        back_text: "Hayao Miyazaki",
        front_image: "front_image3",
        back_image: "back image3",
        deck_id: deck2.id,
        author_id: user1.id
        )
    d2c4 = Card.create(  
        front_text: "When was the first Yu-Gi-Oh manga released?",
        back_text: "1996",
        front_image: "front_image3",
        back_image: "back image3",
        deck_id: deck2.id,
        author_id: user1.id
        )
    d2c5 = Card.create(  
        front_text: "What was the name of the corgi in Cowboy Bebop?",
        back_text: "Ein (NA) /Ain (JP)",
        front_image: "front image2",
        back_image: "back image2",
        deck_id: deck2.id,
        author_id: user1.id
        )
    d2c6 = Card.create(  
        front_text: "What does \"Akasha\" refer to in Nasuverse lore?",
        back_text: "The root",
        front_image: "front_image3",
        back_image: "back image3",
        deck_id: deck2.id,
        author_id: user1.id
        )
    d2c7 = Card.create(  
        front_text: "In the Dragon Ball series, what is the name of Goku's brother?",
        back_text: "Raditz",
        front_image: "front_image3",
        back_image: "back image3",
        deck_id: deck2.id,
        author_id: user1.id
        )
    d2c8 = Card.create(  
        front_text: "This anime studio's president stepped down following a tax evasion scandal ",
        back_text: "Ufotable",
        front_image: "front image2",
        back_image: "back image2",
        deck_id: deck2.id,
        author_id: user1.id
        )
    d2c9 = Card.create(  
        front_text: "This voice actor played Kiritsugu from Fate/Stay Night, Yoshikage Kira from Jojo's Bizarre Adventure, and Yamato from Naruto",
        back_text: "RIKIYA KOYAMA",
        front_image: "front_image3",
        back_image: "back image3",
        deck_id: deck2.id,
        author_id: user1.id
        )
    d2c10 = Card.create(  
        front_text: "Who was the manga artist for Death Note?",
        back_text: "Takeshi Obata",
        front_image: "front_image3",
        back_image: "back image3",
        deck_id: deck2.id,
        author_id: user1.id
        )

    #Deck 3 cards
    d3c1 = Card.create(  
        front_text: "почемучка (Russian)",
        back_text: "A child who asks lots of questions",
        front_image: "https://cdn.discordapp.com/emojis/580600324595777558.gif?v=1",
        back_image: "back image1",
        deck_id: deck3.id,
        author_id: user1.id
        )
    d3c2 = Card.create(  
        front_text: "luftmensch (Yiddish)",
        back_text: "A dreamer; someone with no business savvy.",
        front_image: "front image2",
        back_image: "back image2",
        deck_id: deck3.id,
        author_id: user1.id
        )
    d3c3 = Card.create(  
        front_text: "撒娇 (Sājiāo) (Chinese)",
        back_text: "To throw a fit and to act childish to show how much you love someone",
        front_image: "front_image3",
        back_image: "back image3",
        deck_id: deck3.id,
        author_id: user1.id
        )
    d3c4 = Card.create(  
        front_text: "Politikerleden (Danish)",
        back_text: "Having disgust for politicians",
        front_image: "front_image3",
        back_image: "back image3",
        deck_id: deck3.id,
        author_id: user1.id
        )
    d3c5 = Card.create(  
        front_text: "Deppenfahrerbeaugung (German)",
        back_text: "When you want to turn around and glare at a bad driver you’ve just overtaken",
        front_image: "front image2",
        back_image: "back image2",
        deck_id: deck3.id,
        author_id: user1.id
        )
    d3c6 = Card.create(  
        front_text: "마주치다 (Korean)",
        back_text: "When you meet someone unexpectedly.",
        front_image: "front_image3",
        back_image: "back image3",
        deck_id: deck3.id,
        author_id: user1.id
        )
    d3c7 = Card.create(  
        front_text: "木漏れ日 (Japanese)",
        back_text: "The sunbeam through the leaves",
        front_image: "front_image3",
        back_image: "back image3",
        deck_id: deck3.id,
        author_id: user1.id
        )
    d3c8 = Card.create(  
        front_text: "Dar un toque (Spanish)",
        back_text: "To call a mobile phone and let it ring once before hanging up. Usually done to save money and signal some message.",
        front_image: "front image2",
        back_image: "back image2",
        deck_id: deck3.id,
        author_id: user1.id
        )
    d3c9 = Card.create(  
        front_text: "Gigil (Tagalog)",
        back_text: "Cuteness overload",
        front_image: "front_image3",
        back_image: "back image3",
        deck_id: deck3.id,
        author_id: user1.id
        )
    d3c10 = Card.create(  
        front_text: "L’esprit de l'escalier (French)",
        back_text: "When you think of the perfect retort too late",
        front_image: "front_image3",
        back_image: "back image3",
        deck_id: deck3.id,
        author_id: user1.id
        )



    #Deck 4 cards
    d4c1 = Card.create(  
        front_text: "A stroopwafel is a wafer cookie that originated in which European country?",
        back_text: "Netherlands",
        front_image: "https://cdn.discordapp.com/emojis/412748878102790155.gif?v=1",
        back_image: "back image1",
        deck_id: deck4.id,
        author_id: user1.id
        )
    d4c2 = Card.create(  
        front_text: "Norway was responsible for introducing what fish for raw consumption in Japan?",
        back_text: "Salmon",
        front_image: "front image2",
        back_image: "back image2",
        deck_id: deck4.id,
        author_id: user1.id
        )
    d4c3 = Card.create(  
        front_text: "The Hershey Company, commonly known as Hershey, was founded in which U.S. state?",
        back_text: "Pennsylvania",
        front_image: "front_image3",
        back_image: "back image3",
        deck_id: deck4.id,
        author_id: user1.id
        )
    d4c4 = Card.create(  
        front_text: "When used in the kitchen, sodium bicarbonate is more commonly known as what?",
        back_text: "Baking Soda",
        front_image: "front_image3",
        back_image: "back image3",
        deck_id: deck4.id,
        author_id: user1.id
        )
    d4c5 = Card.create(  
        front_text: "Halloumi is a brined cheese that originates from which Mediterranean island country?",
        back_text: "Cyprus",
        front_image: "front image2",
        back_image: "back image2",
        deck_id: deck4.id,
        author_id: user1.id
        )


    #Deck 5 cards
    d5c1 = Card.create(  
        front_text: "Which company dubbed the term 'GPU'?",
        back_text: "Nvidia",
        front_image: "https://cdn.discordapp.com/emojis/580612633892487179.png?v=1",
        back_image: "back image1",
        deck_id: deck5.id,
        author_id: user1.id
        )
    d5c2 = Card.create(  
        front_text: "OLED, the screen found on TVs and many mobile devices, stands for ...?",
        back_text: "Organic Light Emitting Diode",
        front_image: "front image2",
        back_image: "back image2",
        deck_id: deck5.id,
        author_id: user1.id
        )
    d5c3 = Card.create(  
        front_text: "How did Phoenix Technologies legally steal IBM's source code?",
        back_text: "They used a clean room design",
        front_image: "front_image3",
        back_image: "back image3",
        deck_id: deck5.id,
        author_id: user1.id
        )
    d5c4 = Card.create(  
        front_text: "Before making DRAM and putting RGB on everything, Corsair made this product...",
        back_text: "Level 2 cache modules",
        front_image: "front_image3",
        back_image: "back image3",
        deck_id: deck5.id,
        author_id: user1.id
        )
    d5c5 = Card.create(  
        front_text: "Why was the first webcam made?",
        back_text: "To keep track of whether a coffee pot was empty",
        front_image: "front image2",
        back_image: "back image2",
        deck_id: deck5.id,
        author_id: user1.id
        )

#Demo Folders with Decks
joins1 = DeckJoinFolder.create(deck_id: deck1.id, folder_id: folder1.id)