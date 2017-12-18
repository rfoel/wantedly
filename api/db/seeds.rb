require 'database_cleaner'
puts 'Seeding...'

DatabaseCleaner.clean_with(
  :truncation,
  except: %w(ar_internal_metadata)
)
DatabaseCleaner.clean

(0..10).each do
  Skill.create(name: Faker::ProgrammingLanguage.name)
  Skill.create(name: Faker::Job.key_skill)
end

@user = User.create(name: "Rafael Franco", email: "rafael@franco.com", password: "rafael", avatar: UiFaces.face, occupation: Faker::Job.title, location: Faker::Address.city, bio: Faker::StarWars.quote)
@user.user_skills.create(skill_id: 3)
@user.user_skills.create(skill_id: 4)
@user.user_skills.create(skill_id: 5)
User.create(name: Faker::StarWars.character, email: Faker::Internet.free_email, password: Faker::Internet.password, avatar: UiFaces.face, occupation: Faker::Job.title, location: Faker::Address.city, bio: Faker::StarWars.quote)
User.create(name: Faker::StarWars.character, email: Faker::Internet.free_email, password: Faker::Internet.password, avatar: UiFaces.face, occupation: Faker::Job.title, location: Faker::Address.city, bio: Faker::StarWars.quote)