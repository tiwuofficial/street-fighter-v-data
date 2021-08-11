import CharacterSelects from "../class/CharacterSelects";
import CharacterSelect from "../class/CharacterSelect";

const characterSelects = new CharacterSelects();

characterSelects.setCharacterSelect(new CharacterSelect("1", "ON"));
characterSelects.setCharacterSelect(new CharacterSelect("2", "OFF"));

export { characterSelects };
