class Api::V1::TweetsController < ApplicationController

  respond_to :json

  require 'twitter'


  # consumer_api_key = ENV["CONSUMER_API_KEY"]
  # consumer_api_secret = ENV["CCONSUMER_API_SECRET"]
  #
  # access_token = ENV["ACCESS_TOKEN"]
  # access_token_secret = ENV["ACCESS_TOKEN_SECRET"]


  def index
    p "*"*100
    p Rails.application.secrets.consumer_api_key
    p Rails.application.secrets.consumer_api_secret
    p Rails.application.secrets.access_token
    p Rails.application.secrets.access_token_secret
    p "*"*100

    @client = Twitter::REST::Client.new do |config|

      config.consumer_key        = ENV['CONSUMER_API_KEY']
      config.consumer_secret     = ENV['CONSUMER_API_SECRET']
      config.access_token        = ENV['ACCESS_TOKEN']
      config.access_token_secret = ENV['ACCESS_TOKEN_SECRET']

      # config.consumer_key        = CONSUMER_API_KEY
      # config.consumer_secret     = CONSUMER_API_SECRET
      # config.access_token        = ACCESS_TOKEN
      # config.access_token_secret = ACCESS_TOKEN_SECRET

      # config.consumer_key        = Rails.application.secrets.consumer_api_key
      # config.consumer_secret     = Rails.application.secrets.consumer_api_secret
      # config.access_token        = Rails.application.secrets.access_token
      # config.access_token_secret = Rails.application.secrets.access_token_secret

    end

    @tweets = @client.user_timeline('jupiterbaudot', count: 20)

    @tweets_arr = []

    @tweets.each { |tweet|  @tweets_arr << tweet }



    respond_with :api, :v1, (@tweets_arr)

  end

  def show



    @client = Twitter::REST::Client.new do |config|

      config.consumer_key        = ENV['CONSUMER_API_KEY']
      config.consumer_secret     = ENV['CONSUMER_API_SECRET']
      config.access_token        = ENV['ACCESS_TOKEN']
      config.access_token_secret = ENV['ACCESS_TOKEN_SECRET']

    end


    @tweets = @client.user_timeline(@user, count: 20)

    @tweets_arr = []

    @tweets.each { |tweet|  @tweets_arr << tweet }


    respond_with :api, :v1, (@tweets_arr)

  end



end
