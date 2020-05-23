var divState = ["amazon", "assembly", "vanguard", "kirko", "dvar", "syndicate"]; // we store the status in this object
var divStateweapon1 = ["biochemical", "laser", "firearms", "arc", "psionics", "explosives"];
var currentRace = "";

function showhide(id, weapon, weapon2) {
    if (document.getElementById) {
        if (document.getElementById) {
            var divid = document.getElementById(id);
            //close others
            for (var i = 0; i < divState.length; i++) {

                var e = document.getElementById(divState[i])
                e.style.display = 'none'; // hide
                //  divStateweapon1[div] = false; // reset status
            }


            divid.style.display = 'inline-block';
        }
        currentRace = id;
    }

    if (document.getElementById) {
        var divid = document.getElementById(weapon);
        var divid2 = document.getElementById(weapon2);
        //  if (divStateweapon1[weapon] == true && divStateweapon1[weapon2] == true) {
        //     return;
        // }
        // divStateweapon1[weapon] = (divStateweapon1[weapon]) ? false : true; // initialize / invert status (true is visible and false is closed)
        // divStateweapon1[weapon2] = (divStateweapon1[weapon2]) ? false : true;
        //  divStateweapon1[weapon] = true;
        // divStateweapon1[weapon2] = true;
        //close others
        for (var i = 0; i < divStateweapon1.length; i++) {

            var e = document.getElementById(divStateweapon1[i])
            e.style.display = 'none'; // hide
            //  divStateweapon1[div] = false; // reset status
        }


        divid.style.display = 'inline-block';
        divid2.style.display = 'inline-block';
    }

}
var divState2 = ["promethean", "synthesis", "voidtech", "psynumbra", "celestian", "xenoplague", "heritor"];

function showhide2(id) {
    if (document.getElementById) {
        var divid = document.getElementById(id);
        //close others
        for (var i = 0; i < divState2.length; i++) {

            var e = document.getElementById(divState2[i])
            e.style.display = 'none'; // hide
            //  divStateweapon1[div] = false; // reset status
        }


        divid.style.display = 'inline-block';
    }
}
var divTrees = ["military", "society"];

function showhideTree(id) {
    if (document.getElementById) {
        var divid = document.getElementById(id);
        //close others
        for (var i = 0; i < divTrees.length; i++) {

            var e = document.getElementById(divTrees[i])
            e.style.display = 'none'; // hide
            //  divStateweapon1[div] = false; // reset status
        }


        divid.style.display = 'contents';
    }
}

var divsearch = ["unitS", "modS"];

function showhide3(id) {
    if (document.getElementById) {
        var divid = document.getElementById(id);
        //close others
        for (var i = 0; i < divsearch.length; i++) {

            var e = document.getElementById(divsearch[i])
            e.style.display = 'none'; // hide
            //  divStateweapon1[div] = false; // reset status
        }


        divid.style.display = 'contents';
    }
}

var divTreesSoc = ["amazond", "assemblyd", "dvard", "kirkod", "syndicated", "vanguardd"];
var divTreesSoc2 = ["amazond5", "assemblyd5", "dvard5", "kirkod5", "syndicated5", "vanguardd5"];

var divTreesSoc3 = ["amazond9", "assemblyd9", "dvard9", "kirkod9", "syndicated9", "vanguardd9"];

function showhideSoc(id, id2, id3) {
    if (document.getElementById) {
        var divid = document.getElementById(id);
        var divid2 = document.getElementById(id2);
        var divid3 = document.getElementById(id3);
        //close others
        for (var i = 0; i < divTreesSoc.length; i++) {

            var e = document.getElementById(divTreesSoc[i])
            e.style.display = 'none'; // hide
            //  divStateweapon1[div] = false; // reset status
        }

        for (var i = 0; i < divTreesSoc2.length; i++) {

            var e = document.getElementById(divTreesSoc2[i])
            e.style.display = 'none'; // hide
            //  divStateweapon1[div] = false; // reset status
        }

        for (var i = 0; i < divTreesSoc3.length; i++) {

            var e = document.getElementById(divTreesSoc3[i])
            e.style.display = 'none'; // hide
            //  divStateweapon1[div] = false; // reset status
        }

        var end = id.lastIndexOf("d"); //this finds the first occurrence of "." 
        //in string thus giving you the index of where it is in the string

        // Now iend can be -1, if lets say the string had no "." at all in it i.e. no "." is found. 
        //So check and account for it.

        var subString;
        if (end != -1) {
            subString = id.substring(0, end); //this will give abc
        }

        currentRace = subString;
        divid.style.display = 'contents';
        divid2.style.display = 'contents';
        divid3.style.display = 'contents';


    }
}

var divTreesSocST = ["celestiand", "heritord", "prometheand", "psynumbrad", "synthesisd", "voidtechd", "xenoplagued"];
var divTreesSocST2 = ["celestiand7", "heritord7", "prometheand7", "psynumbrad7", "synthesisd7", "voidtechd7", "xenoplagued7"];

function showhideSocST(id, id2) {
    if (document.getElementById) {
        var divid = document.getElementById(id);
        var divid2 = document.getElementById(id2);
        //close others
        for (var i = 0; i < divTreesSocST.length; i++) {

            var e = document.getElementById(divTreesSocST[i])
            e.style.display = 'none'; // hide
            //  divStateweapon1[div] = false; // reset status
        }

        for (var i = 0; i < divTreesSocST2.length; i++) {

            var e = document.getElementById(divTreesSocST2[i])
            e.style.display = 'none'; // hide
            //  divStateweapon1[div] = false; // reset status
        }



        divid.style.display = 'contents';
        divid2.style.display = 'contents';
    }
}

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
            var n = abilityDescr.includes("Unique");


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
            if (n === true) {
                btn.style.backgroundColor = "rgb(73, 0, 80)";
            }
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
            spa.innerHTML = "<p>" + "<span style=\"font-size=20px; color=rgb(158, 197, 225)\">" + abilityName + "</p>" + "<hr>" + abilityDescr;
            imag.setAttribute("src", "/aowp/Icons/Passives/" + abilityIcon + ".png");
            imag.className = "unittype_icon";
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
            abilityIcon = jsonUnitAbilities.abilities[j].icon;
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
    var hp, mp, shield, armor, descr, j, k, x, y, z, unitName, icon, imagelink, prodcost, tier, research, building, reward = "";
    for (i in jsonUnits.units) {
        if (a == jsonUnits.units[i].id) {
            icon = document.getElementById("uniticon");
            icon.setAttribute("src", "/aowp/Icons/UnitIcons/" + a + "_icon.png");
            icon.setAttribute("id", "uniticon" + a);
            if (icon.getAttribute('src') === "/aowp/Icons/UnitIcons/undefined") {
                icon.setAttribute('src', "/aowp/Icons/placeholder.png");
            }
            unitName = document.getElementById("unitstring");
            unitName.setAttribute("id", "unitstring" + a);

            unitName.innerHTML = "<span style=\"color:orange\">" + "/&nbsp" + "</span>" + jsonUnits.units[i].name.toUpperCase();
            descr = document.getElementById("description");
            descr.setAttribute("id", "description" + a);
            descr.innerHTML = jsonUnits.units[i].description;
            imagelink = document.getElementById("vid");
            imagelink.setAttribute("id", "vid" + a);
            imagelink.setAttribute('src', "/aowp/Previews/" + jsonUnits.units[i].id + ".mp4");
            if (imagelink.getAttribute('src') === "/aowp/Previews/undefined") {
                imagelink.setAttribute('src', "/aowp/Previews/placeholder.mp4");
            }
            // research = document.getElementById("researchorigin");
            // research.setAttribute("id", "researchorigin" + a);
            // if (jsonUnits.units[i].origin_research != "") {
            // research.setAttribute("src", "/Icons/Research/" + jsonUnits.units[i].origin_research + ".jpg");
            // research.setAttribute("src", "/Icons/Research/" + jsonUnits.units[i].origin_research + ".jpg");
            //     research.innerHTML = jsonUnits.units[i].origin_research;
            // } else {
            //    research.setAttribute("src", "/aowp/UI/empty.png");
            //    research.setAttribute("style", "width: 0px");

            // }

            // building = document.getElementById("buildingorigin");
            // building.setAttribute("id", "buildingorigin" + a);
            // if (jsonUnits.units[i].origin_research != "") {
            // building.setAttribute("src", "/Icons/Buildings/" + jsonUnits.units[i].origin_building + ".jpg");
            //      building.innerHTML = jsonUnits.units[i].origin_building;
            //  } else {
            //     building.setAttribute("src", "/aowp/UI/empty.png");

            //     building.setAttribute("style", "width: 0px");
            // }
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
            if ((jsonUnits.units[i].elite_rewards[0]) != undefined) {
                reward = jsonUnits.units[i].elite_rewards[0].slug;


            } else {
                reward = "";
            }
            tier.innerHTML = "Tier " + jsonUnits.units[i].tier + ": " + jsonUnits.units[i].upkeep;
            if (jsonUnits.units[i].tier == "1") {

                levelup.innerHTML = "<p><x-medal_novice> </x-medal_novice>Novice<li>+4 <hp></hp> HP </li></ul><p><x-medal_veteran> </x-medal_veteran>Veteran<li>+4 <hp></hp> HP <li>+5 <accuracy></accuracy> Accuracy </li></li></ul><p><x-medal_expert> </x-medal_expert>Expert<li>+4 <hp></hp> HP </li></ul> <p><x-medal_prime> </x-medal_prime>Prime<li>+5 <accuracy></accuracy> Accuracy </li><li>+4 <hp></hp> HP </li><li>" + EliteSkill(reward) + "</li></ul>";

            }
            if (jsonUnits.units[i].tier == "2") {
                levelup.innerHTML = "<p><x-medal_novice> </x-medal_novice>Novice<li>+6 <hp></hp> HP </li></ul><p><x-medal_veteran> </x-medal_veteran>Veteran<li>+6 <hp></hp> HP </li><li>+5 <accuracy></accuracy> Accuracy </li></ul><p><x-medal_expert> </x-medal_expert>Expert<li>+6 <hp></hp> HP </li></ul> <p><x-medal_prime> </x-medal_prime>Prime<li>+6 <hp></hp> HP </li><li>+5 <accuracy></accuracy> Accuracy </li><li>" + EliteSkill(reward) + "</li></ul>";

            }
            if (jsonUnits.units[i].tier == "3") {
                levelup.innerHTML = "<p><x-medal_novice> </x-medal_novice>Novice<li>+8 <hp></hp> HP </li></ul><p><x-medal_veteran> </x-medal_veteran>Veteran<li>+8 <hp></hp> HP </li><li>+5 <accuracy></accuracy> Accuracy </li></ul><p><x-medal_expert> </x-medal_expert>Expert<li>+8 <hp></hp> HP </li></ul> <p><x-medal_prime> </x-medal_prime>Prime<li>+8 <hp></hp> HP </li><li>+5 <accuracy></accuracy> Accuracy </li><li>" + EliteSkill(reward) + "</li></ul>";
            }
            if (jsonUnits.units[i].tier == "4") {
                levelup.innerHTML = "<p><x-medal_novice> </x-medal_novice>Novice<li>+10 <hp></hp> HP </li></ul><p><x-medal_veteran> </x-medal_veteran>Veteran<li>+10 <hp></hp> HP </li><li>+5 <accuracy></accuracy> Accuracy </li></ul><p><x-medal_expert> </x-medal_expert>Expert<li>+10 <hp></hp> HP </li></ul> <p><x-medal_prime> </x-medal_prime>Prime<li>+10 <hp></hp> HP </li><li>+5 <accuracy></accuracy> Accuracy </li><li>" + EliteSkill(reward) + "</li></ul>";
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

function showMod(a) {
    var modName, description, cost, type, tier = "";
    for (j in jsonMods.mods) {
        if (a == jsonMods.mods[j].slug) {
            modName = document.getElementById("modname");
            modName.innerHTML = "<titlebrown>" + jsonMods.mods[j].name + "</titlebrown>";
            modName.setAttribute("id", "modname" + a);
            description = document.getElementById("moddescription");
            description.innerHTML = jsonMods.mods[j].description;
            description.setAttribute("id", "moddescription" + a);
            //type = document.getElementById("modtype");
            //type.innerHTML = "Mod Type: " + jsonMods.mods[j].type;
            //type.setAttribute("id", "modtype" + a);
            tier = document.getElementById("modtier");
            tier.innerHTML = "<silver>" + "Tier " + jsonMods.mods[j].tier + ", " + jsonMods.mods[j].type + "</silver>";
            tier.setAttribute("id", "modtier" + a);
            cost = document.getElementById("modcost");
            cost.innerHTML = "Purchase Cost : " + jsonMods.mods[j].cost;
            cost.setAttribute("id", "modcost" + a);
            imagelink = document.getElementById("modicon");

            if (jsonMods.mods[j].name.includes("Vehicle")) {
                a = a.replace("vehicle:_", "");
            }
            if (jsonMods.mods[j].type.includes("Weapon")) {
                a = a.replace("equipment:_", "");
            }

            imagelink.setAttribute("src", "/aowp/Icons/Mods/" + a + ".png");
            imagelink.setAttribute("id", "modicon" + a);
        }
    }
}

function showTech(a, b) {
    var modName, description, cost, type, tier, secret = "";
    var found = false;
    for (j in jsonTech.tech) {
        if (a == jsonTech.tech[j].slug) {
            modName = document.getElementById("techname");
            modName.innerHTML = jsonTech.tech[j].name;
            modName.setAttribute("id", "techname" + a);


            cost = document.getElementById("techcost");
            cost.innerHTML = jsonTech.tech[j].cost + "<research></research>";
            cost.setAttribute("id", "modcost" + a);
            imagelink = document.getElementById("techicon");
            imagelink.setAttribute("src", "/aowp/Icons/Tech/" + a + ".png");
            imagelink.setAttribute("id", "techicon" + a);

            for (k in jsonTech.tech[j].mod_unlock) {
                if (jsonTech.tech[j].mod_unlock[k].slug != undefined) {
                    addModUnlock(jsonTech.tech[j].mod_unlock[k].slug, b);
                }

            }

            for (k in jsonTech.tech[j].op_unlock) {
                if (jsonTech.tech[j].op_unlock[k].slug != undefined) {
                    addOpUnlock(jsonTech.tech[j].op_unlock[k].slug, b);
                }

            }

            for (k in jsonTech.tech[j].unit_unlock) {
                if (jsonTech.tech[j].unit_unlock[k].slug != undefined) {
                    secret = jsonTech.tech[j].unit_unlock[k].slug;
                    if (jsonTech.tech[j].unit_unlock[k].slug.indexOf("secret") > -1) {
                        if (currentRace == "syndicate" && jsonTech.tech[j].unit_unlock[k].slug == "secret_purifier") {
                            secret = jsonTech.tech[j].unit_unlock[k].slug.replace("secret", currentRace + "_indentured");
                        } else {
                            secret = jsonTech.tech[j].unit_unlock[k].slug.replace("secret", currentRace);
                        }

                    }
                    addUnitUnlock(secret, b);
                }


            }
            document.getElementById("unlockholder").setAttribute("id", "unlockholder" + a);
            found = true;
        }


    }
    if (found == false) {
        console.log("Couldn't find tech: " + a);
    }
}


function addModUnlock(a, b) {
    var modUnlockName, modUnlockIcon, modUnlockAbility, j = "";
    var found = false;
    for (j in jsonMods.mods) {
        if (a == jsonMods.mods[j].slug) {
            if (jsonMods.mods[j].type.includes("Weapon")) {
                modUnlockName = "Equipment: " + jsonMods.mods[j].name;
            } else {
                modUnlockName = jsonMods.mods[j].name;
            }
            modUnlockName = "<titlebrown>" + modUnlockName + "</titlebrown>";
            modUnlockIcon = jsonMods.mods[j].slug;

            if (jsonMods.mods[j].name.includes("Vehicle")) {
                modUnlockIcon = modUnlockIcon.replace("vehicle:_", "");
            }
            if (jsonMods.mods[j].type.includes("Weapon")) {
                modUnlockIcon = modUnlockIcon.replace("equipment:_", "");
            }
            modUnlockAbility = jsonMods.mods[j].description;


            var tier = "<silver>" + "Tier " + jsonMods.mods[j].tier + ", " + jsonMods.mods[j].type + "</silver>";


            var btn = document.createElement("DIV");
            btn.className = "researchResultBackgroundImage";
            var imag = document.createElement("IMG");
            imag.className = "modunlock_icon2";
            var spa = document.createElement("SPAN");


            spa.innerHTML = "<p>" + modUnlockName + "</p>" + tier + "<hr>"
            imag.setAttribute("src", "/aowp/Icons/Mods/" + modUnlockIcon + ".png");

            spa.innerHTML += "<img src=\"/aowp/Icons/Mods/" + modUnlockIcon + ".png\" width='200'\">";
            spa.innerHTML += "<br>" + modUnlockAbility;

            if (jsonMods.mods[j].type.includes("Weapon") || jsonMods.mods[j].name.includes("Vehicle")) {
                spa.innerHTML += "<hr> Base Cost: " + jsonMods.mods[j].cost;
            } else {
                spa.innerHTML += "<hr>" + "Base Production Cost: 10 <production></production>" + "<br>" + "Base Cosmite Cost: " + jsonMods.mods[j].cost;
            }

            imag.setAttribute("height", "30");

            if (jsonMods.mods[j].name.includes("Vehicle") || jsonMods.mods[j].type.includes("Weapon")) {
                var imag2 = document.createElement("IMG");
                imag2.setAttribute("src", "/aowp/Icons/Text/arsenal.png");
                imag2.className = "corner_icon";
                btn.appendChild(imag2);
            }


            var newID = document.getElementById("unlockholder");
            newID.appendChild(btn);
            btn.appendChild(imag);


            btn.appendChild(spa);


            if (b == "s") {
                spa.className = "tooltiptext2";
            } else {
                spa.className = "tooltiptext";
            }

            found = true;

            // btn.appendChild(tex);

        }
    }
    if (found == false) {
        console.log("Couldn't find mod: " + a);
    }

}


function addOpUnlock(a, b) {
    var opUnlockName, opUnlockIcon, opUnlockAbility, j = "";
    var found = false;
    for (j in jsonOperations.operations) {
        if (a == jsonOperations.operations[j].slug) {
            opUnlockName = "<titlebrown>" + jsonOperations.operations[j].name + "</titlebrown>";
            opUnlockIcon = jsonOperations.operations[j].slug;
            opUnlockAbility = jsonOperations.operations[j].description;


            var tier = "<silver>" + "Tier " + jsonOperations.operations[j].tier + ", " + jsonOperations.operations[j].type + "</silver>";


            var btn = document.createElement("DIV");
            btn.className = "researchResultBackgroundImage";
            var imag = document.createElement("IMG");
            imag.className = "modunlock_icon";
            var spa = document.createElement("SPAN");
            var tex = document.createElement("DIV");
            tex.className = "tooltip";
            //tex.innerHTML = modUnlockName;

            spa.innerHTML = "<p>" + opUnlockName + "</p>" + tier + "<hr>"
            imag.setAttribute("src", "/aowp/Icons/Operations/" + opUnlockIcon + ".png");


            spa.innerHTML += "<br>" + opUnlockAbility;

            if (jsonOperations.operations[j].casting != undefined) {
                spa.innerHTML += "<hr>" + "Priming Cost: " + jsonOperations.operations[j].energy_cost + "<energy></energy>" + jsonOperations.operations[j].casting;
            }

            if (jsonOperations.operations[j].production_cost != undefined) {
                spa.innerHTML += "<hr>" + "Cost: " + jsonOperations.operations[j].production_cost;
            }

            if (jsonOperations.operations[j].influence_cost != undefined) {
                spa.innerHTML += "<hr>" + "Cost: " + jsonOperations.operations[j].influence_cost + "<influence></influence>";
            }

            imag.setAttribute("height", "35");
            if (jsonOperations.operations[j].type.includes("Tactical")) {
                var imag2 = document.createElement("IMG");
                imag2.setAttribute("src", "/aowp/Icons/Text/tac_ops.png");
                imag2.className = "corner_icon";
                btn.appendChild(imag2);
            }

            if (jsonOperations.operations[j].type.includes("Doctrine")) {
                var imag2 = document.createElement("IMG");
                imag2.setAttribute("src", "/aowp/Icons/Text/doctrine.png");
                imag2.className = "corner_icon";
                btn.appendChild(imag2);
            }
            if (jsonOperations.operations[j].type.includes("Strategic")) {
                var imag2 = document.createElement("IMG");
                imag2.setAttribute("src", "/aowp/Icons/Text/strat_ops.png");
                imag2.className = "corner_icon";
                btn.appendChild(imag2);
            }
            if (jsonOperations.operations[j].type.includes("Covert")) {
                var imag2 = document.createElement("IMG");
                imag2.setAttribute("src", "/aowp/Icons/Text/covert.png");
                imag2.className = "corner_icon";
                btn.appendChild(imag2);
            }


            document.getElementById("unlockholder").appendChild(btn);
            btn.appendChild(imag);


            btn.appendChild(spa);


            if (b == "s") {
                spa.className = "tooltiptext2";
            } else {
                spa.className = "tooltiptext";
            }
            found = true;
            // btn.appendChild(tex);

        }
    }
    if (found == false) {
        console.log("Couldn't find operation: " + a);
    }
}





function addUnitUnlock(a, b) {
    var unitUnlockName, unitUnlockIcon, unitUnlockAbility, j = "";
    var found = false;
    for (j in jsonUnits.units) {


        if (a == jsonUnits.units[j].id) {


            if (jsonUnits.units[j].name.includes("-")) {
                unitNameShort = "<titleBrownBig> Unit: " + jsonUnits.units[j].name.split("-")[1] + "</titleBrownBig>";
            } else {
                unitNameShort = "<titleBrownBig> Unit: " + jsonUnits.units[j].name + "</titleBrownBig>";
            }

            unitUnlockName = "<titleBrownBig>" + jsonUnits.units[j].name + "</titleBrownBig>";
            unitUnlockIcon = jsonUnits.units[j].icon;
            // unitUnlockAbility = jsonUnits.units[j].description;


            var tier = "<silver>Unit Unlock</silver>";


            var btn = document.createElement("DIV");
            btn.className = "researchResultBackgroundImage";
            var imag = document.createElement("IMG");
            imag.className = "modunlock_icon";
            var spa = document.createElement("SPAN");
            var tex = document.createElement("DIV");
            tex.className = "tooltip";
            //tex.innerHTML = modUnlockName;

            spa.innerHTML = "<p>" + unitNameShort + "</p>" + tier + "<hr>";
            spa.innerHTML += unitUnlockName;
            spa.innerHTML += "<br>Tier " + jsonUnits.units[j].tier;
            spa.innerHTML += "<hr>" + jsonUnits.units[j].hp + "<hp></hp> " + jsonUnits.units[j].mp + "<mp></mp> ";
            if (jsonUnits.units[j].shield) {
                spa.innerHTML += jsonUnits.units[j].shield + "<shield></shield> ";
            }
            if (jsonUnits.units[j].armor) {
                spa.innerHTML += jsonUnits.units[j].armor + "<armor></armor> ";
            }
            spa.innerHTML += "<hr>";
            for (k in jsonUnits.units[j].abilities) {
                spa.innerHTML += "<li>" + addAbilityList(jsonUnits.units[j].abilities[k].slug) + "</li>";

            }
            for (k in jsonUnits.units[j].unit_types) {
                spa.innerHTML += "<li>" + addAbilityList(jsonUnits.units[j].unit_types[k].slug) + "</li>";

            }
            imag.setAttribute("src", "/aowp/Icons/UnitIcons/" + unitUnlockIcon + ".png");


            // spa.innerHTML += "<br>" + opUnlockAbility;
            //spa.innerHTML += "<hr>" + "Priming Cost: " + jsonOperations.operations[j].energy_cost + "<energy></energy>" + jsonOperations.operations[j].casting;
            imag.setAttribute("height", "35");
            document.getElementById("unlockholder").appendChild(btn);
            btn.appendChild(imag);


            btn.appendChild(spa);


            if (b == "s") {
                spa.className = "tooltiptext2";
            } else {
                spa.className = "tooltiptext";
            }
            // btn.appendChild(tex);
            found = true;
        }
    }


    if (found == false) {
        console.log("Couldn't find unit: " + a);
    }


}

function addAbilityList(a) {
    var dam = "";
    for (j in jsonUnitAbilities.abilities) {
        if (a == jsonUnitAbilities.abilities[j].slug) {
            if (jsonUnitAbilities.abilities[j].damage) {
                dam = jsonUnitAbilities.abilities[j].damage;
            }
            return jsonUnitAbilities.abilities[j].name + dam + "<br>"
        }
    }
}

function addTypesList(a) {
    var dam = "";
    for (j in jsonUnitAbilities.abilities) {
        if (a == jsonUnitAbilities.abilities[j].slug) {

            return jsonUnitAbilities.abilities[j].name + "<br>"
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


(function (root, factory) {
    "use strict";
    if (typeof define === "function" && define.amd) {
        define([], factory)
    } else if (typeof exports === "object") {
        module.exports = factory()
    } else {
        root.textFit = factory()
    }
})(typeof global === "object" ? global : this, function () {
    "use strict";
    var defaultSettings = {
        alignVert: false,
        alignHoriz: false,
        multiLine: false,
        detectMultiLine: true,
        minFontSize: 6,
        maxFontSize: 80,
        reProcess: true,
        widthOnly: false,
        alignVertWithFlexbox: false
    };
    return function textFit(els, options) {
        if (!options) options = {};
        var settings = {};
        for (var key in defaultSettings) {
            if (options.hasOwnProperty(key)) {
                settings[key] = options[key]
            } else {
                settings[key] = defaultSettings[key]
            }
        }
        if (typeof els.toArray === "function") {
            els = els.toArray()
        }
        var elType = Object.prototype.toString.call(els);
        if (elType !== "[object Array]" && elType !== "[object NodeList]" && elType !== "[object HTMLCollection]") {
            els = [els]
        }
        for (var i = 0; i < els.length; i++) {
            processItem(els[i], settings)
        }
    };

    function processItem(el, settings) {
        if (!isElement(el) || !settings.reProcess && el.getAttribute("textFitted")) {
            return false
        }
        if (!settings.reProcess) {
            el.setAttribute("textFitted", 1)
        }
        var innerSpan, originalHeight, originalHTML, originalWidth;
        var low, mid, high;
        originalHTML = el.innerHTML;
        originalWidth = innerWidth(el);
        originalHeight = innerHeight(el);
        if (!originalWidth || !settings.widthOnly && !originalHeight) {
            if (!settings.widthOnly) throw new Error("Set a static height and width on the target element " + el.outerHTML + " before using textFit!");
            else throw new Error("Set a static width on the target element " + el.outerHTML + " before using textFit!")
        }
        if (originalHTML.indexOf("textFitted") === -1) {
            innerSpan = document.createElement("span");
            innerSpan.className = "textFitted";
            innerSpan.style["display"] = "inline-block";
            innerSpan.innerHTML = originalHTML;
            el.innerHTML = "";
            el.appendChild(innerSpan)
        } else {
            innerSpan = el.querySelector("span.textFitted");
            if (hasClass(innerSpan, "textFitAlignVert")) {
                innerSpan.className = innerSpan.className.replace("textFitAlignVert", "");
                innerSpan.style["height"] = "";
                el.className.replace("textFitAlignVertFlex", "")
            }
        }
        if (settings.alignHoriz) {
            el.style["text-align"] = "center";
            innerSpan.style["text-align"] = "center"
        }
        var multiLine = settings.multiLine;
        if (settings.detectMultiLine && !multiLine && innerSpan.scrollHeight >= parseInt(window.getComputedStyle(innerSpan)["font-size"], 10) * 2) {
            multiLine = true
        }
        if (!multiLine) {
            el.style["white-space"] = "nowrap"
        }
        low = settings.minFontSize;
        high = settings.maxFontSize;
        var size = low;
        while (low <= high) {
            mid = high + low >> 1;
            innerSpan.style.fontSize = mid + "px";
            if (innerSpan.scrollWidth <= originalWidth && (settings.widthOnly || innerSpan.scrollHeight <= originalHeight)) {
                size = mid;
                low = mid + 1
            } else {
                high = mid - 1
            }
        }
        if (innerSpan.style.fontSize != size + "px") innerSpan.style.fontSize = size + "px";
        if (settings.alignVert) {
            addStyleSheet();
            var height = innerSpan.scrollHeight;
            if (window.getComputedStyle(el)["position"] === "static") {
                el.style["position"] = "relative"
            }
            if (!hasClass(innerSpan, "textFitAlignVert")) {
                innerSpan.className = innerSpan.className + " textFitAlignVert"
            }
            innerSpan.style["height"] = height + "px";
            if (settings.alignVertWithFlexbox && !hasClass(el, "textFitAlignVertFlex")) {
                el.className = el.className + " textFitAlignVertFlex"
            }
        }
    }

    function innerHeight(el) {
        var style = window.getComputedStyle(el, null);
        return el.clientHeight - parseInt(style.getPropertyValue("padding-top"), 10) - parseInt(style.getPropertyValue("padding-bottom"), 10)
    }

    function innerWidth(el) {
        var style = window.getComputedStyle(el, null);
        return el.clientWidth - parseInt(style.getPropertyValue("padding-left"), 10) - parseInt(style.getPropertyValue("padding-right"), 10)
    }

    function isElement(o) {
        return typeof HTMLElement === "object" ? o instanceof HTMLElement : o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string"
    }

    function hasClass(element, cls) {
        return (" " + element.className + " ").indexOf(" " + cls + " ") > -1
    }

    function addStyleSheet() {
        if (document.getElementById("textFitStyleSheet")) return;
        var style = [".textFitAlignVert{", "position: absolute;", "top: 0; right: 0; bottom: 0; left: 0;", "margin: auto;", "display: flex;", "justify-content: center;", "flex-direction: column;", "}", ".textFitAlignVertFlex{", "display: flex;", "}", ".textFitAlignVertFlex .textFitAlignVert{", "position: static;", "}"].join("");
        var css = document.createElement("style");
        css.type = "text/css";
        css.id = "textFitStyleSheet";
        css.innerHTML = style;
        document.body.appendChild(css)
    }
});
