class PackageSerializer < ActiveModel::Serializer
  attributes :id, :time_checkin, :time_pickup, :barcode, :owner_id, :processor_id
end
