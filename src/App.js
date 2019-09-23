import React, { useState } from 'react'
import Navigation from './Navigation'
import HomePage from './HomePage'
import styled from 'styled-components/macro'
import SettingsPage from './SettingsPage'

export default function App() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [cards, setCards] = useState([
    {
      title: 'Foo',
      question: 'What?',
      answer: 'That!',
    },
    {
      title: 'Bar',
      question: 'This?',
      answer: 'That!',
    },
  ])

  function createCard(cardData) {
    console.log(cardData)
  }

  function renderPage() {
    const pages = {
      0: <HomePage cards={cards} />,
      1: <section>Practice</section>,
      2: <section>Bookmarks</section>,
      3: <SettingsPage onSubmit={createCard} />,
    }

    return pages[activeIndex] || <section>404</section>
  }

  return (
    <AppStyled>
      {renderPage()}
      <Navigation buttonTexts={['Home', 'Practice', 'Bookmarks', 'Settings']} onClick={setActiveIndex} />
    </AppStyled>
  )
}

const AppStyled = styled.section`
  display: grid;
  grid-template-rows: auto 48px;
  height: 100vh;
  font-family: sans-serif;
`
