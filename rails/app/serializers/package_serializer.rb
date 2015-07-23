class PackageSerializer < ActiveModel::Serializer
  attributes :id, :time_checkin, :time_pickup, :barcode, :processor, :owner
end
