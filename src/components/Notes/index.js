import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  AppContainer,
  CustomHeading,
  InputCardContainer,
  CustomInput,
  CustomTextArea,
  ButtonContainer,
  CustomButton,
  NoteItemsContainer,
  NoNotesYetContainer,
  NoNotesImage,
  NoNotesHeading,
  NoNotesCaption,
} from './styledComponents'

// Write your code here
const Notes = () => {
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [notesList, setNotes] = useState([])
  const onChangeTitle = event => {
    setTitle(event.target.value)
  }
  const onChangeNote = event => {
    setNote(event.target.value)
  }
  const onSubmitNotes = event => {
    event.preventDefault()
    const newNotes = {id: uuidv4(), title, note}
    setNotes(prevNotes => [...prevNotes, newNotes])
    setTitle('')
    setNote('')
  }
  return (
    <AppContainer>
      <CustomHeading>Notes</CustomHeading>
      <InputCardContainer onSubmit={onSubmitNotes}>
        <CustomInput
          type="text"
          placeholder="Title"
          value={title}
          onChange={onChangeTitle}
        />
        <CustomTextArea
          rows="8"
          cols="50"
          placeholder="Take a Note..."
          value={note}
          onChange={onChangeNote}
        />
        <ButtonContainer>
          <CustomButton type="submit">Add</CustomButton>
        </ButtonContainer>
      </InputCardContainer>
      {notesList.length > 0 ? (
        <NoteItemsContainer>
          {notesList.map(each => (
            <NoteItem key={each.id} eachNotes={each} />
          ))}
        </NoteItemsContainer>
      ) : (
        <NoNotesYetContainer>
          <NoNotesImage
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <NoNotesHeading>No Notes Yet</NoNotesHeading>
          <NoNotesCaption>Notes you add will appear here</NoNotesCaption>
        </NoNotesYetContainer>
      )}
    </AppContainer>
  )
}

export default Notes
