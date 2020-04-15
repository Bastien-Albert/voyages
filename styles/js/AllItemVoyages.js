var voyages = [{
    "Bastien" : [{
        'etats_unis' : [{
            'title' : 'États-Unis (Amérique)',
            'description' : 'Pays regroupant plus de 50 états situés en Amérique du Nord. Ce pays est le pays le peuplé en Amérique avec 330 millions d’habitants.  La capitale est Washington D.C (District of Columbia), la langue officielle est l’anglais. La monnaie est le dollar américain. L’hymne nationale est The Star-Spangled Banner. Les États-Unis sont une puissance majeure dans le domaine de la culture (soft power), de l’armement (avec une l’une des armées les plus puissantes au monde), de l’industrie (pionnière dans certains domaines avec le Taylorisme ou le Fordisme).',
            'img' : '../styles/images/Etats-Unis.jpg',
            "continent" : "Amerique"
        }],
        'Angleterre' : [{
            'title' : 'Angleterre',
            'description' : 'Nation constitutive constitué du Royaume-Uni, ayant une population de 55 millions d’habitants. La capitale est Londres, la langue officielle est l’anglais. La monnaie est le livre sterling. L’hymne nationale est God Save the Queen.',
            'img' : '../styles/images/Angleterre.jpg',
            "continent" : "Europe"
        }],
        'Espagne' : [{
            'title' : 'Espagne',
            'description' : 'L’Espagne est un pays d\'Europe du Sud. En 2019, il s\'agissait du vingt-huitième pays le plus peuplé du monde, avec 47 millions d’habitants. La situation géographique de l\'Espagne, son littoral, ses paysages diversifiés, son héritage historique, sa culture vibrante et ses excellentes infrastructures ont fait de l\'industrie touristique internationale du pays l\'un des plus importants au monde.',
            'img' : '../styles/images/Espagne.jpg',
            "continent" : "Europe"
        }]
    }],
    "Kevin" : [{
        'Cuba' : [{
            'title' : 'Cuba',
            'description' : 'Cuba est un État insulaire des Caraïbes formé de l\'île de Cuba (la plus grande île des Antilles), de l\'île de la Jeunesse et de 4 095 cayes et Îlots. Sa capitale est La Havane, sa langue officielle l\'espagnol et deux monnaies y sont utilisées : le peso cubain et le peso cubain convertible. L\'île a été une colonie espagnole de 1492 à 1898 puis un territoire des États-Unis jusqu\'au 20 mai 1902.',
            'img' : '../styles/images/Cuba.jpg',
            "continent" : "Amerique"
        }],
        'Indonesie' : [{
            'title' : 'Indonésie',
            'description' : 'L’Indonésie est un pays situé en Asie du Sud-Est. Avec 13 466 îles, dont 922 habitées, il s\'agit du plus grand archipel au monde. Avec une population estimée à 265 millions de personnes, c\'est le quatrième pays le plus peuplé au monde. ',
            'img' : '../styles/images/Indonesie.jpg',
            "continent" : "Asie"
        }],
        'Allemagne' : [{
            'title' : 'Allemagne',
            'description' : ' L\'Allemagne est un pays d\'Europe centrale. Avec plus de 83 millions d\'habitants, l\'Allemagne est le pays le plus peuplé de l\'Union européenne. L\'Allemagne dispose de plusieurs monuments culturels qui attirent un grand nombre de touristes et propose de nombreux concerts, festivals et de grandes manifestations sportives. Pour ne citer que quelques exemples, il y a les fêtes de rues ou les marchés de Noël et certaines grandes fêtes populaires comme la fête de la bière à Munich.',
            'img' : '../styles/images/Allemagne.jpg',
            "continent" : "Europe"
        }]
    }],
    "Celine" : [{
        'Nouvelle-Zelande' : [{
            'title' : 'Nouvelle-Zélande',
            'description' : 'Pays situés au sud-ouest de l’Océan Pacifique. Composée de deux îles principales ( l’Île du Nord et l’Île du Sud) et de près de six-cents petites îles. La capitale est Wellington. Ayant une population de près de 5 millions d’habitants. La langue officielle est l’anglais. La monnaie est le dollar néo-zélandais. L’hymne nationale est God Defend New Zealand.',
            'img' : '../styles/images/Nouvelle-Zelande.jpg',
            "continent" : "Oceanie"
        }],
        'Islande' : [{
            'title' : 'Islande',
            'description' : 'Pays insulaire d’Europe du Nord ayant une population de 360 mille habitants. La capitale est Reykjavik ,la langue officielle est l’islande. La monnaie est la couronne islandaise. L’hymne nationale est Lofsöngur.',
            'img' : '../styles/images/Islande.jpg',
            "continent" : "Europe"
        }],
        'Philippines' : [{
            'title' : 'Philippines',
            'description' : 'pays d’Asie du Sud-Est constitué d’un archipel et de 7641 îles. La capitale est Manille. La population de ce pays est de 110 millions d’habitants. Les langues officielles sont le philippin et l’anglais.La monnaie est le peso philippin. L’hymne nationale est Lupang Hinirang.',
            'img' : '../styles/images/Philippines.jpg',
            "continent" : "Asie"
        }],
    }]
}];

function htmlRender(voyage){
    return "<div class=\"block-item\">\n" +
        "      <div class=\"block-cat-image\">\n" +
        "         <h4>" + voyage.title + "</h4>\n" +
        "         <img src=\"" + voyage.img +"\" alt=\"photo "+ voyage.title +"\">\n" +
        "      </div>\n" +
        "      <div class=\"block-cat-description\">\n" +
        "         <p>" + voyage.description +"</p>\n" +
        "      </div>\n" +
        "   </div>";
}
function allItem() {
    var output = "";
    $.each(voyages, function(arrayKey, array) {
        $.each(array, function(key, value) {
            $.each(value, function(i, value1) {
                $.each(value1, function(b, valueVoyage) {
                    var voyage = valueVoyage[0];
                    output += htmlRender(voyage);
                });
            });
        });
    });
    $('.block-cat').html(output);
}
function existMenu($parent){
    $parent.find('.select-content').animate({
        opacity: 0,
    }, 100).queue(function (next) {
        $(this).closest('.block-item-cat-list').removeClass('menu-active');
        next();
    });
}
$(document).ready(function() {
    $('.select-title span').click(function() {
        $parent = $(this).closest('.block-item-cat-list');
        $type = $parent.data("type");
        console.log($type);
        if($type === "name")
        {
            $parentContent = $("#continent");
            console.log($parentContent);
            existMenu($parentContent);
        }
        else
        {
            $parentName = $("#name");
            existMenu($parentName);
        }
        if($parent.hasClass('menu-active'))
        {
            existMenu($parent);
        }
        else
        {
            $parent.addClass('menu-active').find('.select-content').animate({
                opacity: 1,
            }, 100);
        }
    });
    $('body').click(function(e) {
        $div =  $(this).find('.select-continent');
        if(!$(e.target).is($div) && !$.contains($div[0],e.target))
        {
            existMenu($div);
        }
    });

    $('.name').click(function() {
        $data = $(this).data("id");
        $parent = $(this).closest('.list-item');
        $id = $parent.attr("id").replace('name-', '');
        $("#" + $id).removeClass("is-select");
        $parent.attr("id", "name-" + $data);
        $(this).addClass("is-select");
        $contient = $('.continent');
        $parentContient = $contient.closest('.list-item');
        $contient.removeClass('is-select');
        $parentContient.attr("id", "continent-all-item").find('.all-item').addClass('is-select');
        $parent = $('body');
        $foreach = voyages;
        $output = "";
        $.each($foreach, function(arrayKey, array) {
            $.each(array[$data], function(key, value) {
                $.each(value, function(i, value1) {
                    $output += htmlRender(value1[0]);
                });
            });
        });
        $parent.find('.block-cat').html($output);
    });
    $('.all-item').click(function() {
        $(this).addClass('is-select');
        $parent = $(this).closest('.block-item-cat-list');
        $type = $parent.data("type");
        console.log($type);
        if($type === "continent" )
        {
            $parent.find(".list-item").attr("id", "continent-all-item");
            $('.continent').removeClass('is-select');
        }
        else
        {
            $parent.find(".list-item").attr("id", "name-cat-all-item");
            $('.name').removeClass('is-select');
        }
        allItem();
    });
    $('.continent').click(function() {
        $data = $(this).data("id");
        $parent = $(this).closest('.list-item');
        $id = $parent.attr("id").replace('continent-', '');
        $("#" + $id).removeClass("is-select");
        $parent.attr("id", "continent-" + $data);
        $(this).addClass("is-select");
        $name = $('.name');
        $nameContient = $name.closest('.list-item');
        $name.removeClass('is-select');
        $nameContient.attr("id", "name-cat-all-item").find('.all-item').addClass('is-select');
        $parent = $('body');
        $output = "";
        $.each(voyages, function(arrayKey, array) {
            $.each(array, function(key, value) {
                $.each(value, function(i, value1) {
                    $.each(value1, function(b, valueVoyage) {
                        var voyage = valueVoyage[0];
                        if(voyage.continent === $data)
                        {
                            $output += htmlRender(voyage);
                        }
                    });
                });
            });
        });
        $parent.find('.block-cat').html($output);
    });
});