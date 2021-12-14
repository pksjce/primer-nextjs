import React from 'react';
import {Autocomplete, Text} from '@primer/react'

const items = [
    {text: 'css', id: 0},
    {text: 'css-in-js', id: 1},
    {text: 'styled-system', id: 2},
    {text: 'javascript', id: 3},
    {text: 'typescript', id: 4},
    {text: 'react', id: 5},
    {text: 'design-systems', id: 6}
  ]

function Page() {
    return <>
    <Text
      fontWeight="bold"
      fontSize={1}
      as="label"
      display="block"
      htmlFor="autocompleteInput"
      id="autocompleteLabel"
    >
      Pick a tag
    </Text>
    <Autocomplete>
      <Autocomplete.Input block id="autocompleteInput" />
      <Autocomplete.Overlay>
        <Autocomplete.Menu items={items} selectedItemIds={[]} aria-labelledby="autocompleteLabel" />
      </Autocomplete.Overlay>
    </Autocomplete>
  </>
}
  
  // This gets called on every request
  export async function getServerSideProps() {
    return { props: {} }
  }
  
  export default Page