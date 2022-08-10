class EmployeeSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :email, :password_digest

  has_many :deals
  has_many :leads

 

end
