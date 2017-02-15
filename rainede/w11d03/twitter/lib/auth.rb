require 'jwt'

class Auth
  def self.encode(payload, expiry_in_minutes =60*24*30)
    payload[:exp] = expiry_in_minutes.from_now.to_i
    JWT.encode(payload, auth_secret, 'HS256', ALGORITHM)
  end

  def self.decode(token, leeway = 0)
    decoded = JWT.decode(token, auth_secret, true, { leeway: leeway, algorithm: ALGORITHM})
    HashWithIndifferentAccess.new(decode[0])
  end

  def self.auth_secret
     ENV("AUTH_SECRET")
  end

end
