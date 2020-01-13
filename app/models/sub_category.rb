class SubCategory < ApplicationRecord
    validates :name, presence: true
    validates :category_id, presence: true
    
    belongs_to :category, foreign_key: :category_id, class_name: :Category

    has_many :decks, through: :sub_category_id, class_name: :Deck
end
