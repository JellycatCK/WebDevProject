var xml =
"<recipes>" +
    "<recipe>" +
        "<name>curry1</name>" +
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
        "<name>curry2</name>" +
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

function showAllRecipes() {

    // Reads XML data 
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(xml, "text/xml");

    var divRecipes = document.getElementById('recipes');      // THE PARENT DIV.
    var recipes = xmlDoc.getElementsByTagName('recipe');       // THE XML TAG NAME.

    for (var i = 0; i < recipes.length; i++) {

        // CREATE CHILD DIVS INSIDE THE PARENT DIV.
        var divLeft = document.createElement('div');
        divLeft.className = 'col1';
        divLeft.innerHTML = recipes[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;

        var divRight = document.createElement('div');
        divRight.className = 'col2';
        divRight.innerHTML = recipes[i].getElementsByTagName("region")[0].childNodes[0].nodeValue;

        // ADD THE CHILD TO THE PARENT DIV.
        divRecipes.appendChild(divLeft);
        divRecipes.appendChild(divRight);
    }
};

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
        if(regionValue == inputRegion){
            // CREATE CHILD DIVS INSIDE THE PARENT DIV.
            var divLeft = document.createElement('button');
            divLeft.className = 'col1';
            divLeft.innerHTML = recipes[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
            // divLeft.addEventListener('click', populateRecipePage(recipes[i]), false);

            divLeft.addEventListener('click', function (event){
                populateRecipePage(recipes[i])
                                          });

            var divRight = document.createElement('img');
            divRight.className = 'col2';
            divRight.src = recipes[i].getElementsByTagName("pictureURL")[0].childNodes[0].nodeValue;
            divRight.alt ="Pic 1";
            divRight.width = "100";

            // ADD THE CHILD TO THE PARENT DIV.
            divRecipes.appendChild(divLeft);
            divRecipes.appendChild(divRight);
        }
    }

    function populateRecipePage(recipe)
    {
        if(document.readyState === 'complete'){
            window.location = "recipe.html";
            document.getElementById("recipeName").innerText = recipes[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
        }
    }
} 