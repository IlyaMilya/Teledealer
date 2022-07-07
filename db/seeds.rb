# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


# m1 = Manager.create(full name: "Future Hendrix" , email: "toxcity@gmail.com" , password_digest: "hotboysummer"  )
# m2 = Manager.create(full name: "Kendrick Lamar", email: "tde@aol.com", password_digest: "highpower"  )

# p "MANAGERS seeded"

e1 = Employee.create(full_name:"Greg Heffley" , email: "wimpykid@gmail.com" , password_digest: "password"  )
e2 = Employee.create(full_name:"Harry Potter" , email: "hogwartsdude@gmail.com", password_digest: "voldemortsugly" )

p "EMPLOYEES seeded"

l1 = Lead.create(full_name: "Arnold Swhartz", email:"bigguy@bodybuilder.net" , phone_number:"347-459-4939")
l2 = Lead.create(full_name: "Max Payne", email: "revenge@nypd.com", phone_number: "911-911-9119")
l3 = Lead.create(full_name: "Michael Jackson", email: "notmyson@aol.com", phone_number: "213-384-4385")
l4 = Lead.create(full_name: "Ilya James Bryant", email: "goodatbasketball@nba.com", phone_number: "293-429-2491")


p "LEADS seeded"

d1 = Deal.create(client_name: l1.full_name, client_email: l1.email , yearly_income: 63000.00, loan_amount: 125000.00 , employee_id: e1.id, lead_id: l1.id, comment:"Wants to take over the world. We'll fund him!" )
d2 = Deal.create(client_name: l2.full_name, client_email: l2.email, yearly_income: 40000.00, loan_amount: 70000.00, employee_id: e2.id, lead_id: l2.id, comment: "Cop needs money for revenge. He's interested.." ,  )
d3 = Deal.create(client_name: l3.full_name, client_email: l3.email , yearly_income: 250.00 , loan_amount: 120000.00 , employee_id: e1.id, lead_id: l3.id, comment: "Moonwalking cost Michael a lot of health. Needs money for toe treatment..." )
d4 = Deal.create(client_name: l4.full_name, client_email: l4.email , yearly_income: 5.00, loan_amount: 400000.00 , employee_id: e2.id , lead_id: l4.id, comment:"Wants to pay back his boot camp... and pay for NBA training. Let's support his broken dreams." )

p "DEALS seeded"
