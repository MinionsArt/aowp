function addUnitTypeIcon(a, b) {
    var icontext, iconsrc, iconName, j, btn, imag, spa = "";
    for (j in jsonUnitAbilities.abilities) {
        if (a === jsonUnitAbilities.abilities[j].slug) {
            icontext = jsonUnitAbilities.abilities[j].description;
            iconsrc = a;
            iconName = jsonUnitAbilities.abilities[j].name;
            btn = document.createElement("DIV");
            btn.className = "unittype_icon";
            imag = document.createElement("IMG");
            spa = document.createElement("SPAN");
            spa.className = "tooltiptext";

            spa.innerHTML = "<p>" + "<span style=\"font-size=20px\">" + iconName + "</p>" + "<hr>" + icontext;
            imag.setAttribute("src", "/aowp/Icons/UnitTypes/" + iconsrc + ".png");
            imag.setAttribute("width", "40");
            imag.setAttribute("height", "40");

            document.getElementById("unitstat").appendChild(btn);

            btn.appendChild(imag);
            btn.append(spa);


        }
    }


}

function addAbilityslot(a, b) {
    var abilityName, abilityIcon, abilityDescr, abilityDam, abilityAcc, abilityRange, abilityType, j, splitDamageString, abilityDamType = "";

    for (j in jsonUnitAbilities.abilities) {
        if (a == jsonUnitAbilities.abilities[j].slug) {
            if (jsonUnitAbilities.abilities[j].damage === undefined) {
                abilityDam = "";
            } else {
                abilityDam = jsonUnitAbilities.abilities[j].damage;
            }





            abilityName = jsonUnitAbilities.abilities[j].name;
            abilityIcon = jsonUnitAbilities.abilities[j].icon;
            abilityDescr = jsonUnitAbilities.abilities[j].description;
            //abilityDam = jsonUnitAbilities.abilities[j].damage;
            abilityRange = jsonUnitAbilities.abilities[j].range;
            abilityAcc = jsonUnitAbilities.abilities[j].accuracy;
            abilityType = jsonUnitAbilities.abilities[j].type;
            if (abilityType == "Repeating") {
                abilityType += "<x-repeating></x-repeating>";
            }
            var tooltipName = document.createElement("SPAN");
            var btn = document.createElement("DIV");
            /// tooltipName.style.fontSize = "20px";
            tooltipName.innerHTML = "test";
            btn.className = "unit_abilityslot";
            var imag = document.createElement("IMG");
            imag.className = "unit_ability_icon";
            var spa = document.createElement("SPAN");
            var tex = document.createElement("DIV");
            tex.className = "tooltip";
            tex.innerHTML = abilityName;
            var dam = document.createElement("DIV");
            dam.className = "ability_damage";
            dam.innerHTML = abilityDam;
            spa.className = "tooltiptext";
            spa.innerHTML = abilityDescr;
            // spa.innerHTML = "<p>" + "<span style=\"font-size:18px; color: burlywood\">" + abilityName + "</span>" + "</p>" + "<span style=\"color: grey\; font-size:13px\">" + "Active Ability &nbsp; </span>" + "<span style=\"color: #81ffff\"; font-size:13px\">" + abilityType + "</span>" +
            //     "<hr>" + abilityAcc + "&nbsp &nbsp" + abilityDam + "&nbsp &nbsp" + abilityRange + "<hr>" + abilityDescr;
            imag.setAttribute("src", "/aowp/Icons/Abilities/" + abilityIcon + ".png");
            imag.setAttribute("width", "40");
            imag.setAttribute("height", "40");

            document.getElementById("unitabholder").append(btn);
            tex.appendChild(spa);

            btn.appendChild(imag);
            btn.append(tex);
            btn.append(dam);

        }
    }

}

function addPassiveslot(a) {
    var abilityName, abilityIcon, abilityDescr, j = "";
    for (j in jsonUnitAbilities.abilities) {
        if (a == jsonUnitAbilities.abilities[j].slug) {
            abilityName = jsonUnitAbilities.abilities[j].name;
            abilityIcon = jsonUnitAbilities.abilities[j].slug;
            abilityDescr = jsonUnitAbilities.abilities[j].description;

            var btn = document.createElement("DIV");
            btn.className = "unit_passiveslot";
            var imag = document.createElement("IMG");
            imag.className = "unit_ability_icon";
            var spa = document.createElement("SPAN");
            var tex = document.createElement("DIV");
            tex.className = "tooltip";
            tex.innerHTML = abilityName;
            spa.className = "tooltiptext";
            spa.innerHTML = "<p>" + "<span style=\"font-size=20px\">" + abilityName + "</p>" + "<hr>" + abilityDescr;
            imag.setAttribute("src", "/aowp/Icons/Passives/" + abilityIcon + ".png");
            imag.setAttribute("width", "40");
            imag.setAttribute("height", "40");

            document.getElementById("unitabholder").appendChild(btn);
            tex.appendChild(spa);

            btn.appendChild(imag);
            btn.append(tex);

        }
    }

}

function addResistanceSlot(a) {
    var abilityName, abilityIcon, abilityDescr, abilityDam = "";
    for (j in jsonUnitAbilities.abilities) {
        if (a == jsonUnitAbilities.abilities[j].slug) {
            abilityName = jsonUnitAbilities.abilities[j].name;
            abilityIcon = jsonUnitAbilities.abilities[j].icon_name;
            abilityDescr = jsonUnitAbilities.abilities[j].description;
            abilityDam = jsonUnitAbilities.abilities[j].damage;
            var btn = document.createElement("DIV");
            btn.className = "unit_resistanceslot";
            var imag = document.createElement("IMG");
            imag.className = "unit_ability_icon";
            var spa = document.createElement("SPAN");
            var tex = document.createElement("DIV");
            var dam = document.createElement("DIV");
            dam.className = "ability_damage";
            dam.innerHTML = abilityDam;

            tex.className = "tooltip";
            tex.innerHTML = abilityName;

            spa.className = "tooltiptext";
            spa.innerHTML = "<p>" + "<span style=\"font-size=20px\">" + abilityName + "</p>" + "<hr>" + abilityDescr;
            imag.setAttribute("src", "/aowp/Icons/Resistances/" + abilityIcon + ".png");
            imag.setAttribute("width", "40");
            imag.setAttribute("height", "40");

            document.getElementById("unitabholder").appendChild(btn);
            tex.appendChild(spa);

            btn.appendChild(imag);
            btn.append(tex);
            btn.append(dam);


        }
    }

}

function EliteSkill(a) {
    var nam = "";
    for (j in jsonUnitAbilities.abilities) {
        if (a == jsonUnitAbilities.abilities[j].slug) {
            nam = jsonUnitAbilities.abilities[j].name;
        }

    }
    return nam;
}

function addEliteSkill(a) {
    var abilityName, abilityIcon, abilityDescr = "";
    for (j in jsonUnitAbilities.abilities) {
        if (a == jsonUnitAbilities.abilities[j].slug) {
            abilityName = jsonUnitAbilities.abilities[j].name;
            abilityIcon = jsonUnitAbilities.abilities[j].slug;
            abilityDescr = jsonUnitAbilities.abilities[j].description;

            var btn = document.createElement("DIV");
            btn.className = "unit_elite_skill";
            var imag = document.createElement("IMG");
            imag.className = "unit_ability_icon";
            var spa = document.createElement("SPAN");
            var tex = document.createElement("DIV");
            tex.className = "tooltip";
            tex.innerHTML = abilityName;
            spa.className = "tooltiptext";
            spa.innerHTML = "<p>" + "<span style=\"font-size=20px\">" + abilityName + "</p>" + "<hr>" + abilityDescr;
            imag.setAttribute("src", "/aowp/UI/elite_rank.png");
            imag.setAttribute("width", "40");
            imag.setAttribute("height", "40");

            document.getElementById("unitabholder").appendChild(btn);
            // document.getElementById("unitabholder").setAttribute("id", "unitabholder" + b);

            tex.appendChild(spa);

            btn.appendChild(imag);
            btn.append(tex);

        }
    }

}


function checkModRequirements(unit) {
    var j, check, checksplit, checknot, checknotsplit = "";
    for (j in jsonMods.mods) {
        checksplit = jsonMods.mods[j].check.split(" ");
        checknotsplit = jsonMods.mods[j].checknot.split(" ");
        for (k in checksplit) {
            if (divs[i].innerHTML.indexOf(checksplit[k]) !== -1) {
                // something
            }
        }
    }
}

function showUnit(a) {
    var hp, mp, shield, armor, descr, j, k, x, y, z, unitName, icon, imagelink, prodcost, tier, research, building = "";
    for (i in jsonUnits.units) {
        if (a == jsonUnits.units[i].id) {
            icon = document.getElementById("uniticon");
            icon.setAttribute("src", "/aowp/Icons/UnitIcons/" + a + ".png");
            icon.setAttribute("id", "uniticon" + a);
            if (icon.getAttribute('src') === "/aowp/Icons/UnitIcons/undefined") {
                icon.setAttribute('src', "/aowp/Icons/placeholder.png");
            }
            unitName = document.getElementById("unitstring");
            unitName.setAttribute("id", "unitstring" + a);

            unitName.innerHTML = "<span style=\"color:orange\">" + "/&nbsp" + "</span>" + jsonUnits.units[i].name;
            descr = document.getElementById("description");
            descr.setAttribute("id", "description" + a);
            descr.innerHTML = jsonUnits.units[i].description;
            imagelink = document.getElementById("vid");
            imagelink.setAttribute("id", "vid" + a);
            imagelink.setAttribute('src', "/aowp/Previews/" + jsonUnits.units[i].image_link);
            if (imagelink.getAttribute('src') === "/aowp/Previews/undefined") {
                imagelink.setAttribute('src', "/aowp/Previews/placeholder.mp4");
            }
            research = document.getElementById("researchorigin");
            research.setAttribute("id", "researchorigin" + a);
            if (jsonUnits.units[i].origin_research != "") {
                // research.setAttribute("src", "/Icons/Research/" + jsonUnits.units[i].origin_research + ".jpg");
                // research.setAttribute("src", "/Icons/Research/" + jsonUnits.units[i].origin_research + ".jpg");
                research.innerHTML = jsonUnits.units[i].origin_research;
            } else {
                research.setAttribute("src", "/aowp/UI/empty.png");
                research.setAttribute("style", "width: 0px");

            }

            building = document.getElementById("buildingorigin");
            building.setAttribute("id", "buildingorigin" + a);
            if (jsonUnits.units[i].origin_research != "") {
                // building.setAttribute("src", "/Icons/Buildings/" + jsonUnits.units[i].origin_building + ".jpg");
                building.innerHTML = jsonUnits.units[i].origin_building;
            } else {
                building.setAttribute("src", "/aowp/UI/empty.png");

                building.setAttribute("style", "width: 0px");
            }
            hp = document.getElementById("hp")
            hp.setAttribute("id", "hp" + a);
            hp.innerHTML = jsonUnits.units[i].hp;
            armor = document.getElementById("armor")
            armor.setAttribute("id", "armor" + a);
            armor.innerHTML = jsonUnits.units[i].armor;
            shield = document.getElementById("shield");
            shield.setAttribute("id", "shield" + a);
            shield.innerHTML = jsonUnits.units[i].shield;
            mp = document.getElementById("mp");
            mp.setAttribute("id", "mp" + a);
            mp.innerHTML = jsonUnits.units[i].mp;
            tier = document.getElementById("tier");
            tier.setAttribute("id", "tier" + a);
            var levelup = document.getElementById("levelup");
            levelup.setAttribute("id", "levelup" + a);
            tier.innerHTML = "Tier " + jsonUnits.units[i].tier + ": " + jsonUnits.units[i].upkeep;
            if (jsonUnits.units[i].tier == "1") {

                levelup.innerHTML = "<p><x-medal_novice> </x-medal_novice>Novice<li>+2 <x-hp></x-hp> Hit Points</li></ul><p><x-medal_veteran> </x-medal_veteran>Veteran<li>+2 HP</li></ul><p><x-medal_expert> </x-medal_expert>Expert<li>+2 HP</li></ul> <p><x-medal_prime> </x-medal_prime>Prime<li>+2 HP</li><li>" + EliteSkill(jsonUnits.units[i].elite_skill) + "</li></ul>";

            }
            if (jsonUnits.units[i].tier == "2") {
                levelup.innerHTML = "<p><x-medal_trooper> </x-medal_trooper>Trooper<li>+4 <x-hp></x-hp> Hit Points</li></ul><p><x-medal_veteran> </x-medal_veteran>Veteran<li>+4 HP</li></ul><p>Expert<li>+4 HP</li></ul> <p>Elite<li>+4 HP</li><li>" + EliteSkill(jsonUnits.units[i].elite_skill) + "</li></ul>";

            }
            if (jsonUnits.units[i].tier == "3") {
                levelup.innerHTML = "<p><x-medal_trooper> </x-medal_trooper>Trooper<li>+6 <x-hp></x-hp> Hit Points</li></ul><p><x-medal_veteran> </x-medal_veteran>Veteran<li>+6 HP</li></ul><p>Expert<li>+6 HP</li></ul> <p>Elite<li>+6 HP</li><li>" + EliteSkill(jsonUnits.units[i].elite_skill) + "</li></ul>";
            }
            if (jsonUnits.units[i].tier == "4") {
                levelup.innerHTML = "<p><x-medal_trooper> </x-medal_trooper>Trooper<li>+6 <x-hp></x-hp> Hit Points</li></ul><p><x-medal_veteran> </x-medal_veteran>Veteran<li>+6 HP</li></ul><p>Expert<li>+6 HP</li></ul> <p>Elite<li>+6 HP</li><li>" + EliteSkill(jsonUnits.units[i].elite_skill) + "</li></ul>";
            }

            prodcost = document.getElementById("productioncost");
            prodcost.setAttribute("id", "productioncost" + a);
            prodcost.innerHTML = "Base Cost: " + jsonUnits.units[i].cost;

            for (j in jsonUnits.units[i].unit_types) {
                addUnitTypeIcon(jsonUnits.units[i].unit_types[j].slug, a);

            }

            for (k in jsonUnits.units[i].abilities) {
                addAbilityslot(jsonUnits.units[i].abilities[k].slug);

            }
            for (z in jsonUnits.units[i].resistances) {
                addResistanceSlot(jsonUnits.units[i].resistances[z].slug);

            }

            for (x in jsonUnits.units[i].passives) {
                addPassiveslot(jsonUnits.units[i].passives[x].slug);

            }

            for (m in jsonUnits.units[i].elite_rewards) {
                addEliteSkill(jsonUnits.units[i].elite_rewards[m].slug);
            }
            document.getElementById("unitabholder").setAttribute("id", "unitabholder" + a);

            document.getElementById("unitstat").setAttribute("id", "unitstat" + a);


            //checkModRequirements(jsonUnits.units[i]);

        }

    }

}


function showBuilding(a) {
    var buildingName, description, cost, type, prereq, j, imagelink = "";
    for (j in jsonBuildings.buildings) {
        if (a == jsonBuildings.buildings[j].slug) {
            buildingName = document.getElementById("buildingname");
            buildingName.innerHTML = jsonBuildings.buildings[j].name;
            description = document.getElementById("buildingdescription");
            description.innerHTML = jsonBuildings.buildings[j].description;
            type = document.getElementById("buildingtype");
            type.innerHTML = jsonBuildings.buildings[j].type;

            cost = document.getElementById("buildingcost");
            cost.innerHTML = "Cost : " + jsonBuildings.buildings[j].cost;
            if (jsonBuildings.buildings.prereq != "") {

                prereq = document.getElementById("buildingprereq");
                prereq.innerHTML = jsonBuildings.buildings[j].prereq;
            }
            imagelink = document.getElementById("buildingicon");
            imagelink.setAttribute("src", imagelink + ".png");
        }
    }
}

function searchData() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    searchUnits(filter);
}

function searchUnits(keyword) {
    var i, output, textvalue, list = "";
    output = document.getElementById("searchOutput");

    for (i = 0; i < jsonUnits.units.length; i++) {
        textvalue = jsonUnits.units[i].string;
        if (textvalue.toUpperCase().indexOf(keyword) > -1) {
            list += "<br>" + jsonUnits.units[i].string;

        }
    }
    output.innerHTML = list;
}


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}
