// Kc values object
var kcValues = [{
	crop: 'Almonds',
	kc: 0.9
},
{
	crop: 'Apples',
	kc: 1
},
{
	crop: 'Apricot',
	kc: 1
},
{
	crop: 'Artichokes',
	kc: 1
},
{
	crop: 'Asparagus',
	kc: 0.957
},
{
	crop: 'Avocado',
	kc: 0.85
},
{
	crop: 'Barley',
	kc: 1.15
},
{
	crop: 'Beans',
	kc: 1.152
},
{
	crop: 'Beans, green',
	kc: 1.052
},
{
	crop: 'Beets, table',
	kc: 1.05
},
{
	crop: 'Bell Peppers',
	kc: 1.052
},
{
	crop: 'Berries (bushes)',
	kc: 1.05
},
{
	crop: 'Broccoli',
	kc: 1.05
},
{
	crop: 'Brussel Sprouts',
	kc: 1.05
},
{
	crop: 'Cabbage',
	kc: 1.05
},
{
	crop: 'Cantaloupe',
	kc: 0.85
},
{
	crop: 'Carrots',
	kc: 1.05
},
{
	crop: 'Cassava',
	kc: 1
},
{
	crop: 'Castorbean (Ricinus)',
	kc: 1.15
},
{
	crop: 'Cauliflower',
	kc: 1.05
},
{
	crop: 'Celery',
	kc: 1.05
},
{
	crop: 'Cherries',
	kc: 1
},
{
	crop: 'Chick pea',
	kc: 1
},
{
	crop: 'Citrus',
	kc: 0.7
},
{
	crop: 'Conifer Trees',
	kc: 1
},
{
	crop: 'Corn',
	kc: 1.15
},
{
	crop: 'Cotton',
	kc: 1.2
},
{
	crop: 'Cucumber',
	kc: 1
},
{
	crop: 'Egg Plant',
	kc: 1.05
},
{
	crop: 'Fababean (broad bean)',
	kc: 1.15
},
{
	crop: 'Flax',
	kc: 1.1
},
{
	crop: 'Garlic',
	kc: 1
},
{
	crop: 'Grabanzo',
	kc: 1.15
},
{
	crop: 'Grapes',
	kc: 0.75
},
{
	crop: 'Green Gram and Cowpeas',
	kc: 1.05
},
{
	crop: 'Hops',
	kc: 1.05
},
{
	crop: 'Kiwi',
	kc: 1.05
},
{
	crop: 'Lentil',
	kc: 1.1
},
{
	crop: 'Lettuce',
	kc: 1
},
{
	crop: 'Millet',
	kc: 1
},
{
	crop: 'Mint',
	kc: 1.15
},
{
	crop: 'Oats',
	kc: 1.15
},
{
	crop: 'Olives',
	kc: 0.7
},
{
	crop: 'Onions',
	kc: 1.05
},
{
	crop: 'Parsnip',
	kc: 1.05
},
{
	crop: 'Peaches',
	kc: 1
},
{
	crop: 'Peanuts',
	kc: 1.15
},
{
	crop: 'Pears',
	kc: 1
},
{
	crop: 'Peas',
	kc: 1.15
},
{
	crop: 'Pistachios',
	kc: 1.1
},
{
	crop: 'Potato',
	kc: 1.15
},
{
	crop: 'Pumpkin',
	kc: 1
},
{
	crop: 'Radish',
	kc: 0.9
},
{
	crop: 'Rapeseed, Canola',
	kc: 1.1
},
{
	crop: 'Rice',
	kc: 1.2
},
{
	crop: 'Safflower',
	kc: 1.1
},
{
	crop: 'Sesame',
	kc: 1.1
},
{
	crop: 'Sisal',
	kc: 0.5
},
{
	crop: 'Sorghum',
	kc: 1
},
{
	crop: 'Soybeans',
	kc: 1.15
},
{
	crop: 'Spinach',
	kc: 1
},
{
	crop: 'Spring Wheat',
	kc: 1.15
},
{
	crop: 'Squash, Zucchini',
	kc: 0.95
},
{
	crop: 'Stone Fruit',
	kc: 1
},
{
	crop: 'Strawberries',
	kc: 0.85
},
{
	crop: 'Sugar Beet',
	kc: 1.2
},
{
	crop: 'Sunflower',
	kc: 1.1
},
{
	crop: 'Sweet Melons',
	kc: 1.05
},
{
	crop: 'Sweet Potato',
	kc: 1.15
},
{
	crop: 'Tomato',
	kc: 1.152
},
{
	crop: 'Turnip (and Rutabaga)',
	kc: 1.1
},
{
	crop: 'Walnuts',
	kc: 1.1
},
{
	crop: 'Watermelon',
	kc: 1
},
{
	crop: 'Winter Squash',
	kc: 1
},
{
	crop: 'Winter Wheat',
	kc: 1.15
}];

$(document).on('ready', function() {
	for (var i = 0; i < kcValues.length; i++) {
		$('#cropType').append('<option>' + kcValues[i].crop + '</option>');
		console.log(kcValues[i].crop)
	}
});




