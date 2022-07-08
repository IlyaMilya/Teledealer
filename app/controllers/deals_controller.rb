class DealsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :review_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_record

    def index
        deal = Deal.all
        render json: deal
    end

    def show
        deal = Deal.find(params[:id])
        render json: deal
    end

    def create
        deal = Deal.create!(review_params)
        render json: deal, status: :created
    end

    def update
        deal = Deal.find(params[:id])
        deal.update!(review_params)
        render json: deal
    end

    def destroy
        deal = Deal.find(params[:id])
        deal.destroy
        head :no_content
    end

    private

    def review_params
        params.permit()
    end

    def review_not_found
        render json: {error: "Deal not found"}, status: :not_found
    end

    def invalid_record(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end



end
