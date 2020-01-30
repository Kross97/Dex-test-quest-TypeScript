import { IItem, IAlert, IPropDefaultNormal, IPropDefaultSelect } from '../../Interface_Application';

interface IDataInputSelect {
  id: string;
  value: string;
}

interface IPropDefault {
  title: string;
  type: string;
  id: number;
  values?: IDataInputSelect[] | undefined;
}

export interface IPropsAddNewItem {
 propertyDefault: IPropDefault[];
 allItems: IItem[];
 allAlerts: IAlert[];
 match: {
   params: {
     id: string;
   };
 };
 deleteProperty(id: { id: number }): void;
 addNewAlert(alert: { alert: IAlert }): void;
 completeRemovalFromComponent(remove: { component: string }): void;
 addAllProperties(): void;
 loadingPropertiesToChange(prop: { properties: Array<IPropDefaultSelect | IPropDefaultNormal>}): void;
}

export interface IStateAddNewItem {
  dataAllPropsSelect: {
    [id: number]: {
      [index: number]: IDataInputSelect;
    };
  };
  dataAllPropsSelectID: number[];
  dataProperties: {
    [id: number]: IPropDefaultNormal | IPropDefaultSelect;
  };
  dataPropertiesID: number[];
  title: string;
  price: string;
  description: string;
  imgSrc: string | ArrayBuffer | null;
  imgName: string;
}

export interface IPropsMainData {
  imgName: string;
  state: IStateAddNewItem;
  changeTitle(event: React.ChangeEvent<HTMLInputElement>): void;
  changePrice(event: React.ChangeEvent<HTMLInputElement>): void;
  getImgUrl(event: React.ChangeEvent<HTMLInputElement>): void;
  changeDescription(event: React.ChangeEvent<HTMLTextAreaElement>): void;
}

export interface IPropsItemProp {
  dataPropertiesID: number[];
  dataProperties: {
    [id: number]: IPropDefaultNormal | IPropDefaultSelect;
  };
  prop: IPropDefault;
  index: number;
  addDataInput(event: React.ChangeEvent<HTMLInputElement>): void;
  removeProp(event: React.MouseEvent<HTMLButtonElement> ): void;
}

export interface IPropsItemSelect {
  dataPropertiesID: number[];
  prop: IPropDefaultSelect;
  index: number;
  removeProp(event: React.MouseEvent<HTMLButtonElement>): void;
  addDataInputSelect(prop: IPropDefaultSelect, inder: number): any;
  reduceQuantityInputsDropdown(id: { id: number }): any;
  increaseQuantityInputsDropdown(id: { id: number }): any;
}

export interface IAllTypeValidators {
  [type: string]: (val: string) => boolean;
}