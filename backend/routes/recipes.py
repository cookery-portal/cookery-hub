from flask import Blueprint, request, jsonify
from db import mongo
from bson import ObjectId

recipes_bp = Blueprint('recipes', __name__)

@recipes_bp.route('/recipes/', methods=['POST'])
def add_recipe():
    data = request.json
    if not data:
        return jsonify({'error': 'No data provided'}), 400

    required_fields = ['title', 'description', 'ingredients', 'instructions']
    for field in required_fields:
        if field not in data or not data[field]:
            return jsonify({'error': f'Missing or empty field: {field}'}), 400

    if not isinstance(data['ingredients'], list) or not all(isinstance(i, dict) for i in data['ingredients']):
        return jsonify({'error': 'Ingredients must be a list of objects'}), 400
    if not isinstance(data['instructions'], str):
        return jsonify({'error': 'Instructions must be a string'}), 400

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
    page = int(request.args.get('page', 1))
    per_page = int(request.args.get('per_page', 10))

    query = {}
    if name_query:
        query = {"$text": {"$search": name_query}}

    cursor = mongo.db.recipes.find(query).skip((page - 1) * per_page).limit(per_page)
    recipes = []
    for recipe in cursor:
        recipe['_id'] = str(recipe['_id'])
        recipes.append(recipe)

    total = mongo.db.recipes.count_documents(query)
    return jsonify({
        "recipes": recipes,
        "total": total,
        "page": page,
        "per_page": per_page
    }), 200

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