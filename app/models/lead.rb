class Lead < ApplicationRecord
    has_many :deals
    has_many :employees, through: :deals
end
