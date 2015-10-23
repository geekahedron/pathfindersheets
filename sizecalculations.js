var race = this.getField("race").value.toLowerCase();

switch(race) {
  case "gnome":
  case "goblin":
  case "halfling":
  case "kobold":
  case "monkey goblin":
  case "ratfolk":
  case "svirfneblin":
  case "wayang":
    event.value = "Small";
    break;
  case "dwarf":
  case "elf":
  case "half elf":
  case "half-elf":
  case "half orc":
  case "half-orc":
  case "human":
  case "aasimar":
  case "catfolk":
  case "dhampir":
  case "drow":
  case "fetchling":
  case "hobgoblin":
  case "ifrit":
  case "orc":
  case "sylph":
  case "tengu":
  case "tiefling":
  case "undine":
  case "changeling":
  case "duergar":
  case "gillman":
  case "grippli":
  case "kitsune":
  case "merfolk":
  case "nagaji":
  case "samsaran":
  case "strix":
  case "suli":
  case "vanara":
  case "vishkanya":
  case "android":
  case "ghoran":
  case "lashunta":
  case "wyvaran":
    event.value = "Medium";
    break;
}
