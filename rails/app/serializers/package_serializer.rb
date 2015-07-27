class PackageSerializer < ActiveModel::Serializer
  attributes :id, :time_checkin, :picked_up, :barcode, :owner_id, :processor_id
end
