import ComboSorts from "../../class/ComboSorts";
import ComboSort from "../../class/ComboSort";

const comboSorts = new ComboSorts();
const defaultComboSort = new ComboSort("0", "Creation order", "create", "desc");

comboSorts.setComboSorts(defaultComboSort);
comboSorts.setComboSorts(new ComboSort("1", "Highest order of damage", "damage", "desc"));
comboSorts.setComboSorts(new ComboSort("2", "Highest order of stun", "stun", "desc"));

comboSorts.setDefaultSort(defaultComboSort);

export { comboSorts };
