from flask import Blueprint, request, jsonify
from db import mongo
from bson import ObjectId

recipes_bp = Blueprint('recipes', __name__)

@recipes_bp.route('/recipes/', methods=['POST'])
def add_recipe():
    data = request.json
    if not data:
        return jsonify({'error': 'No data provided'}), 400
    recipe_id = mongo.db.recipes.insert_one(data).inserted_id
    return jsonify({'id': str(recipe_id)}), 201

@recipes_bp.route('/recipes/', methods=['GET'])
def get_recipes():
    recipes = list(mongo.db.recipes.find())
    for recipe in recipes:
        recipe['_id'] = str(recipe['_id'])
    return jsonify(recipes), 200

@recipes_bp.route('/recipes/search/', methods=['GET'])
def search_by_name():
    name_query = request.args.get('name', '')
    results = mongo.db.recipes.find({'title': {'$regex': name_query, '$options': 'i'}})
    recipes = []
    for recipe in results:
        recipe['_id'] = str(recipe['_id'])
        recipes.append(recipe)
    return jsonify(recipes), 200

@recipes_bp.route('/recipes/<id>/', methods=['GET'])
def get_recipe_by_id(id):
    try:
        recipe = mongo.db.recipes.find_one({'_id': ObjectId(id)})
        if not recipe:
            return jsonify({'error': 'Recipe not found'}), 404
        recipe['_id'] = str(recipe['_id'])
        return jsonify(recipe), 200
    except Exception as e:
        return jsonify({'error': 'Invalid recipe ID'}), 400