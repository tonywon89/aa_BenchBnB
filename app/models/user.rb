class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true

  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token

  attr_reader: password

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password).to_s
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def self.generate_session_token
    loop do
      token = SecureRandom.urlsafe_base64(16)
      return token unless User.exists?(session_token: token)
    end
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    save!
    session_token
  end

  def self.find_by_credentials(nickname, password)
    user = User.find_by(nickname: nickname )

    user && user.is_password?(password) ? user : nil
  end
end
