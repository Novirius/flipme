class DeckJoinFolder < ApplicationRecord
    validates :deck_id, presence: true
    validates :folder_id, presence: true

    belongs_to :deck
    belongs_to :folder

end
