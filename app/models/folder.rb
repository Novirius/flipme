class Folder < ApplicationRecord
    validates :title, presence: true
    validates :author_id, presence: true

    belongs_to :user,
    class_name: :User,
    foreign_key: :author_id


end
