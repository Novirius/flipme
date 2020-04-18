class User < ApplicationRecord
    # Include default devise modules. Others available are:
    # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
    devise :database_authenticatable, :registerable,
            :recoverable, :rememberable, :trackable, :validatable, :confirmable, :omniauthable, omniauth_providers: %i[facebook]
    
    validates :username, :password_digest, :session_token, presence: true
    validates :username, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    attr_reader :password
    
    after_initialize :ensure_session_token

    has_many :folders,
    foreign_key: :author_id,
    class_name: :Folder

    has_many :decks,
    foreign_key: :author_id,
    class_name: :Deck

    has_many :cards,
    foreign_key: :author_id,
    class_name: :Card

    has_many :authorizations, :dependent => :destroy

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def self.username_is_taken?(username)
        user = User.find_by(username: username)
        if user 
            return ["Sorry, that username is taken"]
        else
            return ["#{username} is available"]
        end
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        generate_unique_session_token
        save!
        self.session_token
    end

    private

    def ensure_session_token
        generate_unique_session_token unless self.session_token
    end

    def new_session_token
        SecureRandom.urlsafe_base64
    end

    def generate_unique_session_token
        self.session_token = new_session_token
        while User.find_by(session_token: self.session_token)
            self.session_token = new_session_token
        end
        self.session_token
    end
end
