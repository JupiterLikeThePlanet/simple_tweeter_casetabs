def zero_count(num)

  binary_array = num.to_s(2).split('1') #.map! { |x| x.to_i }

  longest = binary_array.max_by(&:length).length

  return longest


end


p zero_count(100)