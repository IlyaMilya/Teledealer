class EmployeesController < ApplicationController
    def index
        employee = Employee.all
        render json: employee
    end

    def show
        employee = Employee.find(params[:id])
        render json: employee
    end


    def update
        employee = Employee.find(params[:id])
        employee.update!(review_params)
        render json: employee
    end

    def create 
        employee = Employee.create!(params_review)
        render json: employee, status:201

    end
end




private 

def params_review
params.permit(:full_name, :email, :password)
end

