import ComboSorts from "../class/ComboSorts";
import ComboSort from "../class/ComboSort";

const comboSorts = new ComboSorts();
const defaultComboSort = new ComboSort("0", "作成順", "create", "desc");

comboSorts.setComboSorts(defaultComboSort);
comboSorts.setComboSorts(new ComboSort("1", "ダメージの高い順", "damage", "desc"));
comboSorts.setComboSorts(new ComboSort("2", "スタンの高い順", "stun", "desc"));

comboSorts.setDefaultSort(defaultComboSort);

export { comboSorts };
