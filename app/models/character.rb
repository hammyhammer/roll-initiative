class Character < ApplicationRecord
  belongs_to :user
  has_many :stats, dependent: :destroy
end
