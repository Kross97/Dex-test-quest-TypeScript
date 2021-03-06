import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Alert } from './Alert';
import { alerts } from '../../reducers';
import { IPropsListAlerts } from './InterfaceListAlerts';

const actionCreators = {
  removeAlert: alerts.actions.removeAlert,
};

export const ListAlerts = (props: IPropsListAlerts) => {
  const dispatch = useDispatch();
  const { removeAlert } = bindActionCreators(actionCreators, dispatch);
  const removeCurrentAlert = (id: string) => () => {
    removeAlert({ id });
  };

  const { allAlerts } = props;
  return (
    <ul>
      {allAlerts.map((alert) => {
        let text;
        switch (alert.type) {
          case 'mainPropsEmpty':
            text = 'Обязательные поля не заполнены!';
            break;
          case 'priceNotString':
            text = 'Цена указанна неверно!';
            break;
          case 'RequestAddItem':
            text = 'Идет добавление товара на сервер!';
            break;
          case 'succesAddItem':
            text = 'Товар успешно добавлен!';
            break;
          case 'FailedAddItem':
            text = 'Ошибка! Товар не загружен на сервер!';
            break;
          case 'RequestEditItem':
            text = 'Товар загружается для редактирования!';
            break;
          case 'SuccesForEditItem':
            text = 'Товар загружен для редактирования!';
            break;
          case 'FailedForEditItem':
            text = 'Товар не загружен для редактирования!';
            break;
          case 'succesEditItem':
            text = 'Товар успешно отредактирован!';
            break;
          case 'FailedEditItem':
            text = 'Ошибка! Товар не отредактирован!';
            break;
          case 'limitItems':
            text = 'На этой странице превышен лимит записей. Перейдите на следующую';
            break;
          case 'mainPropsLength':
            text = 'Длинна названия или цены некоректны!';
            break;
          case 'erorTitle':
            text = 'Имя отсутсвует или свойство с данным именем уже создано. Введите другое имя!';
            break;
          case 'erorType':
            text = 'Не задан тип свойства!';
            break;
          case 'successProp':
            text = 'Свойство успешно создано!';
            break;
          case 'deleteItem':
            text = 'Товар успешно удален!';
            break;
          case 'deleteProp':
            text = 'Свойство успешно удалено!';
            break;
          case 'addBasket':
            text = 'Товар добавлен в корзину!';
            break;
          case 'addItemsSucces':
            text = 'Товары загружены на страницу!';
            break;
          case 'addItemsFailed':
            text = 'Товар не загружены на страницу!';
            break;
          case 'addPropsSucces':
            text = 'Проперти загружены на страницу!';
            break;
          case 'addPropsFailed':
            text = 'Проперти не загружены на страницу!';
            break;
          default:
            text = 'Дополнительные свойства заполнены некоректно!';
        }
        return (
          <Alert
            key={alert.id}
            text={text}
            alertClass={alert.type}
            onClick={removeCurrentAlert(alert.id)}
          />
        );
      })}
    </ul>
  );
};
