export type Country = {
  shortName: string;
  flag: string;
};

export type ItemType = {
  label: string;
  value: string;
};

export type DropdownList = {
  listItems: Country;
  className?: string;
  panelClass?: string;
  dropdownList: ItemType[];
  setListItems: (value: Country) => void;
};
