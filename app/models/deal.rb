class Deal < ApplicationRecord
  belongs_to :employee
  belongs_to :lead
end
