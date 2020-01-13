class Category < ApplicationRecord
    validates :name, presence: true

    has_many :sub_categories, foreign_key: :category_id, class_name: :SubCategory

    has_many :decks, through: :sub_categories, source: :decks
end
