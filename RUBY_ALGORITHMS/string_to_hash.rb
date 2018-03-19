def make_hash(full_string)

  h = {}

  keys = full_string.scan(/\w+:/).map! {|x| x.gsub!(/[:]/,'')}.take 2
  #Convert "5" to 5
  keys[1] = keys[1].to_i

  #gets first value
  firstVal = full_string.match "(\\[.+\\]\\])"
  # turn array into strings within array


  #gets second value
  pm = /(\d+)(\d)/.match(full_string)
  post = pm.post_match
  secondVal = pm[0] + post
  secondVal.gsub!(/[\]}]/,'')

  #set value array
  values = [firstVal[1], secondVal]

  #set key value pairs
  keys.each_with_index.map { |x,i| h[x] = values[i] }

  return h

end

make_hash("{key:[[value_1, value_2],[value_3, value4]], 5:10:00AM]}")



