export type Country = {
  shortName: string;
  flag: string;
};

export type ItemType = {
  label: string;
  value: string;
};

export type DropdownList = {
  className?: string;
  panelClass?: string;
  defaultValue: ItemType;
  dropdownList: ItemType[];
};
