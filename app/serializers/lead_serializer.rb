class LeadSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :email, :phone_number
end
