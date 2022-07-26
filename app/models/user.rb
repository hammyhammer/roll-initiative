class User < ApplicationRecord
  # include ActiveModel::SecurePassword

  has_many :characters, dependent: :destroy
  
  has_secure_password

  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
end
