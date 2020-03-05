class Deck < ApplicationRecord
    validates :title, presence: true
    validates :author_id, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    has_many :deck_join_folders, 
        foreign_key: :deck_id,
        class_name: :DeckJoinFolder

    has_many :folders, 
        through: :deck_join_folders, 
        source: :folder

    has_many :cards, foreign_key: :deck_id, class_name: :Card
end
