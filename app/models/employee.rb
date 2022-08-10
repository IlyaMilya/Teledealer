class Employee < ApplicationRecord
    has_many :deals 
    has_many :leads, through: :deals

    has_secure_password
end
