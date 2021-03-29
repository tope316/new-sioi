import { Suggest } from "@blueprintjs/select"
import { MenuItem } from "@blueprintjs/core"
import "@blueprintjs/select/lib/css/blueprint-select.css"
import {
  areFilmsEqual,
  createFilm,
  filmSelectProps,
  IFilm,
  maybeAddCreatedFilmToArrays,
  maybeDeleteCreatedFilmFromArrays,
  renderCreateFilmOption,
  TOP_100_FILMS,
} from './misc/films'
import { useState } from 'react'

export default function FilmSuggest(props) {


  const [state, setState] = useState({
    allowCreate: false,
    closeOnSelect: true,
    createdItems: [],
    fill: true,
    film: TOP_100_FILMS[0],
    items: filmSelectProps.items,
    minimal: false,
    openOnKeyDown: false,
    resetOnClose: false,
    resetOnQuery: false,
    resetOnSelect: false,
  })

  const FilmSuggest = Suggest.ofType<IFilm>()

  const renderInputValue = (film: IFilm) => film.title

  const handleValueChange = (film: IFilm) => {
    const { createdItems, items } = maybeDeleteCreatedFilmFromArrays(
      state.items,
      state.createdItems,
      state.film,
    )

    const { createdItems: nextCreatedItems, items: nextItems } = maybeAddCreatedFilmToArrays(
      items,
      createdItems,
      film,
    )
    setState({
      ...state,
      film,
      createdItems: nextCreatedItems,
      items: nextItems
    })
  }


  const { allowCreate, film, minimal, ...flags } = state
  const maybeCreateNewItemFromQuery = allowCreate ? createFilm : undefined;
  const maybeCreateNewItemRenderer = allowCreate ? renderCreateFilmOption : null;

  return (
    <FilmSuggest
      {...filmSelectProps}
      {...flags}
      createNewItemFromQuery={maybeCreateNewItemFromQuery}
      createNewItemRenderer={maybeCreateNewItemRenderer}
      inputValueRenderer={renderInputValue}
      itemsEqual={areFilmsEqual}
      items={state.items}
      noResults={<MenuItem disabled={true} text="No results." />}
      onItemSelect={handleValueChange}
      popoverProps={{ minimal }}
    />
  )
}