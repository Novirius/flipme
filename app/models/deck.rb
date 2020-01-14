class Deck < ApplicationRecord
    validates :title, presence: true
    validates :author_id, presence: true
    validates :sub_category_id, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :sub_category,
        foreign_key: :sub_category_id,
        class_name: :SubCategory

    has_one :category,
    through: :sub_category,
    source: :category

    has_many :deck_join_folders, 
        foreign_key: :deck_id,
        class_name: :DeckJoinFolder

    has_many :folders, 
        through: :deck_join_folders, 
        source: :folder

    has_many :cards, foreign_key: :deck_id, class_name: :Card
end
