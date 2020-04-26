require 'rails_helper'

RSpec.describe Movie, :type => :model do
  let(:valid_attributes) {
    { title: "Test title!", summary: "This is a test description", year: 2018, genre: "Comedy" }
  }

  subject { described_class.new(valid_attributes) }

  it "is not valid with no attributes" do 
    expect(Movie.new).to_not be_valid
  end

  it "is valid with valid attributes" do 
    expect(subject).to be_valid
  end

  it "is not valid without a title" do 
    subject.title = nil
    expect(subject).to_not be_valid
  end
  it "is not valid without a summary" do 
    subject.summary = nil
    expect(subject).to_not be_valid
  end
  it "is not valid without a year" do
    subject.year = nil
    expect(subject).to_not be_valid
  end
  it "is not valid without a genre" do 
    subject.genre = nil
    expect(subject).to_not be_valid
  end
end