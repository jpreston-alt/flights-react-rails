class Airline < ApplicationRecord
    has_many :reviews
    before_create :slugify

    # create a url safe version of the name
    def slugify
        self.slug = name.parameterize
    end

    def avg_score
        reviews.average(:score).round(2).to_f
    end
end
