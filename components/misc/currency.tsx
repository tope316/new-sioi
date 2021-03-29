import * as React from "react"

import { MenuItem } from "@blueprintjs/core"
import { ItemPredicate, ItemRenderer } from "@blueprintjs/select"

export interface ICurrency {
    /** Currency Code. */
    currency_code: string;
    /** Rate. */
    exchange_rate: number;
}

/** Currency List */
export const CURRENCIES: ICurrency[] = [
    { currency_code: "HKD", exchange_rate: 1.0000 },
    { currency_code: "USD", exchange_rate: 7.8446 },
    { currency_code: "JPY", exchange_rate: 0.0725 },
    { currency_code: "RMB", exchange_rate: 0.8813 },
    { currency_code: "EUR", exchange_rate: 10.5000 },
].map((m, index) => ({ ...m, rank: index + 1 }))

export const renderCurrency: ItemRenderer<ICurrency> = (currency, { handleClick, modifiers, query }) => {
    if (!modifiers.matchesPredicate) {
        return null;
    }
    const text = `${currency.currency_code}`;
    return (
        <MenuItem
            active={modifiers.active}
            disabled={modifiers.disabled}
            label={currency.exchange_rate.toString()}
            key={currency.currency_code}
            onClick={handleClick}
            text={highlightText(text, query)}
        />
    )
}

export const renderCreateCurrencyOption = (
    query: string,
    active: boolean,
    handleClick: React.MouseEventHandler<HTMLElement>,
) => (
    <MenuItem
        icon="add"
        text={`Create "${query}"`}
        active={active}
        onClick={handleClick}
        shouldDismissPopover={false}
    />
);

export const filterCurrency: ItemPredicate<ICurrency> = (query, currency, _index, exactMatch) => {
    const normalizedTitle = currency.currency_code.toLowerCase();
    const normalizedQuery = query.toLowerCase();

    if (exactMatch) {
        return normalizedTitle === normalizedQuery;
    } else {
        return `${normalizedTitle} ${currency.exchange_rate}`.indexOf(normalizedQuery) >= 0;
    }
};

function highlightText(text: string, query: string) {
    let lastIndex = 0;
    const words = query
        .split(/\s+/)
        .filter(word => word.length > 0)
        .map(escapeRegExpChars);
    if (words.length === 0) {
        return [text];
    }
    const regexp = new RegExp(words.join("|"), "gi");
    const tokens: React.ReactNode[] = [];
    while (true) {
        const match = regexp.exec(text);
        if (!match) {
            break;
        }
        const length = match[0].length;
        const before = text.slice(lastIndex, regexp.lastIndex - length);
        if (before.length > 0) {
            tokens.push(before);
        }
        lastIndex = regexp.lastIndex;
        tokens.push(<strong key={lastIndex}>{match[0]}</strong>);
    }
    const rest = text.slice(lastIndex);
    if (rest.length > 0) {
        tokens.push(rest);
    }
    return tokens;
}

function escapeRegExpChars(text: string) {
    return text.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

export const currencySelectProps = {
    itemPredicate: filterCurrency,
    itemRenderer: renderCurrency,
    items: CURRENCIES,
};

export function createCurrency(currency_code: string): ICurrency {
    return {
        currency_code,
        exchange_rate: 1,
    };
}

export function areCurrencyEqual(currencyA: ICurrency, currencyB: ICurrency) {
    // Compare only the codes (ignoring case) just for simplicity.
    return currencyA.currency_code.toLowerCase() === currencyB.currency_code.toLowerCase();
}

export function doesCurrencyEqualQuery(currency: ICurrency, query: string) {
    return currency.currency_code.toLowerCase() === query.toLowerCase();
}

export function arrayContainsCurrency(currencies: ICurrency[], currencyToFind: ICurrency): boolean {
    return currencies.some((currency: ICurrency) => currency.currency_code === currencyToFind.currency_code);
}

export function addCurrencyToArray(currencies: ICurrency[], currencyToAdd: ICurrency) {
    return [...currencies, currencyToAdd];
}

export function deleteCurrencyFromArray(currencies: ICurrency[], currencyToDelete: ICurrency) {
    return currencies.filter(currency => currency !== currencyToDelete);
}

export function maybeAddCreatedCurrencyToArrays(
    items: ICurrency[],
    createdItems: ICurrency[],
    currency: ICurrency,
): { createdItems: ICurrency[]; items: ICurrency[] } {
    const isNewlyCreatedItem = !arrayContainsCurrency(items, currency);
    return {
        createdItems: isNewlyCreatedItem ? addCurrencyToArray(createdItems, currency) : createdItems,
        // Add a created currency to `items` so that the currency can be deselected.
        items: isNewlyCreatedItem ? addCurrencyToArray(items, currency) : items,
    };
}

export function maybeDeleteCreatedCurrencyFromArrays(
    items: ICurrency[],
    createdItems: ICurrency[],
    currency: ICurrency,
): { createdItems: ICurrency[]; items: ICurrency[] } {
    const wasItemCreatedByUser = arrayContainsCurrency(createdItems, currency);

    // Delete the item if the user manually created it.
    return {
        createdItems: wasItemCreatedByUser ? deleteCurrencyFromArray(createdItems, currency) : createdItems,
        items: wasItemCreatedByUser ? deleteCurrencyFromArray(items, currency) : items,
    };
}