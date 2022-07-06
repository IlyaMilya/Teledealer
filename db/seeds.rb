# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


m1 = Manager.create(full name: "Future Hendrix" , email: "toxcity@gmail.com" , password_digest: "hotboysummer"  )
m2 = Manager.create(full name: "Kendrick Lamar", email: "tde@aol.com", password_digest: "highpower"  )

p "MANAGERS seeded"

e1 = Employee.create(full name:"Greg Heffley" , email: "wimpykid@gmail.com" , password_digest: "password", manager: m1.id )
e2 = Employee.create(full name:"Rodrick Heffley" , email: "rockerboy@aol.com", password_digest: "mybandsucks", manager: m1.id )
e3 = Employee.create(full name:"Harry Potter" , email: "hogwartsdude@gmail.com", password_digest: "voldemortsugly", manager: m2.id )
e4 = Employee.create(full name: , email: "", password_digest: "", manager: m2.id)

p "EMPLOYEES seeded"

d1 = Deal.create(client_name: , client_company: , client_email: , yearly_income: , loan_amount: , employee: e1.id, manager: e1.manager  , comment: ,date_opened: , status: )
d2 = Deal.create(client_name: , client_company: , client_email: , yearly_income: , loan_amount: , employee: , manager: , comment: ,date_opened: , status: )
d3 = Deal.create(client_name: , client_company: , client_email: , yearly_income: , loan_amount: , employee: , manager: , comment: ,date_opened: , status: )
d4 = Deal.create(client_name: , client_company: , client_email: , yearly_income: , loan_amount: , employee: , manager: , comment: ,date_opened: , status: )
d5 = Deal.create(client_name: , client_company: , client_email: , yearly_income: , loan_amount: , employee: , manager: , comment: ,date_opened: , status: )
d6 = Deal.create(client_name: , client_company: , client_email: , yearly_income: , loan_amount: , employee: , manager: , comment: ,date_opened: , status: )
