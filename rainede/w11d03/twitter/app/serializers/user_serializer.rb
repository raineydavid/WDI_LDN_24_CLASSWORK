class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :full_name

  # def full_name
  #   "#{object.first_name} #{object.last_name}"
  # end
end
