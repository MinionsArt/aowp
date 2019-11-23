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

                levelup.innerHTML = "<p><x-medal_novice> </x-medal_novice>Novice<li>+2 <hp></hp> HP </li></ul><p><x-medal_veteran> </x-medal_veteran>Veteran<li>+2 <hp></hp> HP <li>+5 <accuracy></accuracy> Accuracy </li></li></ul><p><x-medal_expert> </x-medal_expert>Expert<li>+2 <hp></hp> HP </li></ul> <p><x-medal_prime> </x-medal_prime>Prime<li>+5 <accuracy></accuracy> Accuracy </li><li>+2 <hp></hp> HP </li><li>" + EliteSkill(reward) + "</li></ul>";

            }
            if (jsonUnits.units[i].tier == "2") {
                levelup.innerHTML = "<p><x-medal_novice> </x-medal_novice>Novice<li>+4 <hp></hp> HP </li></ul><p><x-medal_veteran> </x-medal_veteran>Veteran<li>+4 <hp></hp> HP </li><li>+5 <accuracy></accuracy> Accuracy </li></ul><p><x-medal_expert> </x-medal_expert>Expert<li>+4 <hp></hp> HP </li></ul> <p><x-medal_prime> </x-medal_prime>Prime<li>+4 <hp></hp> HP </li><li>+5 <accuracy></accuracy> Accuracy </li><li>" + EliteSkill(reward) + "</li></ul>";

            }
            if (jsonUnits.units[i].tier == "3") {
                levelup.innerHTML = "<p><x-medal_novice> </x-medal_novice>Novice<li>+6 <hp></hp> HP </li></ul><p><x-medal_veteran> </x-medal_veteran>Veteran<li>+6 <hp></hp> HP </li><li>+5 <accuracy></accuracy> Accuracy </li></ul><p><x-medal_expert> </x-medal_expert>Expert<li>+6 <hp></hp> HP </li></ul> <p><x-medal_prime> </x-medal_prime>Prime<li>+6 <hp></hp> HP </li><li>+5 <accuracy></accuracy> Accuracy </li><li>" + EliteSkill(reward) + "</li></ul>";
            }
            if (jsonUnits.units[i].tier == "4") {
                levelup.innerHTML = "<p><x-medal_novice> </x-medal_novice>Novice<li>+8 <hp></hp> HP </li></ul><p><x-medal_veteran> </x-medal_veteran>Veteran<li>+8 <hp></hp> HP </li><li>+5 <accuracy></accuracy> Accuracy </li></ul><p><x-medal_expert> </x-medal_expert>Expert<li>+8 <hp></hp> HP </li></ul> <p><x-medal_prime> </x-medal_prime>Prime<li>+8 <hp></hp> HP </li><li>+5 <accuracy></accuracy> Accuracy </li><li>" + EliteSkill(reward) + "</li></ul>";
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
            imagelink.setAttribute("src", "/aowp/Icons/Mods/" + a + ".png");
            imagelink.setAttribute("id", "modicon" + a);
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
