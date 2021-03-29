import { Select } from "@blueprintjs/select"
import { Button, MenuItem } from "@blueprintjs/core";
import "@blueprintjs/select/lib/css/blueprint-select.css"
import {
  areCurrencyEqual,
  createCurrency,
  currencySelectProps,
  ICurrency,
  maybeAddCreatedCurrencyToArrays,
  maybeDeleteCreatedCurrencyFromArrays,
  renderCreateCurrencyOption,
  CURRENCIES,
} from './misc/currency'
import { useState } from 'react'

export default function CurrencySelect(props) {


  const [state, setState] = useState({
    allowCreate: false,
    closeOnSelect: true,
    createdItems: [],
    disableItems: false,
    disabled: false,
    fill: true,
    currency: CURRENCIES[0],
    filterable: true,
    hasInitialContent: false,
    items: currencySelectProps.items,
    minimal: false,
    openOnKeyDown: false,
    resetOnClose: false,
    resetOnQuery: false,
    resetOnSelect: false,
  })

  const CurrencySelect = Select.ofType<ICurrency>()

  const handleValueChange = (currency: ICurrency) => {
    const { createdItems, items } = maybeDeleteCreatedCurrencyFromArrays(
      state.items,
      state.createdItems,
      state.currency,
    )

    const { createdItems: nextCreatedItems, items: nextItems } = maybeAddCreatedCurrencyToArrays(
      items,
      createdItems,
      currency,
    )
    setState({
      ...state,
      currency,
      createdItems: nextCreatedItems,
      items: nextItems
    })
    props.onExchangerateChange(currency)
  }


  const { allowCreate, currency, minimal, ...flags } = state
  const maybeCreateNewItemFromQuery = allowCreate ? createCurrency : undefined;
  const maybeCreateNewItemRenderer = allowCreate ? renderCreateCurrencyOption : null;

  return (
    <CurrencySelect
      {...currencySelectProps}
      {...flags}
      createNewItemFromQuery={maybeCreateNewItemFromQuery}
      createNewItemRenderer={maybeCreateNewItemRenderer}
      itemsEqual={areCurrencyEqual}
      items={state.items}
      noResults={<MenuItem disabled={true} text="No results." />}
      onItemSelect={handleValueChange}
      popoverProps={{ minimal }}
    >
        <Button
            rightIcon="caret-down"
            text={props.currency ? `${props.currency}` : "Search..."}
        />
    </CurrencySelect>
  )
}