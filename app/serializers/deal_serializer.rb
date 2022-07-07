class DealSerializer < ActiveModel::Serializer
  attributes :id, :client_name, :client_email, :yearly_income, :loan_amount, :employee_id, :comment, :date_opened
  has_one :employee
  has_one :lead
end
