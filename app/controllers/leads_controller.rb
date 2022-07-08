class LeadsController < ApplicationController
    def index
        lead = Lead.all
        render json: lead
    end

    def show
        lead = Lead.find(params[:id])
        render json: laed
    end

    def create
        lead = Lead.create!(review_params)
        render json: lead, status: :created
    end

    def update
        lead = Lead.find(params[:id])
        laed.update!(review_params)
        render json: lead
    end

    def destroy
        laed = Lead.find(params[:id])
        lead.destroy
        head :no_content
    end

    private

    def review_params
        params.permit()
    end

    def review_not_found
        render json: {error: "Lead not found"}, status: :not_found
    end

    def invalid_record(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end




end
