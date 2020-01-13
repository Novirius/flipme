class Folder < ApplicationRecord
    validates :title, presence: true
    validates :author_id, presence: true

    belongs_to :author,
    class_name: :User,
    foreign_key: :author_id

    has_many :deck_join_folders, foreign_key: :folder_id, class_name: :DeckJoinFolder

    has_many :decks, through: :deck_join_folders, source: :deck

end
