def friend(friends)
  friends.map { |friend| friend if friend.length == 4 }.compact
end

p friend(%w[Ryan Kieran Mark])
