puts 'Seeding...'

User.destroy_all
User.create(name: Faker::StarWars.character, email: Faker::Internet.free_email, password: Faker::Internet.password)
User.create(name: Faker::StarWars.character, email: Faker::Internet.free_email, password: Faker::Internet.password)
User.create(name: Faker::StarWars.character, email: Faker::Internet.free_email, password: Faker::Internet.password)

Skill.destroy_all
Skill.create(name: Faker::ProgrammingLanguage.name)
Skill.create(name: Faker::ProgrammingLanguage.name)
Skill.create(name: Faker::ProgrammingLanguage.name)
Skill.create(name: Faker::ProgrammingLanguage.name)
Skill.create(name: Faker::ProgrammingLanguage.name)