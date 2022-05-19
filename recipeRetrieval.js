// Function to display a list of recipes for the given region
function showRecipesByRegion(inputRegion) {

    // Reads XML data 
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(xml, "text/xml");

    var divRecipes = document.getElementById('recipes');      // THE PARENT DIV.
    var recipes = xmlDoc.getElementsByTagName('recipe');       // THE XML TAG NAME.

    for (var i = 0; i < recipes.length; i++) {

        //Retrieve region for this recipe
        regionValue = recipes[i].getElementsByTagName("region")[0].childNodes[0].nodeValue;

        // Only display this recipe if it is matches the given region
        if(regionValue == inputRegion || inputRegion == "ALL"){

            // Create 'a' tag for each recipe
            var aRecipe = document.createElement('a');
            aRecipe.href = "recipe.html";
            aRecipe.className = "list-group-item list-group-item-action d-flex gap-3 py-3";

            // Display picture for each recipe
            var imgRecipe = document.createElement('img');
            imgRecipe.src = recipes[i].getElementsByTagName("pictureURL")[0].childNodes[0].nodeValue;
            imgRecipe.alt ="Pic 1";
            imgRecipe.width = "64";
            imgRecipe.height = "64";
            aRecipe.appendChild(imgRecipe);

            // Display recipe name
            var divRecipeDetails = document.createElement("div");
            divRecipeDetails.class = "d-flex gap-2 w-100 justify-content-between";
            aRecipe.appendChild(divRecipeDetails);
            
            var divNameRecipeDetails = document.createElement("div");
            divRecipeDetails.appendChild(divNameRecipeDetails);

            var recipeName = document.createElement("h6");
            recipeName.class = "mb-0";
            recipeName.innerText = recipes[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
            divNameRecipeDetails.appendChild(recipeName);

            // Display recipe servings
            var recipeServings = document.createElement("small");
            recipeServings.class = "opacity-50";
            recipeServings.innerText = "Serves " + recipes[i].getElementsByTagName("servings")[0].childNodes[0].nodeValue;
            divRecipeDetails.appendChild(recipeServings);
        
            // Append to list
            divRecipes.appendChild(aRecipe);
        }
     }

     function showAllRecipes() {
         showRecipesByRegion("ALL");
     }

    // function populateRecipePage(recipe)
    // {
    //     if(document.readyState === 'complete'){
    //         window.location = "recipe.html";
    //         document.getElementById("recipeName").innerText = recipes[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
    //     }
    // }
} 

var xml =
"<recipes>" +
    "<recipe>" +
        "<name>Curry 1</name>" +
        "<pictureURL>img/curry.jpg</pictureURL>" +
        "<region>south asia</region>" +
        "<servings>4</servings>" +
        "<prepTime>60 minutes</prepTime>" +
        "<cookTime>30 minutes</cookTime>" +
        "<method>make curry</method>" +
        "<ingredients>" +
            "<ingredient>" +
                "<name></name>" +
                "<quantity></quantity>" +
                "<unit></unit>" +
            "</ingredient>" +
        "</ingredients>" +
    "</recipe>" +

    "<recipe>" +
        "<name>Curry 2</name>" +
        "<pictureURL>img/curry.jpg</pictureURL>" +
        "<region>south asia</region>" +
        "<servings>4</servings>" +
        "<prepTime>60 minutes</prepTime>" +
        "<cookTime>30 minutes</cookTime>" +
        "<method>make curry</method>" +
        "<ingredients>" +
            "<ingredient>" +
                "<name></name>" +
                "<quantity></quantity>" +
                "<unit></unit>" +
            "</ingredient>" +
        "</ingredients>" +
    "</recipe>" +

    "<recipe>" +
    "<name>stir fry1</name>" +
    "<region>north asia</region>" +
    "<method>make stir fry</method>" +
    "</recipe>" +

    "<recipe>" +
    "<name>stir fry2</name>" +
    "<region>north asia</region>" +
    "<method>make stir fry</method>" +
    "</recipe>" +

    "<recipe>" +
    "<name>oceania recipe1</name>" +
    "<region>oceania</region>" +
    "<method>make it</method>" +
    "</recipe>" +

    "<recipe>" +
    "<name>oceania recipe2</name>" +
    "<region>oceania</region>" +
    "<method>make it</method>" +
    "</recipe>" +
"</recipes>";