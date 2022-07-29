class CharactersController < ApplicationController
  before_action :set_character, only: %i[ show update destroy ]

  # GET /characters
  def index
    @characters = Character.all

    render json: @characters
  end

  def get_user_characters
    @user = User.find(params[:id])
    render json: @user.characters
  end

  # GET /characters/1
  def show
    render json: @character
  end

  # POST /characters
  def create_user_character
    @character = Character.new(character_params)
    @user = User.find(params[:id])
    @character.user = @user

    if @character.save
      render json: @character, status: :created
    else
      render json: @character.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /characters/1
  def update
    if @character.update(character_params)
      render json: @character
    else
      render json: @character.errors, status: :unprocessable_entity
    end
  end

  # DELETE /characters/1
  def destroy
    @character.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_character
      @character = Character.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def character_params
      params.require(:character).permit(:name, :isPC, :hp, :ac, :atk_mod, :dmg_mod, :movement, :user_id)
    end
end
