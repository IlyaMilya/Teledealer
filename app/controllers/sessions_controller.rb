class SessionsController < ApplicationController
    def create
    puts "here"
      employee = Employee.find_by(email: params[:email])
    puts employee
    puts params[:password]
      if employee&.authenticate(params[:password])
      session[:employee_id] = employee.id
      render json: employee, status: 200
      else 
    render json: {error: "Invalid email or password" }, status:401 
      end
    end

    def destroy
        session.delete(:employee_id)
        head :no_content
      end

      def show 
    user = Employee.find_by(id: session[:employee_id])
    render json: user, status: 200
      end

end