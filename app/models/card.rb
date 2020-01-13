class Card < ApplicationRecord
    validates :deck_id, presence: true
    validates :author_id, presence: true

    belongs_to :deck
    belongs_to :author, foreign_key: :author_id, class_name: :User
end
